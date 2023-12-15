#@
-- This wrapper allows the program to run headless on any OS (in theory)
-- It can be run using a standard lua interpreter, although LuaJIT is preferable


-- Callbacks
local callbackTable = { }
local mainObject
function runCallback(name, ...)
	if callbackTable[name] then
		return callbackTable[name](...)
	elseif mainObject and mainObject[name] then
		return mainObject[name](mainObject, ...)
	end
end
function SetCallback(name, func)
	callbackTable[name] = func
end
function GetCallback(name)
	return callbackTable[name]
end
function SetMainObject(obj)
	mainObject = obj
end

-- Image Handles
local imageHandleClass = { }
imageHandleClass.__index = imageHandleClass
function NewImageHandle()
	return setmetatable({ }, imageHandleClass)
end
function imageHandleClass:Load(fileName, ...)
	self.valid = true
end
function imageHandleClass:Unload()
	self.valid = false
end
function imageHandleClass:IsValid()
	return self.valid
end
function imageHandleClass:SetLoadingPriority(pri) end
function imageHandleClass:ImageSize()
	return 1, 1
end

-- Rendering
function RenderInit() end
function GetScreenSize()
	return 1920, 1080
end
function SetClearColor(r, g, b, a) end
function SetDrawLayer(layer, subLayer) end
function SetViewport(x, y, width, height) end
function SetDrawColor(r, g, b, a) end
function DrawImage(imgHandle, left, top, width, height, tcLeft, tcTop, tcRight, tcBottom) end
function DrawImageQuad(imageHandle, x1, y1, x2, y2, x3, y3, x4, y4, s1, t1, s2, t2, s3, t3, s4, t4) end
function DrawString(left, top, align, height, font, text) end
function DrawStringWidth(height, font, text)
	return 1
end
function DrawStringCursorIndex(height, font, text, cursorX, cursorY)
	return 0
end
function StripEscapes(text)
	return text:gsub("%^%d",""):gsub("%^x%x%x%x%x%x%x","")
end
function GetAsyncCount()
	return 0
end

-- Search Handles
function NewFileSearch() end

-- General Functions
function SetWindowTitle(title) end
function GetCursorPos()
	return 0, 0
end
function SetCursorPos(x, y) end
function ShowCursor(doShow) end
function IsKeyDown(keyName) end
function Copy(text) end
function Paste() end
function Deflate(data)
	-- TODO: Might need this
    local zlib = require "zlib"
    local level = 5
    return zlib.deflate(level)(data, "finish")
end
function Inflate(data)
	-- TODO: And this
    local zlib = require "zlib"
    local level = 5
    local windowSize = 15+16
    return zlib.inflate(level, windowSize)(data, "finish")
end
function GetTime()
	return 0
end
function GetScriptPath()
	return ""
end
function GetRuntimePath()
	return ""
end
function GetUserPath()
	return ""
end
function MakeDir(path) end
function RemoveDir(path) end
function SetWorkDir(path) end
function GetWorkDir()
	return ""
end
function LaunchSubScript(scriptText, funcList, subList, ...) end
function AbortSubScript(ssID) end
function IsSubScriptRunning(ssID) end
function LoadModule(fileName, ...)
	if not fileName:match("%.lua") then
		fileName = fileName .. ".lua"
	end
	local func, err = loadfile(fileName)
	if func then
		return func(...)
	else
		error("LoadModule() error loading '"..fileName.."': "..err)
	end
end
function PLoadModule(fileName, ...)
	if not fileName:match("%.lua") then
		fileName = fileName .. ".lua"
	end
	local func, err = loadfile(fileName)
	if func then
		return PCall(func, ...)
	else
		error("PLoadModule() error loading '"..fileName.."': "..err)
	end
end
function PCall(func, ...)
	local ret = { pcall(func, ...) }
	if ret[1] then
		table.remove(ret, 1)
		return nil, unpack(ret)
	else
		return ret[2]
	end	
end
function ConPrintf(fmt, ...)
	-- Optional
	print(string.format(fmt, ...))
end
function ConPrintTable(tbl, noRecurse) end
function ConExecute(cmd) end
function ConClear() end
function SpawnProcess(cmdName, args) end
function OpenURL(url) end
function SetProfiling(isEnabled) end
function Restart() end
function Exit() end

local l_require = require
function require(name)
	-- Hack to stop it looking for lcurl, which we don't really need
	if name == "lcurl.safe" then
		return
	end
	return l_require(name)
end


dofile("Launch.lua")

-- Prevents loading of ModCache
-- Allows running mod parsing related tests without pushing ModCache
-- The CI env var will be true when run from github workflows but should be false for other tools using the headless wrapper 
mainObject.continuousIntegrationMode = os.getenv("CI")

runCallback("OnInit")
runCallback("OnFrame") -- Need at least one frame for everything to initialise

if mainObject.promptMsg then
	-- Something went wrong during startup
	print(mainObject.promptMsg)
	io.read("*l")
	return
end

-- The build module; once a build is loaded, you can find all the good stuff in here
build = mainObject.main.modes["BUILD"]
local data = build.data
-- Here's some helpful helper functions to help you get started
function newBuild()
	mainObject.main:SetMode("BUILD", false, "Help, I'm stuck in Path of Building!")
	runCallback("OnFrame")
end
function loadBuildFromXML(xmlText, name)
    print("loadBuildFromXML")
	mainObject.main:SetMode("BUILD", false, name or "", xmlText)
	runCallback("OnFrame")
end
function loadBuildFromJSON(getItemsJSON, getPassiveSkillsJSON)
	print("loadBuildFromJSON")
	mainObject.main:SetMode("BUILD", false, "")
    print("loadBuildFromJSON -build")
	runCallback("OnFrame")
	local charData = build.importTab:ImportItemsAndSkills(getItemsJSON)
    runCallback("OnFrame")
    print("loadBuildFromJSON -get chardata")
	build.importTab:ImportPassiveTreeAndJewels(getPassiveSkillsJSON, charData)
    print("loadBuildFromJSON -import")
	runCallback("OnFrame")
    print("loadBuildFromJSON DONE")
	-- You now have a build without a correct main skill selected, or any configuration options set
	-- Good luck!
end

function readAll(file)
    local f = assert(io.open(file, "rb"))
    local content = f:read("*all")
    f:close()
    return content
end

print("read all start")
local charItem = readAll("/app/json/item.json")
print("charItem read")
local charTree = readAll("/app/json/tree.json")
print("charTree read")

loadBuildFromJSON(charItem, charTree)
runCallback("OnFrame")
-- newBuild()
-- print(build)
-- print(build.displayStats)

function printTable(t, indent)
    indent = indent or ''
    for key, value in pairs(t) do
        if type(value) == 'table' then
            print(indent .. tostring(key) .. ":")
            printTable(value, indent .. '  ')
        else
            print(indent .. tostring(key) .. ": " .. tostring(value))
        end
    end
end
local m_max = math.max

local defaultEleResist = 50
build.configTab.varControls['enemyLightningResist']:SetPlaceholder(defaultEleResist, true)
build.configTab.varControls['enemyColdResist']:SetPlaceholder(defaultEleResist, true)
build.configTab.varControls['enemyFireResist']:SetPlaceholder(defaultEleResist, true)
build.configTab.varControls['enemyChaosResist']:SetPlaceholder(30, true)

local defaultLevel = 84
build.configTab.varControls['enemyLevel']:SetPlaceholder(defaultLevel, true)
build.configTab:UpdateLevel()
if build.configTab.enemyLevel then
	defaultLevel = m_max(build.configTab.enemyLevel, defaultLevel)
end

local defaultDamage = round(data.monsterDamageTable[defaultLevel] * 1.5  * data.misc.pinnacleBossDPSMult)
build.configTab.varControls['enemyPhysicalDamage']:SetPlaceholder(defaultDamage, true)
build.configTab.varControls['enemyLightningDamage']:SetPlaceholder(defaultDamage, true)
build.configTab.varControls['enemyColdDamage']:SetPlaceholder(defaultDamage, true)
build.configTab.varControls['enemyFireDamage']:SetPlaceholder(defaultDamage, true)
build.configTab.varControls['enemyChaosDamage']:SetPlaceholder(round(defaultDamage / 2.5), true)

build.configTab.varControls['enemyLightningPen']:SetPlaceholder(data.misc.pinnacleBossPen, true)
build.configTab.varControls['enemyColdPen']:SetPlaceholder(data.misc.pinnacleBossPen, true)
build.configTab.varControls['enemyFirePen']:SetPlaceholder(data.misc.pinnacleBossPen, true)

build.configTab.varControls['enemyArmour']:SetPlaceholder(round(data.monsterArmourTable[defaultLevel] * (data.bossStats.PinnacleArmourMean/100)), true)
build.configTab.varControls['enemyEvasion']:SetPlaceholder(round(data.monsterEvasionTable[defaultLevel] * (data.bossStats.PinnacleEvasionMean/100)), true)

runCallback("OnFrame")
-- { stat = "Life", label = "Total Life", fmt = "d", color = colorCodes.LIFE, compPercent = true },
for key, value in pairs(build.displayStats) do
	-- if value ~= nil then
	-- 	printTable(value)
	-- end
	-- printTable(value)
    local valueKey = value.stat
    local valueStat = build.calcsTab.mainOutput[value.stat]
    print(valueKey)
    print(valueStat)

    if value.stat == "LifeUnreserved" then
        local oneline = "[("..valueKey..":"..valueStat..")]"
        print(oneline)
    end
	if value.stat == "Life" then
		local oneline = "[("..valueKey..":"..valueStat..")]"
        print(oneline)
	end
	if value.stat == "LifeRecoverable" then
        local oneline = "[("..valueKey..":"..valueStat..")]"
        print(oneline)
    end
	-- if value.stat == "LifeRegenRecovery" then
    --     local oneline = "[("..valueKey..":"..valueStat..")]"
    --     print(oneline)
    -- end

	if value.stat == "Mana" then
        local oneline = "[("..valueKey..":"..valueStat..")]"
        print(oneline)
    end
	if value.stat == "ManaUnreserved" then
        local oneline = "[("..valueKey..":"..valueStat..")]"
        print(oneline)
    end

	if value.stat == "EnergyShield" then
        local oneline = "[("..valueKey..":"..valueStat..")]"
        print(oneline)
    end

	if value.stat == "Evasion" then
        local oneline = "[("..valueKey..":"..valueStat..")]"
        print(oneline)
    end

	if value.stat == "Armour" then
        local oneline = "[("..valueKey..":"..valueStat..")]"
        print(oneline)
    end

	if value.stat == "BlockChance" then
        local oneline = "[("..valueKey..":"..valueStat..")]"
        print(oneline)
    end
	
	if value.stat == "SpellBlockChance" then
        local oneline = "[("..valueKey..":"..valueStat..")]"
        print(oneline)
    end
	
	if value.stat == "AttackDodgeChance" then
        local oneline = "[("..valueKey..":"..valueStat..")]"
        print(oneline)
    end

	if value.stat == "SpellDodgeChance" then
        local oneline = "[("..valueKey..":"..valueStat..")]"
        print(oneline)
    end

	if value.stat == "EffectiveSpellSuppressionChance" then
        local oneline = "[("..valueKey..":"..valueStat..")]"
        print(oneline)
    end
	

    if value.stat == "TotalEHP" then
        local oneline = "[("..valueKey..":"..valueStat..")]"
        print(oneline)
    end

	if value.stat == "CombinedDPS" then
		-- local activeMinionLimit = build.calcsTab.mainOutput['ActiveMinionLimit']
		
		-- if activeMinionLimit > 0 then
		-- 	valueStat = valueStat * activeMinionLimit
		-- end
        local oneline = "[("..valueKey..":"..valueStat..")]"
        print(oneline)
    end

	if value.stat == "PhysicalDamageReduction" then
        local oneline = "[("..valueKey..":"..valueStat..")]"
        print(oneline)
    end
	if value.stat == "FireResist" then
        local oneline = "[("..valueKey..":"..valueStat..")]"
        print(oneline)
    end
	if value.stat == "ColdResist" then
        local oneline = "[("..valueKey..":"..valueStat..")]"
        print(oneline)
    end
	if value.stat == "LightningResist" then
        local oneline = "[("..valueKey..":"..valueStat..")]"
        print(oneline)
    end
	if value.stat == "ChaosResist" then
        local oneline = "[("..valueKey..":"..valueStat..")]"
        print(oneline)
    end

	if value.stat == "PhysicalMaximumHitTaken" then
        local oneline = "[("..valueKey..":"..valueStat..")]"
        print(oneline)
    end

	if value.stat == "LightningMaximumHitTaken" then
        local oneline = "[("..valueKey..":"..valueStat..")]"
        print(oneline)
    end

	if value.stat == "FireMaximumHitTaken" then
        local oneline = "[("..valueKey..":"..valueStat..")]"
        print(oneline)
    end
	
	if value.stat == "ColdMaximumHitTaken" then
        local oneline = "[("..valueKey..":"..valueStat..")]"
        print(oneline)
    end
	
	if value.stat == "ChaosMaximumHitTaken" then
        local oneline = "[("..valueKey..":"..valueStat..")]"
        print(oneline)
    end

	if value.stat == "EffectiveMovementSpeedMod" then
        local oneline = "[("..valueKey..":"..valueStat..")]"
        print(oneline)
    end

end
local xmldata = build:SaveDB("code")
local deflated = Deflate(xmldata)
local code = common.base64.encode(deflated):gsub("+","-"):gsub("/","_")

local onelinePob = "[(POB)]"
print(onelinePob)
print(code)
export const KOREAN_TO_ENGLISH_TAG: Record<string, string> = {
  // Styles & Archetypes
  '주문': 'Spell',
  '공격': 'Attack',
  '효과 범위': 'AoE',
  '투사체': 'Projectile',
  '화염': 'Fire',
  '냉기': 'Cold',
  '번개': 'Lightning',
  '카오스': 'Chaos',
  '물리': 'Physical',
  '소환수': 'Minion',
  '활': 'Bow',
  '근접': 'Melee',
  '타격': 'Strike',
  '강타': 'Slam',
  '토템': 'Totem',
  '낙인': 'Brand',
  '덫': 'Trap',
  '지뢰': 'Mine',
  '오라': 'Aura',
  '저주': 'Curse',
  '방어': 'Guard',
  '이동': 'Movement',
  '함성': 'Warcry',
  '집중 유지': 'Channelling',
  '지속시간': 'Duration',
  '연쇄': 'Chaining',
  '갈래': 'Forking',
  '관통': 'Piercing',
  '보조': 'Support',
  '바알': 'Vaal',
  '결계': 'Ward',
  '전령': 'Herald',
  '태세': 'Stance',
  '변신': 'Stance',
  '연결': 'Link',
  '축복': 'Blessing',
  '반격': 'Retaliation',
  '징표': 'Mark',
  '지속 피해': 'Damage over Time',
  '회오리': 'Nova',
  '노바': 'Nova',
  '발동': 'Trigger',
  '함정': 'Trap',
  '구체': 'Orb',
};

export const ENGLISH_TO_KOREAN_TAG: Record<string, string> = {
  Spell: '주문',
  Attack: '공격',
  AoE: '범위',
  Projectile: '투사체',
  Fire: '화염',
  Cold: '냉기',
  Lightning: '번개',
  Chaos: '카오스',
  Physical: '물리',
  Minion: '소환수',
  Bow: '활',
  Melee: '근접',
  Strike: '타격',
  Slam: '강타',
  Totem: '토템',
  Brand: '낙인',
  Trap: '덫',
  Mine: '지뢰',
  Aura: '오라',
  Curse: '저주',
  Guard: '방어',
  Movement: '이동',
  Warcry: '함성',
  Channelling: '집중유지',
  Duration: '지속시간',
  Chaining: '연쇄',
  Nova: '회오리',
  Trigger: '발동',
  Retaliation: '반격',
  Herald: '전령',
  Blessing: '축복',
  Vaal: '바알',
};

export const normalizeTag = (tag: string): string => {
  if (!tag) return '';
  const trimmed = tag.trim();
  return KOREAN_TO_ENGLISH_TAG[trimmed] || trimmed;
};

export const extractGemTags = (gem: any): string[] => {
  if (!gem) return [];
  if (Array.isArray(gem.tags) && gem.tags.length > 0) {
    return gem.tags.map(normalizeTag).filter(Boolean);
  }
  // Fallback: check properties (from GGG character API)
  const tagProp = gem.properties?.find(
    (p: any) => p.values?.length === 0 && p.name && !p.name.includes(':')
  );
  if (tagProp?.name) {
    return tagProp.name
      .split(',')
      .map((t: string) => normalizeTag(t))
      .filter(Boolean);
  }
  return [];
};

export const getSkillPriority = (gem: any): number => {
  const tags = extractGemTags(gem);
  let score = 0;

  // 1. High-priority active attack / damage delivery mechanics
  const isAttackOrMinion = tags.some((t) =>
    ['Attack', 'Strike', 'Slam', 'Bow', 'Minion', 'Totem', 'Brand', 'Trap', 'Mine'].includes(t)
  );
  if (isAttackOrMinion) score += 10;

  // 2. Elemental / Chaos / Physical damage spells (including Bane)
  const hasElement = tags.some((t) =>
    ['Fire', 'Cold', 'Lightning', 'Chaos', 'Physical'].includes(t)
  );
  if (tags.includes('Spell') && hasElement) score += 8;

  // 3. Penalize pure utility / aura / movement / guard / pure curse
  const isPureAuraOrBuff =
    tags.some((t) => ['Aura', 'Guard', 'Movement', 'Warcry'].includes(t)) &&
    !isAttackOrMinion;
  const isPureCurse = tags.includes('Curse') && !hasElement;

  if (isPureAuraOrBuff || isPureCurse) {
    score -= 10;
  }

  return score;
};

export interface MainSkillInfo {
  name: string;
  baseType: string;
  icon?: string;
  tags: string[];
  linkCount: number;
  archetype?: string;
}

export const getMainSkillInfo = (user: any): MainSkillInfo | null => {
  if (!user?.items) return null;

  // 1. Check new mainLinks structure (from upgraded batch)
  if (Array.isArray(user.items.mainLinks) && user.items.mainLinks.length > 0) {
    const sortedLinks = [...user.items.mainLinks].sort(
      (a: any, b: any) => (b.linkCount || 0) - (a.linkCount || 0)
    );

    for (const linkGroup of sortedLinks) {
      const activeGems: any[] = linkGroup.activeGems || [];
      const supportGems: any[] = linkGroup.supportGems || [];
      const supportNames: string[] = supportGems.map((g) => g.baseType || g.typeLine || '');

      // Special Support Gem Archetypes (Korean + English support):
      // A) Impending Doom Support -> Doom Blast (파멸 폭발)
      const impendingDoom = supportGems.find((g) => {
        const name = g.baseType || g.typeLine || '';
        return name.includes('Impending Doom') || name.includes('임박한 파멸');
      });
      if (impendingDoom) {
        return {
          name: '파멸 폭발 (Doom Blast)',
          baseType: 'Doom Blast',
          icon: impendingDoom.icon || activeGems[0]?.icon,
          tags: ['Spell', 'Chaos', 'AoE'],
          linkCount: linkGroup.linkCount || 6,
          archetype: '파멸폭발',
        };
      }

      // B) Cast On Critical Strike Support / Cast while Channelling Support
      const isCoC = supportNames.some((n) => n.includes('Cast On Critical Strike') || n.includes('치명타 시 시전'));
      const isCwC = supportNames.some((n) => n.includes('Cast while Channelling') || n.includes('시전 집중 유지'));
      if (isCoC || isCwC) {
        const triggeredSpell =
          activeGems.find((g) => {
            const t = extractGemTags(g);
            return t.includes('Spell') && !t.includes('Attack');
          }) || activeGems[0];

        if (triggeredSpell) {
          const prefix = isCoC ? '[CoC] ' : '[CwC] ';
          const tags = extractGemTags(triggeredSpell);
          return {
            name: `${prefix}${triggeredSpell.baseType}`,
            baseType: triggeredSpell.baseType,
            icon: triggeredSpell.icon,
            tags: tags.length > 0 ? tags : ['Spell', 'Trigger'],
            linkCount: linkGroup.linkCount || 6,
            archetype: isCoC ? 'CoC' : 'CwC',
          };
        }
      }

      // C) Shockwave Support
      const shockwave = supportNames.some((n) => n.includes('Shockwave') || n.includes('충격파'));
      if (shockwave && activeGems.length > 0) {
        const attack = activeGems[0];
        const tags = extractGemTags(attack);
        return {
          name: `${attack.baseType} (충격파)`,
          baseType: attack.baseType,
          icon: attack.icon,
          tags: tags,
          linkCount: linkGroup.linkCount || 6,
          archetype: '충격파',
        };
      }

      // D) Archmage Support
      const isArchmage = supportNames.some((n) => n.includes('Archmage') || n.includes('대마법사'));
      if (activeGems.length > 0) {
        const sortedActive = [...activeGems].sort(
          (a, b) => getSkillPriority(b) - getSkillPriority(a)
        );
        const best = sortedActive[0];
        const tags = extractGemTags(best);
        if (isArchmage) {
          return {
            name: `[대마법사] ${best.baseType}`,
            baseType: best.baseType,
            icon: best.icon,
            tags: tags,
            linkCount: linkGroup.linkCount || 6,
            archetype: '대마법사',
          };
        }
        return {
          name: best.baseType,
          baseType: best.baseType,
          icon: best.icon,
          tags: tags,
          linkCount: linkGroup.linkCount || 6,
        };
      }
    }
  }

  // 2. Fallback to existing mainSkills (past leagues 1~8 or standard fallback)
  if (Array.isArray(user.items?.mainSkills) && user.items.mainSkills.length > 0) {
    const sorted = [...user.items.mainSkills].sort((a: any, b: any) => {
      if ((b.linkCount || 0) !== (a.linkCount || 0)) {
        return (b.linkCount || 0) - (a.linkCount || 0);
      }
      return getSkillPriority(b) - getSkillPriority(a);
    });
    const best = sorted[0];
    const tags = extractGemTags(best);
    return {
      name: best.baseType,
      baseType: best.baseType,
      icon: best.icon,
      tags: tags,
      linkCount: best.linkCount || 5,
    };
  }

  return null;
};

export const getMainSkillName = (user: any): string | null => {
  const info = getMainSkillInfo(user);
  return info ? info.name : null;
};

export const getMainSkillIcon = (user: any): string | undefined => {
  const info = getMainSkillInfo(user);
  return info?.icon;
};

export const getMainSkillTags = (user: any): string[] => {
  const info = getMainSkillInfo(user);
  return info?.tags || [];
};

export const TAG_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  Fire: { bg: 'bg-red-950/40', text: 'text-red-400', border: 'border-red-800/60' },
  Cold: { bg: 'bg-cyan-950/40', text: 'text-cyan-400', border: 'border-cyan-800/60' },
  Lightning: { bg: 'bg-yellow-950/40', text: 'text-yellow-400', border: 'border-yellow-800/60' },
  Chaos: { bg: 'bg-purple-950/40', text: 'text-purple-400', border: 'border-purple-800/60' },
  Physical: { bg: 'bg-neutral-800/40', text: 'text-neutral-300', border: 'border-neutral-700/60' },
  Spell: { bg: 'bg-blue-950/40', text: 'text-blue-400', border: 'border-blue-800/60' },
  Attack: { bg: 'bg-orange-950/40', text: 'text-orange-400', border: 'border-orange-800/60' },
  Minion: { bg: 'bg-violet-950/40', text: 'text-violet-400', border: 'border-violet-800/60' },
  Bow: { bg: 'bg-emerald-950/40', text: 'text-emerald-400', border: 'border-emerald-800/60' },
  Melee: { bg: 'bg-rose-950/40', text: 'text-rose-400', border: 'border-rose-800/60' },
  AoE: { bg: 'bg-amber-950/40', text: 'text-amber-400', border: 'border-amber-800/60' },
  Projectile: { bg: 'bg-teal-950/40', text: 'text-teal-400', border: 'border-teal-800/60' },
  Channelling: { bg: 'bg-indigo-950/40', text: 'text-indigo-400', border: 'border-indigo-800/60' },
  Brand: { bg: 'bg-fuchsia-950/40', text: 'text-fuchsia-400', border: 'border-fuchsia-800/60' },
  Totem: { bg: 'bg-amber-900/40', text: 'text-amber-500', border: 'border-amber-700/60' },
  Strike: { bg: 'bg-red-900/40', text: 'text-red-300', border: 'border-red-700/60' },
  Slam: { bg: 'bg-orange-900/40', text: 'text-orange-300', border: 'border-orange-700/60' },
  Trap: { bg: 'bg-lime-950/40', text: 'text-lime-400', border: 'border-lime-800/60' },
  Mine: { bg: 'bg-sky-950/40', text: 'text-sky-400', border: 'border-sky-800/60' },
};

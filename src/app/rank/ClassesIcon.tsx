import React from "react";

const ClassesIcon = ({
  classCounts,
  setClass,
  filterClass,
  CLASS,
  userData,
}: any) => {
  return (
    <>
      <div className="classes">
        {Object.keys(classCounts)
          .sort((a: string, b: string) => {
            const classA = classCounts[a];
            const classB = classCounts[b];
            return classB - classA;
          })
          .map((className) => {
            const count = classCounts[className];
            return (
              <div
                key={`search-${className}`}
                onClick={() =>
                  setClass(filterClass === className ? "" : className)
                }
                style={{
                  border:
                    filterClass === className ? "3px solid #133d62" : "none",
                }}
                className="classBox"
              >
                <div
                  className="classImg"
                  style={{ backgroundImage: `url(${CLASS[className]})` }}
                ></div>
                <span
                  style={{
                    position: "absolute",
                    bottom: 0,
                    color: "white",
                    backgroundColor: "black",
                    left: 0,
                    fontSize: 11,
                    lineHeight: "10px",
                    width: "100%",
                  }}
                >
                  {parseInt(
                    ((count / userData.length) * 1000) as unknown as string
                  ) / 10 || "0"}
                  %
                </span>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default ClassesIcon;

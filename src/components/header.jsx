import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro" style={{ opacity: 1, height: `90vh` }}>
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p
                  style={{
                    mixBlendMode: "difference",
                    fontWeight: 700,
                    color: "gold",
                  }}
                >
                  <span></span>
                  {/* {props.data ? props.data.paragraph : "Loading"} */}
                </p>
                <p
                  style={{
                    mixBlendMode: "difference",
                    fontWeight: 700,
                    color: "gold",
                  }}
                >
                  <span></span>
                  {/* {props.data ? props.data.paragraph : "Loading"} */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

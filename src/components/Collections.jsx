import React from "react";

export const Collections = (props) => {
  return (
    <div id="collections" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Collections</h2>
        </div>
        <div id="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
                  <div className="thumbnail">
                    {" "}
                    <a href={`${d.job}`}>
                    <img src={d.img} alt="..." className="team-img" />
                    </a>
                    <div className="caption">
                      <h4>{d.name}</h4>
                      {/* <p>{d.job}</p> */}
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};

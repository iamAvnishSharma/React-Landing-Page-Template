import React from "react";

export const Highlights = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        {/*  */}
        <div id="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
                  <div className="thumbnail">
                    {" "}
                    <a href={`${d.name}`}>
                    <img src={d.img} alt="..." className="team-img" /></a>
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

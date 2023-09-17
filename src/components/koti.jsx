import { Image } from "./image";
import React from "react";

export const Koti = (props) => {
  return (
    <div id="koti" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Koti</h2>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                    // onClick={() => {naviga}}
                  >
                    <Image
                      // title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
          <div class="mt-20">
            <a href="/koti">
              {" "}
              <button type="button" class="btn btn-primary click mt-20">
                View more
              </button>{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

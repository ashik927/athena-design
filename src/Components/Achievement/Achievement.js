import React from "react";
import "./Achievement.css";
const Achievement = () => {
  return (
    <div className="container achievement pt-5 ">
      <div className="row">
        <div className="col-md-4">
          <h1>Our Achievements</h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letter.
          </p>
        </div>
        <div className="col-md-8 achieve-area">
          <div className="row">
            <div className="col-md-5 achieve">
              <div className="row">
                <div className="col-md-6 happy">
                <i class="far fa-smile"></i>
                </div>
                <div className=" col-md-6 ">
                  <h1>700+</h1>
                  <h5>Happy clients</h5>
                </div>
              </div>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-5 achieve">
              <div className="row">
                <div className="col-md-6 ">
                  <img src="https://i.postimg.cc/m22bh8ys/marketing-2x.png" alt="happy" />
                </div>
                <div className=" col-md-6 ">
                  <h1>145+</h1>
                  <h5>Projects Complete</h5>
                </div>
              </div>
            </div>
            <div className="col-md-5 achieve">
              <div className="row">
                <div className="col-md-6 ">
                  <img src="https://i.postimg.cc/G3jLcZYK/surface1-2x.png" alt="happy" />
                </div>
                <div className=" col-md-6 ">
                  <h1>25+</h1>
                  <h5>Crazy Minds</h5>
                </div>
              </div>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-5 achieve">
              <div className="row">
                <div className="col-md-6">
                  <img src="https://i.postimg.cc/gkSGh8g6/transportation-2x.png" alt="happy" />
                </div>
                <div className=" col-md-6">
                  <h1>75+</h1>
                  <h5>Running Projects</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;

import React from "react";
import './Project.css'

const Project = () => {
  return (
    <div className=" pt-5 bg-image">
      <div className="row container">
        <div className="col-md-6">
          <img src="https://i.postimg.cc/wB5dh3HN/banner-img.png" className="img-fluid" alt="" />
        </div>
        <div className="col-md-6 right ">
          <h1> Stay Running & Project </h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letter.
          </p>
          <button className="contact">Contact us</button>
        </div>
      </div>
    </div>
  );
};

export default Project;

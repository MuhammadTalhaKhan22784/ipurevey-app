import React from "react";
import "./FeedBack.css";
import arrow from "../../Assets/Path 5678.svg";
import star from "../../Assets/Icon awesome-star.svg";
import starlight from "../../Assets/Icon awesome-star light.svg";
const FeedBack = () => {
  return (
    <React.Fragment>
      <div className="feedback">
        <div className="feedback_content">
          <div className="row">
            <span>
              <strong>Leave a Feedback!</strong>
            </span>
          </div>
          <div className="row mt-2">
            <p style={{ color: "#2E58A6" }}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut
            </p>
          </div>
          <div className="row mt-3">
            <span>How was the experience?</span>
          </div>
          <div className="row mt-3">
            <div className="d-flex align-items-center justify-content-between fd_star">
              <img src={star} alt="..." />
              <img src={star} alt="..." />
              <img src={star} alt="..." />
              <img src={star} alt="..." />
              <img src={star} alt="..." />
            </div>
          </div>
          <div className="row mt-3">
            <p>Are you satisfied with our customer support?</p>
          </div>
          <div className="row mt-3">
            <div className="d-flex align-items-center justify-content-between fd_star">
              <img src={starlight} alt="..." />
              <img src={starlight} alt="..." />
              <img src={starlight} alt="..." />
              <img src={starlight} alt="..." />
              <img src={starlight} alt="..." />
            </div>
          </div>
          <div className="row mt-3">
            <p>Did you have any trouble managing your account?</p>
          </div>
          <div className="row mt-3">
            <div className="d-flex align-items-center justify-content-between fd_star">
              <img src={starlight} alt="..." />
              <img src={starlight} alt="..." />
              <img src={starlight} alt="..." />
              <img src={starlight} alt="..." />
              <img src={starlight} alt="..." />
            </div>
          </div>
          <div className="row mt-3">
            <p>Write us a feedback (Optional)</p>
          </div>
          <div className="row mt-2">
            <textarea name="" id=""></textarea>
          </div>
          <div className="mt-2">
            <button className="home_form_btn">Submit</button>
          </div>
        </div>
        
        <div className="feedback_btn">
          <img src={arrow} alt="..." />
          <span>Feedback</span>
        </div>
     
      </div>
    </React.Fragment>
  );
};

export default FeedBack;

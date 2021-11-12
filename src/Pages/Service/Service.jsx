import React from "react";
import "./Service.css";
import SubNav from "../../Layout/SubNav";
import Footer from "../../Layout/Footer";
import arrow from "../../Assets/Icon feather-arrow-right.png";
import Layer1 from "../../Assets/Layer 1.jpg";
import Layer2 from "../../Assets/Layer 2.jpg";
import Layer3 from "../../Assets/Layer 3.jpg";
import { Link } from "react-router-dom";
const Service = () => {
  return (
    <>
      <SubNav head="Our Services" />
      <div className="service_main">
        <div className="sm_content sm_for">
          <div className="sm_l sml_rev">
            <h2>Rail disruption</h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
            </p>
            <button className="cus_blue_btn">Retrieve your rail booking</button>
          </div>
          <div className="sm_r">
            <img src={Layer1} alt="..." />
          </div>
        </div>
        <div className="sm_content sm_rev">
          <div className="sm_r">
            <img src={Layer2} alt="..." />
          </div>
          <div className="sm_l sml_for">
            <h2>Flight disruption</h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
            </p>
            <button className="cus_blue_btn">Retrieve your flight booking</button>
          </div>
        </div>
        <div className="developer_sd">
          <div className="pm_sections">
            <div className="pm_left_sec">
              <h5>iPurvey bank to bank checkout</h5>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
              </p>
              <div className="learn_more_lin">
                <Link className="link" to="/api-doc">
                  Start integration <img src={arrow} alt="..." />
                </Link>
              </div>
              <div className="developers_btns">
                <Link to="/api-doc">
                  <button className="cus_blue_btn">
                    View API Documentation
                  </button>
                </Link>
                <Link to="/contact">
                  <button className="cus_wht_btn">Contact Us</button>
                </Link>
              </div>
            </div>
            <div className="pm_right_sec">
              <img src={Layer3} alt="..." />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Service;

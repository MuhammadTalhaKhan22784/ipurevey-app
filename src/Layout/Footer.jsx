import React from "react";
import { Link } from "react-router-dom";
import CopyRight from './CopyRight'
// import logo from "../Assets/iPurvery Logo PNG@2x.png";
import "./style.css";

const Footer = () => {
  return (
    <React.Fragment>

    <div className="footer_main_container">
      <div className="footer_main_div">
        <div className="footer_link_div">
          {/* <img src={logo} alt="" /> */}
          <div className="footer_links">
            <div className="links_footer">
              <h6>iPurvey</h6>
              <ul className="link_ul">
                <li>
                  <Link className="f_links" to="/account-info">
                    Your Account{" "}
                  </Link>
                </li>
                <li>
                  <Link className="f_links" to="/contact">
                    Media Center{" "}
                  </Link>
                </li>
                <li>
                  <Link className="f_links" to="blog">
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link className="f_links" to="/partners">
                    Partners
                  </Link>
                </li>
              </ul>
            </div>
            <div className="links_footer">
              <h6>Support</h6>
              <ul className="link_ul">
                <li>
                  <Link className="f_links" to="/about">
                    About Us{" "}
                  </Link>
                </li>
                <li>
                  <Link className="f_links" to="/contact">
                    Contact Us{" "}
                  </Link>
                </li>
                <li>
                  <Link className="f_links" to="/contact">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link className="f_links" to="/faq">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
            <div className="links_footer">
              <h6>Legal</h6>
              <ul className="link_ul">
                <li>
                  <Link className="f_links" to="/privacy">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link className="f_links" to="/terms">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link className="f_links" to="/contact">
                    Data policy
                  </Link>
                </li>

              </ul>
            </div>
          </div>
          <p className="footer_para1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
            quidem eligendi officiis numquam tempore modi, eaque temporibus.
            Quia aperiam, laboriosam temporibus, ipsum voluptas minus culpa
            explicabo magnam impedit ullam est.
          </p>
          <p className="footer_para2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
          </p>
        </div>
        <div className="footer_form_div">
          <h3 className="form_head">Get in touch!</h3>
          <form className="footer_form" action="">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
            <textarea
              name=""
              id=""
              cols="10"
              rows="5"
              placeholder="Message"
            ></textarea>
            <div className="sent_btn_div">
              <button className="foter_sent_btn">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <CopyRight />
    </React.Fragment>

  );
};

export default Footer;

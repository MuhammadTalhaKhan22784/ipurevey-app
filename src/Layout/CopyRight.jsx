import React from "react";
import { Link } from "react-router-dom";
import fb from "../Assets/Group 2430@2x.png";
import insta from "../Assets/Group 2432@2x.png";
import link from "../Assets/Group 3406@2x.png";
import twiter from "../Assets/Group 3407@2x.png";
import youtube from "../Assets/Group 3315@2x.png";
import path from "../Assets/Path 4443.png";
import copy from "../Assets/Icon metro-copyright.png";

const CopyRight = () => {
  return (
    <div className="copy_right_container">
      <div className="copy_right_main_div">
        <div className="contact_link_ul_">
          <h5>Contact us</h5>
          <img className="contct_path_line" src={path} alt="" />
          <ul className="social_links">
            <li>
              <a href="">
                <img src={fb} alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img className="insta_icon" src={insta} alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={youtube} alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={twiter} alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={link} alt="" />
              </a>
            </li>
          </ul>
        </div>
        <div className="term_link_div">
          <div>
            <Link className="foter_link" to="/privacy">
              {" "}
              Privacy policy{" "}
            </Link>
            |
            <Link className="foter_link" to="/terms">
              {" "}
              Terms of Use{" "}
            </Link>
          </div>
        </div>
      </div>
      <div className="copy_right_div">
        <p>
          Copyright <img src={copy} alt="" /> 2020. iPurvey.
        </p>
      </div>
      <div>
          <br />
          <br />
          <h2>Payment</h2>
          <br />
        <Link to="/payment/method">payment method</Link>
        <Link className="ms-3" to="/payment/options">
          payment options
        </Link>
        <Link className="ms-3" to="/payment/options">
          payment options
        </Link>
        <Link className="ms-3" to="/payment/paypal">
          payment paypal
        </Link>
        <Link className="ms-3" to="/payment/stripe">
          payment stripe
        </Link>
        <Link className="ms-3" to="/payment/thank-you">
          payment thank you
        </Link>
        <Link className="ms-3" to="/payment/failed">
          payment failed
        </Link>
        <br />
        <br />
        <Link className="ms-3" to="/payment/bank-method">
          payment bank method
        </Link>
        <Link className="ms-3" to="/payment/select-bank">
          payment select bank
        </Link>
        <Link className="ms-3" to="/payment/paying-bank">
          payment paying bank
        </Link>
        <Link className="ms-3" to="/payment/bank-type">
          payment bank type
        </Link>
        <br />
        <br />
        <Link className="ms-3" to="/payment/confirm-payment">
          payment confirm payment
        </Link>
        <Link className="ms-3" to="/payment/success">
          payment success
        </Link>
        <br />
        <br />
        <h2>Partners</h2>
        <Link className="ms-3" to="/partners">
          partner
        </Link>
        <br />
        <br />
        <h2>Api doc</h2>
        <Link className="ms-3" to="/api-doc">
          api doc
        </Link>
        <br />
        <br />
        <h2>plan</h2>
        <Link className="ms-3" to="/plan/payment-method">
          plan payment method
        </Link>
        <Link className="ms-3" to="/plan/payment-stripe">
          plan payment stripe
        </Link>
        <Link className="ms-3" to="/plan/payment-paypal">
          plan payment paypal
        </Link>
        <Link className="ms-3" to="/plan/payment-thank">
          plan payment thank
        </Link>
        <Link className="ms-3" to="/plan/payment-failed">
          plan payment failed
        </Link>
        <br />
        <h2>plan payment</h2>
        <br />
        <Link className="ms-3" to="/planpayment/bank-select">
          plan bank select
        </Link>
        <Link className="ms-3" to="/planpayment/bank-paying">
          plan bank paying
        </Link>
        <Link className="ms-3" to="/planpayment/bank-auth">
          plan bank auth
        </Link>
        <Link className="ms-3" to="/planpayment/bank-otp">
          plan bank otp
        </Link>
        <Link className="ms-3" to="/planpayment/bank-type">
          plan bank type
        </Link>
        <Link className="ms-3" to="/planpayment/confirm-payment">
          plan bank confirm payment
        </Link>
        <Link className="ms-3" to="/planpayment/success">
          plan bank success
        </Link>
        <br />
        <br />
        <h2>Signup</h2>
        <Link className="ms-3" to="/signup">
          signup
        </Link>
        <br />
        <br />
        <h2>Our Plan</h2>
        <Link className="ms-3" to="/our-plan">
        our plan
        </Link>
      </div>
    </div>
  );
};

export default CopyRight;

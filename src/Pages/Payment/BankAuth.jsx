import React from "react";
import arrowLeft from "../../Assets/Icon feather-arrow-left.png";
import starlingIcon from "../../Assets/Mask Group 2.png";
import lockIcon from "../../Assets/Icon awesome-lock.png";
import eyeIcon from "../../Assets/Icon awesome-eye-slash.png";
import { Link } from "react-router-dom";

const BankAuth = () => {
  return (
    <React.Fragment>
      <div className="bank_auth payment">
        <div className="row">
          <div className="col-lg-12">
            <div className="pm_head">
              <div>
                <img src={arrowLeft} alt="..." />
                <h2 className="ms-2">Authenticate your Login Credentials</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row auth_text">
          <div className="col-lg-12">
            <div className="d-flex flex-column align-items-center">
              <img src={starlingIcon} alt="..." />
              <h5>Starling Bank</h5>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="d-flex align-items-center justify-content-center">
              <img src={lockIcon} alt="..." />
              <h5 className="ms-2">Starling Bank Secure Gateway</h5>
            </div>
          </div>
          <div className="col-lg-12">
            <p>Please select your preferred login method:</p>
          </div>
        </div>
        <div className="row">
          <div className="auth_tabs">
            <button>Internet Banking ID</button>
            <button>QR Code</button>
          </div>
        </div>
        <div className="row mt-3">
          <p>Sign In using Internet Banking ID</p>
        </div>
        <div className="row mt-1">
          <div className="col-lg-12">
            <div className="ps_input1">
              <input type="text" placeholder="Name on the card" />
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-12">
            <div className="ps_input1">
              <input type="password" placeholder="Password" />
              <img src={eyeIcon} alt="..." />
            </div>
          </div>
        </div>
        <div className="row mt-2 align-items-center justify-content-between">
          <div className="col-lg-6">
            <div className="check_box">
              <input type="checkbox" />
              <span>Rember me</span>
            </div>
          </div>
          <div className="col-lg-6">
            <Link to="/" className="dont_text">
              Forgot Password?
            </Link>
          </div>
        </div>
        <div className="row mt-1">
          <div className="col-lg-12">
            <button className="home_form_btn">
              <Link to="success">Login to Starling Bank</Link>
            </button>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-12">
            <Link className="hl_text">Cancel transcation</Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BankAuth;

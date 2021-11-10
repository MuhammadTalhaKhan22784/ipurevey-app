import React from "react";
import { Link, useHistory } from "react-router-dom";
import arrowLeft from "../../Assets/Icon feather-arrow-left.png";
import starlingIcon from "../../Assets/Mask Group 2.png";
import lockIcon from "../../Assets/Icon awesome-lock.png";
import eyeIcon from "../../Assets/Icon awesome-eye-slash.png";

const BankAuth = (props) => {
  const history = useHistory();
  return (
    <React.Fragment>
      <div className="bank_auth payment">
        <div className="row">
          <div className="col-lg-12">
            <div className="pm_head">
              <div>
                <img
                  onClick={() => history.goBack()}
                  style={{ cursor: "pointer" }}
                  src={arrowLeft}
                  alt="..."
                />
                <h2 className="ms-2">Authenticate your Login Credentials</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row auth_text mt-3">
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
            <button className="auth_active_tab">Internet Banking ID</button>
            <Link to={props.path ? "bank-qrcode" : "/payment/bank-qrcode"}>
              <button className="auth_non_active_tab">QR Code</button>
            </Link>
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
          <div className="col-6 col-sm-6 col-md-6 col-lg-6">
            <div className="check_box">
              <input type="checkbox" />
              <span>Rember me</span>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-6 col-lg-6">
            <Link to="/forgot" className="dont_text">
              Forgot Password?
            </Link>
          </div>
        </div>

        <div className="row mt-1">
          <div className="col-lg-12">
            <Link
              to={props.path ? "/planpayment/bank-otp" : "/payment/bank-otp"}
            >
              <button className="home_form_btn">Login to Starling Bank</button>
            </Link>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-12">
            <Link
              to={props.path ? "/plan/payment-failed" : "/payment/failed"}
              className="hl_text"
            >
              Cancel transcation
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BankAuth;

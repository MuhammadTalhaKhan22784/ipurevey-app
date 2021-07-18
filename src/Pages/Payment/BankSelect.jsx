import React, { useState } from "react";
import arrowLeft from "../../Assets/Icon feather-arrow-left.png";
import searchIcon from "../../Assets/Icon feather-search.png";
import HBOS from "../../Assets/HBOS.png";
import monzo from "../../Assets/monzo.png";
import Starling from "../../Assets/Mask Group 2.png";
import santader from "../../Assets/santader.png";
import HSBC from "../../Assets/Mask Group 3.png";
import NatWest from "../../Assets/2472366.png";
import tick from "../../Assets/Group 4169.png";
import {Link } from "react-router-dom";

const options = {
  bank: {
    name: "Bank of Scotland",
    img: HBOS,
    route: "/payment/paypal",
  },
  monzo: {
    name: "Monzo",
    img: monzo,
    route: "/payment/stripe",
  },
  starling: {
    name: "Santander",
    img: Starling,
    route: "/payment/bank-transfer",
  },
  hsbc: {
    name: "HSBC Bank",
    img: HSBC,
    route: "/payment/paypal",
  },
  stripe: {
    name: "NatWest",
    img: NatWest,
    route: "/payment/stripe",
  },
  santader: {
    name: "Starling Bank",
    img: santader,
    route: "/payment/bank-transfer",
  },
};

const BankSelect = (props) => {
  const [active, setActive] = useState("paypal");

  return (
    <React.Fragment>
      <div className="select_bank">
        <div className="row">
          <div className="col-lg-12">
            <div className="pm_head">
              <div>
                <img src={arrowLeft} alt="..." />
                <h2>Select a Payment Method</h2>
              </div>
              <p className="mt-4">
                This payment method is only available for the banks listed below
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-12">
            <div className="ps_input1">
              <input type="text" placeholder="Search a bank" />
              <img style={{ width: "20px" }} src={searchIcon} alt="..." />
            </div>
          </div>
        </div>
        <div className="row bank_select_options">
          {Object.entries(options).map((el) => (
            <div className={props.col ? "col-lg-4" : "col-lg-6"}>
              <div
                onClick={() => setActive(el[0])}
                className={
                  el[0] === active ? "paypal_box active_box" : "paypal_box"
                }
              >
                <div>
                  <img src={el[1].img} alt="..." />
                  <span>{el[1].name}</span>
                </div>
                <div>{el[0] === active && <img src={tick} alt="..." />}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="row mt-2">
          <Link to="/" className="dont_text">
            Don't see your bank?
          </Link>
        </div>
        <div className="row mt-4">
          <div className="col-lg-12">
            <button className="home_form_btn">
              <Link to="success">Continue</Link>
            </button>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-lg-12">
            <Link className="hl_text">Cancel Transaction</Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BankSelect;
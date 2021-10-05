import React, { useState } from "react";
import "./OurPlans.css";
import tick from "../../Assets/Path 5267.svg";
const our_planData = [
  {
    id: "0",
    name: "1 Month",
    price: "FREE TRIAL",
    transaction: "*Limited to 5 journeys",
    tick: tick,
    tick: tick,
    tick: tick,
    tick: tick,
    tick: tick,
  },
  {
    id: "1",
    name: "1 Month",
    price: "FREE TRIAL",
    transaction: "*Limited to 5 journeys",
    tick: tick,
    tick: tick,
    tick: tick,
    tick: tick,
    tick: tick,
  },
  {
    id: "2",
    name: "1 Month",
    price: "FREE TRIAL",
    transaction: "*Limited to 5 journeys",
    tick: tick,
    tick: tick,
    tick: tick,
    tick: tick,
    tick: tick,
  },
  {
    id: "3",
    name: "1 Month",
    price: "FREE TRIAL",
    transaction: "*Limited to 5 journeys",
    tick: tick,
    tick: tick,
    tick: tick,
    tick: tick,
    tick: tick,
  },
  {
    id: "4",
    name: "1 Month",
    price: "FREE TRIAL",
    transaction: "*Limited to 5 journeys",
    tick: tick,
    tick: tick,
    tick: tick,
    tick: tick,
    tick: tick,
  },
  {
    id: "5",
    name: "1 Month",
    price: "FREE TRIAL",
    transaction: "*Limited to 5 journeys",
    tick: tick,
    tick: tick,
    tick: tick,
    tick: tick,
    tick: tick,
  },
];
const OurPlans = () => {
  const [activePlan, setActivePlan] = useState("");

  const handleSelect = (e) => {
    setActivePlan(e.id);
  };
  return (
    <React.Fragment>
      <div className="our_plans_section">
        <div className="partner_header">
          <h2>Partners</h2>
        </div>
        <div className="our_plan_hero">
          <div className="row">
            <div className="col-8 col-sm-6 col-md-4 col-lg-3">
              {/* <div className="row"> */}
              <div className="feature_box">
                <h2>Features</h2>
                <div className="row w-100 gx-0">
                  <div className="col-lg-12">
                    <div className="feature_list">
                      <span>Travel disruption monitoring</span>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="feature_list">
                      <span>Travel disruption monitoring</span>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="feature_list">
                      <span>Travel disruption monitoring</span>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="feature_list">
                      <span>Travel disruption monitoring</span>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="feature_list">
                      <span>Travel disruption monitoring</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* </div> */}
            </div>
            <div className="col-4 col-sm-6 col-md-8 col-lg-9 our_plan_col">
              <div className="our_plan_row">
                <div className="row ">
                  {our_planData.map((d, i) => {
                    return (
                      <div
                        key={i}
                        className="col-2 col-sm-2 col-md-2 col-lg-2 p-0"
                        onClick={() => handleSelect(d)}
                      >
                        <div
                          className={
                            activePlan === d.id
                              ? "active_fib feature_item_box"
                              : "feature_item_box"
                          }
                        >
                          {activePlan === d.id ? (
                            <div className="popular_text">Popular</div>
                          ) : null}
                          <div className="fib_head">
                            <div className="row">
                              <h5>{d.name}</h5>
                            </div>
                            <div className="row">
                              <h2>{d.price}</h2>
                            </div>
                            <div className="row">
                              <span>{d.transaction}</span>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="flist">
                                <img src={d.tick} alt="..." />
                              </div>
                            </div>

                            <div className="col-lg-12">
                              <div className="flist">
                                <img src={d.tick} alt="..." />
                              </div>
                            </div>

                            <div className="col-lg-12">
                              <div className="flist">
                                <img src={d.tick} alt="..." />
                              </div>
                            </div>

                            <div className="col-lg-12">
                              <div className="flist">
                                <img src={d.tick} alt="..." />
                              </div>
                            </div>

                            <div className="col-lg-12">
                              <div className="flist">
                                <img src={d.tick} alt="..." />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <button className="home_form_btn">Subscribe</button>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  {/*                 
                  <div className="col-2 col-sm-2 col-md-2 col-lg-2 p-0">
                    <div className="feature_item_box">
                      <div className="fib_head">
                        <div className="row">
                          <h5>Frequent Rail Commuter Plan</h5>
                        </div>
                        <div className="row">
                          <h2>FREE TRIAL</h2>
                        </div>
                        <div className="row">
                          <span>*Limited to 5 journeys</span>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="flist">
                            <img src={tick} alt="..." />
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div className="flist">
                            <img src={tick} alt="..." />
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div className="flist">
                            <img src={tick} alt="..." />
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div className="flist">
                            <img src={tick} alt="..." />
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div className="flist">
                            <img src={tick} alt="..." />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <button className="home_form_btn">Subscribe</button>
                      </div>
                    </div>
                  </div>

                  <div className="col-2 col-sm-2 col-md-2 col-lg-2 p-0">
                    <div className="feature_item_box">
                      <div className="fib_head">
                        <div className="row">
                          <h5>
                            Frequent Flyer <br /> Plan
                          </h5>
                        </div>
                        <div className="row">
                          <h2>FREE TRIAL</h2>
                        </div>
                        <div className="row">
                          <span>*Limited to 5 journeys</span>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="flist">
                            <img src={tick} alt="..." />
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div className="flist">
                            <img src={tick} alt="..." />
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div className="flist">
                            <img src={tick} alt="..." />
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div className="flist">
                            <img src={tick} alt="..." />
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div className="flist">
                            <img src={tick} alt="..." />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <button className="home_form_btn">Subscribe</button>
                      </div>
                    </div>
                  </div>

                  <div className="col-2 col-sm-2 col-md-2 col-lg-2 p-0">
                    <div className="feature_item_box">
                      <div className="fib_head">
                        <div className="row">
                          <h5>Frequent Rail & Flight Combo Plan</h5>
                        </div>
                        <div className="row">
                          <h2>FREE TRIAL</h2>
                        </div>
                        <div className="row">
                          <span>*Limited to 5 journeys</span>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="flist">
                            <img src={tick} alt="..." />
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div className="flist">
                            <img src={tick} alt="..." />
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div className="flist">
                            <img src={tick} alt="..." />
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div className="flist">
                            <img src={tick} alt="..." />
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div className="flist">
                            <img src={tick} alt="..." />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <button className="home_form_btn">Subscribe</button>
                      </div>
                    </div>
                  </div>

                  <div className="col-2 col-sm-2 col-md-2 col-lg-2 p-0">
                    <div className="feature_item_box">
                      <div className="fib_head">
                        <div className="row">
                          <h5>
                            Occasional Rail <br /> Plan
                          </h5>
                        </div>
                        <div className="row">
                          <h2>FREE TRIAL</h2>
                        </div>
                        <div className="row">
                          <span>*Limited to 5 journeys</span>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="flist">
                            <img src={tick} alt="..." />
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div className="flist">
                            <img src={tick} alt="..." />
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div className="flist">
                            <img src={tick} alt="..." />
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div className="flist">
                            <img src={tick} alt="..." />
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div className="flist">
                            <img src={tick} alt="..." />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <button className="home_form_btn">Subscribe</button>
                      </div>
                    </div>
                  </div>

                  <div className="col-2 col-sm-2 col-md-2 col-lg-2 p-0">
                    <div className="feature_item_box">
                      <div className="fib_head">
                        <div className="row">
                          <h5>
                            Occasional Flight <br /> Plan
                          </h5>
                        </div>
                        <div className="row">
                          <h2>FREE TRIAL</h2>
                        </div>
                        <div className="row">
                          <span>*Limited to 5 journeys</span>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="flist">
                            <img src={tick} alt="..." />
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div className="flist">
                            <img src={tick} alt="..." />
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div className="flist">
                            <img src={tick} alt="..." />
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div className="flist">
                            <img src={tick} alt="..." />
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div className="flist">
                            <img src={tick} alt="..." />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <button className="home_form_btn">Subscribe</button>
                      </div>
                    </div>
                  </div>
                 */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default OurPlans;

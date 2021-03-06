import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
// assets
import headImg from "../../Assets/undraw_Airport_re_oqk1.png";
import arrival from "../../Assets/Icon awesome-plane-arrival.png";
import arrival2 from "../../Assets/Icon awesome-plane-arriva.png";
import path from "../../Assets/Path 6636.png";
import arrow from "../../Assets/Icon feather-arrow-rightw.png";

const WhereWereTraveling = ({ nextBtn, backBtn }) => {
  return (
    <div className="steper_form_container">
      <div className="stepper_form_md">
        <div className="stepper_form">
          <img src={headImg} alt="..." />
          <h2>Where were you traveling?</h2>
          <div className="stp_inp arrive_inp">
            <img src={arrival} alt="..." />
            <Autocomplete
              className="autoComplt"
              id="free-solo-demo"
              options={top100Films.map((option) => option.title)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Departure Airport e.g. London or LHA"
                />
              )}
            />
          </div>
          <div className="arrival_path">
            <img src={path} alt="..." />
          </div>
          <div className="stp_inp arrive_inp2">
            <img src={arrival2} alt="..." />
            {/* <input
              type="text"
              name="text"
              id="text"
              placeholder="Arrival Airport e.g. Dubai or DIA"
            /> */}
            <Autocomplete
              className="autoComplt"
              id="free-solo-demo"
              options={top100Films.map((option) => option.title)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Arrival Airport e.g. Dubai or DIA"
                />
              )}
            />
          </div>
          <div className="stp_btns">
            <button className="home_form_btn" onClick={nextBtn}>
              Continue <img src={arrow} alt="..." />{" "}
            </button>
            <button className="stp_back" onClick={backBtn}>
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhereWereTraveling;

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  { title: "The Lord of the Rings: The Return of the King", year: 2003 },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  { title: "The Lord of the Rings: The Fellowship of the Ring", year: 2001 },
  { title: "Star Wars: Episode V - The Empire Strikes Back", year: 1980 },
];

import React, { useState } from "react";
import "./donationForm.css";
import axios from "axios";
// import { useEffect } from 'react';

const DonationForm = () => {
  const [data, SetData] = useState({
    full_name: "",
    org_name: "",
    email: "",
    motive: "",
    required_money: 0,
  });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    SetData({ ...data, [name]: value });
  };
  const handleSubmit = async () => {
    console.log(data);
    axios
      .post("http://localhost:5000/fundraiser/create", data)
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err + "error");
      });
  };
  // console.log(data);
  return (
    <div>
      <div className="page-wrapper bg-dark p-t-100 p-b-50">
        <div className="wrapper wrapper--w900" style={{ marginBottom: "200px" }}>
          <div className="card card-6">
            <div className="card-heading">
              <h2 className="title">Start a Fundraiser</h2>
            </div>
            <div className="card-body">
              <form method="POST">
                <div className="form-row">
                  <div className="name">Full name</div>
                  <div className="value">
                    <input
                      className="input--style-6"
                      type="text"
                      name="full_name"
                      onChange={handleInputs}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="name">Name of Organization</div>
                  <div className="value">
                    <input
                      className="input--style-6"
                      type="text"
                      name="org_name"
                      onChange={handleInputs}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="name">Mobile No.</div>
                  <div className="value">
                    <div className="input-group">
                      <input
                        className="input--style-6"
                        type="number"
                        name="email"
                        placeholder="example@email.com"
                        onChange={handleInputs}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="name">Motive</div>
                  <div className="value">
                    <div className="input-group">
                      <textarea
                        className="textarea--style-6"
                        name="motive"
                        placeholder="Brief about the purpose that this fundraiser serves"
                        onChange={handleInputs}
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="name">Funds Required</div>
                  <div className="value">
                    <input
                      className="input--style-6"
                      type="text"
                      name="required_money"
                      placeholder="Enter the amount of money you need in rupees"
                      onChange={handleInputs}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="name">Upload an image</div>
                  <div className="value">
                    <div className="input-group js-input-file">
                      <input
                        className="input-file"
                        type="file"
                        name="img_banner"
                        id="file"
                      />
                      <label className="label--file" for="file">
                        Choose file
                      </label>
                      <span className="input-file__info">No file chosen</span>
                    </div>
                    <div className="label--desc">
                      Upload an image that will serve as a banner to your fund
                      raiser. Max file size 50 MB
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="card-footer">
              <button
                className="btn btn--radius-2 btn--blue-2 bb"
                type="submit"
                onClick={handleSubmit}
              >
                Start Fundraiser
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationForm;

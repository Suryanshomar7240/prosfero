import React, { useState } from "react";
import "../../donationForm/donationForm.css";
import axios from "axios";
import { useEffect } from "react";
import FileBase64 from "react-file-base64";
import { ImCross } from "react-icons/im";
// import { withRouter } from "react-router-dom";

const DonationForm = (prop) => {
  const fundId = prop.match.params.id;
  const [verified, setVerified] = useState(false);

  const handleChange = (e) => {
    SetData({ ...data, type: e.target.value });
  };

  const [data, SetData] = useState({
    fundId: fundId,
    org_name: "",
    email: "",
    motive: "",
    required_money: 0,
    upiMobile: null,
    type: "",
    photoUrl: "",
    userId: "",
    id_token: "",
    collected_money: 0,
  });

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    SetData({ ...data, [name]: value });
  };

  const getFundraiser = () => {
    return axios.get(`https://prosfero-backend.herokuapp.com/fundraiser/active/${fundId}`);
  };
  const handleSubmit = async () => {
    if (verified === false) {
      alert("You have to login to start a fundraiser");
    }
    axios
      .post("https://prosfero-backend.herokuapp.com/fundraiser/update", data)
      .then((res) => {
        window.alert("Fundraiser Updated Successfully");
        window.location=`/dashboard/${localStorage.getItem('token')}`;
      })
      .catch((err) => {
        console.log(err + "error");
      });
  };

  useEffect(() => {
    const id_token = localStorage.getItem("id_token");
    const userid = localStorage.getItem("token");

    if (id_token == null || userid == null) {
      alert("You have to login first to create fundraisers");
    } else {
      axios
        .get(`https://oauth2.googleapis.com/tokeninfo?id_token=${id_token}`)
        .then(() => {
          setVerified(true);
          console.log("verified");
        })
        .catch(() => {
          alert("Id token is invalid please login again");
        });

      getFundraiser()
        .then((res) => {
          //  console.log(res);
          SetData({
            fundId:fundId,
            org_name: res.data.orgName,
            motive: res.data.bio,
            required_money: res.data.targetMoney,
            upiMobile: 7755046170,
            type: res.data.type,
            photoUrl: res.data.photoUrl,
            collected_money: res.data.moneyCollected,
          });
        })
        .catch((err) => console.log(err));
    }
  }, []);

  if (verified === true) {
    return (
      <div>
        <div className="page-wrapper bg-dark p-t-100 p-b-50">
          <div
            className="wrapper wrapper--w900"
            style={{ marginBottom: "200px" }}
          >
            <div className="card card-6">
              <div className="card-heading">
                <h2 className="title">Update your Fundraiser</h2>
              </div>
              <div className="card-body">
                <form method="POST">
                  <div className="form-row form-img">
                    <img src={data.photoUrl}></img>
                    <div>
                      <h2>Change Image</h2>
                      <FileBase64
                        multiple={false}
                        onDone={({ base64 }) => {
                          SetData({ ...data, photoUrl: base64 });
                        }}
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
                        value={data.org_name}
                        onChange={handleInputs}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="name">Mobile No.</div>
                    <div className="value">
                      <div className="input-group">
                        <input
                          className="input--style-6"
                          type="text"
                          name="upiMobile"
                          value={data.upiMobile}
                          placeholder="Your 10 digit mobile number for upi payments"
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
                          value={data.motive}
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
                        type="number"
                        name="required_money"
                        value={data.required_money}
                        placeholder="Enter the amount of money you need in rupees"
                        onChange={handleInputs}
                      />
                    </div>
                    <div style={{ color: "grey" }}>
                      *this fundraiser already collected {data.collected_money}{" "}
                      ₹
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="name">Type</div>
                    <div className="value">
                      <select
                        className="selectOptions"
                        onChange={handleChange}
                        style={{ color: "#999999", fontSize: "16px" }}
                        value={data.type}
                      >
                        <option value="all">Select Category</option>
                        <option value="education">Education</option>
                        <option value="medical">Medical</option>
                        <option value="disaster">Disaster Relief</option>
                        <option value="animal">Animal Welfare</option>
                        <option value="other">Other Causes</option>
                      </select>
                    </div>
                  </div>
                </form>
              </div>
              <div className="card-footer">
                <button
                  className="btn btn--radius-2 btn--blue-2 bb"
                  //   type="submit"
                  onClick={handleSubmit}
                >
                  Update Fundraiser
                </button>
                <button
                  className="btn btn--radius-2 btn--blue-2 bb bg-danger"
                  //   type="submit"
                  //   onClick={handleSubmit}
                >
                  <ImCross className="crossSign" />
                  &ensp;CLOSE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1 style={{ textAlign: "center", margin: "100px" }}>
          Please login to update your Fundraiser
        </h1>
      </div>
    );
  }
};

export default DonationForm;

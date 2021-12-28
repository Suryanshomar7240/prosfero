import React from 'react';
import './donationForm.css';
// import { useEffect } from 'react';


const DonationForm = () => {


  return (
    <div>
      <div class='page-wrapper bg-dark p-t-100 p-b-50'>
        <div class='wrapper wrapper--w900'  style={ {marginBottom : '200px'} }>
          <div class='card card-6'>
            <div class='card-heading'>
              <h2 class='title'>Start a Fundraiser</h2>
            </div>
            <div class='card-body'>
              <form method='POST'>
                <div class='form-row'>
                  <div class='name'>Full name</div>
                  <div class='value'>
                    <input
                      class='input--style-6'
                      type='text'
                      name='full_name'
                    />
                  </div>
                </div>
                <div class='form-row'>
                  <div class='name'>Name of Organization</div>
                  <div class='value'>
                    <input
                      class='input--style-6'
                      type='text'
                      name='org_name'
                    />
                  </div>
                </div>
                <div class='form-row'>
                  <div class='name'>Email address</div>
                  <div class='value'>
                    <div class='input-group'>
                      <input
                        class='input--style-6'
                        type='email'
                        name='email'
                        placeholder='example@email.com'
                      />
                    </div>
                  </div>
                </div>
                <div class='form-row'>
                  <div class='name'>Motive</div>
                  <div class='value'>
                    <div class='input-group'>
                      <textarea
                        class='textarea--style-6'
                        name='motive'
                        placeholder='Brief about the purpose that this fundraiser serves'
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div class='form-row'>
                  <div class='name'>Funds Required</div>
                  <div class='value'>
                    <input
                      class='input--style-6'
                      type='text'
                      name='required_money'
                      placeholder='Enter the amount of money you need in rupees'
                    />
                  </div>
                </div>
                <div class='form-row'>
                  <div class='name'>Upload an image</div>
                  <div class='value'>
                    <div class='input-group js-input-file'>
                      <input
                        class='input-file'
                        type='file'
                        name='img_banner'
                        id='file'
                      />
                      <label class='label--file' for='file'>
                        Choose file
                      </label>
                      <span class='input-file__info'>No file chosen</span>
                    </div>
                    <div class='label--desc'>
                      Upload an image that will serve as a banner to your fund raiser. Max file
                      size 50 MB
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div class='card-footer'>
              <button class='btn btn--radius-2 btn--blue-2 bb' type='submit'>
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

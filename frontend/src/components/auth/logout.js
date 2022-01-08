import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientid =
  '164103917734-69vt13rut8unj21kf48ledmfs28dop7r.apps.googleusercontent.com';

const Logout = (prop) => {
  const handleOnSuccess = () => {
    const dashborad = document.querySelector('#dashboard');;
    dashborad.classList.add('dpNone');
    prop.SetAuth(false);
    alert('User logged out successfully');
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientid}
        buttonText='Logout'
        onLogoutSuccess={handleOnSuccess}
      />
    </div>
  );
};

export default Logout;

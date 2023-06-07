import React from "react";

const Logout = (prop) => {
  const handleOnSuccess = () => {
    const dashborad = document.querySelector("#dashboard");
    dashborad.classList.add("dpNone");
    prop.SetAuth(false);
    localStorage.clear();
    window.location.reload(false);
    window.location = "/";
    alert("User logged out successfully");
  };

  return (
    <div>
      <button
        type="button"
        class="login-with-google-btn"
        onClick={handleOnSuccess}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;

import React from "react";
import CookieConsent from "react-cookie-consent"; // Ensure correct import
import { NavLink } from "react-router-dom";
import './Cookie.css'; // Import the CSS file
import { useEffect } from "react";

const Cookie = () => {

  // Function to check if the cookie is set
  const hasConsented = () => {
    const consentCookie = document.cookie
      .split('; ')
      .find(row => row.startsWith('userCookieConsent='));
    return consentCookie && consentCookie.split('=')[1] === 'true'; // Return true if consent exists
  };

  return (
    <div>
      {!hasConsented() && ( // Check if consent has not been given
        <CookieConsent
          debug={true}
          location="bottom"
          style={{
            backgroundColor: "grey",
            textAlign: "left",
            height: "auto",
            padding: "10px 20px", // Add padding for a better look
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            maxWidth: "100%", // Ensure it doesn't overflow
            boxSizing: "border-box", // Include padding in width calculation
          }}
          buttonStyle={{
            color: "#000",
            background: "#fff",
            fontSize: "14px",
            marginTop: "5px", // Adjust margin for a smaller gap
            padding: "10px 15px",
            borderRadius: "5px",
          }}
          expires={365}
          cookieName="userCookieConsent" // Specify a cookie name
        >
          We use essential cookies to make our site work. With your consent, we
          may also use non-essential cookies to improve user experience and
          analyze website traffic. By clicking "I understand” you agree to our
          website's cookie use as described in our
          <NavLink to="/privacypolicy" style={{ marginLeft: "5px", color:"black" }}> Private Policy </NavLink>.
        </CookieConsent>
      )}
    </div>
  );
};

export default Cookie;

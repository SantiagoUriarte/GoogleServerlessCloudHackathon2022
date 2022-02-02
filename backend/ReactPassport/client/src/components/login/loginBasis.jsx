import React from 'react';

const loginBasis = () => {
  return <div className="login-main-wrapper">
      <div className="logo">
          <div className="logo-image"></div>
          <div className="logo-title"></div>
      </div>
      <div className="login-form">
          <div className="username-label"></div>
          <div className="username-input"></div>
          <div className="password-label"></div>
          <div className="password-input"></div>
          <div className="form-submit-btn"></div>
      </div>
      <div className="or-text"></div>
      <div className="additional-authentication">
          <div className="google-authentication"></div>
          <div className="apple-authentication"></div>
      </div>
      <div className="line-break"></div>
      <div className="create-account-text"></div>
  </div>;
};

export default loginBasis;

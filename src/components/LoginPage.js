import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import LoginpageImage from './LoginpageImage';

export const LoginPage = ({ startLogin }) => (
  <section className="box-layout home-section">
    <LoginpageImage />
    <div className="box-layout__box home-group">
      <h1 className="box-layout__title home-group_title">Pecunia</h1>
      <p className="home-group_description">
        It's time to get your expenses under control.
      </p>
      <button className="button home-group_button" onClick={startLogin}>
        Sign in with your google account
      </button>
      <div className="button loginpage_arrow" onClick={startLogin}>
        <svg width="24" height="24" viewBox="0 0 1000 1000">
          <path fill="#fff" d="M694.4 242.4l249.1 249.1c11 11 11 21 0 32L694.4 772.7c-5 5-10 7-16 7s-11-2-16-7c-11-11-11-21 0-32l210.1-210.1H67.1c-13 0-23-10-23-23s10-23 23-23h805.4L662.4 274.5c-21-21.1 11-53.1 32-32.1z">
          </path>
        </svg>
      </div>
      <div className="copyright">
        © 2021 A React PROJECT by ADAM ALI.
      </div>
    </div>
  </section>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);

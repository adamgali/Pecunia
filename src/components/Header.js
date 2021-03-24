import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import LogoImage from './LogoImage';

export const Header = ({ startLogout }) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <LogoImage />
        <Link className="header__title" to="/dashboard">
          <h1>Pecunia</h1>
        </Link>
        <button className="button button--link" onClick={startLogout}>Logout
        </button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payment from './Payment';

class Header extends Component {

    renderContent() {
      switch(this.props.auth) {
        case null:
          return;

        case false:
          return [
            <li key="auth"><a href="/auth/google">Login With Google</a></li>
          ];

        default:
          return [
            <li key="payment"><Payment /></li>,
            <li key="credits" style={{ margin: '0px 10px'}}> 
              <a>Credits: { this.props.auth.credits }</a> 
            </li>,
            <li key="logout"><a href="/api/logout">Logout</a></li>
          ];
      }
    }

    render() {
        return (
            <nav>
            <div className="nav-wrapper">
              <Link to={ this.props.auth ? '/surveys' : '/' } className="left brand-logo">
                 Seamless Feedbacks
              </Link>
              <ul id="nav-mobile" className="right">
                { this.renderContent() } 
              </ul>
            </div>
          </nav>
        );
    }
}

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps)(Header);
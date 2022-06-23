import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// import Header from './Header.css'

class Header extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <p data-testid="email-field">
          {' '}
          {` Email: ${email}`}
        </p>
        <p data-testid="total-field"> 0 </p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = ({ user }) => ({
  email: user.email,

});
export default connect(mapStateToProps)(Header);

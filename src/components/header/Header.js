import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// import Header from './Header.css'

// Requisito 6 realizado com a ajuda do Bruno Negri e Jessy Damasceno. Turma 21 - Tribo A.
class Header extends React.Component {
  getValue =() => {
    const { expenses } = this.props;
    const INITIAL_STATE = 0;

    if (expenses.length > 0) {
      const valuesCover = expenses
        .map(({ value, exchangeRates, currency }) => value * exchangeRates[currency].ask);
      const tota = valuesCover.reduce((result, number) => result + number);
      return tota.toFixed(2);
    }

    return INITIAL_STATE.toFixed(2);
  }

  render() {
    const { email } = this.props;

    return (
      <header>
        <p data-testid="email-field">
          {' '}
          {` Email: ${email}`}
        </p>
        <p data-testid="total-field">
          {this.getValue()}
        </p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};

const mapStateToProps = ({ user, wallet }) => ({
  email: user.email,
  expenses: wallet.expenses,

});
export default connect(mapStateToProps)(Header);

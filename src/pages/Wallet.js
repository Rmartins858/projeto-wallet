/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/header/Header';
import { fetcAPI } from '../actions';
import Form from '../components/form/Form';

class Wallet extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch();
  }

  render() {
    return (
      <div>
        <Form />
        <Header />
      </div>
    );
  }
}

Wallet.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatch: () => dispatch(fetcAPI()),
});

export default connect(null, mapDispatchToProps)(Wallet);

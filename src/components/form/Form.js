import React from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';

class Form extends React.Component {
  render() {
    const { currencies } = this.props;

    return (
      <form>
        <div>
          <label htmlFor="text">
            <input
              type="text"
              data-testid="value-input"
              placeholder="0"
            />
          </label>
        </div>
        <div>
          <label htmlFor="text">
            <input
              data-testid="description-input"
              placeholder="despesas"
            />
          </label>
        </div>

        <div>
          <label htmlFor="currencies">
            Moeda:
            <select
              id="currencies"
            >
              {currencies.map((e) => (<option key={ e }>{e}</option>))}

            </select>
          </label>
        </div>

        <div>
          <label htmlFor="Moeda">
            <select data-testid="method-input">
              <option> Dinheiro </option>
              <option> Cartão de crédito</option>
              <option> Cartão de débito </option>
            </select>
          </label>
        </div>

        <div>
          <label htmlFor="tag">
            TAG:
            <select
              id="tag"
              data-testid="tag-input"
            >
              <option> Alimentação </option>
              <option> Lazer </option>
              <option> Trabalho </option>
              <option> Transporte </option>
              <option> Saúde </option>
            </select>
          </label>
        </div>

      </form>

    );
  }
}

Form.propTypes = {
  currencies: Proptypes.arrayOf(Proptypes.string).isRequired,
};

const mapStateToProps = ({ wallet }) => ({
  currencies: wallet.currencies,

});

export default connect(mapStateToProps)(Form);

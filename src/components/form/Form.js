import React from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAPIglobal, updateExpense } from '../../actions';

// const alimentacao = 'Alimentação';
const INITIAL_STATE = {
  id: 0,
  value: '',
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentacao',
  // exchangeRates: {},
};

class Form extends React.Component {
    state = INITIAL_STATE;

    handleChange = ({ target }) => {
      const { name, value } = target;
      this.setState({ [name]: value });
    }

    handleClick = () => {
      const { fetchAPIgl, editor, exchangeRates, isUpdateExpense } = this.props;
      if (!editor) {
        fetchAPIgl(this.state);
        this.setState(({ id }) => ({ ...INITIAL_STATE, id: id + 1 }));
      } else {
        const { idToEdit: id } = this.props;
        isUpdateExpense({ ...this.state, id, exchangeRates });
      }
    }

    render() {
      const { value, description, currency, method, tag } = this.state;
      const { currencies, editor } = this.props;
      return (
        <form>
          <div>
            <label htmlFor="text">
              <input
                type="text"
                name="value"
                data-testid="value-input"
                placeholder="0"
                value={ value }
                onChange={ this.handleChange }
              />
            </label>
          </div>
          <div>
            <label htmlFor="description">
              <input
                id="description"
                data-testid="description-input"
                placeholder="Despesas"
                name="description"
                value={ description }
                onChange={ this.handleChange }
              />
            </label>
          </div>
          <div>
            <label htmlFor="currency">
              Moeda:
              <select
                onChange={ this.handleChange }
                name="currency"
                value={ currency }
                id="currency"
              >
                {currencies.map((e) => (<option key={ e }>{e}</option>))}

              </select>
            </label>
          </div>

          <div>
            <label htmlFor="method">
              <select
                id="method"
                onChange={ this.handleChange }
                name="method"
                value={ method }
                data-testid="method-input"
              >
                <option value="Dinheiro">Dinheiro</option>
                <option value="Cartão de crédito">Cartão de crédito</option>
                <option value="Cartão de débito">Cartão de débito</option>
              </select>
            </label>
          </div>
          <div>
            <label htmlFor="tag">
              TAG:
              <select
                onChange={ this.handleChange }
                name="tag"
                value={ tag }
                id="tag"
                data-testid="tag-input"
              >
                <option value="Alimentação"> Alimentação </option>
                <option value="Lazer"> Lazer </option>
                <option value="Trabalho"> Trabalho </option>
                <option value="Trasporte"> Transporte </option>
                <option value="Saúde"> Saúde </option>
              </select>
            </label>
          </div>
          <button
            onClick={ this.handleClick }
            type="button"
          >
            { editor ? 'Editar despesa' : 'Adicionar despesa'}
          </button>
        </form>
      );
    }
}

Form.propTypes = {
  fetchAPIgl: Proptypes.func.isRequired,
  currencies: Proptypes.arrayOf(Proptypes.string).isRequired,
  editor: Proptypes.bool.isRequired,
  idToEdit: Proptypes.number.isRequired,
  exchangeRates: Proptypes.objectOf().isRequired,
  isUpdateExpense: Proptypes.func.isRequired,
};

const mapStateToProps = ({ wallet }) => ({
  currencies: wallet.currencies,
  editor: wallet.editor,
  idToEdit: wallet.idToEdit,
  exchangeRates: wallet.exchangeRates,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAPIgl: (payload) => dispatch(fetchAPIglobal(payload)),
  isUpdateExpense: (params) => dispatch(updateExpense(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);

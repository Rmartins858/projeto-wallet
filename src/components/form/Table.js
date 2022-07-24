import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { isExclusion, editExpense } from '../../actions';
import './Table.css';

class Table extends React.Component {
  render() {
    const { expenses, remove, editForm } = this.props;
    return (
      <table className="dataTable">
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map(
            ({
              id,
              description,
              tag,
              method,
              value,
              exchangeRates,
              currency,
            }) => {
              console.log(description);
              const valueFix = (+value).toFixed(2);
              const { name } = exchangeRates[currency];
              const { ask } = exchangeRates[currency];
              const fixAsk = Number(ask).toFixed(2);
              const ValueInReais = (value * ask).toFixed(2);
              return (
                <tr key={ id }>
                  <td>{description}</td>
                  <td>{tag}</td>
                  <td>{method}</td>
                  <td>{name}</td>
                  <td>{valueFix}</td>
                  <td>{fixAsk}</td>
                  <td>{ValueInReais}</td>
                  <td>Real</td>
                  <td>

                    <button
                      data-testid="edit-btn"
                      type="button"
                      onClick={ () => editForm(id, exchangeRates) }
                    >
                      Editar
                    </button>
                    <button
                      type="button"
                      data-testid="delete-btn"
                      onClick={ () => remove(id) }
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              );
            },
          )}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  remove: PropTypes.func.isRequired,
  editForm: PropTypes.func.isRequired,
};

const mapStateToProps = ({ wallet }) => ({
  expenses: wallet.expenses,

});

const mapDispatchToProps = (dispatch) => ({
  remove: (id) => dispatch(isExclusion(id)),
  editForm: (id, exchangeRates) => dispatch(editExpense(id, exchangeRates)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);

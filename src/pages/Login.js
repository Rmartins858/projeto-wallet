import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { creatAtionEmail } from '../actions';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    isButton: true,
  };

  // https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/
  dataValidation = () => {
    const { email, password } = this.state;
    const validationRegex = /\S+@\S+\.\S+/;
    const passwordLength = 5;
    const validationPassword = password.length >= passwordLength;
    const validationEmail = validationRegex.test(email);

    if (validationEmail && validationPassword) {
      this.setState({
        isButton: false,
      });
    } else {
      this.setState({
        isButton: true,
      });
    }
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
    this.dataValidation();
  }

  handleClick = () => {
    const { history, creatAtion } = this.props;
    const { email } = this.state;
    creatAtion(email);
    history.push('/carteira');
  }

  render() {
    const { email, password, isButton } = this.state;
    return (
      <div>
        <form>
          <input
            type="email"
            data-testid="email-input"
            onChange={ this.handleChange }
            value={ email }
            name="email"
            placeholder="Email"
          />

          <input
            type="password"
            data-testid="password-input"
            onChange={ this.handleChange }
            value={ password }
            name="password"
            placeholder="Senha"

          />

          <button
            type="button"
            onClick={ this.handleClick }
            disabled={ isButton }
          >
            {' '}
            Entrar
            {' '}
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  creatAtion: (email) => dispatch(creatAtionEmail(email)),
});
Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  creatAtion: PropTypes.func.isRequired,
};
export default connect(null, mapDispatchToProps)(Login);

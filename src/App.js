import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    };
  }

  onInputChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    this.setState({
      [name]: value,
    }, this.verificaCampos);
  };

  ativaClickBtnSave = (e) => {
    e.preventDefault();
    this.setState({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardRare: 'normal',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
    });
  };

  validaAtributosCard = () => {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const atbUm = parseInt(cardAttr1, 10);
    const atbDois = parseInt(cardAttr2, 10);
    const atbTres = parseInt(cardAttr3, 10);
    const atbTotal = 210;
    const atbMax = 90;
    const atbMin = 0;
    const atbValido = (
      atbUm >= atbMin && atbUm <= atbMax
      && atbDois >= atbMin && atbDois <= atbMax
      && atbTres >= atbMin && atbTres <= atbMax
      && atbUm + atbDois + atbTres <= atbTotal);
    if (atbValido) return true;
    if (!atbValido) return false;
  };

  verificaCampos = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
    } = this.state;
    const atbsValidos = this.validaAtributosCard();
    const validation = (cardName.length > 0
    && cardDescription.length > 0
    && cardImage.length > 0
    && cardRare.length > 0);
    if (validation && atbsValidos) this.setState({ isSaveButtonDisabled: false });
    if (!validation || !atbsValidos) this.setState({ isSaveButtonDisabled: true });
  };

  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          ativaClickBtnSave={ this.ativaClickBtnSave }
          onInputChange={ this.onInputChange }
          { ...this.state }
        />
        <Card
          { ...this.state }
        />
      </div>
    );
  }
}

export default App;

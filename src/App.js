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
      cardList: [],
    };
  }

  onInputChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    this.setState({
      [name]: value,
    }, this.verificaCampos);
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const {
      cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo, cardList,
    } = this.state;

    this.setState({
      cardList: [
        ...cardList,
        { cardName,
          cardDescription,
          cardAttr1,
          cardAttr2,
          cardAttr3,
          cardImage,
          cardRare,
          cardTrunfo,
        },
      ],
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardRare: 'normal',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      hasTrunfo: !!cardTrunfo,
      // cardTrunfo: true,
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
    const validacaoCamp = (cardName.length > 0
    && cardDescription.length > 0
    && cardImage.length > 0
    && cardRare.length > 0);
    if (validacaoCamp && atbsValidos) this.setState({ isSaveButtonDisabled: false });
    if (!validacaoCamp || !atbsValidos) this.setState({ isSaveButtonDisabled: true });
  };

  render() {
    const { cardList } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          onSaveButtonClick={ this.onSaveButtonClick }
          onInputChange={ this.onInputChange }
          { ...this.state }
        />
        <Card
          { ...this.state }
        />
        {
          cardList.length > 0 && cardList.map((card) => (
            <section key={ card.cardName }>
              <Card
                cardName={ card.cardName }
                cardDescription={ card.cardDescription }
                cardAttr1={ card.cardAttr1 }
                cardAttr2={ card.cardAttr2 }
                cardAttr3={ card.cardAttr3 }
                cardImage={ card.cardImage }
                cardRare={ card.cardRare }
                cardTrunfo={ card.cardTrunfo }
              />
            </section>
          ))
        }
      </div>
    );
  }
}

export default App;

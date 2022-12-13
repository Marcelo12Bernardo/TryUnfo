import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick, // hasTrunfo
    } = this.props;
    return (
      <form>
        <h2>ADICIONE NOVA CARTA</h2>
        <section>
          Nome:
          <input
            type="text"
            name="cardName"
            data-testid="name-input"
            placeholder="Nome"
            value={ cardName }
            onChange={ onInputChange }
          />
        </section>

        <section>
          Descrição:
          <textarea
            type="textarea"
            name="cardDescription"
            data-testid="description-input"
            placeholder="Descrição"
            onChange={ onInputChange }
            value={ cardDescription }
          />
        </section>

        <section>
          ATB 01:
          <input
            type="number"
            name="cardAttr1"
            data-testid="attr1-input"
            placeholder="Primeiro atributo da carta"
            onChange={ onInputChange }
            value={ cardAttr1 }
          />
        </section>

        <section>
          ATB 02:
          <input
            type="number"
            name="cardAttr2"
            data-testid="attr2-input"
            placeholder="Segundo atributo da carta"
            onChange={ onInputChange }
            value={ cardAttr2 }
          />
        </section>

        <section>
          ATB 03:
          <input
            type="number"
            name="cardAttr3"
            data-testid="attr3-input"
            placeholder="Terceiro atributo da carta"
            onChange={ onInputChange }
            value={ cardAttr3 }
          />
        </section>

        <section>
          Imagem:
          <input
            type="text"
            name="cardImage"
            data-testid="image-input"
            placeholder="Imagem da carta"
            onChange={ onInputChange }
            value={ cardImage }
          />
        </section>

        <section>
          raridade:
          <select
            name="cardRare"
            data-testid="rare-input"
            onChange={ onInputChange }
            value={ cardRare }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </section>

        <section>
          Super Trunfo?
          <input
            type="checkbox"
            data-testid="trunfo-input"
            name="cardTrunfo"
            onChange={ onInputChange }
            checked={ cardTrunfo }
          />
        </section>

        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>

      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
export default Form;

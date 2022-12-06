import React from 'react';

class Form extends React.Component {
  render() {
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
          />
        </section>

        <section>
          Descrição:
          <input
            type="textarea"
            name="cardDescricao"
            data-testid="description-input"
            placeholder="Descrição"
          />
        </section>

        <section>
          ATB 01:
          <input
            type="number"
            name="attributeCard1"
            data-testid="attr1-input"
            placeholder="Primeiro atributo da carta"
          />
        </section>

        <section>
          ATB 02:
          <input
            type="number"
            name="attributeCard2"
            data-testid="attr2-input"
            placeholder="Segundo atributo da carta"
          />
        </section>

        <section>
          ATB 03:
          <input
            type="number"
            name="attributeCard1"
            data-testid="attr3-input"
            placeholder="Terceiro atributo da carta"
          />
        </section>

        <section>
          Imagem:
          <input
            type="text"
            name="imageCard"
            data-testid="image-input"
            placeholder="Imagem da carta"
          />
        </section>

        <section>
          raridade:
          <select
            name="raridadeCard"
            data-testid="rare-input"
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
            name="trunfoCard"
          />
        </section>

        <button
          type="submit"
          data-testid="save-button"
        >
          Salvar
        </button>

      </form>
    );
  }
}

export default Form;

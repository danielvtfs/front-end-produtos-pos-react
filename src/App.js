import React, { Component } from "react";

import { api } from "./service/axios";

class App extends Component {
  state = {
    produtos: [],
  };

  async componentDidMount() {
    const response = await api.get("");
    this.setState({ produtos: response.data });
  }

  render() {
    const { produtos } = this.state;

    return (
      <div className="App">
        <h1>Lista de produtos</h1>
        <table>
          <thead>
            <tr>
              <th>Código</th>
              <th>Nome do produto</th>
              <th>Preço</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((produto) => {
              return (
                <tr key={produto.id}>
                  <td>{produto.id}</td>
                  <td>{produto.nomeProduto}</td>
                  <td>{produto.preco}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import { Main, Container, Input } from "../stylesheets/appStyle";

class App extends Component {
  constructor(props) {
    super(props);

    this.Button = React.createRef();
    this.App = React.createRef();
  }

  render() {
    var selectedNumbersArr = [];
    var yourNumbersArr = [];
    var sortedNumbersArr = [];
    const insertArray = (e) => {
      if (selectedNumbersArr.length === 6) {
        sortArray();
      } else {
        selectedNumbersArr.push(parseInt(e.target.value));
        console.log(selectedNumbersArr);
      }
    };
    const sortArray = () => {
      var random;
      for (let i = 0; i < selectedNumbersArr.length; i++) {
        random = Math.floor(Math.random() * 1 * 11);
        sortedNumbersArr.push(random);
      }
      for (let i = 0; i < sortedNumbersArr.length; i++) {
        if (selectedNumbersArr.includes(sortedNumbersArr[i])) {
          console.log(
            `Você acertou o nº ${sortedNumbersArr[i]}! dos números sorteados ${sortedNumbersArr}`
          );
          yourNumbersArr.push(sortedNumbersArr[i]);
          console.log(`Quantidade de acertos: ${yourNumbersArr.length}`);
        } else {
        }
      }
      selectedNumbersArr = [];
      sortedNumbersArr = [];
    };
    return (
      <Container>
        <Main />
        <div>
          <Input
            ref={this.Button}
            onClick={insertArray}
            type="button"
            value={1}
          />
          <Input
            ref={this.Button}
            onClick={insertArray}
            type="button"
            value={2}
          />
          <Input
            ref={this.Button}
            onClick={insertArray}
            type="button"
            value={3}
          />
          <Input
            ref={this.Button}
            onClick={insertArray}
            type="button"
            value={4}
          />
          <Input
            ref={this.Button}
            onClick={insertArray}
            type="button"
            value={5}
          />
          <Input
            ref={this.Button}
            onClick={insertArray}
            type="button"
            value={6}
          />
        </div>
      </Container>
    );
  }
}

export default App;

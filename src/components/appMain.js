import React, { Component } from "react";
import { Main, AppMain, Input } from "../stylesheets/appStyle";

class App extends Component {
  constructor(props) {
    super(props);

    this.selectedNumbersArr = [];
    this.sortedNumbersArr = [];
    this.yourNumbersArr = [];
    this.randomNumbers;
  }

  render() {
    const insertArray = (e) => {
      if (this.selectedNumbersArr.length === 6) {
        sortArray();
      } else {
        this.selectedNumbersArr.push(parseInt(e.target.value));
        console.log(this.selectedNumbersArr);
      }
    };
    const sortArray = () => {
      for (let i = 0; i < this.selectedNumbersArr.length; i++) {
        this.randomNumbers = Math.floor(Math.random() * 61);
        this.sortedNumbersArr.push(this.randomNumbers);
      }
      for (let i = 0; i < this.sortedNumbersArr.length; i++) {
        if (this.selectedNumbersArr.includes(this.sortedNumbersArr[i])) {
          this.yourNumbersArr.push(this.sortedNumbersArr[i]);
        }
      }
      if (this.yourNumbersArr.length === 0) {
        console.log("Você não acertou nenhum!");
      } else {
        console.log(
          `Você acertou o nº ${this.yourNumbersArr}! dos números sorteados ${this.sortedNumbersArr}`
        );
        console.log(`Quantidade de acertos: ${this.yourNumbersArr.length}`);
      }
      this.selectedNumbersArr = [];
      this.sortedNumbersArr = [];
      this.yourNumbersArr = [];
    };
    return (
      <AppMain>
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
          <Input
            ref={this.Button}
            onClick={insertArray}
            type="button"
            value={7}
          />
          <Input
            ref={this.Button}
            onClick={insertArray}
            type="button"
            value={8}
          />
          <Input
            ref={this.Button}
            onClick={insertArray}
            type="button"
            value={9}
          />
          <Input
            ref={this.Button}
            onClick={insertArray}
            type="button"
            value={10}
          />
        </div>
      </AppMain>
    );
  }
}

export default App;

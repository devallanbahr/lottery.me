import React, { Component } from "react";
import { Main, AppMain, Input } from "../stylesheets/appStyle";

// Add-ons
/*
 */
// Add-ons

class App extends Component {
  constructor(props) {
    super(props);

    // Referencies //
    this.buttonElement = React.createRef();
    this.numHits = React.createRef();
    this.numSorts = React.createRef();
    this.qntdHits = React.createRef();

    // Arrays //
    this.selectedNumbersArr = [];
    this.sortedNumbersArr = [];
    this.yourNumbersArr = [];

    // Variables //
    this.randomNumbers;
    this.timerSort;
    this.randomNumbersMin = Math.ceil(1);
    this.randomNumbersMax = Math.floor(60);
  }

  render() {
    const insertArray = (e) => {
      if (this.selectedNumbersArr.length < 6) {
        this.selectedNumbersArr.push(parseInt(e.target.value));
        console.log(this.selectedNumbersArr);
      } else {
        alert("Números selecionados! Faça o sorteio.");
      }
    };
    const selectArray = () => {
      if (this.selectedNumbersArr.length == 6) {
        sortArray();
      } else {
        alert("Selecione os 6 números antes de sortear!");
      }
    };
    const sortArray = () => {
      for (let i = 0; i < this.selectedNumbersArr.length; i++) {
        this.randomNumbers =
          Math.floor(
            Math.random() * (this.randomNumbersMax - this.randomNumbersMin + 1)
          ) + this.randomNumbersMin;
        this.sortedNumbersArr.push(this.randomNumbers);
      }
      for (let i = 0; i < this.sortedNumbersArr.length; i++) {
        if (this.selectedNumbersArr.includes(this.sortedNumbersArr[i])) {
          this.yourNumbersArr.push(this.sortedNumbersArr[i]);
        }
      }
      if (this.yourNumbersArr.length === 0) {
        this.numHits.current.textContent = `Você não acertou nenhum!`;
      } else {
        this.numSorts.current.textContent = `Números sorteados: ${this.sortedNumbersArr}`;
        this.numHits.current.textContent = `Você acertou o nº ${this.yourNumbersArr}!`;
        this.qntdHits.current.textContent = `Quantidade de acertos: ${this.yourNumbersArr.length}`;
      }
      this.timerSort = setInterval(() => clearArrays(), 3000);
    };
    const clearArrays = () => {
      this.selectedNumbersArr = [];
      this.sortedNumbersArr = [];
      this.yourNumbersArr = [];
      this.numHits.current.textContent = ``;
      this.numSorts.current.textContent = ``;
      this.numHits.current.textContent = ``;
      this.qntdHits.current.textContent = ``;
      clearTimeout(this.timerSort);
    };
    return (
      <AppMain>
        <Main />
        <div>
          <Input
            ref={this.button}
            onClick={insertArray}
            type="button"
            value={1}
          />
          <Input
            ref={this.button}
            onClick={insertArray}
            type="button"
            value={2}
          />
          <Input
            ref={this.button}
            onClick={insertArray}
            type="button"
            value={3}
          />
          <Input
            ref={this.button}
            onClick={insertArray}
            type="button"
            value={4}
          />
          <Input
            ref={this.button}
            onClick={insertArray}
            type="button"
            value={5}
          />
          <Input
            ref={this.button}
            onClick={insertArray}
            type="button"
            value={6}
          />
          <Input
            ref={this.button}
            onClick={insertArray}
            type="button"
            value={7}
          />
          <Input
            ref={this.button}
            onClick={insertArray}
            type="button"
            value={8}
          />
          <Input
            ref={this.button}
            onClick={insertArray}
            type="button"
            value={9}
          />
          <Input
            ref={this.button}
            onClick={insertArray}
            type="button"
            value={10}
          />
          <div>
            <p ref={this.qntdHits}></p>
            <p ref={this.numHits}></p>
            <p ref={this.numSorts}></p>
          </div>
          <footer>
            <Input
              onClick={selectArray}
              ref={this.button}
              type="button"
              value="Sort"
            />
          </footer>
        </div>
      </AppMain>
    );
  }
}

export default App;

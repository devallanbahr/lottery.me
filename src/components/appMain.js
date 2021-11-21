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
    this.alertElement = React.createRef();

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
        this.alertElement.current.textContent = this.selectedNumbersArr;
      } else {
        this.alertElement.current.textContent = ` 
          Números selecionados! Faça o sorteio!
        `;
        this.timerSort = setInterval(() => clearArrays(), 1500);
      }
    };
    const selectArray = () => {
      if (this.selectedNumbersArr.length == 6) {
        sortArray();
      } else {
        this.alertElement.current.textContent = `Selecione os 6 números antes de sortear!`;
        this.timerSort = setInterval(() => clearArrays(), 3000);
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
        this.alertElement.current.textContent = `Você não acertou nenhum!`;
      } else {
        this.alertElement.current.textContent = `Você acertou o nº ${this.yourNumbersArr}! 
        Números sorteados: ${this.sortedNumbersArr}
        Quantidade de acertos: ${this.yourNumbersArr.length}
        `;
      }
      this.selectedNumbersArr = [];
      this.sortedNumbersArr = [];
      this.yourNumbersArr = [];
      this.timerSort = setInterval(() => clearArrays(), 5000);
    };
    const clearArrays = () => {
      this.alertElement.current.textContent = ``;
      clearTimeout(this.timerSort);
    };
    return (
      <AppMain>
        <Main />
        <header>
          <p className="alert" ref={this.alertElement}></p>
        </header>
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

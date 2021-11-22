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
      }
    };
    const selectArray = () => {
      if (this.selectedNumbersArr.length == 6) {
        sortArray();
      } else {
        this.alertElement.current.textContent = `Selecione os 6 números antes de sortear!`;
        this.timerSort = setInterval(() => clearAlert(), 2000);
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
        this.alertElement.current.textContent = `Você não acertou nenhum!;
        Números sorteados: ${this.sortedNumbersArr}`;
        clearArray(3000);
      } else {
        this.alertElement.current.textContent = `Você acertou o nº ${this.yourNumbersArr}! 
        Números sorteados: ${this.sortedNumbersArr}
        Quantidade de acertos: ${this.yourNumbersArr.length}`;
        clearArray(5000);
      }
    };
    const clearAlert = () => {
      this.alertElement.current.textContent = ``;
      clearTimeout(this.timerSort);
    };
    const clearArray = (timer) => {
      this.selectedNumbersArr = [];
      this.sortedNumbersArr = [];
      this.yourNumbersArr = [];
      this.timerSort = setInterval(() => clearAlert(), timer);
    };
    return (
      <AppMain>
        <Main />
        <header>
          <p className="alert" ref={this.alertElement}></p>
        </header>
        <div>
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
          </div>
          <div>
            <Input
              ref={this.button}
              onClick={insertArray}
              type="button"
              value={11}
            />
            <Input
              ref={this.button}
              onClick={insertArray}
              type="button"
              value={12}
            />
            <Input
              ref={this.button}
              onClick={insertArray}
              type="button"
              value={13}
            />
            <Input
              ref={this.button}
              onClick={insertArray}
              type="button"
              value={14}
            />
            <Input
              ref={this.button}
              onClick={insertArray}
              type="button"
              value={15}
            />
            <Input
              ref={this.button}
              onClick={insertArray}
              type="button"
              value={16}
            />
            <Input
              ref={this.button}
              onClick={insertArray}
              type="button"
              value={17}
            />
            <Input
              ref={this.button}
              onClick={insertArray}
              type="button"
              value={18}
            />
            <Input
              ref={this.button}
              onClick={insertArray}
              type="button"
              value={19}
            />
            <Input
              ref={this.button}
              onClick={insertArray}
              type="button"
              value={20}
            />
          </div>
          <div>
            <Input
              ref={this.button}
              onClick={insertArray}
              type="button"
              value={21}
            />
            <Input
              ref={this.button}
              onClick={insertArray}
              type="button"
              value={22}
            />
            <Input
              ref={this.button}
              onClick={insertArray}
              type="button"
              value={23}
            />
            <Input
              ref={this.button}
              onClick={insertArray}
              type="button"
              value={24}
            />
            <Input
              ref={this.button}
              onClick={insertArray}
              type="button"
              value={25}
            />
            <Input
              ref={this.button}
              onClick={insertArray}
              type="button"
              value={26}
            />
            <Input
              ref={this.button}
              onClick={insertArray}
              type="button"
              value={27}
            />
            <Input
              ref={this.button}
              onClick={insertArray}
              type="button"
              value={28}
            />
            <Input
              ref={this.button}
              onClick={insertArray}
              type="button"
              value={29}
            />
            <Input
              ref={this.button}
              onClick={insertArray}
              type="button"
              value={30}
            />
          </div>
          <div>
            <Input
              ref={this.button}
              onClick={insertArray}
              type="button"
              value={31}
            />
            <Input
              ref={this.button}
              onClick={insertArray}
              type="button"
              value={32}
            />
            <Input
              ref={this.button}
              onClick={insertArray}
              type="button"
              value={33}
            />
            <Input
              ref={this.button}
              onClick={insertArray}
              type="button"
              value={34}
            />
            <Input
              ref={this.button}
              onClick={insertArray}
              type="button"
              value={35}
            />
            <Input
              ref={this.button}
              onClick={insertArray}
              type="button"
              value={36}
            />
            <Input
              ref={this.button}
              onClick={insertArray}
              type="button"
              value={37}
            />
            <Input
              ref={this.button}
              onClick={insertArray}
              type="button"
              value={38}
            />
            <Input
              ref={this.button}
              onClick={insertArray}
              type="button"
              value={39}
            />
            <Input
              ref={this.button}
              onClick={insertArray}
              type="button"
              value={40}
            />
          </div>
          <div>
            <Input
              ref={this.button}
              onClick={insertArray}
              type="button"
              value={41}
            />
            <Input
              ref={this.button}
              onClick={insertArray}
              type="button"
              value={42}
            />
            <Input
              ref={this.button}
              onClick={insertArray}
              type="button"
              value={43}
            />
            <Input
              ref={this.button}
              onClick={insertArray}
              type="button"
              value={44}
            />
            <Input
              ref={this.button}
              onClick={insertArray}
              type="button"
              value={45}
            />
            <Input
              ref={this.button}
              onClick={insertArray}
              type="button"
              value={46}
            />
            <Input
              ref={this.button}
              onClick={insertArray}
              type="button"
              value={47}
            />
            <Input
              ref={this.button}
              onClick={insertArray}
              type="button"
              value={48}
            />
            <Input
              ref={this.button}
              onClick={insertArray}
              type="button"
              value={49}
            />
            <Input
              ref={this.button}
              onClick={insertArray}
              type="button"
              value={50}
            />
          </div>
          <div>
            <Input
              ref={this.button}
              onClick={insertArray}
              type="button"
              value={51}
            />
            <Input
              ref={this.button}
              onClick={insertArray}
              type="button"
              value={52}
            />
            <Input
              ref={this.button}
              onClick={insertArray}
              type="button"
              value={53}
            />
            <Input
              ref={this.button}
              onClick={insertArray}
              type="button"
              value={54}
            />
            <Input
              ref={this.button}
              onClick={insertArray}
              type="button"
              value={55}
            />
            <Input
              ref={this.button}
              onClick={insertArray}
              type="button"
              value={56}
            />
            <Input
              ref={this.button}
              onClick={insertArray}
              type="button"
              value={57}
            />
            <Input
              ref={this.button}
              onClick={insertArray}
              type="button"
              value={58}
            />
            <Input
              ref={this.button}
              onClick={insertArray}
              type="button"
              value={59}
            />
            <Input
              ref={this.button}
              onClick={insertArray}
              type="button"
              value={60}
            />
          </div>
          <footer>
            <Input
              onClick={selectArray}
              ref={this.button}
              type="button"
              value="Sort"
            />
            <Input
              onClick={clearArray}
              ref={this.button}
              type="button"
              value="Clear"
            />
          </footer>
        </div>
      </AppMain>
    );
  }
}

export default App;

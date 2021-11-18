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
    var sortedNumbersArr = [];
    const insertArray = (e) => {
      if (selectedNumbersArr.length > 5) {
        for (let i = 0; i < selectedNumbersArr.length; i++) {
          sortArray();
          var sorted = selectedNumbersArr.includes(sortedNumbersArr[i]);
          if (sorted) {
            console.log(`Você acertou: ${sorted[i]}`);
          }
        }
        selectedNumbersArr = [];
        sortedNumbersArr = [];
      } else {
        selectedNumbersArr.push(parseInt(e.target.value));
        console.log(selectedNumbersArr);
      }
    };
    const sortArray = () => {
      const random = Math.floor(Math.random() * 11);
      sortedNumbersArr.push(random);
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

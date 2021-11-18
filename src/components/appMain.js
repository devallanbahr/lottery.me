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
      if (selectedNumbersArr.length === 6) {
        alert("Você já selecionou os números");
        sortArray(selectedNumbersArr);
      } else {
        selectedNumbersArr.push(e.target.value);
      }
    };
    const sortArray = (arr) => {
      console.log(arr);
    };
    return (
      <Container>
        <Main />
        <div>
          <Input
            ref={this.Button}
            onClick={insertArray}
            type="button"
            value="Set Array"
          />
        </div>
      </Container>
    );
  }
}

export default App;

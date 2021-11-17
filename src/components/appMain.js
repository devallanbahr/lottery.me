import React, { Component } from "react";
import { Main, Container, Input } from "../stylesheets/Style";

class App extends Component {
  constructor(props) {
    super(props);

    this.Button = React.createRef();
  }

  render() {
    var arr = [];
    var selectedNumbersArr = [];
    const getArray = () => {
      if (arr.includes("Set")) {
        console.log("Yeah");
      } else if (arr.length === 0) {
        console.log("Array vazio!");
      } else {
        console.log(arr);
      }
    };
    const selectNumbers = (e) => {
      if (arr.length >= 6) {
        console.log(
          "%c[Error]: Array Cheio",
          "color: #f00; font-family: Consolas; font-size: 12px; font-weight: bold;"
        );
        selectedNumbersArr = arr;
        arr = [];
      } else {
        arr.push(e.target.value);
      }
    };
    return (
      <Container>
        <Main />
        <div>
          <Input
            ref={this.Button}
            onClick={selectNumbers}
            type="button"
            value="Set Array"
          />
          <Input
            ref={this.Button}
            onClick={getArray}
            type="button"
            value="Get Array"
          />
        </div>
      </Container>
    );
  }
}

export default App;

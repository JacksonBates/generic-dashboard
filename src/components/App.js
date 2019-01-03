//@flow

import React, { Component } from "react";

import Header from "./Header";
import Widget from "./Widget";

type State = {
  data: Object,
};

class App extends Component<Props, State> {
  state = {
    data: {},
  };

  componentDidMount = () => {
    try {
      const json = localStorage.getItem("data");
      const data = JSON.parse(json);
      if (data) {
        this.setState({ data });
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    const json = JSON.stringify(this.state.data);
    localStorage.setItem("data", json);
  };

  handleButton = () => {
    const { data } = this.state;

    if (data.hasOwnProperty("clicks")) {
      this.setState({
        data: {
          clicks: [
            data.clicks,
            {
              total: data.clicks[data.clicks.length - 1].total + 1,
              time: Date.now(),
            },
          ],
        },
      });
    } else {
      this.setState({ data: { clicks: [{ total: 1, time: Date.now() }] } });
    }
  };

  handleWipe = () => {
    this.setState({ data: {} });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Widget buttonLogger={this.handleButton} wipe={this.handleWipe} />
        {JSON.stringify(this.state.data)}
      </div>
    );
  }
}

export default App;

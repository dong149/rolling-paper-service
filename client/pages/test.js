import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";

// import 'fullpage.js/vendors/scrolloverflow'; // Optional. When using scrollOverflow:true

const originalColors = ["#282c34", "#ff5f45", "#0798ec"];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sectionsColor: [...originalColors],
      fullpages: [
        {
          text: "section 1",
        },
        {
          text: "section 2",
        },
      ],
    };
  }

  onLeave(origin, destination, direction) {
    console.log("onLeave", { origin, destination, direction });
    // arguments are mapped in order of fullpage.js callback arguments do something
    // with the event
  }

  handleChangeColors() {
    const newColors =
      this.state.sectionsColor[0] === "yellow"
        ? [...originalColors]
        : ["yellow", "blue", "white"];
    this.setState({
      sectionsColor: newColors,
    });
  }

  handleAddSection() {
    this.setState((state) => {
      const { fullpages } = state;
      const { length } = fullpages;
      fullpages.push({
        text: `section ${length + 1}`,
        id: Math.random(),
      });

      return {
        fullpages: [...fullpages],
      };
    });
  }

  handleRemoveSection() {
    this.setState((state) => {
      const { fullpages } = state;
      const newPages = [...fullpages];
      newPages.pop();

      return { fullpages: newPages };
    });
  }

  render() {
    const { fullpages } = this.state;

    if (!fullpages.length) {
      return null;
    }

    const Menu = () => (
      <div
        className="menu"
        style={{
          position: "fixed",
          top: 0,
          zIndex: 100,
        }}
      >
        <ul>
          <li>
            <button onClick={() => this.handleAddSection()}>+ Section</button>
            <button onClick={() => this.handleRemoveSection()}>
              - Section
            </button>
            <button onClick={() => this.handleChangeColors()}>
              Change colors
            </button>
          </li>
        </ul>
      </div>
    );

    return (
      <div className="App">
        <Menu />
        <ReactFullpage
          navigation
          onLeave={this.onLeave.bind(this)}
          sectionsColor={this.state.sectionsColor}
          render={(comp) =>
            console.log("render prop change") || (
              <ReactFullpage.Wrapper>
                {fullpages.map(({ text }) => (
                  <div key={text} className="section">
                    <h1>{text}</h1>
                  </div>
                ))}
              </ReactFullpage.Wrapper>
            )
          }
        />
      </div>
    );
  }
}

export default App;

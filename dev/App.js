import React, { Component } from "react";
import {
  Widget,
  addResponseMessage,
  setQuickButtons,
  toggleMsgLoader,
  toggleInputDisabled
} from "../index";

export default class App extends Component {
  componentDidMount() {
    addResponseMessage("Welcome to this awesome chat!");
  }

  handleNewUserMessage = newMessage => {
    toggleMsgLoader();
    setTimeout(() => {
      toggleMsgLoader();
      if (newMessage === "fruits") {
        setQuickButtons([
          { label: "Apple", value: "apple" },
          { label: "Orange", value: "orange" },
          { label: "Pear", value: "pear" },
          { label: "Banana", value: "banana" }
        ]);
      } else {
        addResponseMessage(newMessage);
      }
    }, 2000);
  };

  handleQuickButtonClicked = e => {
    addResponseMessage("Selected " + e);
    setQuickButtons([]);
  };

  render() {
    return (
      <Widget
        title="Bienvenido"
        senderPlaceHolder="Escribe aquí ..."
        handleNewUserMessage={this.handleNewUserMessage}
        handleQuickButtonClicked={this.handleQuickButtonClicked}
        badge={1}
        showCloseButton={true}
        menuItems={[
          {
            label: "HEY MAN",
            onClick: () => {
              console.log("Malade");
            }
          },
          {
            label: "icons",
            onClick: () => {
              console.log("Malade");
            }
          }
        ]}
      />
    );
  }
}

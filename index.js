import React, { Component } from 'react';

import Navigation from "./components/nav/Navigation"
import InfoPopup from "./components/popup/InfoPopup"
import Card from "./components/card/Card"

export {
  Navigation,
  InfoPopup,
  Card,
};

import {
  AppRegistry,
  VrButton,
} from 'react-360';

export default class home_expo extends Component {
  constructor() {
    super();
    this.state = {
  
      };
  }
  render() {
    return (
      //<VrButton>Click me!</VrButton>
    );
  }
};

AppRegistry.registerComponent('home_expo', () => home_expo);

import React, { Component } from 'react';

// import Navigation from "./components/nav/Navigation"
// import InfoPopup from "./components/popup/InfoPopup"
// import Card from "./components/card/Card"

// export {
//   Navigation,
//   InfoPopup,
//   Card,
// };

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
} from 'react-360';

import Canvas from './components/Canvas';


export default class home_expo extends React.Component {

  constructor(){
    super();

    this.state = {
      src: './static_assets/bedroom_mirror.jpeg',
    };
  }


  render() {
    return (

      <View >
      <Canvas
         src={this.state.src}
      />
      
        </View>
        );
      }
    };


AppRegistry.registerComponent('home_expo', () => home_expo);

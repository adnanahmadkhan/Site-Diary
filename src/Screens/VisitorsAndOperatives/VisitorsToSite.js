/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, Button } from 'react-native';

import { Container, Content, Icon, Picker, Form } from "native-base";
import Selector from '../../Components/Selector/Selector';

export default class VisitorsToSite extends Component {
  static navigationOptions = {
    headerTitle: 'Visitors on site'
  }

  constructor(props){
    super(props);
    this.state = {
      items: [
        title: null,
        quantity: null,
      ],
      visitors: null,
    }
  }

  initializeVisitors(){
    const visitors = this.state.items.map((item) => {
      return(
        
      )
    })
  }

  addVisitor(){

  }

  mapPickerItems(){

  }

  render() {
    return (
      <Container>
	      <Content>
	      	<Button onPress={()=>{}} title="Click to add visitors to site"/>
      	</Content>
      </Container>
    );
  }
}

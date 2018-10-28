/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, Button } from 'react-native';

import { Container, Content, Text } from 'native-base'

export default class MaterialIssues extends Component {
  static navigationOptions = {
    headerTitle: 'Material Issues'
  }
  render() {
    return (
      <Container>
      	<Content>
	      	<Button onPress={()=>{}} title="Click to add Material Issues"/>
      	</Content>
      </Container>
    );
  }
}

/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, Button } from 'react-native';

import { Container, Content, Text } from 'native-base'

// import styles from './styles';

export default class Accidents extends Component {
  static navigationOptions = {
    headerTitle: 'Accidents'
  }
  render() {
    return (
      <Container>
      	<Content>
	      	<Button onPress={()=>{}} title="Click to add Accidents"/>
      	</Content>
      </Container>

    );
  }
}

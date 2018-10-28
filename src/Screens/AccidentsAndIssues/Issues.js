/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, Button } from 'react-native';

import { Container, Content  } from 'native-base'

// import styles from './styles';

export default class Issues extends Component {
  static navigationOptions = {
    headerTitle: 'Issues'
  }

  render() {
    return (
      <Container>
      	<Content>
	      	<Button onPress={()=>{}} title="Click to add issues arising"/>
      	</Content>
      </Container>

    );
  }
}

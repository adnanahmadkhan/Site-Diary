import React from 'react';
import ModalSelector from 'react-native-modal-selector';
import { StyleSheet, Text, View, Picker } from 'react-native';

export default class Selector extends React.Component {

  //We receive onChange function from parent where selector is embedded
  render() {
    return (
      <View>
        <ModalSelector
          data={this.props.items}
          initValue="select value"
          onChange={(option) => { this.props.onChange(option, this.props.myType) }}
        />
      </View>
    );
  }
}

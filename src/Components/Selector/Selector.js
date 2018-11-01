import React from 'react';
import ModalSelector from 'react-native-modal-selector';
import { StyleSheet, Text, View, Picker } from 'react-native';

export default class Selector extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedValue: null,
    }
  }

  onValueChange = (selectedValue) => {
    this.setState({selectedValue});
  }

  render() {
    return (
      <View>
        <ModalSelector
          data={this.props.items}
          initValue="select value"
          onChange={(option) => { this.props.onChange(1,2) }}
        />
      </View>
    );
  }
}

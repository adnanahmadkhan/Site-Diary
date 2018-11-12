/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, Image, TouchableOpacity } from 'react-native';
import { Text } from 'native-base';
import { colors } from '../Themes/colors';

import ImageLoader from '../Components/ImageLoader/ImageLoader';

export default class Welcome extends Component {
	static navigationOptions = {
		header: null,
	}

	componentDidMount(){
		setTimeout(()=>{
            this.props.navigation.navigate('Weather')
         }, 5000);
	}

	render() {
		return (
		  <TouchableOpacity 
			  onPress={() => {this.props.navigation.navigate('Weather')} } 
			  style={styles.splash}
		  >
		  	<ImageLoader 
	            source={require('../../assets/logo-og.png')}
	            style={styles.headerLogo} 
	         />
		  </TouchableOpacity>
		);
	}
}



import { StyleSheet, Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window')

const styles = StyleSheet.create({
	splash:{
		height: height,
		width: width,
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1,
		backgroundColor: colors.ReactBlack
	},
	headerLogo:{
		height: 300,
		width: 300,
		borderRadius: 30,
	} 
});


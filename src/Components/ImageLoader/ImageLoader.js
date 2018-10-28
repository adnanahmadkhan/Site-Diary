/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, Image, Animated } from 'react-native';

export default class ImageLoader extends Component {
	constructor(props){
		super(props);
		this.state = {
			opacity: new Animated.Value(0),
		}	
	}

	onLoad = () => {
		Animated.timing(this.state.opacity, {
			toValue: 1,
			duration: 5000,
			useNativeDriver: true,
		}).start();
	}

	render() {
		return (
		  <Animated.Image
		  onLoad={this.onLoad}
		  {...this.props}
		  style={[
		  	{
		  		opacity: this.state.opacity,
		  		transform: [
		  			{
		  				scale: this.state.opacity.interpolate({
		  					inputRange: [0, 1],
		  					outputRange: [0.85, 1]
		  				})
		  			}
		  		]
		  	},
		  	this.props.style
		  ]}
		  />
		)
	}
}

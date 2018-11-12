/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, Button } from 'react-native';
import { 
  Container, 
  Content,  
  Icon, 
  List, 
  ListItem, 
  Text, 
  Body, 
  Left, 
  Footer, 
  FooterTab 
} from 'native-base';
import { ImagePicker, Permissions, Image } from 'expo';

export default class IssuePictures extends Component {
  static navigationOptions = {
    headerTitle: 'Issue Pictures'
  }

  constructor(props){
    super(props);
    this.state = {
      imageBuffer: [
        {
          currentImage: null,
        },
      ]
    }

  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    // console.log(result);

    if (!result.cancelled) {

      this.setState({ currentImage: result.uri });
    }
    else{
      alert('Try again if you failed!')
    }
  }

  pickFromGallery = async () => {
    const permissions = Permissions.CAMERA_ROLL;
    const { status } = await Permissions.askAsync(permissions);

    if(status === 'granted') {
      await this._pickImage()
    }
  }

  pickFromCamera = async () => {
    const permissions = Permissions.CAMERA;
    const { status } = await Permissions.askAsync(permissions);

    if(status === 'granted') {
      await this._pickImage()
    }
  }

  render() {
    let { currentImage } = this.state;
    return (
      <Container>
      	<Content>
          <Text>WHAT THE FUCK!</Text>
	      	{
            currentImage &&
            <Image source={{ uri: currentImage }} style={{ width: 200, height: 200 }} />
          }
      	</Content>
        <Footer>
          <FooterTab>
            <Button onPress={() => {this.props.navigation.navigate('GenerateReport')}} full>
              <Text>Generate Report</Text>
              <Icon name="ios-arrow-forward"/>
            </Button>
          </FooterTab>
        </Footer>
      </Container>

    );
  }
}

/* Core */
import React, { Component } from 'react';

/* Presentational */
import { Button as ReactButton, Image, StyleSheet } from 'react-native';
import { 
  Container, 
  Content,  
  Icon, 
  List, 
  ListItem, 
  Text, 
  Left,
  Input, 
  Footer, 
  FooterTab,
  Label 
} from 'native-base';

import { Button as NativeBaseButton } from 'native-base';
import { ImagePicker, Permissions } from 'expo';

export default class IssuePictures extends Component {
  static navigationOptions = {
    headerTitle: 'Issue Pictures'
  }

  constructor(props){
    super(props);
    this.state = {
      imageBuffer: [
        {
          currentImage: undefined,
        },
      ]
    }

  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });


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
      this._pickImage()
    }
  }

  pickFromCamera = async () => {
    const permissions = Permissions.CAMERA;
    const { status } = await Permissions.askAsync(permissions);

    if(status === 'granted') {
      this._pickImage()
    }
  }

  render() {
    let { currentImage } = this.state;
    return (
      <Container>
      	<Content>
          <List>
              <ListItem>
                <Left>
                    <ReactButton title={'From Camera'} onPress={this.pickFromCamera}/>
                </Left>
                <ReactButton title={'From Gallery'} onPress={this.pickFromGallery}/>
              </ListItem>
              {
                currentImage &&
                <ListItem style={styles.ImageContainer}>
                  <Image source={{uri: currentImage}}  style={styles.Image}/>
                </ListItem>
              }

              
                <Left> <Label>Description </Label> </Left>
                <Input
                  multiline={true}
                  numberOfLines={4}
                  
                />
            
           </List>
      	</Content>
        <Footer>
          <FooterTab>
            <NativeBaseButton onPress={() => {this.props.navigation.navigate('GenerateReport')}} full>
              <Text>Generate Report</Text>
              <Icon name="ios-arrow-forward"/>
            </NativeBaseButton>
          </FooterTab>
        </Footer>
      </Container>

    );
  }
}


const styles = StyleSheet.create({
  Image: {
    width: 200, 
    height: 200,
  },
  ImageContainer:{
    alignSelf: 'center',
  },
})
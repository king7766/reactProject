import React, { Component } from 'react';
import { 
   Text, 
   Image, 
   View, 
   StyleSheet, 
   TextInput,
   Dimensions
} from 'react-native';

import {observable, action} from 'mobx'
import { EventRegister } from 'react-native-event-listeners'

import {FreeListingVM} from './VM/FreeListingVM'
import {RecommendationVM} from './VM/RecommendationVM'

const layout = require('./Layout')

let deviceWidth = Dimensions.get('window').width
let deviceHeight = Dimensions.get('window').height

let ViewHeight = layout.searchFieldHeight
let fieldHeight = 40
let margin = 5

class SearchField extends Component {

   constructor(props) {
      super(props);
      
   }

   componentWillMount() {

      
   }

   componentWillUnmount() {
        
   }

   onChangeText(text)
   {
      /*** change result for two listing view here ***/

      this.props.freeListingVM.searchEvent(text)
      this.props.recommendationVM.searchEvent(text)
   }

   render() {

      const freeListingVM = this.props.freeListingVM

      return (
         <View style = {styles.searchViewStyle} >
            <View style = {styles.inputFieldStyle}>

               <Image style = {styles.itemImage}
                  source={require('./search.png')}
               />
               <TextInput
                  editable = {true}
                  style={styles.textStyle}
                  onChangeText={(text) => this.onChangeText(text) }
                  /*
                  onChangeText={(text) => 

                     this.setState({searchText: text})

                  }
                  */
                  /*value={this.state.searchText}*/
                  /*placeholder = {this.state.placeHolder}*/
                  placeholder = '搜尋'
            
               >
               </TextInput>
               
            </View>
         </View>
      )
   }
}
export default SearchField

const styles = StyleSheet.create ({

   searchViewStyle: {
      height: ViewHeight
   
   },

   inputFieldStyle: {
      height: ViewHeight - (margin *2),
      margin: margin,
      borderRadius: 5,
      borderColor: 'lightgray',
      backgroundColor: 'lightgray',
      flexDirection: 'row'

   },

   itemImage: {
      height: fieldHeight/2,
      width: fieldHeight/2,
      margin: 10
      
   },

   textStyle: {
      height: ViewHeight - (margin *2) -(margin *2),
      width: deviceWidth- 50,
      margin: margin,
      textAlign: 'left',
      borderRadius:5

      
   }
})
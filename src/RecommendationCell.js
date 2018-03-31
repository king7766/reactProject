import React, { Component } from 'react';
import { 
   Text, 
   Image, 
   View, 
   StyleSheet, 
   ScrollView 
} from 'react-native';

const layout = require('./Layout')
let margin = 5

class RecommendationCell extends Component {

   constructor(props) {
      super(props);
   }

  


   render() {
      return (
         <View style={styles.item}>

            <Image style = {styles.itemImage}
               
               /*source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}*/
               source = {{uri: this.props.imageURL}}
            />

            <Text numberOfLines={2} style = {styles.itemName}>
               
              {this.props.name}
            </Text>

            <Text style = {styles.itemCatelog}> 
               {this.props.catalog}
            </Text>

            
         </View>
      )
   }
}
export default RecommendationCell

const styles = StyleSheet.create ({

   itemImage: {
      height : layout.imageSize,
      width : layout.imageSize,
      marginTop: 0,
      marginLeft: margin,
      marginRight: margin,
      left:0,
      borderRadius:layout.imageSize/6,
      borderWidth:1,
      borderColor:'rgba(0,0,0,0.0)'

   },

   itemName: {
      flex: 1,
      height: layout.titleHeight,
      marginTop: margin,
      marginLeft: margin,
      fontWeight: 'bold',
      fontSize: 12,
      color: 'black'
      
   },

   itemCatelog: {
      height: layout.catelogHeight,
      marginBottom: margin,
      marginLeft: margin,
      fontWeight: 'bold',
      fontSize: 13,
      color: 'gray'
      
   },

   item: {
      height: 160,
      width: 100,
      //flexDirection: 'row',
      //justifyContent: 'space-between',
      //alignItems: 'center',
      //padding: 30,
      margin: 2
      //borderColor: '#2a4944',
      //borderWidth: 1
      
   }
})
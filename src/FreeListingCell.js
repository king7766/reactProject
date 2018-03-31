import React, { Component } from 'react';
import { 
   Text, 
   Image, 
   View, 
   StyleSheet, 
   ScrollView ,
   ListView
} from 'react-native';

const layout = require('./Layout')

let imageSize = layout.imageSize
let padding = 5

let imageItemSize = imageSize + (padding*2)
let indexItemWidth = 30

let overallMargin = 2
let rowHeight = 100
let stringHeight = 20
let ratingBGWidth = 150
let starSize = 15

class FreeListingCell extends Component {

   constructor(props) {
      super(props);
      
   }

  imageStyle ()
  {
      var borderRadius 
      if(this.props.index % 2 == 0)
      {
         borderRadius = imageSize/6
      }
      else
      {
         borderRadius = imageSize/2
      }
      return{
         height : imageSize,
         width : imageSize,
         marginTop: padding,
         marginLeft: padding,
         marginRight: padding,
         left:0,
         borderRadius:borderRadius,
         borderWidth:1,
         borderColor:'rgba(0,0,0,0.0)'
      }
  }

  starShowingBG()
  {
      
      return{
         height: starSize,
         width: (starSize*5) * (this.props.userRatingForCurrentVersion/5),
         backgroundColor: 'rgba(240,152,56,1)'
      }
  }


   render() {
      const index = this.props.index + 1
      /*
      const rating = []
      
      for ( var i = 0; i < 5; i++ )
      {
         if ( this.props.userRatingForCurrentVersion - i >= 0.5 )
         {
            if( this.props.userRatingForCurrentVersion - i >= 1)
            {
               //rating.push("1")
               rating.push('./image/filled-star-50.png')
            }
            else{
               //rating.push("0.5")
               rating.push('./image/half-star-50.png')
            }
            
         }
         else
         {
            //rating.push("0")
            rating.push('./image/star-50.png')
         }
      }
      */

      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
      
      var dataSource= ds.cloneWithRows([1,2,3,4,5])


      return (
         <View style={styles.item}>
            <Text style={styles.itemIndex}
               adjustsFontSizeToFit={true}
               numberOfLines={1}>
               {index}
            </Text>
            <Image style = {this.imageStyle()}
               source = {{uri: this.props.imageURL}}
            />

            <View  style = {styles.itemDetail}>

               <Text style = {styles.name}> 
                  {this.props.name}
               </Text>
               <Text style = {styles.catelog}> 
                  {this.props.catalog}
               </Text>

               <View style = {styles.ratingBG}>

                  <View
                     style = {this.starShowingBG()}
                  >
                  <ListView

                     /* can replace looping by with using image with 5 star */
                     style = {styles.ratingStarShowing}
                     scrollEnabled={false}
                     horizontal={true}
                     dataSource={dataSource}
                     renderRow={(rowData) => <Image source={require('./image/star-503.png')} style={{width: starSize, height: starSize}} />}
                  />
                  </View>
                  <Text style = {styles.ratingUserCount} > 
                     ({this.props.userRatingCountForCurrentVersion ? this.props.userRatingCountForCurrentVersion : 0})
                  </Text>
               </View>
            </View>
            
           
         </View>
      )
   }
}
export default FreeListingCell

const styles = StyleSheet.create ({

   item: {
      borderWidth:1,
      borderColor: 'gray',
      height: rowHeight,
      width: layout.deviceWidth - (0 *2) ,
      //flexDirection: 'row',
      //justifyContent: 'space-between',
      //alignItems: 'center',
      //padding: 30,
      margin: 0,
      flex: 1,
      flexDirection: 'row',
      //borderColor: '#2a4944',
      //borderWidth: 1
      //backgroundColor: 'green'
      
   },

   itemIndex: {
      height: rowHeight,
      width: indexItemWidth,
      fontSize: 20,
      textAlignVertical: 'center',
      textAlign: 'center',
      color: 'gray',
      //flex:1,
      //justifyContent: 'center',
      //alignItems: 'center',
      fontWeight: 'bold'
      //textAlign: 'center'
   },

    itemDetail:{
      flexDirection: 'column',
      justifyContent: 'center',
      margin: 10,
      width: ratingBGWidth
      
   },

   name: {
      
      height: stringHeight,
      width: layout.deviceWidth - imageItemSize - indexItemWidth,
      fontSize: 16,
      margin: overallMargin,
      fontWeight: 'bold'
      

   },

   catelog: {
      height: stringHeight,
      width: layout.deviceWidth - imageItemSize - indexItemWidth,
      margin: overallMargin,
      color: 'gray'
   },

   ratingBG:{
      height:starSize,
      width: starSize*5 + 50,
      flex:1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems:'center',
      //backgroundColor: 'red'

   },

   ratingStarShowing:{
      height:starSize,
      width:starSize *5

   },

   ratingUserCount: {
      height: starSize,
      color: 'gray',
      width: 50,
      marginLeft: 10,
      textAlignVertical: 'center',
      textAlign: 'center',
      fontSize: 13

   }

})
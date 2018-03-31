import React, { Component } from 'react';
import {observer} from 'mobx-react'
import { 
   Text, 
   Image, 
   View, 
   StyleSheet, 
   ScrollView,
   Alert,
   Button,
   RefreshControl,
   TextBox,
   ActivityIndicator
} from 'react-native';

import {
  topfreeURL,
  topURL,
  //getrequestFromApi,
  getResponseFromApi
} from './URLConfig';


import {FreeListingVM} from './VM/FreeListingVM'


//npm install --save react-native-event-listeners
import { EventRegister } from 'react-native-event-listeners'

import FreeListingCell from './FreeListingCell'

const layout = require('./Layout')




function processResponse(response) {
  const statusCode = response.status;
  const data = response.json();
  return Promise.all([statusCode, data]).then(res => ({
    statusCode: res[0],
    data: res[1]
  }));
}


@observer
class FreeListingView extends Component {

   constructor(props) {
      super(props)
      
   }

   shouldComponentUpdate(){
      console.log('shouldComponentUpdate')
      
   }


   componentWillMount() {
      /*
      this.listener = EventRegister.addEventListener('refreshView', (data) => {
         console.log('RecommendationView : refreshView : '+ data);

         this.onRefresh(data)
      })

      
      this.listener = EventRegister.addEventListener('searchingEvent', (data) => {
         console.log('RecommendationView : searchingEvent : '+ data);

         this.searchEvent(data)
      })
      */
   }

   componentWillUnmount() {
        //EventRegister.removeEventListener(this.listener)
   }
    
   componentWillReceiveProps(nextProps)
   {
      console.log('componentWillReceiveProps')
      
   }




   render() {

      const viewModel = this.props.viewModel

      return (
         <View>
            
            
            <ScrollView /*comment */
               
               style = {styles.scrollViewStyle} 
               scrollEnabled = {false}
               
            >
               {
                  this.props.viewModel.displayData.map((item,index) => 
                     (
                        <FreeListingCell
                           key = {item.id}
                           name = {item.name}
                           catalog = {item.category_chi}
                           imageURL = {item.imageURL}
                           userRatingForCurrentVersion = {item.userRatingForCurrentVersion}
                           userRatingCountForCurrentVersion = {item.userRatingCountForCurrentVersion}
                           index = {index}
                        />
                     )
                  )
               }
            </ScrollView>
            {this.props.viewModel.loading && (
               <ActivityIndicator
                  style={{ height: 80 }}
                  color="#C00"
                  size="large"
               />
            )}
         </View>
      )
   }
}
export default FreeListingView

const styles = StyleSheet.create ({

   title: {
      marginLeft: 10,
      fontWeight: 'bold',
      fontSize: 24,
      color: 'black'
   },

   item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 30,
      margin: 2,
      borderColor: '#2a4944',
      borderWidth: 1
      //backgroundColor: 'white'
   },

   loading: {
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            opacity: 0.5,
            backgroundColor: 'black',
            justifyContent: 'center',
            alignItems: 'center'
   },

   scrollViewStyle:{
      //height:deviceHeight - layout.recommendationViewHeight - layout.searchFieldHeight - 20,
      marginTop: 5
   }

})
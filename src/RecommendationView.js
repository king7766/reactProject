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
  getResponseFromApi
} from './URLConfig';



import {RecommendationVM} from './VM/RecommendationVM'

//npm install --save react-native-event-listeners
//import { EventRegister } from 'react-native-event-lisxteners'

import RecommendationCell from './RecommendationCell'

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
class RecommendationView extends Component {

   constructor(props) {
      super(props)
      
   }

   shouldComponentUpdate(){
      console.log('shouldComponentUpdate')
      return true;
   }

   componentWillMount() {

    
   }

   componentWillUnmount() {
        //EventRegister.removeEventListener(this.listener)
   }
    
   componentWillReceiveProps(nextProps)
   {
      //console.log('componentWillReceiveProps')
      
   }



   buttonClicked ()
   {
      viewModel.showMore()
   }

   onScroll()
   {
      console.log('onScroll')
      //console.log(event.nativeEvent.contentOffset.y);
   }

   refresh()
   {
      console.log('refresh')
   }

   /*
   createContent (props)
   {
      const vm = props.vm
      console.log('createContent displayData = ' + vm.displayData.length)
      
      if(vm.displayData.length)
      {
         return <ScrollView 
               horizontal={true} 
               style = {styles.scrollViewStyle} 
            >
            {
               vm.displayData.map((item,index) => (
                  <RecommendationCell
                     key = {item.id}
                     name = {item.name}
                     catalog = {item.category_chi}
                     imageURL = {item.imageURL}
                     
                     />
            
                  )
               )
            }
            {vm.loading && (
                  <ActivityIndicator
                     style={styles.loading}
                     color="#C00"
                     size="large"
                  />
               )
            }
            </ScrollView>
      }
      else
      {
         //<this.createContent vm={viewModel} />
         return <Button
            
            onPress = {vm.callRecommendationAPI}
            style = {styles.refreshButton}
            title="暫時未有資料"
            color='gray'
            
         />

      }
   }
   */

   
   render() {

      const viewModel = this.props.viewModel
      console.log('123 === ')
   
      return (
         <View style = {styles.bgView}>
            <Text style = {styles.title} >推介</Text>
            
            <ScrollView 
               horizontal={true} 
               style = {styles.scrollViewStyle} 
               /*onScroll={this.onScroll}  */
               
            >
            {!viewModel.displayData.length && (

               <Button
            
                  onPress = {viewModel.callRecommendationAPI}
                  style = {styles.refreshButton}
                  title="暫時未有資料"
                  color='gray'
            
               />
               )
            }
            
            
            {
            
               viewModel.displayData.map((item,index) => (
                  <RecommendationCell
                     key = {item.id}
                     name = {item.name}
                     catalog = {item.category_chi}
                     imageURL = {item.imageURL}
                     
                     />
            
                  )
               )
               
            }
            {viewModel.loading && (
               <ActivityIndicator
                  style={styles.loading}
                  color="#C00"
                  size="large"
               />
            )}
               
            </ScrollView>
            

            
         </View>
      )
   }

   
}
export default RecommendationView

const styles = StyleSheet.create ({

   /*
   bgView: {
      height: layout.recommendationViewHeight
   },
   */

   refreshButton: {
      textAlign: 'center',
      width: layout.deviceWidth,
      fontWeight: 'bold',
      fontSize: 18,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'red'

   },

   title: {
      marginTop:5,
      marginBottom: 5,
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

   scrollViewStyle:{
      marginTop: 5
   },

   loading: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      opacity: 0.5,
      justifyContent: 'center',
      alignItems: 'center'
   }

})
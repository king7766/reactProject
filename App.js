/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React,{ Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  SafeAreaView,
  Button,
  ActivityIndicator

} from 'react-native';
import Modal from 'react-native-modal'

import FreeListingView from './src/FreeListingView';
import RecommendationView from './src/RecommendationView';
import SearchField from './src/SearchField';

import {FreeListingVM} from './src/VM/FreeListingVM'
import {RecommendationVM} from './src/VM/RecommendationVM'

// create a viewModel singleton
const freeListingVM = new FreeListingVM()
const recommendationVM = new RecommendationVM()


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  
  handleScroll( event: Object)
  {
    console.log('handleScroll : ' + event.nativeEvent.contentOffset.y)
    
  }

  isCloseToBottom (event: Object)
  {
    if( event.nativeEvent.layoutMeasurement.height + event.nativeEvent.contentOffset.y >= event.nativeEvent.contentSize.height )
    {
      freeListingVM.showMore()
    }
  }

  render() {
    return (


      /* safe area appoach for iPhone X supported */

      <SafeAreaView style={styles.safeArea}>
        
        <SearchField style= {styles.searchFieldContainer} 
          freeListingVM = {freeListingVM} 
          recommendationVM = {recommendationVM}
        >
        </SearchField>
        



        <ScrollView
          keyboardDismissMode = 'on-drag'
          keyboardShouldPersistTaps = 'never'
          scrollsToTop = {true}
          onScroll = { event => 
            { 
              /* do sth here for scrolling */
              
            }
          }
          

          onMomentumScrollEnd = { event =>{ this.isCloseToBottom (event: Object)}}
          /*scrollEventThrottle={16}*/

        >
          <RecommendationView style = {styles.recommendationContainer} viewModel = {recommendationVM}>
          </RecommendationView>

          <FreeListingView style= {styles.bottomContainer} viewModel = {freeListingVM}>
          </FreeListingView>
        </ScrollView>
      </SafeAreaView>
    );
    
  }
}


const styles = StyleSheet.create({
  searchFieldContainer: {
    height: 40,
    alignItems: 'center'
  },

  recommendationContainer: {

    height:50,
    marginTop:5
  },

  bottomContainer: {

  },

  safeArea: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column'
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

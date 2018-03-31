
import {observable, computed} from 'mobx'

export class FreeListingModel{

   id = ''
   name = ''
   category_eng = ''
   category_chi = ''
   author = ''
   summary = ''
   imageURL = ''
   userRatingForCurrentVersion = ''
   userRatingCountForCurrentVersion = ''

   serialize(){
      return 
      {
         id: this.id
         name: this.name
         category_eng: this.category_eng
         category_chi: this.category_chi
         author: this.author
         summary: this.summary
         imageURL: this.imageURL
         userRatingForCurrentVersion: this.userRatingForCurrentVersion
         userRatingCountForCurrentVersion: this.userRatingCountForCurrentVersion

      }
   }

   static deserialize( jsonObject: Object){
      const model = new FreeListingModel()

      model.id = jsonObject.results[0].trackId
      model.name = jsonObject.results[0].trackName
      model.category_eng = jsonObject.results[0].primaryGenreName
      model.category_chi = jsonObject.results[0].genres[0]
      model.author = jsonObject.results[0].artistName
      model.summary = jsonObject.results[0].description
      model.imageURL = jsonObject.results[0].artworkUrl100
      model.userRatingForCurrentVersion = jsonObject.results[0].averageUserRatingForCurrentVersion
      model.userRatingCountForCurrentVersion = jsonObject.results[0].userRatingCountForCurrentVersion

      /*
      model.id = jsonObject.id.attributes["im:id"]
      model.name = jsonObject["im:name"].label
      model.category_chi = jsonObject.category.attributes.label
      model.category_eng = jsonObject.category.attributes.term
      model.author = jsonObject["im:artist"].label
      model.summary = jsonObject.summary.label
      model.imageURL = jsonObject["im:image"].label
      */

      //console.log('Detail = ' + model.id + ', ' + model.name + ', ' + model.category_eng + ', ' + model.category_chi + ', ' + model.author + ', ' + model.summary + ', ' + model.userRatingForCurrentVersion + ', ' + model.userRatingCountForCurrentVersion)
      //console.log('userRatingForCurrentVersion = ' + model.userRatingForCurrentVersion)

      //console.log('name = ' + model.name)

      return model
   }
}
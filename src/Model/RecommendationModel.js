
import {observable, computed} from 'mobx'

export class RecommendationModel{

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
         

      }
   }

   static deserialize( jsonObject: Object){
      const model = new RecommendationModel()
      
      model.id = jsonObject.id.attributes["im:id"]
      model.name = jsonObject["im:name"].label
      model.category_chi = jsonObject.category.attributes.label
      model.category_eng = jsonObject.category.attributes.term
      model.author = jsonObject["im:artist"].label
      model.summary = jsonObject.summary.label
      model.imageURL = jsonObject["im:image"][2].label

      return model
   }
}
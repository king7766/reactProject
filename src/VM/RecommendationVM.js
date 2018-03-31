import {observable, action, computed} from 'mobx'
import {RecommendationModel} from '../Model/RecommendationModel'
import React from 'react';
import {
	applicationDetailAPI,
  	topGrossURL,
  	getResponseFromApi
} from '../URLConfig';

import { EventRegister } from 'react-native-event-listeners'

export class RecommendationVM{

	@observable displayData: RecommendationModel [] = []
	@observable displayDataCount = 0
	@observable loading = false
	

	data = []
	refArray = []
	

	constructor()
	{
		/**** init all props here ****/

		this.load()
		
		
	}

	@action
	load()
	{

		this.callRecommendationAPI ()

	}

	save()
	{
		// save data, if possible
		/*
		if( window.localStorage)
		{
			window.localStorage.setItem(
                "RecommendationData", 
                this.data.map(item => item.serialize())
            )
		}
		*/

	}

	
	callRecommendationAPI()
	{

		this.loading = true

		getResponseFromApi(topGrossURL).then( (json ) =>{

			
			if( json.statusCode == 200)
         	{
         		
         		this.loading = false
         		console.log('Recommendation : success !! entry = ', json.data.feed.entry.length)

         		for ( var i = 0 ; i < json.data.feed.entry.length ; i++ )
         		{
         			var item = json.data.feed.entry[i]
         			var applicationDetailURL = applicationDetailAPI + item.id.attributes["im:id"] 

         			// add all data to array
         			this.data.push(json.data.feed.entry[i])
         			this.refArray.push(RecommendationModel.deserialize(json.data.feed.entry[i]))
         			this.displayData.push(RecommendationModel.deserialize(json.data.feed.entry[i]))
         			

         			/*
         			if ( i < 10 )
         			{
         				getResponseFromApi(applicationDetailURL).then( (appDetail)=>
         				{	
         					if( appDetail.statusCode == 200 )
         					{
         						this.displayData.push(RecommendationModel.deserialize(appDetail.data))
         						this.refArray.push(RecommendationModel.deserialize(appDetail.data))

         						if( this.displayData.length == 10)
         						{
         							//this.refreshView()
         							console.log('set loading = false ' + this.displayData.length)
         							loading = false
         							//this.add(RecommendationModel.deserialize(appDetail.data))
         						}
         					}
         				})
         			}
         			*/
         		}
         	}
         	else
         	{
         		console.log('error ')
         		this.loading = false
         		
         	}

		})

	}


	@action
	searchEvent(searchString)
	{
		console.log('searchEvent :: ' + searchString)

		this.displayData = []

		for ( var i = 0; i < this.refArray.length; i++)
		{

			var model = this.refArray[i]
			var keyField = ['name','category_eng','category_chi','author','summary']

			for (var j = 0; j < keyField.length; j ++)
			{
				var key = keyField[j]
				
				 if( model[key].toLowerCase().indexOf(searchString.toLowerCase()) > -1)
				 {
					 this.displayData.push(model)
					 break;
				 }
			}
		}
	}

}
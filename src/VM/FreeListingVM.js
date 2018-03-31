import {observable, action, computed} from 'mobx'
import {FreeListingModel} from '../Model/FreeListingModel'
import React from 'react';
import {
	applicationDetailAPI,
  	topfreeURL,
  	topURL,
  	getResponseFromApi
} from '../URLConfig';

import { EventRegister } from 'react-native-event-listeners'

export class FreeListingVM{
	
	@observable displayData: FreeListingModel [] = []
	@observable displayDataCount = 0
	@observable loading = false

	data = []
	refArray = []

	
	

	constructor()
	{
		this.load()
	}


	add()
	{
		const newModel = new FreeListingModel()
		this.ViewModel.push(newModel)
		return newModel
	}

	@action
	load()
	{
	

		this.callAPI ()

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

	callAPI()
	{

		this.loading = true
		getResponseFromApi(topURL).then( (json ) =>{

			if( json.statusCode == 200)
         	{
         		this.loading = false
         		console.log('success !! entry = ', json.data.feed.entry.length)

         		for ( var i = 0 ; i < json.data.feed.entry.length ; i++ )
         		{
         			var item = json.data.feed.entry[i]
         			var applicationDetailURL = applicationDetailAPI + item.id.attributes["im:id"] 

         			// add all data to array
         			this.data.push(json.data.feed.entry[i])
         			
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

         		this.showMore()

         	}
         	else
         	{
         		console.log('error !!')
         	}

		})

	}

	/*
	checking()
	{
		console.log('checking loading = ' + this.loading)
		if( this.loading)
			return

		this.loading = true

		for ( var i = 0; i < this.displayDataCount ; i++)
		{

			if(this.displayData[i].id == this.data[i].id.attributes["im:id"] )
			{
				// correct
			}
			else
			{
				// load detail API 
				console.log('incorrect data !')
				var applicationDetailURL = applicationDetailAPI + this.data[i].id.attributes["im:id"] 
				getResponseFromApi(applicationDetailURL).then( (appDetail)=>
				{
					this.loading = false
        			if( appDetail.statusCode == 200 )
        			{
        				this.displayData.splice(i, 0, FreeListingModel.deserialize(appDetail.data))
        			}
        			else
        			{
        				//this.checking()
        			}

        			if ( i == this.displayDataCount)
        			{
        				this.loading = false
        			}
        		})
			}
		}
	}
	*/

	@action
	searchEvent(searchString)
	{
		console.log('searchEvent :: ' + searchString)
		console.log('searchEvent :: ' + this.refArray.length)

		this.displayData = []

		for ( var i = 0; i < this.refArray.length; i++)
		{
			var model = this.refArray[i]
			var keyField = ['name','category_eng','category_chi','author','summary']

			for (var j = 0; j < keyField.length; j ++)
			{
				var key = keyField[j]
				console.log('value = ' + model[key])
				if( model[key] )
				{
					if( model[key].toLowerCase().indexOf(searchString.toLowerCase()) > -1){
						this.displayData.push(model)
						break;
					}
				}
			}
		}
	}

	@action
	showMore()
	{
		console.log('showMore ' + this.loading)

		if ( this.loading )
			return
		
		// ALL data already loaded
		if( this.displayData.length == this.data.length )
			return 

		this.loading = true

		//var displayDataCount 
		if( this.displayData.length + 10 > this.data.length )
		{
			this.displayDataCount = this.data.length
			
		}
		else
		{
			this.displayDataCount = this.displayData.length + 10
			
		}

		//var displayDataCount = (this.displayData.length + 10 > this.data.length : this.displayData.length + 10)
		var counter = 0
		
		for ( var i = this.displayData.length ; i < this.displayDataCount ; i ++ )
		{
			var applicationDetailURL = applicationDetailAPI + this.data[i].id.attributes["im:id"] 

			getResponseFromApi(applicationDetailURL).then( (appDetail)=>
			{

				counter ++

        		if( appDetail.statusCode == 200 )
        		{
         						

         			this.displayData.push(FreeListingModel.deserialize(appDetail.data))
         			this.refArray.push(FreeListingModel.deserialize(appDetail.data))

				}
				else
				{
					
				}

				if( counter == 10)
				{
					console.log (' i = ' + i + ', displayDataCount = '+ this.displayDataCount)
					this.loading = false
					// loop finish, go checking
					
				}
			})
		}
	}

}
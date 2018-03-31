

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');
let deviceWidth = Dimensions.get('window').width
let deviceHeight = Dimensions.get('window').height


module.exports = {
	searchFieldHeight: 50,
	recommendationViewHeight : 200,
	deviceHeight: deviceHeight,
	deviceWidth: deviceWidth,
	imageSize: 90,

	catelogHeight: 20,
	titleHeight:30,

};


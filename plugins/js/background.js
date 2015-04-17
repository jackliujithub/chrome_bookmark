$(function(){
	var result = chrome.bookmarks.getTree(function(nodes){
		console.log("result:%o",nodes);
	});
	
});
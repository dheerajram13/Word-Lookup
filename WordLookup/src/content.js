var menuItem1 = {
	"id": "parent",
	"title": "Lookup",
	"contexts": ["selection"]
};

var menuItem = {
	"id": "word_lookup",
	"parentId": "parent",
	"title": "DefinitionLookup",
	"contexts": ["selection"]
};
var menuItem2 = {
	"id": "synonym_lookup",
	"parentId": "parent",
	"title": "SynonymLookup",
	"contexts": ["selection"]
};

chrome.contextMenus.create(menuItem1);
chrome.contextMenus.create(menuItem);
chrome.contextMenus.create(menuItem2);

function encodeURI (str) {
	var changed = str.toLowerCase().replace(/ /g, '-');
    return changed;
};

chrome.contextMenus.onClicked.addListener(function(Data) {
	if (Data.menuItemId == "word_lookup" && Data.selectionText) {
		var DictUrl = "https://www.dictionary.com/browse/" 
			+ encodeURI(Data.selectionText);
		window.open(DictUrl, "dictWindow");
	}

});

chrome.contextMenus.onClicked.addListener(function(Data2) {
	if (Data2.menuItemId == "synonym_lookup" && Data2.selectionText) {
		var synmUrl = "https://www.thesaurus.com/browse/" 
			+ encodeURI(Data2.selectionText);
		window.open(synmUrl, "synmWindow");
	}

});




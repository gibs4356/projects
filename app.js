//-----------------------------------------------------------------------
// Programming Assignment 3 - Parker Gibson
// FMarch 9, 2015 - BUS 353 - University of Idaho
//-----------------------------------------------------------------------
//------------------------------------------------
// Declare Variables
//------------------------------------------------
//------------------------------------
// Environmental Objects (Tabs, etc)
//------------------------------------
var tabGroup = Titanium.UI.createTabGroup();

//------------------------------------
// Variables
//------------------------------------
var Teas = ['#F5F5DC', '#FFE4B5', '#FFE4C4', '#D2B48C', '#C3b091', '#c3b091', '#926F5B', '#804000', '#654321', '#3D2B1F'];
allRows = [];

var theColours = Ti.UI.createTableView({});

for (var i=0; i<Teas.length; i++){
	theRow = Ti.UI.createTableViewRow({backgroundColor:Teas[i], height:50, TeaColour:Teas[i]});
	allRows.push(theRow);
}

theColours.setData(allRows);

//------------------------------------------------
// Declare Functions
//------------------------------------------------
function getVerdict(colour){
	var indicator = colour.charAt(1);
	var msg;
	switch(indicator){
		case 'F': msg = 'Milky'; break;
		case 'D': msg = 'Nice'; break;
		case 'C': msg = 'Perfect'; break;
		case '9': msg = 'A bit strong'; break;
		case '8': msg = 'Builders tea'; break;
		case '6': msg = 'Send it back'; break;
		case '3': msg = 'No milk here'; break;
	}
	return msg;
};

function showTeaVerdict(_args){
	var teaVerdict = Ti.UI.createWindow({layout:'vertical'});
	teaVerdict.backgroundColor = _args;
	teaVerdict.msg = getVerdict(_args);
	var judgement = Ti.UI.createLabel ({text:teaVerdict.msg, top:'50%'});
	var close = Ti.UI.createButton ({title:'Choose Again', top:'25%'});
	close.addEventListener('click', function(e){
		teaVerdict.close();
		teaVerdict = null;
	});
	teaVerdict.add(judgement);
	teaVerdict.add(close);
	teaVerdict.open();
}

var theMap = Titanium.Map.createView({
	mapType: Ti.Map.SATELLITE_TYPE,
	region:{
			latitude:		46.7260,
			longitude:		117.0110,
			latitudeDelta:	0.01,
			longitudeDelta:	0.01},
		animate:true,
		regionFit:true,
});

//-----------------------
// Tab 1
//-----------------------
var winTea = Titanium.UI.createWindow({  
    title:'Select Color',
    backgroundColor:'#fff'
});
var tabTea = Titanium.UI.createTab({  
    title:'Dave',
    window:winTea
});

winTea.add(theColours);

//-----------------------
// Tab 2
//-----------------------
var winGadget = Titanium.UI.createWindow({  
    title:'Map',
    backgroundColor:'#fff'
});

var tabGadget = Titanium.UI.createTab({  
    title:'Map',
    window:winGadget 
});

//------------------------------------------------
// Add Listeners
//------------------------------------------------
theColours.addEventListener('click', function(e){showTeaVerdict(e.source.TeaColour)});

//------------------------------------------------
// Add Objects
//------------------------------------------------
//------------------------------------
// Add Windows & Tabs
//------------------------------------
tabGroup.addTab(tabTea);  
tabGroup.addTab(tabGadget);
winGadget.add(theMap);
//------------------------------------
// Run Main (tabGroup) 
//------------------------------------
tabGroup.open();

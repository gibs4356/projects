//-----------------------------------------------------------------------
// Tab, Orientation & Theme Demo - Parker Gibson
// February 25, 2015 - BUS 353 - University of Idaho
//-----------------------------------------------------------------------
//------------------------------------------------
// Custom Color Palette
// Based on HAL 9000
//------------------------------------------------
// http://i.imgur.com/BQQAj4R.png
// http://www.colorhunter.com/
// #371515
// #E50000
// #A8A0A0
// #FF2421
// #FFCAC6

//------------------------------------------------
// Declare Global Objects
//------------------------------------------------
Titanium.UI.setBackgroundColor('#371515');

var layout = Ti.UI.createView({layout: 'vertical'});

var switchOrientation = Ti.UI.createButton({
	title: 'Rotate Landscape',
	Top:30
	});
	
switchOrientation.addEventListener('click', rotateLayout);

//------------------------------------
// Tab Group & Tabs
//------------------------------------
var tabGroup = Titanium.UI.createTabGroup();

//-----------------------
// Tab 1
//-----------------------
var winDave = Titanium.UI.createWindow({  
    title:'Dave',
    backgroundColor:'#371515'
});
var tabDave = Titanium.UI.createTab({  
//    icon:'KS_nav_views.png',
    title:'Dave',
    window:winDave
});
var lblDave1 = Titanium.UI.createLabel({
	color:'#E50000',
	text:'Open the pod bay doors HAL!',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});
var lblDave2 = Titanium.UI.createLabel({
	color:'#FFCAC6',
	text:'Welcome to\n2010: A Space Odyssey',
	font:{fontSize:28,fontFamily:'Helvetica Neue'},
	top:30,
	textAlign:'center',
	width:'auto'
});

//-----------------------
// Tab 2
//-----------------------
var winHAL = Titanium.UI.createWindow({  
    title:'HAL',
    backgroundColor:'#371515'
});

var tabHAL = Titanium.UI.createTab({  
//    icon:'KS_nav_ui.png',
    title:'HAL',
    window:winHAL 
});
var lblHAL1 = Titanium.UI.createLabel({
	color:'#E50000',
	text:'I know you and Frank were planning to disconnect me, \n and that is something I cannot allow to happen.',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

//------------------------------------
// Rotate Function
//------------------------------------
function rotateLayout() {
	winHAL.orientationModes = [Ti.UI.LANDSCAPE_LEFT];
}

//------------------------------------------------
// Add Objects
//------------------------------------------------
//------------------------------------
// Add Windows & Tabs
//------------------------------------
winDave.add(lblDave1);
winDave.add(lblDave2);
winHAL.add(lblHAL1);
winHAL.add(switchOrientation);
tabGroup.addTab(tabDave);  
tabGroup.addTab(tabHAL);
//------------------------------------
// Run Main (tabGroup) 
//------------------------------------
tabGroup.open();

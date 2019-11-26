$.index.open();

function onClick1(e){
	var w = Alloy.createController("/second").getView();
	$.index.openWindow(w);
}
function onClick2(e){
	var w = Alloy.createController("/third").getView();
	$.index.openWindow(w);
}

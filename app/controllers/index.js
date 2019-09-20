$.index.open();

function onClick(e){
	var w = Alloy.createController("/second").getView();
	$.index.openWindow(w);
}

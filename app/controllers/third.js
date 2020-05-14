const Context = require('android.content.Context');
const Inflater = require('android.view.LayoutInflater');
const Activity = require('android.app.Activity');
const LinearLayout = require('android.widget.LinearLayout');
const AppCompatActivity = require('androidx.appcompat.app.AppCompatActivity');
const activity = new Activity(Ti.Android.currentActivity);
const View = require("android.view.View");
const Toolbar = require("androidx.appcompat.widget.Toolbar");
const appCompatActivity = new AppCompatActivity(Ti.Android.currentActivity);
const resID = activity.getResources().getIdentifier('toolbar_layout', 'layout', activity.getPackageName());
const inflater = Inflater.cast(activity.getApplicationContext().getSystemService(Context.LAYOUT_INFLATER_SERVICE));
const view = inflater.inflate(resIDFromString('toolbar_layout', 'layout'), null);
const toolbar = Toolbar.cast(view.findViewById(resIDFromString('toolbar', 'id')));
const content = LinearLayout.cast(view.findViewById(resIDFromString('content', 'id')));

function resIDFromString(variableName, resourceName) {
	return activity.getResources().getIdentifier(variableName, resourceName, activity.getPackageName());
}

// // add a complete Titanium XML to the native view
var tiView = Alloy.createController("/content").getView();
content.addView(tiView, 0);


appCompatActivity.setSupportActionBar(toolbar);
appCompatActivity.getSupportActionBar().setHomeButtonEnabled(true);
appCompatActivity.getSupportActionBar().setDisplayHomeAsUpEnabled(true);
appCompatActivity.getSupportActionBar().setDisplayShowHomeEnabled(true);

toolbar.setNavigationOnClickListener(new View.OnClickListener({
	onClick: function(e) {
		$.third.close();
	}
}));

$.third.add(view);
$.third.addEventListener("open", function(e) {});
$.third.open();

const Context = require('android.content.Context');
const Inflater = require('android.view.LayoutInflater');
const Activity = require('android.app.Activity');
const LinearLayout = require('android.widget.LinearLayout');
const CollapsingToolbarLayout = require('android.support.design.widget.CollapsingToolbarLayout');
const AppCompatActivity = require('android.support.v7.app.AppCompatActivity');
const activity = new Activity(Ti.Android.currentActivity);
const appCompatActivity = new AppCompatActivity(Ti.Android.currentActivity);
const resID = activity.getResources().getIdentifier('main_content', 'layout', activity.getPackageName());
const inflater = Inflater.cast(activity.getApplicationContext().getSystemService(Context.LAYOUT_INFLATER_SERVICE));
const view = inflater.inflate(resIDFromString('main_content', 'layout'), null);
const collapsingToolbar = CollapsingToolbarLayout.cast(view.findViewById(resIDFromString('collapsing_toolbar_layout', 'id')));
const toolbar = view.findViewById(resIDFromString('toolbar', 'id'));
const content = LinearLayout.cast(view.findViewById(resIDFromString('content', 'id')));

function resIDFromString(variableName, resourceName) {
	return activity.getResources().getIdentifier(variableName, resourceName, activity.getPackageName());
}

// add a normal ImageView to the toolbar background
var img = Ti.UI.createImageView({
	image: "/bg.jpg",
	height: Ti.UI.FILL,
	width: Ti.UI.FILL
});
collapsingToolbar.addView(img);

appCompatActivity.setSupportActionBar(toolbar);

// add a complete Titanium XML to the native view
var tiView = Alloy.createController("/content").getView();
content.addView(tiView, 0);

$.index.add(view);
$.index.open();

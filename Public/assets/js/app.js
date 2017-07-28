//Dependencies

var express = require("express");
var bodyParser = require("body-parser");
//Express app

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));
//Static directory
app.use(express.static("app/public"));

//Routes
require("./app/routes/api-routes.js")(app);
require("./app/routes/html-routes.js")(app);

//Starts the server begin to listening

app.listen(PORT, function(){
  console.log("App listening on PORT " + PORT);
});

//Copied from website........for reference.
$(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
  event.preventDefault();

  var button = event.target;

  if (!$(button).hasClass(ClassName.BUTTON)) {
    button = $(button).closest(Selector.BUTTON);
  }

  Button._jQueryInterface.call($(button), 'toggle');
}).on(Event.FOCUS_BLUR_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
  var button = $(event.target).closest(Selector.BUTTON)[0];
  $(button).toggleClass(ClassName.FOCUS, /^focus(in)?$/.test(event.type));
});

var Dropdown = function () {
  function Dropdown(element) {
    _classCallCheck(this, Dropdown);

    this._element = element;

    this._addEventListeners();
  }

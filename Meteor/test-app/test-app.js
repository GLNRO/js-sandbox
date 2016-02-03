Colors = new Mongo.Collection("colors");


if (Meteor.isClient) {

  Template.body.helpers({
    colors: function(){
      return Colors.find({});
    }
  });

  Template.body.helpers({
    states: [
      { weather: "sunny "},
      { weather: "cloudy"},
      { weather: "mystery"}
    ]
  });

  Template.body.helpers({
    shapes: [
      {glyph: "circle"},
      {glyph: "octagon"},
      {glyph: "rectangle"},
      {glyph: "triangle"}
    ]
  });




}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

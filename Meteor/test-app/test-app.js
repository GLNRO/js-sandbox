Colors = new Mongo.Collection("colors");


if (Meteor.isClient) {

  Template.body.helpers({
    colors: function(){
      return Colors.find({});
    }
  });

  Template.body.events({
    "submit .new-color": function (event){
      event.preventDefault();
      var title = event.target.title.value;

      Colors.insert({
        title: title,
        createdAt: new Date()
      })
      event.target.title.value = "";
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

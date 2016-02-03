Colors = new Mongo.Collection("colors");
Temps = new Mongo.Collection("temps");
Shapes = new Mongo.Collection("shapes");


if (Meteor.isClient) {

  Template.body.helpers({
    colors: function(){
      return Colors.find({});
    }
  });

  Template.body.helpers({
    temps: function(){
      return Temps.find({});
    }
  });

  Template.body.helpers({
    shapes: function(){
      return Shapes.find({});
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

  Template.body.events({
    "submit .new-temp": function (event){
      event.preventDefault();
      var description = event.target.description.value;

      Temps.insert({
        description: description,
        createdAt: new Date()
      })
      event.target.description.value="";
    }
  });

  Template.body.events({
    "submit .new-shape": function (event){
      event.preventDefault();
      var glyph = event.target.glyph.value;

      Shapes.insert({
        glyph: glyph,
        createdAt: new Date()
      })
      event.target.glyph.value="";
    }
  })

  Template.color.events({
    "click .toggle-checked": function (event){
      Colors.update(this._id,{
        $set: {checked: ! this.checked}
      });
    },
    "click .delete": function (event){
      Colors.remove(this._id);
    }
  });

  Template.temp.events({
    "click .delete": function (event){
      Temps.remove(this._id);
    }
  })

  Template.shape.events({
    "click .delete": function (event){
      Shapes.remove(this._id);
    }
  })



}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

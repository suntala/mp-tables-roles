import { ReactiveDict } from 'meteor/reactive-dict';
import { Random } from 'meteor/random'
import Tabular from 'meteor/aldeed:tabular';
import { Tasks } from '/imports/api/tasks.js';


Template.dynamicTabular.onCreated(function () {
    this.tabular = new ReactiveDict();
  });

Template.dynamicTabular.helpers({
    isTabularReady: function() {
      var self = Template.instance();
    //   console.log("here")
      return self.tabular.get("tabular.isReady");
    },
    getTabular: function() {
      var self = Template.instance();
      return Tabular.tablesByName[self.tabular.get("tabular.name")];
    },
    createTable: function() {
        // here I am displaying only 1 column based on the data context of dynamicTabular
        var columns=[{data:"name", title: "Name"}];
        var selector = this.selector || {}; // use the selector passed to the data context of dynamicTabular
        var collectionName = this.collectionName; // name of the variable storing the new Mongo.Collection("")

        var tabularName = Random.id();
        var self = Template.instance();

        Meteor.call("createTabular", tabularName, collectionName, columns, selector, function(err, results) {
            if (!err) {
                new Tabular.Table({
                    name: tabularName,
                    collection: eval(collectionName),
                    "lengthMenu": [[10, 25, 50, -1],[10, 25, 50, "All"]],
                    responsive: true,
                    autoWidth: true,
                    selector: function() {
                        return selector;
                    },
                    // buttonContainer: '.col-sm-6:eq(0)',
                    columns: columns
                });

                self.tabular.set("tabular.name", tabularName);
                self.tabular.set("tabular.isReady", true);
            }
        });
    }
});
// top-level namespace
var jpcSite = jpcSite || {};

jpcSite.config = {
	sections: [ "home", "work", "projects", "blog", "contact" ],
	scroll: function() {
		var x, y;
	},
	title: "";
};

var config = jpcSite.config;

jpcSite.modules = {
	navigation: {
		main: $("nav"),
		footer: "",
		project: "";
	},
	work: {

	},
	contact: {

	}
};

jpcSite.animation = {

};

console.log('test', jpcSite);
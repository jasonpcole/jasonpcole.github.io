// top-level namespace
var jpcSite = jpcSite || {};

jpcSite.config = {
	title: "",
	subTitle: "",
	$headerGroup: {
		main: $("h1"), 
		sub: $("h2")
	},
	mainNav: $(nav)
};

$.extend(true, jpcSite, {
    modules: {
		header: function() {
			var this.main = jpcSite.config.$headerGroup.main.html(),
				this.sub  = jpcSite.config.$headerGroup.sub.html(),

				return "headers: " this.main + " " + this.sub;
		}
	}
});

console.log('test', jpcSite);
// top-level namespace
var jpcSite = jpcSite || {};

jpcSite.config = {
	title: "Jason Cole",
	subTitle: "This is a subtitle",
	$headers: {
		main: $(h1), 
		sub: $(h2)
	},
	mainNav: $(nav)
};

$.extend(true, jpcSite, {
    modules: {
        heading: {
			function() {
				$(jpcSite.config.$headers.main).hover(
					function() {
						$( this ).css( opacity: 0.5 );
					}, function() {
				    	$( this ).css( opacity: 1 );
				  	}
				);
			};
		}
    }
});

console.log('test', jpcSite);
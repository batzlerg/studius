(function($){

	// base view
	var IndexView = Backbone.View.extend({
		// el is assigned through passed-in options

		initialize: function(options) {
			var dataObj = options.dataObj || {};

			var tmpl = $(options.tmpl).html();
			this.template = _.template(tmpl);

			this.render(dataObj);
		},

		render: function(dataObj) {
			$(this.el).html(this.template(dataObj));
		}
	});

	var indexView = new IndexView({
		el: '#content',
		tmpl: '#index-template',
		dataObj: {
			data: "test display"
		}
	});

	return indexView;

})(jQuery);
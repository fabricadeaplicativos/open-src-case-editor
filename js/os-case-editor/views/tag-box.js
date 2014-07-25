define(function defTagBox(require, exports, module) {

	var bbmv     = require('bbmv'),
		backbone = require('lowercase-backbone'),
		_        = require('lodash'),
		$        = require('jquery');

	var tagBox = module.exports = bbmv.extend({

		initialize: function (options) {

			if (!options.caseModel) {
				throw new Error('No case model for the tagBox.');
			}

			options.model = backbone.model();

			// initialize
			bbmv.prototype.initialize.call(this, options);

			// save reference to the caseModel
			this.caseModel = options.caseModel;

		},

		namespace: 'tagBind',

		addTag: function () {

			// get original tags
			var tags = this.caseModel.get('tags') || [];
			tags.push(this.model.get('name'));


			console.log(tags);

			// set on caseModel
			this.caseModel.set('tags', tags);

			this.caseModel.trigger('change', this.caseModel);

			// unset
			this.model.set('name', '');

		},
	})

})

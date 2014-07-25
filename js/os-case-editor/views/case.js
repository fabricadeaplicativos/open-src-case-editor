define(function defCase(require, exports, module) {
	'use strict';

	require('velocity');

	var bbmv     = require('bbmv'),
		backbone = require('lowercase-backbone'),
		_        = require('lodash'),
		$        = require('jquery');

	module.exports = bbmv.extend({

		tags: function (tags) {
			return tags.join(', ');
		}
	})

});

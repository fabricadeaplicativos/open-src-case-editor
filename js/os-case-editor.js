//     OsCaseEditor
//     (c)
//     OsCaseEditor is licensed under the MIT terms.

/**
 * AMD module.
 *
 * @module OsCaseEditor
 */

define(function (require, exports, module) {
	'use strict';

	// load external modules
	var $         = require('jquery'),
		archetypo = require('archetypo');

	// load main html for the component
	var mainHtml = require('text!os-case-editor/html/index.html');


	// load data docks
	// docks are where data models shoudl be attached to.
	// they are lke USB ports on machines.
	var caseDock = require('os-case-editor/docks/case');


	module.exports = function initOsCaseEditor(options) {

		// verify required options.
		if (!options.el) { throw new Error('No element defined for initOsCaseEditor'); }
		if (!options['case']) { throw new Error('No case defined for the case editor'); }


		// wrap the raw HTML string into a jquery object.
		var $html = $(mainHtml);

		// append the main html to the 'element' passed as option
		options.el.append($html);

		// initialize archetypo($el, scopeData, options)
		archetypo($html, {}, {
			namespace: 'os'
		});

		// attach the case to be edited to the dock
		caseDock.attach(options['case']);


	};

});

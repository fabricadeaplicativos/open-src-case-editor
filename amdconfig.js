require.config({
	urlArgs: 'bust=0.3205283246934414',
	baseUrl: '/js',
	paths: {
		requirejs: '../bower_components/requirejs/require',
		text: '../bower_components/requirejs-text/text',
		mocha: '../node_modules/mocha/mocha',
		should: '../node_modules/should/should',
		'os-case-editor': 'os-case-editor',
		backbone: '../bower_components/backbone/backbone',
		bbdv: '../bower_components/bbdv/built/bbdv',
		bbmv: '../bower_components/bbmv/built/bbmv',
		bootstrap: '../bower_components/bootstrap/dist/js/bootstrap',
		containers: '../bower_components/containers/built/containers',
		deep: '../bower_components/deep/built/deep',
		'improved-model': '../bower_components/improved-model/built/improved-model',
		itr: '../bower_components/itr/built/itr',
		'jquery-selector-data-prefix': '../bower_components/jquery-selector-data-prefix/built/jquery-selector-data-prefix',
		'jquery-value': '../bower_components/jquery-value/built/jquery-value',
		jquery: '../bower_components/jquery/dist/jquery',
		lodash: '../bower_components/lodash/dist/lodash.compat',
		'lowercase-backbone': '../bower_components/lowercase-backbone/built/lowercase-backbone',
		'object-query': '../bower_components/object-query/built/object-query',
		pipe: '../bower_components/pipe/built/pipe',
		qunit: '../bower_components/qunit/qunit/qunit',
		'requirejs-text': '../bower_components/requirejs-text/text',
		subject: '../bower_components/subject/built/subject',
		swtch: '../bower_components/swtch/built/swtch',
		underscore: '../bower_components/underscore/underscore',
		_q: '../bower_components/_q/built/_q',
		archetypo: '../bower_components/archetypo/built/archetypo',
		'jquery-meta-data': '../bower_components/jquery-meta-data/built/jquery-meta-data',
		q: '../bower_components/q/q',
		scope: '../bower_components/scope/built/scope',
		'bb-dock': '../bower_components/bb-dock/built/bb-dock',
		dock: '../bower_components/dock/built/dock',
		'bb-collection-view': '../bower_components/bb-collection-view/built/bb-collection-view'
	},
	shim: {
		backbone: {
			exports: 'Backbone',
			deps: [
				'jquery',
				'underscore'
			]
		},
		underscore: {
			exports: '_'
		},
		mocha: {
			exports: 'mocha'
		},
		should: {
			exports: 'should'
		}
	}
});

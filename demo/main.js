define(['os-case-editor', 'jquery', 'lowercase-backbone'],
function (osCaseEditor  ,  $      ,  backbone           ) {

	// export the casemodel to the global scope
	// in order to have access to it at the browser's console.
	window.caseModel = backbone.model.extend({
		url: 'http://localhost:8000/api/case'
	})();


	osCaseEditor({
		el    : $('#case-editor-demo'),
		'case': caseModel
	});

});

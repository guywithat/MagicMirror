/* global Module */

/* Magic Mirror
 * Module: Timer
 */
	var seconds = 60;
Module.register("MMM-Timer",{
	//var seconds = 60;
	// Default module config.
	defaults: {
		text: seconds
	},

	getTemplate: function () {
		return "timer.njk"
	},

	getTemplateData: function () {
		return this.config
	}
});

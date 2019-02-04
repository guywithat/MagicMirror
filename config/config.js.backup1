/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "0.0.0.0", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: [], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 12,
	units: "metric",

	modules: [
		{
			module: 'MMM-Remote-Control'
			// uncomment the following line to show the URL of the remote control on the mirror
			//, position: 'bottom_left'
			// you can hide this module afterwards from the remote control itself
		},
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_center"
		},
		{
			module: "calendar",
			header: "Matt's Calendar",
			position: "bottom_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "https://calendar.google.com/calendar/ical/mattrogan1%40gmail.com/private-7302fcf58aed736fda0fb05fe9858ca8/basic.ics"
						//url: "webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics"
					}
				]
			}
		},
		/*{
			module: "compliments",
			position: "lower_third"
		},*/
		{
			module: "currentweather",
			position: "bottom_right",
			config: {
				location: "Ottawa",
				locationID: "6094817",  //ID from http://bulk.openweathermap.org/sample/; unzip the gz file and find your city
				appid: "ba6ceb4d9d27a9769034db7360ee9d2e"
			}
		},
		{
			module: "weatherforecast",
			position: "bottom_right", 
			header: "Weather Forecast",
			config: {
				location: "Ottawa",
				locationID: "6094817",  //ID from https://openweathermap.org/city
				appid: "ba6ceb4d9d27a9769034db7360ee9d2e"
			}
		},
		/*{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},*/
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}

/* MagicMirror² Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 *
 * You can use environment variables using a `config.js.template` file instead of `config.js`
 * which will be converted to `config.js` while starting. For more information
 * see https://docs.magicmirror.builders/configuration/introduction.html#enviromnent-variables
 */
let config = {
	address: "0.0.0.0",
	//address: "localhost",	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/",			// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
					  		// you must set the sub path here. basePath must end with a /
	ipWhitelist: [],
	//ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-EN",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		/*
		{
			module: "updatenotification",
			position: "top_bar"
		},
		*/
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "Calendar",
			position: "top_left",
			config: {
				fade: false,
				coloredText: true,
				//excludedEvents: ["DECLINED:"],
				displaySymbol: false,
				maxTitleLength: 15,
				tableClass: "small",
				getRelative: 0,
				calendars: [
					{
						name: "Paul",
						symbol: "calendar-check",
						url: "https://calendar.google.com/calendar/ical/paul.pichota%40gmail.com/private-71a0238f1ef0fc8b01dafffa2ffd9cf3/basic.ics",
						color: "#16B4C8",
						maximumNumberOfDays: "2",
					},
					/*
					{
						name: "Chie",
						symbol: "calendar-check",
						maximumNumberOfDays: "7",
						url: "https://calendar.google.com/calendar/ical/chie.pichota%40gmail.com/private-/basic.ics",
						color: "#E65C31",
					}
					*/
				]
			}
		},
/*
		{
			module: "MMM-Traffic",
			position: "middle_center",
			config: {
				accessToken: "AIzaSyAGJJfrmwHfeywAWWXeMumjoDTDN0BRbyg",
				originCoords: "51.60833430300587, -0.1970276945913022",
				destinationCoords: "51.625895063194335, -0.07412120240490096",
			}
		},
*/
		/*
		{
			module: 'MMM-LocalTransport',
			position: 'top_right',
			config: {
			    //debug: true,
				api_key: 'AIzaSyAGJJfrmwHfeywAWWXeMumjoDTDN0BRbyg',
				origin: 'North Finchley Bus Station',
			    //destination: 'Palmers Green / Palmerston Road',
				destination: 'Palmerston Road (Stop O)',
				updateInterval: 300,
				maximumEntries: 4,
				maxWalkTime: 15,
				displayWalkType: 'short',
				displayArrival: false,
				maxModuleWidth: 300,
				fade: false,
			}
		},
		*/
		
          

	    {                           
	        module: 'MMM-PublicTransit',
	        position: 'top_right',
	        header: 'North Finchley High Road',
	        config: {
	            global_stop_id: 'TFLBNUK:83182',
	            apiKey: 'a800d21c2c3ba3f316ad79070ac4ff69b08f9cf6ee52d32299ff11649f7ffaab',
	            showlogo: false,
	            displayed_entries: 5,
	            updateFrequency: 5,
	        }
	    },

		{
			module: 'MMM-GoogleTrafficTimes',
			position: 'top_right',
			config: {
				//debug: true,
				key: "AIzaSyAGJJfrmwHfeywAWWXeMumjoDTDN0BRbyg",
				origin: {
					address: 'N3 1EU',
					addressFormat: 'address',
				},
				destinations: [{
					name: 'Work (public transport)',
					address: 'EC4N 4TQ',
					addressFormat: 'address',
					mode: 'transit',
					schedules: [],
					showDestinationOutsideScheduleWithoutTraffic: true
				},
				{
					name: 'Joba (by car)',
					address: 'W3 0HW',
					addressFormat: 'address',
					mode: 'drive',
					schedules: [],
					showDestinationOutsideScheduleWithoutTraffic: false
				}],
				updateInterval: 900000,
				avoidHighways: false,
				avoidTolls: false,
				avoidFerries: false,
				language: 'en-EN',
				offsetTimePercentage: 5,
				lastUpdate: true,
				timeLastUpdateWarning: 1,
				horizontalLayout: false,
			},
		},


		{
			module: "weather",
			position: "top_center",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openmeteo",
				type: "current",
				lat: 51.60846763481644,
				lon: -0.1970330447330681,
				fade: false,
			}
		},
		{
			module: "weather",
			position: "top_center",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openmeteo",
				type: "hourly",
				lat: 51.60846763481644,
				lon: -0.1970330447330681,
				fade: false,
				colored: true,
				maxEntries: 13,
			}
		},
		/*
		{
			module: "weather",
			position: "top_center",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openmeteo",
				type: "daily",
				lat: 51.60846763481644,
				lon: -0.1970330447330681,
				fade: false,
			}
		},
		*/

		{
			module: "MMM-TFL-Status",
			position: "bottom_right",
			config: {
				modes: ["tube"],
				//lines: ["northern"],
			}
		},
	/*
		{
			module: "weather",
			position: "top_center",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openweathermap",
				type: "forecast",
				location: "London",
				locationID: "3333121", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "72655140ea49fa826cba67d05ebf4be2"
			}
		},
*/
/*
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
*/
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}

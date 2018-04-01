/*
Wraps WebWorker scripts for execution on Node.js. 
Author: rciszek
*/
'use strict';
var fs = require("fs");

/*
Parameters:
	workerFile : File path of the executed worker.
	callback : Function to be called once the worker is initialized
*/
var wrappedWorker = function (workerFile, callback ) {

	var work = (function() {

		var eventListener = [];

		//Create self object for the worker script
		var self = {};

		function init(workerFile, callback) {
			//Add worker scripts EventListener
			self.addEventListener = function (name, el) {
				self.workerFunction = el;

			};
			//Also add postMessage for the worker.
			self.postMessage = function postMessage(el) {
				eventListener( {data : el});
			};
			//Read the worker script and evaluate it.
			fs.readFile(workerFile, "utf8", function(err, data) {
				eval( data );
				callback(work);
			}); 
		}

		function postMessage(data) {
			var parameter = {};
			parameter.data = Object.assign({}, data);		
			self.workerFunction( parameter);  
		}

		function addEventListener(message, addedEventListener) {
			eventListener = addedEventListener;
		}

		return {
			init : init,
			postMessage : postMessage,
			addEventListener : addEventListener
		}; 
	})();
	
	work.init(workerFile, callback);

};

module.exports = wrappedWorker;

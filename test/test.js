const expect = require('chai').expect;
const work = require('../src/nodeWebWorker.js');
const path = require('path');
const fooBarWorkerPath = path.join(__dirname, '..', 'test-resources/', 'fooBarWorker.js');

const fooMessage = "foo";
const fooResponse = "bar";

describe('wrapWorker', function() {

	it('Initializes WebWorker', function() {
		work(fooBarWorkerPath, function(w) {
			expect(w).to.not.equal(null);	
		});
	});

	it('Receives correct output', function() {
		work(fooBarWorkerPath, function(w) {
			w.addEventListener('message', function (ev) {
				expect(ev.data).to.equal(fooResponse);
			});
			w.postMessage(fooMessage);
		});
	});

});

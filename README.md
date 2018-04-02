# node-webworker-wrapper
Wraps WebWorker scripts for execution on Node.js, enabling reuse of existing browser workers on Node.js. The wrapped workers are executed nonparallel.

## Installation
```
npm install node-webworker
```

## Usage
```
work('myWorker.js', function(w) {
			w.addEventListener('message', function (ev) {
				  //Handle event
			});
			w.postMessage('My message');			  
      });
```

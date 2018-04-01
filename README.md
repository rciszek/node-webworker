# node-webworker
Wraps WebWorker scripts for execution on Node.js.

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

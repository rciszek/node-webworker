self.addEventListener('message', function(e) {    

	self.postMessage( "bar" );
}, false);

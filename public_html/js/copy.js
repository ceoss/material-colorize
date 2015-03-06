ZeroClipboard.config({
	forceHandCursor: true
});

var client = new ZeroClipboard( $('.clip_button') );

	client.on( 'ready', function(event) {
	  // console.log( 'movie is loaded' );

	  client.on( 'aftercopy', function(event) {
		console.log('Copied text to clipboard: ' + event.data['text/plain']);
	  } );
	} );

	client.on( 'error', function(event) {
	  // console.log( 'ZeroClipboard error of type "' + event.name + '": ' + event.message );
	  ZeroClipboard.destroy();
	} );
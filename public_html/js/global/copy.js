ZeroClipboard.config({
	forceHandCursor: true
});

function clip_buttonDestroy() {
	$(".clip_button").hide();
}

var client = new ZeroClipboard( $('.clip_button') );

	client.on( 'ready', function(event) {
	  // console.log( 'movie is loaded' );

	  client.on( 'aftercopy', function(event) {
		console.log('Copied text to clipboard: ' + event.data['text/plain']);
		toast('Copied text to clipboard: ' + event.data['text/plain'], 4000)
	  } );
	} );

	client.on( 'error', function(event) {
		toast('Flash Error: Copying may not work', 4000)
		console.log('Flash Error');
		clip_buttondestory();
		ZeroClipboard.destroy();
	} );

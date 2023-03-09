const express = require( 'express' );
const app = express();
const port = 8080; // default port to listen

app.get( '/', ( req, res ) => {
	console.log('Endpoint hit');
	res.send( 'This is a test API' );
} );

app.listen( port, () => {
	console.log( `server started at http://localhost:${ port }` );
} );
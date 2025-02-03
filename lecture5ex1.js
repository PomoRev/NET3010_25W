let x = 4; 						// global
var y;						    // global declared but undefined

const PI = 3.1415;				// global constant

function foo(){
	console.log( "what is y? " + y);
	y = 17;					// declared and assigned locally

	console.log( "what is y? " + y);
	{
		let x = 'hello';		// declared and assigned locally
		console.log( x + ' ' + y + ', ' + PI );
		y = 'Bob';			// declared and assigned locally
		console.log( "what is y? " + y);
		a = PI;					// undeclared therefore global (hoisted)
	}
	
	console.log( x + ' ' + y);

}

foo();

console.log( x + ' ' + y + ', ' + a);
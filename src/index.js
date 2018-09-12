module.exports = function solveEquation(equation) {
	
	let arrayOfSplit = equation.split(' ');
	let a = +arrayOfSplit[0];
	let b;
	let c;
	

	( arrayOfSplit[3] === "-") &&  ( b = +(arrayOfSplit[3] + arrayOfSplit[4]) );
	( arrayOfSplit[3] != "-") &&	( b = +arrayOfSplit[4] );

	( arrayOfSplit[7] === "-") &&  ( c = +(arrayOfSplit[7] + arrayOfSplit[8]) );
	( arrayOfSplit[7] != "-") &&	( c = +arrayOfSplit[8] );
	
	let disc;
	let x1;
	let x2;

	disc = b * b - (4 * a * c);

	x1 = ((-1) * b + Math.sqrt(disc))/( 2 * a );
	x2 = ((-1) * b - Math.sqrt(disc))/( 2 * a );

	x1 = Math.round(x1);
	x2 = Math.round(x2);

	let solution;

	if(x1 < x2)
	 solution = [x1, x2];
	else solution = [x2, x1];

	return solution;
	
}


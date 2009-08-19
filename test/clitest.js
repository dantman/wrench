
load("./test.js");
load("../dist/wrench15.js");

print("Running tests for wrench15...");

var noRun = 0, noPassed = 0, noFailed = 0, noPending = 0;
var roots = ["Object", "Array", "String"];
for ( var t = 0; t < roots.length; t++ ) {
	var testRoot = roots[t];
	print("Running tests/"+testRoot+".js");
	var exports = {};
	load('tests/'+testRoot+'.js');
	for ( var test in exports ) {
		print("test> " + test);
		noRun++;
		try {
			exports[test]();
			print("- Ok");
			noPassed++;
		} catch( e ) {
			if ( e.name === "AssertionError" ) {
				print("- "+e.message);
				noFailed++;
			} else if ( e.name === "PendingError" ) {
				print("- Pending");
				noPending++;
			} else
				throw e;
		}
	}
}

print("Ran "+noRun+" tests, "+noPassed+" passed, "+noFailed+" failed, "+noPending+" pending.");
noFailed > 0 ? 1 : 0;


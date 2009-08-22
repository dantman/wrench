
var $results = $('#results tbody');

var $total = $('#total');
var $passed = $('#passed');
var $failed = $('#failed');
var $pending = $('#pending');

var noRun = 0, noPassed = 0, noFailed = 0, noPending = 0;
for ( var test in exports ) {
	var $result = $('<tr/>');
	$('<td/>').text(test).appendTo($result);
	noRun++;
	try {
		exports[test]();
		$('<td>Ok</td>').appendTo($result);
		noPassed++;
		$result.addClass('passed');
	} catch( e ) {
		if ( e.name === "AssertionError" ) {
			$('<td/>').text(e.message||"").appendTo($result);
			$result.addClass('failed');
			noFailed++;
		} else if ( e.name === "PendingError" ) {
			$('<td>Pending</td>').appendTo($result);
			noPending++;
			$result.addClass('pending');
		} else {
			$('<td>Threw error</td>').appendTo($result);
			noFailed++;
			$result.addClass('failed');
		}
	}
	$result.appendTo($results);
	$total.text(noRun);
	$passed.text(noPassed);
	$failed.text(noFailed);
	$pending.text(noPending);
}

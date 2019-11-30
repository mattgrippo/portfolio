// JavaScript Document
// Question Script

function correct(link) {
	document.getElementById('quiz_return').innerHTML = "Correct Answer!";

	showLink(link);
}

function wrong(link) {
	document.getElementById('quiz_return').innerHTML = "Wrong Answer... Try again!";
	showLink(link);
}

function showLink(link) {
	document.getElementById('quiz_continue').innerHTML = '<a href="'+link+'"><input type="button" class="btn btn-primary" value="Next Location"></a>';
}


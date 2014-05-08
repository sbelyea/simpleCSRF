function myTest() {
			alert('woooo');
		};

function imgTest() {
	test = new Image();
	test.src = 'http://dev.sbelyea.net';
};

//function csrf(method, url, parms[,])
function csrf(method, url) {
	if (method === 'GET') {
		a = new Image();
		a.src = url;
	} else if (method === 'POST') {
		document.getElementById('csrf-form').submit();
	};
}
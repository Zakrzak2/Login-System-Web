var login = 'admin'
var password = 'panel'
var llog = 0
var usr_chek = 0

function logcheck() {
	var login_i = document.getElementById('login_INPUT32').value
	var password_i = document.getElementById('password_INPUT32').value
	if (login_i == login) {
		if (password_i == password) {
			usr_chek = 10
			document.getElementById('annaucemnt_login').innerHTML = 'Poprawnie zalogowano'
			window.location = 'main2.html'
			document.getElementById('logo').innerHTML = 'Submit'
			llog = 0
		} else {
			document.getElementById('annaucemnt_login').innerHTML = 'niepoprawne dane logowania '
		}
	} else {
		document.getElementById('annaucemnt_login').innerHTML = 'niepoprawne dane logowania '
	}
}

function userCHECK() {
	if (usr_chek <= 0) {
		window.location = 'index.html'
	} else {
		console.log('zalogowano')
	}
}

function logout() {
	llog = llog + 1
	if (llog == 1) {
		document.getElementById('logo').innerHTML = 'are you sure ?'
	}
	if (llog == 2) {
		window.location = 'index.html'
		usr_chek = 0
	}
}

/*
function change_pass() {
	password = document.getElementById('chage_password').value
	console.log('haslo zostalo zmienione na : ' + password)
}
*/
//function chek_pass() {}

//function test() {}

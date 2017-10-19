// how to make this more secure?
/*var users = {
	joe: ["joeshmo@gmail.com", "guest", "sandiego"],
	patty: ["plevin@aol.com", "12345", "berkeley"],
	laura: ["lpalmer@yahoo.com", "twinpeaks1", "santabarbara"]
}*/

var users = {
	name: ["joe", "patty", "laura"],
	email: ["joeshmo@gmail.com", "plevin@aol.com", "lpalmer@yahoo.com"],
	password: ["guest", "12345", "twinpeaks1"],
	city: ["sandiego", "berkeley", "santabarbara"]
}

function checkMatch(user, pass, usercity) {
	for(var i=0; i<users.name.length; i++) {
		if(user == users.name[i] || user == users.email[i]) {
			if(pass == users.password[i]) {
				if(usercity == users.city[i]) {
					return true;
				}
				else {
					alert("You are not authorized to sign in to this city.");
					return false;
				}
			}
		}
	}
	alert("The name or password you entered is incorrect.");
	return false;
}

function createUser(username, usermail, pass, usercity) {
	users.name.push(username);
	users.email.push(usermail);
	users.password.push(pass);
	users.city.push(usercity);
}
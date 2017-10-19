//import React from 'react';
//import ReactDOM from 'react-dom';

const myliveBlue = '#1B96FE';
const myliveGray = '#F3F3F3';
var city = '';
var cityID = '';
var username = '';
var password = '';

function logout() {
	$("#container").html("");
	$("#navLogout").css("visibility", "hidden");
	$("#container").load("../html/region.html");
}

function select(which) {
	if($(which).hasClass("selected")) {
		$(which).removeClass("selected");
		$("#nextarrow").css("visibility", "hidden");
		$(".select img").css("visibility", "hidden");
	}
	else {
		$(".selected img").css("visibility", "hidden");
		$(".select").removeClass("selected");
		$(which).addClass("selected");

		city = $(".selected").text();
		cityID = $(".selected").attr('id');

		$("#nextarrow").css("visibility", "visible");
		$(".selected img").css("visibility", "visible");
	}
}

// Access list of users to check info entered
function login() {
	if($("#email").val() && $("#pwd").val()) {
		username = $("#email").val();
		password = $("#pwd").val();
		console.log("username = " + username);
		console.log("password = " + password);
		console.log("city = " + city);
		console.log("city ID = " + cityID);

		// Check info given against existing users
		console.log("info check results = " + checkMatch(username, password, cityID));
		//var check = checkMatch(username, password, cityID);
		if(checkMatch(username, password, cityID)) {
			// If check is successful, load location page
			loadNew('location');
		}
	}
	else {
		alert("One or more of the fields are blank.");
		e.preventDefault();
	}
}

function loadNew(next) {
	$("#container").html("");

	//TEST
	createUser("chris", "chkorkos@yahoo.com", "guest1", "sandiego");
	
	if(next === 'region') {
		$("#navLogout").css("visibility", "hidden");
		$("#container").load('../html/region.html');
	}
	else if(next === 'login') {
		$("#navLogout").css("visibility", "hidden");
		$("#container").load("../html/login.html", function() {
			$("#cityName").text(city);
		});
	}
	else if(next === 'location') {
		$("#navLogout").css("visibility", "visible");
		$("#container").load("../html/location.html", function() {
			$("#username").text(username);
		});
	}
}

// first step of page functions
$( document ).ready(function() {
    $("#container").load("../html/region.html");
});

/*
class Navbar extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
		 	<nav class="navbar navbar-default" style="background-color: #1B96FE;">
				<div class="container-fluid">
	      		<!-- Brand and toggle get grouped for better mobile display -->
	      		<div class="navbar-header">
	        	<a class="navbar-brand" href="#" style="color: #dddddd; font-size: 22px;">MyLive Admin</a>
	      		</div>

	    		</div><!-- /.container-fluid -->
  			</nav>
	)}
}
*/
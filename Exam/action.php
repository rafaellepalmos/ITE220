<?php
	session_start();
	$request = $_GET['q'];
	if ($request == login){
		$username = $_POST["username"];
		$password = $_POST["password"];
		if ($username == "admin" && $password == "1234"){
			$_SESSION["username"] = $username; //this allows you to put the username variable from php into a session and the session name is username
			header("location:welcome.php"); //goes to this page if "if" condition is satisfied
		} else {
			header ("location:index.php?q=error");
		}
	} else if ($request == logout) {
		session_destroy(); //clear the session
		header ("location:index.php"); //redirect the user back to index.php
	}

	//echo $username . " " . $password;
?>
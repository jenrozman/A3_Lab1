<?php

$user = 'root';
$pass = '';
$host = 'localhost';
$db = 'a3_cooperinfo';

// try connecting to server
$conn = mysqli_connect($host, $user, $pass, $db);
mysqli_set_charset($conn, 'utf8');

if (!$conn) {
	echo 'balderdash!';
	exit;
}

//echo 'It worked!';

$myQuery = 'SELECT * FROM mainmodel';

$result = mysqli_query($conn, $myQuery);
$rows = array();

while($row = mysqli_fetch_assoc($result)){
	$rows[] = $row;
}
if (isset($_GET["carModel"])) {
	$car = $_GET["carModel"];
	//select 1 car instead of all of them
$myQuery = "SELECT * FROM mainmodel WHERE model = '$car' ";
//stpre result
$result = mysqli_query($conn, $myQuery);
//get the row
$row = mysqli_fetch_assoc($result);

//show on webpage
echo json_encode($row);
}
 ?>
<?php




require("dbinfo.php");

$dom = new DOMDocument("1.0");
$node = $dom->createElement("chaines");
$parnode = $dom->appendChild($node);


$conn = mysqli_connect($servername, $username, $password, $database);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$value= $_COOKIE["v"];
   


$sql = "select * from station where nom='$value' ";
$result = $conn->query($sql);


if ($result->num_rows > 0) {
  

while ($row = $result->fetch_assoc()){
 
  $node = $dom->createElement("chaine");
  $newnode = $parnode->appendChild($node);
	$newnode->setAttribute("antenne",$row['antenne']);
 // $newnode->setAttribute("nom",$row['nom']);
//$newnode->setAttribute("FS",$row['FS']);	
}
   header ("Content-Type:text/xml");
  echo $dom->saveXML();
} else {
    echo "0 results";
}
$conn->close();

?>
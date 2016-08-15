<?php

require("dbinfo.php");

// Start XML file, create parent node

$dom = new DOMDocument("1.0");
$node = $dom->createElement("chaines");
$parnode = $dom->appendChild($node);

// Opens a connection to a MySQL server

$conn = mysqli_connect($servername, $username, $password, $database);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Select all the rows in the markers table



$sql = "select * from chaine";
$result = $conn->query($sql);

// Iterate through the rows, adding XML nodes for each

if ($result->num_rows > 0) {
  

while ($row = $result->fetch_assoc()){
  // ADD TO XML DOCUMENT NODE
  $node = $dom->createElement("chaine");
  $newnode = $parnode->appendChild($node);
  $newnode->setAttribute("nom",$row['nom']);
$newnode->setAttribute("FS",$row['FS']);	
}
   header ("Content-Type:text/xml");
  echo $dom->saveXML();
} else {
    echo "0 results";
}
$conn->close();

?>
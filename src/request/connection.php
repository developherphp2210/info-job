<?php

require_once 'config.php';

$conn = new mysqli($db_dati['servername'], $db_dati['username'], $db_dati['password'], $db_dati['dbname']);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
  }  
$conn->set_charset("utf-8");

?>
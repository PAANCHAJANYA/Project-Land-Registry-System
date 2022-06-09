<?php
require_once("config.php");
$region = "(15.394397804529174,75.02250190885132);(15.394189189674105,75.02680669435145);(15.389918029040452,75.02676114106573);(15.389347070334923,75.02283217017276);(15.394397804529174,75.02250190885132)";
$query1 = $con->prepare("SELECT land FROM regions ORDER BY land DESC LIMIT 1");
$query1->execute();
$sqldata1 = $query1->fetch(PDO::FETCH_ASSOC);
$coords = explode(";", $region);
$newLand = $sqldata1["land"]+1;
foreach($coords as $item)
{
    $latitude = explode(',', $item)[0];
    $longitude = explode(',', $item)[1];
    $latitude = floatval(substr($latitude, 1));
    $longitude = floatval(substr($longitude, 0,-1));
    $query2 = $con->prepare("INSERT INTO regions (land, latitude, longitude) VALUES (:land, :lat, :lng)");
    $query2->bindParam(":land", $newLand);
    $query2->bindParam(":lat", $latitude);
    $query2->bindParam(":lng", $longitude);
    $query2->execute();
}
?>
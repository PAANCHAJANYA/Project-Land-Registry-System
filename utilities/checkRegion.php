<?php
require_once("config.php");
$region = $_POST["region"];
$query0 = $con->prepare("SELECT land FROM regions ORDER BY land LIMIT 1");
$query0->execute();
$sqldata0 = $query0->fetch(PDO::FETCH_ASSOC);
$query1 = $con->prepare("SELECT land FROM regions ORDER BY land DESC LIMIT 1");
$query1->execute();
$sqldata1 = $query1->fetch(PDO::FETCH_ASSOC);
$coords = explode(";", $region);
class pointLocation
{
    var $pointOnVertex = true;
    function pointLocation(){}
    function pointInPolygon($point, $polygon, $pointOnVertex = true)
    {
        $this->pointOnVertex = $pointOnVertex;
        $point = $this->pointStringToCoordinates($point);
        $vertices = array(); 
        foreach ($polygon as $vertex)
        {
            $vertices[] = $this->pointStringToCoordinates($vertex);
        }
        if($this->pointOnVertex == true and $this->pointOnVertex($point, $vertices) == true)
        {
            return "vertex";
        }
        $intersections = 0;
        $vertices_count = count($vertices);
        for ($i=1; $i < $vertices_count; $i++)
        {
            $vertex1 = $vertices[$i-1];
            $vertex2 = $vertices[$i];
            if($vertex1['y'] == $vertex2['y'] and $vertex1['y'] == $point['y'] and $point['x'] > min($vertex1['x'], $vertex2['x']) and $point['x'] < max($vertex1['x'], $vertex2['x']))
            {
                return "boundary";
            }
            if($point['y'] > min($vertex1['y'], $vertex2['y']) and $point['y'] <= max($vertex1['y'], $vertex2['y']) and $point['x'] <= max($vertex1['x'], $vertex2['x']) and $vertex1['y'] != $vertex2['y'])
            {
                $xinters = ($point['y'] - $vertex1['y']) * ($vertex2['x'] - $vertex1['x']) / ($vertex2['y'] - $vertex1['y']) + $vertex1['x'];
                if ($xinters == $point['x'])
                {
                    return "boundary";
                }
                if($vertex1['x'] == $vertex2['x'] || $point['x'] <= $xinters)
                {
                    $intersections++; 
                }
            } 
        } 
        if ($intersections % 2 != 0)
        {
            return "inside";
        }
        else
        {
            return "outside";
        }
    }
    function pointOnVertex($point, $vertices)
    {
        foreach($vertices as $vertex)
        {
            if ($point == $vertex)
            {
                return true;
            }
        }
    }
    function pointStringToCoordinates($pointString)
    {
        $coordinates = explode(" ", $pointString);
        return array("x" => $coordinates[0], "y" => $coordinates[1]);
    }
}
$pointLocation = new pointLocation();
for($itr = $sqldata0["land"]; $itr <= $sqldata1["land"]; $itr++)
{
    $query2 = $con->prepare("SELECT * FROM regions WHERE land=:land");
    $query2->bindParam(":land", $itr);
    $query2->execute();
    $sqldata2 = $query2->fetchAll(PDO::FETCH_ASSOC);
    $polygon = array();
    foreach($sqldata2 as $row)
    {
        array_push($polygon, strval($row["latitude"])." ".strval($row["longitude"]));
    }
    $points = array();
    foreach($coords as $item)
    {
        $latitude = explode(',', $item)[0];
        $longitude = explode(',', $item)[1];
        $latitude = strval(floatval(substr($latitude, 1)));
        $longitude = strval(floatval(substr($longitude, 0,-1)));
        array_push($points, $latitude." ".$longitude);
    }
    $boundaryCount = 0;
    $vertexCount = 0;
    foreach($points as $point)
    {
        if($pointLocation->pointInPolygon($point, $polygon)=='inside')
        {
            echo "0";
            exit(0);
        }
        if($pointLocation->pointInPolygon($point, $polygon)=='boundary')
        {
            $boundaryCount++;
        }
        if($pointLocation->pointInPolygon($point, $polygon)=='vertex')
        {
            $vertexCount++;
        }
    }
    if($boundaryCount==count($points))
    {
        echo "0";
        exit(0);
    }
    if($vertexCount==count($points))
    {
        echo "0";
        exit(0);
    }
    else
    {
        foreach($polygon as $poly)
        {
            if($pointLocation->pointInPolygon($poly, $points)=='inside')
            {
                echo "0";
                exit(0);
            }
        }
    }
}
echo "1";
?>
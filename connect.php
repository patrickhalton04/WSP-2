<?php

    // Create connection
    $con=mysqli_connect("localhost","root","root","NFLPlayers");

    // Check connection
    if (mysqli_connect_error()) {
      echo "Failed to connect to MySQL: " . mysqli_connect_error();
    }

    $result = mysqli_query("SELECT * FROM NFLPlayers");

    while($row=mysqli_fetch_array($result)){
        echo "1";
    }

?>
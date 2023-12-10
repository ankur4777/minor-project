<?php

    //database server connection informations
    $server="localhost";
    $username="root";
    $password="";
    $database="sign_up_page";

   $conn= mysqli_connect("$server","$username","$password","$database");
   
   if ( $conn){
        
    }
    else{
        die("Error". mysqli_connect_error());
    }

    //main function
    //mysqli_connect() it connect to you with database
    //die() it is a variable it exit to you in you code and display the message befor you exit 
    //mysqli_connect_error() it tell you that what is error in that connection
?>
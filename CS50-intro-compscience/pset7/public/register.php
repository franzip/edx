<?php

    // configuration
    require("../includes/config.php");
    
    // if form was submitted
    if ($_SERVER["REQUEST_METHOD"] == "POST")
    {
        // most basic check
        if (empty($_POST["username"]) || empty($_POST["password"]) || empty($_POST["email"]))
        {
            apologize("You must fill in all the given fields. Try again please.");
        }
        // passwords do not match
        else if ($_POST["password"] != $_POST["confirmation"])
        {
            apologize("Passwords do not match. Try again please.");
        }
        // username = password
        else if ($_POST["username"] == strtolower($_POST["password"]))
        {
            apologize("Passwords cannot be equal to the username. Try again please.");
        }
        
        // check all the rest
        $check_input = check_fields($_POST["username"], $_POST["email"], $_POST["password"]);
        // an error occurred, report which one
        if ($check_input["error"] == 1)
        {
            apologize($check_input["msg"]);
        }
        
        // try now to perform the insertion
        $query_response = query("INSERT INTO users (username, email, hash, cash) 
                               VALUES(?, ?, ?, 10000.00)", 
                               $_POST["username"],
                               $_POST["email"], 
                               crypt($_POST["password"]));
        
        // query was not successful, report what happened                    
        if ($query_response === false)
        {
            if (query("SELECT * FROM users WHERE username = ?", $_POST["username"]))
            {
                apologize("This username is already taken. Please pick a new one.");
            }
            else if (query("SELECT * FROM users WHERE email = ?", $_POST["email"]))
            {
                apologize("This email is already used. Please supply a different one.");
            }
            // something really bad happened
            apologize("Something went definitely wrong... try again please.");
        }
        
        // get new user id/username, log in and redirect to index.php
        $_SESSION["id"] = query("SELECT LAST_INSERT_ID() as id")[0]["id"];
        $_SESSION["username"] = $_POST["username"];
        redirect("/");
        
    }
    // else render form
    else
    {     
        render("register_form.php", ["title" => "Register"]);
    }
    
?>

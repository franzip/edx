<?php

    // configuration
    require("../includes/config.php"); 
    
    // if form was submitted
    if ($_SERVER["REQUEST_METHOD"] == "POST")
    {
        // most basic check
        if (empty($_POST["old_password"])  || empty($_POST["old_confirm"]) || 
            empty($_POST["new_password"])  || empty($_POST["new_confirm"]))
        {
            apologize("You must fill in all the given fields. Try again please.");
        }
        // passwords do not match
        else if (($_POST["old_password"] != $_POST["old_confirm"]) ||
                 ($_POST["new_password"] != $_POST["new_confirm"]))
        {
            apologize("Passwords do not match. Try again please.");
        }
        // no need to touch the DB in this case
        else if ($_POST["old_password"] == $_POST["new_password"])
        {
            apologize("New password is equal to the old password. Try again please.");
        }
        
        $pwd_length = strlen($_POST["new_password"]);
        // check new password sanity
        if (($pwd_length < 6 || $pwd_length > 20) || 
            (preg_match("/\s/", $_POST["new_password"])))
        {
            apologize("Invalid password. Your password cannot contain whitespaces 
                       and it must be be between 6 and 20 characters Try again please.");
        }
        // update password in the DB
        $change_status = query("UPDATE users
                                SET hash = ?
                                WHERE id = ?",
                                crypt($_POST["new_password"]), $_SESSION["id"]);
        // success                        
        if ($change_status !== false)
        {
            unset($_POST["old_password"], $_POST["old_confirm"], $_POST["new_password"], $_POST["new_confirm"]);
            render("reset_success.php", ["message" => "Your password has been changed successfully."]);
        }
        // something went definitely wrong
        else
        {
            unset($_POST["old_password"], $_POST["old_confirm"], $_POST["new_password"], $_POST["new_confirm"]);
            render("apology.php", ["invalid_data" => "Please try again.", 
                                   "message" => "Oooops... something went wrong :("]);
        }
    }
    
    else 
    {
        // get data to render
        $data = query("SELECT username, email FROM users WHERE id = ?", $_SESSION["id"])[0];
        $user = $data["username"];
        $email = $data["email"];
        // render profile info
        render("profile.php", ["title" => "Profile settings", "user" => $user, "email" => $email]);  
    }
?>

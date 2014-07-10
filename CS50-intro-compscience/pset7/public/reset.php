<?php 
    // configuration
    require("../includes/config.php"); 
    
    // prevent accessing the page directly
    if (!isset($_SESSION["psw_reset"]))
    {
        redirect("/"); 
    }
    
    // check the reset form data
    else if ($_SERVER["REQUEST_METHOD"] == "POST")
    {
        // user did not provide any data
        if (empty($_POST["username-reset"]) && empty($_POST["email-reset"]))
        {
            render("apology.php", ["invalid_data" => "Try again!", 
                                   "message" => "You must provide your email or your username."]);
        }
        // empty username field, check for the email
        else if (empty($_POST["username-reset"]))
        {
            $query_email = query("SELECT * FROM users WHERE email = ?", $_POST["email-reset"]);
            if ($query_email)
            {
                // perform the reset
                $new_psw = generate_password(12);
                $reset_status = reset_password($new_psw, "email", $_POST["email-reset"]);
                // updated the DB successfully
                if ($reset_status !== false)
                {
                    $user_email = $_POST["email-reset"];    
                    // unset globals
                    unset($_POST["username-reset"], $_POST["email-reset"], $_SESSION["psw_reset"]);
                    // pretend sending of new password
              //    send_reset_mail($user_email, $new_psw);
                    // prompt success page
                    render("reset_success.php", ["message" => "Email with new password has been sent to " . $user_email]);  
                }
                else
                {
                    // something went wrong
                    unset($_POST["username-reset"], $_POST["email-reset"], $_SESSION["psw_reset"]);
                    render("apology.php", ["invalid_data" => "Please try again.", 
                                           "message" => "Oooops... something went wrong :("]);
                }
            }
            // no match in DB for email
            else
            {              
                render("apology.php", ["invalid_data" => "Try again!", 
                                   "message" => "Email was not found."]);
            }
        }
        // empty email field, check for the username
        else if (empty($_POST["email-reset"]))
        {
            $query_user = query("SELECT * FROM users WHERE username = ?", 
                                $_POST["username-reset"]);
            if ($query_user)
            {
                // perform the reset
                $new_psw = generate_password(12);
                $reset_status = reset_password($new_psw, "username", $_POST["username-reset"]);
                // updated the DB successfully
                if ($reset_status !== false)
                {
                    // success, query the DB to get user's email
                    $user_email = query("SELECT email FROM users WHERE username = ?", 
                                         $_POST["username-reset"])[0];
                    // unset globals
                    unset($_POST["username-reset"], $_POST["email-reset"], 
                                                    $_SESSION["psw_reset"]);        
                    // pretend sending of new password
              //    send_reset_mail($user_email, $new_psw); 
                    // prompt success page
                    render("reset_success.php", ["message" => "Email with new password has been sent to " . $user_email['email']]);
                }
                else
                {
                    // something went wrong
                    unset($_POST["username-reset"], $_POST["email-reset"], 
                                                    $_SESSION["psw_reset"]);
                    render("apology.php", ["invalid_data" => "Please try again.", 
                                           "message" => "Oooops... something went wrong :("]);
                }
            }
            // no match in DB for username
            else 
            {            
                render("apology.php", ["invalid_data" => "Try again!", 
                                       "message" => "Username was not found."]);
            }
        }
        // allow 1 field only
        else
        {      
            render("apology.php", ["invalid_data" => "Try again!",
                                   "message" => "Please enter only one field among username and email."]);
        }
    }   
    
    // render reset form
    else 
    { 
        render("reset_form.php");
    }
?>

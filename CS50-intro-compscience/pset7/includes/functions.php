<?php

    /**
     * functions.php
     *
     * Computer Science 50
     * Problem Set 7
     *
     * Helper functions.
     */

    require_once("constants.php");

    /**
     * Apologizes to user with message.
     */
    function apologize($message)
    {
        render("apology.php", ["message" => $message]);
        exit;
    }

    /**
     * Facilitates debugging by dumping contents of variable
     * to browser.
     */
    function dump($variable)
    {
        require("../templates/dump.php");
        exit;
    }

    /**
     * Logs out current user, if any.  Based on Example #1 at
     * http://us.php.net/manual/en/function.session-destroy.php.
     */
    function logout()
    {
        // unset any session variables
        $_SESSION = [];

        // expire cookie
        if (!empty($_COOKIE[session_name()]))
        {
            setcookie(session_name(), "", time() - 42000);
        }

        // destroy session
        session_destroy();
    }

    /**
     * Returns a stock by symbol (case-insensitively) else false if not found.
     */
    function lookup($symbol)
    {
        // reject symbols that start with ^
        if (preg_match("/^\^/", $symbol))
        {
            return false;
        }

        // reject symbols that contain commas
        if (preg_match("/,/", $symbol))
        {
            return false;
        }

        // open connection to Yahoo
        $handle = @fopen("http://download.finance.yahoo.com/d/quotes.csv?f=snl1&s=$symbol", "r");
        if ($handle === false)
        {
            // trigger (big, orange) error
            trigger_error("Could not connect to Yahoo!", E_USER_ERROR);
            exit;
        }

        // download first line of CSV file
        $data = fgetcsv($handle);
        if ($data === false || count($data) == 1)
        {
            return false;
        }

        // close connection to Yahoo
        fclose($handle);

        // ensure symbol was found
        if ($data[2] === "0.00")
        {
            return false;
        }

        // return stock as an associative array
        return [
            "symbol" => $data[0],
            "name" => $data[1],
            "price" => $data[2],
        ];
    }

    /**
     * Executes SQL statement, possibly with parameters, returning
     * an array of all rows in result set or false on (non-fatal) error.
     */
    function query(/* $sql [, ... ] */)
    {
        // SQL statement
        $sql = func_get_arg(0);

        // parameters, if any
        $parameters = array_slice(func_get_args(), 1);

        // try to connect to database
        static $handle;
        if (!isset($handle))
        {
            try
            {
                // connect to database
                $handle = new PDO("mysql:dbname=" . DATABASE . ";host=" . SERVER, USERNAME, PASSWORD);

                // ensure that PDO::prepare returns false when passed invalid SQL
                $handle->setAttribute(PDO::ATTR_EMULATE_PREPARES, false); 
            }
            catch (Exception $e)
            {
                // trigger (big, orange) error
                trigger_error($e->getMessage(), E_USER_ERROR);
                exit;
            }
        }

        // prepare SQL statement
        $statement = $handle->prepare($sql);
        if ($statement === false)
        {
            // trigger (big, orange) error
            trigger_error($handle->errorInfo()[2], E_USER_ERROR);
            exit;
        }

        // execute SQL statement
        $results = $statement->execute($parameters);

        // return result set's rows, if any
        if ($results !== false)
        {
            return $statement->fetchAll(PDO::FETCH_ASSOC);
        }
        else
        {
            return false;
        }
    }

    /**
     * Redirects user to destination, which can be
     * a URL or a relative path on the local host.
     *
     * Because this function outputs an HTTP header, it
     * must be called before caller outputs any HTML.
     */
    function redirect($destination)
    {
        // handle URL
        if (preg_match("/^https?:\/\//", $destination))
        {
            header("Location: " . $destination);
        }

        // handle absolute path
        else if (preg_match("/^\//", $destination))
        {
            $protocol = (isset($_SERVER["HTTPS"])) ? "https" : "http";
            $host = $_SERVER["HTTP_HOST"];
            header("Location: $protocol://$host$destination");
        }

        // handle relative path
        else
        {
            // adapted from http://www.php.net/header
            $protocol = (isset($_SERVER["HTTPS"])) ? "https" : "http";
            $host = $_SERVER["HTTP_HOST"];
            $path = rtrim(dirname($_SERVER["PHP_SELF"]), "/\\");
            header("Location: $protocol://$host$path/$destination");
        }

        // exit immediately since we're redirecting anyway
        exit;
    }

    /**
     * Renders template, passing in values.
     */
    function render($template, $values = [])
    {
        // if template exists, render it
        if (file_exists("../templates/$template"))
        {
            // extract variables into local scope
            extract($values);

            // render header
            require("../templates/header.php");

            // render template
            require("../templates/$template");

            // render footer
            require("../templates/footer.php");
        }

        // else err
        else
        {
            trigger_error("Invalid template: $template", E_USER_ERROR);
        }
    }
    
    /**
     * Perform basic checks on the data the user has submitted for registration.
     * Returns an array with an error code and an error message to be rendered.
     */
     function check_fields($username, $email, $password)
     {
        $result = ["error" => 0];
        // check for any whitespace first
        if (preg_match("/\s/", $username) || preg_match("/\s/", $email)  
                                          || preg_match("/\s/", $password))
        {
            $result["error"] = 1;
            $result["msg"] = "Whitespaces are NOT allowed in any fields. Try again please.";
            return $result;
        }    
        // check email validity
        else if (!filter_var($email, FILTER_VALIDATE_EMAIL))
        {
            $result["error"] = 1;
            $result["msg"] = "Your email appear to be invalid. Try again please.";
            return $result;
        }
        
        // check username and password length
        $username_length = strlen($username);
        if ($username_length < 4 || $username_length > 16)
        {
            $result["error"] = 1;
            $result["msg"] = "Invalid username length. Username must be between 4 and 16 characters. Try again please.";
            return $result;
        }
        $pwd_length = strlen($password);
        if ($pwd_length < 6 || $pwd_length > 20)
        {
            $result["error"] = 1;
            $result["msg"] = "Invalid password length. Password must be between 6 and 20 characters. Try again please.";
            return $result;
        }
        
        // check if username follows a valid pattern
        if (!preg_match("/^[a-z][a-z0-9_]+$/", $username))
        {
            $result["error"] = 1;
            $result["msg"] = "Username can only contain lowercase letters, numbers and underscores. Try again please.";
            return $result;
        }
        
        return $result;
     }
     
     /**
      * Generate a pseudorandom password of length "psw_length" for the reset form.
      */
     function generate_password($psw_length)
     {
        $charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPRSTUVWXYZ01234567890_";
        return substr(str_shuffle($charset), 0, $psw_length);
     }
     
     /**
      * Perform a password reset query using supplied data.
      */
     function reset_password($password, $field, $data)
     {
        if ($field == 'email')
        {
            $query_status = query("UPDATE users 
                                   SET hash= ? 
                                   WHERE email = ?", 
                                   crypt($password), $data);
        }
        else if ($field == 'username')
        {
            $query_status = query("UPDATE users 
                                   SET hash= ? 
                                   WHERE username = ?", 
                                   crypt($password), $data);
        }
        return $query_status;
     }
    
    /**
     * Simulate sending emails with reset passwords. 
     * It's just for educational purpose, will not actually send emails.
     */
     function send_reset_mail($user_addr, $password)
     {
        require('../includes/PHPMailerAutoload.php');
        // never ever send directly email with password as plaintext.
        // again, this is just an example.
        $message = "Hi there!<br/> Your new password is: " . $password;
        $mail = new PHPmailer;
        $mail->isSMTP();
        $mail->Host = "smtp.fas.harvard.edu";
        $mail->SetFrom("cs50finance.harvard.edu");
        $mail->AddAddress($user_addr);
        $mail->Subject = "Password reset";
        $mail->Body = $message;
        if ($mail->send() === false)
            die($mail->ErrorInfo . "\n");
     }
     
?>

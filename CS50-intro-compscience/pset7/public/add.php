<?php

    // configuration
    require("../includes/config.php"); 
    // if form was submitted
    if ($_SERVER["REQUEST_METHOD"] == "POST")
    {
        // submitted data is not a valid number
        if (!ctype_digit($_POST["funds"]) || $_POST["funds"] < 100 || $_POST["funds"] > 10000)
        {
            apologize("You must enter a positive number between 100 and 10.000. Try again please.");
        }
        // proceed with DB updates
        else 
        {
            // update users table
            $query_response = query("UPDATE users SET cash = cash + ? WHERE id = ?",
                                    (float) $_POST["funds"], $_SESSION["id"]);
            // update history table
            $history_response = query("INSERT INTO history (id, time, type, amount, quantity, symbol)
                                       VALUES(?, now(), ?, ?, null, null)",
                                       $_SESSION["id"], "Deposit", $_POST["funds"]);
            // queries were successful
            if ($query_response !== false && $history_response !== false)
            {
                // set up a string for the template
                $data = query("SELECT cash, username FROM users WHERE id = ?", $_SESSION["id"]);
                $tot = $data[0]["cash"];
                $name = $data[0]["username"];
                $message = (float) $_POST["funds"] . "$ added to your balance.
                                   Congratulations " . $name . "!" . "
                                   Your new balance is " . $tot;
                render("add_success.php", ["title" => "Funds added", "message" => $message]);
            }
            // something went definitely wrong
            else
            {
                apologize("Oooops... something went wrong :(");
            }
        }
    }
    // else render form
    else
    {
        render("add.php", ["title" => "Add funds"]);
    }
?>

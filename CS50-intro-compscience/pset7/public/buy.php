<?php

    // configuration
    require("../includes/config.php"); 
    // if form was submitted
    if ($_SERVER["REQUEST_METHOD"] == "POST")
    {
        // check for valid quantity
        if ($_POST["quantity"] <= 0 || (!ctype_digit($_POST["quantity"])))
        {
            apologize("Please enter a positive, integer, amount of stocks. Try again please.");
        }
        // get data for symbol
        $stock_data = lookup(strtoupper($_POST["symbol"]));
        // check for valid symbol
        if (empty($_POST["symbol"]) || $stock_data == false)
        {
            apologize("Please enter a valid symbol. Try again please.");
        }
        // extract data for queries
        $symbol = $stock_data["symbol"];
        $buy_amount = (float) $stock_data["price"] * $_POST["quantity"];
        // get user cash
        $user_cash = query("SELECT cash FROM users WHERE id = ?", $_SESSION["id"])[0]["cash"];
        // user has not enough money
        if ($buy_amount > $user_cash)
        {
            apologize("You don't have enough cash for this operation. Try again please.");
        }
        // go on with the queries
        else
        {
            // get quantity for (id, symbol)
            $prev_quantity = query("SELECT quantity FROM shares WHERE id = ? AND symbol = ?",
                                   $_SESSION["id"], $symbol)[0]["quantity"];
            // update shares table
            $share_query = query("INSERT INTO shares (id, symbol, quantity) VALUES(?, ?, ?) 
                                  ON DUPLICATE KEY UPDATE 
                                  quantity = ? + ?",
                                  $_SESSION["id"], $symbol, $_POST["quantity"], 
                                  $_POST["quantity"], $prev_quantity);
            // update history table                      
            $history_query = query("INSERT INTO history (id, time, type, amount, quantity, symbol)
                                    VALUES(?, now(), ?, ?, ?, ?)",
                                    $_SESSION["id"], "Purchase", $buy_amount,
                                    $_POST["quantity"], $symbol);                   
            // update users table                      
            $user_query = query("UPDATE users SET cash = cash - ? WHERE id = ?",
                                $buy_amount, $_SESSION["id"]);
            // all queries were successful                           
            if ($user_query !== false && $share_query !== false && $history_query !== false)
            {
                // redirect to portfolio
                redirect("/");
            }
            else
            {
                // bad things happened
                apologize("Something went definitely wrong... try again please.");
            }
        }
    }
    
    // else render form
    else
    {  
        render("buy.php", ["title" => "Buy stocks"]);
    }
?>

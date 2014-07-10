<?php

    // configuration
    require("../includes/config.php"); 
    // if form was submitted
    if ($_SERVER["REQUEST_METHOD"] == "POST")
    {
        // check for positive quantity
        if (($_POST["quantity"] <= 0) || (!ctype_digit($_POST["quantity"])))
        {
            apologize("Please enter a positive, integer, amount of stocks. Try again please.");
        }
        // get amount of stock owned by user for symbol
        $stock_quantity = query("SELECT quantity FROM shares WHERE id = ? 
                                AND symbol = ?", 
                                $_SESSION["id"], $_POST["symbol"])[0]["quantity"];
                                
        // confront input with stock quantity in DB
        if ($_POST["quantity"] > $stock_quantity)
        {
            apologize("You don't own so many stocks for that symbol. Try again please.");
        }
        // sell all stocks for an (id, symbol): delete the whole tuple from shares table
        else if ($_POST["quantity"] == $stock_quantity)
        {
            // get data for queries
            $data = lookup($_POST["symbol"]);
            $stock_price = $data["price"];
            $to_add = round($_POST["quantity"] * (float) $stock_price, 2);
            // update user cash
            $query_user = query("UPDATE users SET cash = cash + ? WHERE id = ?",
                                  $to_add, $_SESSION["id"]);
            // remove tuple from shares
            $query_share = query("DELETE FROM shares WHERE id = ? AND symbol = ?",
                                 $_SESSION["id"], $data["symbol"]);
            // update history table                     
            $history_response = query("INSERT INTO history (id, time, type, amount, quantity, symbol)
                                       VALUES(?, now(), ?, ?, ?, ?)",
                                       $_SESSION["id"], "Sell", $to_add, 
                                       $_POST["quantity"], $data["symbol"]);
            if ($query_share !== false && $query_user !== false)
            {
                // redirect to portfolio on success
                redirect("/");
            }
            else
            {
                apologize("Something went definitely wrong... try again please.");
            }
        }
        // sell quantity of stocks and update tables accordingly
        else
        {
            // get data for queries
            $data = lookup($_POST["symbol"]);
            $stock_price = $data["price"];
            $to_add = round($_POST["quantity"] * (float) $stock_price, 2);
            // update users table
            $query_user = query("UPDATE users SET cash = cash + ? WHERE id = ?",
                                  $to_add, $_SESSION["id"]);
            // update shares table                      
            $query_share = query("UPDATE shares SET quantity = quantity - ? 
                                 WHERE id = ? AND symbol = ?",
                                 $_POST["quantity"], $_SESSION["id"], $data["symbol"]);
            // update history table                     
            $history_response = query("INSERT INTO history (id, time, type, amount, quantity, symbol)
                                       VALUES(?, now(), ?, ?, ?, ?)",
                                       $_SESSION["id"], "Sell", $to_add, 
                                       $_POST["quantity"], $data["symbol"]);
            // all queries were successful
            if ($query_share !== false && $query_user !== false && $history_response !== false)
            {
                // redirect to portfolio on success
                redirect("/");
            }
            else
            {
                // something bad happened
                apologize("Something went definitely wrong... try again please.");
            }
        }   
    }
    
    // else render form
    else
    {  
        $symbols = query("SELECT symbol FROM shares WHERE id = ?", $_SESSION["id"]);
        render("sell.php", ["title" => "Sell stocks", "symbols" => $symbols]);
    }
?>

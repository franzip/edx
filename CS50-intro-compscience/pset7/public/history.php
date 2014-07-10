<?php

    // configuration
    require("../includes/config.php"); 
    // if form was submitted
    if ($_SERVER["REQUEST_METHOD"] == "POST")
    {   
        // array to be rendered
        $history_data = [];
        // query for all history (any type) 
        if ($_POST["query-data"] == "all")
        {
            // get data
            $query_history = query("SELECT time, type, amount, quantity, symbol
                                    FROM history WHERE id = ?", 
                                    $_SESSION["id"]);
            // query succeded
            if (!empty($query_history))
            {
                // store data into array to render
                foreach ($query_history as $record) 
                {   
                    $history_data[$record["time"]] = $record;    
                }
                render("history.php", ["title" => "All history", "action" => "all", "data" => $history_data]);
            }
            // display error if no history
            else
            {
                apologize("You have not performed any transaction yet.");
            }
        }
        // query only for purchase 
        else if ($_POST["query-data"] == "purchase")
        {
            // get data
            $query_history = query("SELECT time, amount, quantity, symbol
                                    FROM history WHERE id = ? AND type = 'Purchase'", 
                                    $_SESSION["id"]);
            // query succeded
            if (!empty($query_history))
            {
                // store data into array to render
                foreach ($query_history as $record) 
                {   
                    $history_data[$record["time"]] = $record;      
                }
                render("history.php", ["title" => "Purchase history", "action" => "purchase", "data" => $history_data]);
            // display error if no history
            }
            else
            {
                apologize("You have not performed any stocks purchase yet.");
            }
        }
        // query only for sell
        else if ($_POST["query-data"] == "sell")
        {
            // get data
            $query_history = query("SELECT time, amount, quantity, symbol 
                                    FROM history WHERE id = ? AND type = 'Sell'", 
                                    $_SESSION["id"]);
            // query succeded
            if (!empty($query_history))
            {
                // store data into array to render
                foreach ($query_history as $record) 
                {   
                    $history_data[$record["time"]] = $record;            
                }
                render("history.php", ["title" => "Sell history", "action" => "sell", "data" => $history_data]);
            }
            // display error if no history
            else
            {
                apologize("You have not performed any stocks sell yet.");
            }
        }
        // query only for deposit
        else if ($_POST["query-data"] == "deposit")
        {
            // get data
            $query_history = query("SELECT time, amount
                                    FROM history WHERE id = ? AND type = 'Deposit'",
                                    $_SESSION["id"]);
            // query succeded
            if (!empty($query_history))
            {
                // store data into array to render
                foreach ($query_history as $record) 
                {   
                    $history_data[$record["time"]] = $record;              
                }
                render("history.php", ["title" => "Deposit history", "action" => "deposit", "data" => $history_data]);
            }
            // display error if no history
            else
            {
                apologize("You have not performed any deposit yet.");
            }
        }
    }
    else
    {
        // else render form
        render("history_form.php", ["title" => "Transaction history"]);
    }
?>

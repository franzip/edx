<?php

    // configuration
    require("../includes/config.php"); 
    // if form was submitted
    if ($_SERVER["REQUEST_METHOD"] == "POST")
    {
        // retrieve data for symbol
        $stock = lookup(strtoupper($_POST["symbol"]));
        // symbol not found
        if ($stock == false)
        {
            render("apology.php", ["message" => "Couldn't find any stock for this symbol. Try again please."]);
        }
        // symbol was found
        else
        {
            render("quote.php", ["title" => "Stock price" ,"stock_data" => $stock]);
        }
    }
    // else render form
    else
    {   
        render("quote_form.php", ["title" => "Get stock price"]);
    }

?>

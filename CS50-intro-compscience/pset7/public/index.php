<?php

    // configuration
    require("../includes/config.php"); 
    // retrieve user assets
    $balance = query("SELECT cash FROM users WHERE ID = ?", $_SESSION["id"]);
    $user_stock = query("SELECT symbol, quantity FROM shares WHERE ID = ?", $_SESSION["id"]);
    // array with all user's stock info to be rendered
    $stock_quote = [];
    // aggregate sum of all user's stocks value
    $total_stock_value = 0.0;
    if ($user_stock !== false)
    {
        // fill the user's stock info array
        foreach ($user_stock as $stock)
        {
            $tmp = lookup($stock["symbol"]);
            $tmp["quantity"] = $stock["quantity"];
            $tmp["tot_val"] = $tmp["price"] * $stock["quantity"];
            $total_stock_value += $tmp["tot_val"];
            $stock_quote[$stock["symbol"]] = $tmp;
        }
    }   
    // array with aggregate data for total user's assets
    $user_assets = [];
    $user_assets["balance"] = $balance[0]["cash"];
    $user_assets["share_value"] = $total_stock_value;
    $user_assets["total_asset"] = $user_assets["balance"] + $total_stock_value;
    // render portfolio
    render("portfolio.php", ["title" => "Portfolio", "user_stock" => $stock_quote, "user_assets" => $user_assets]);

?>

<div class="my-nav">
    <ul class="nav nav-tabs">
      <li><a class="display_name"><?= $_SESSION["username"] ?></a></li>
      <li><a href="index.php">Your Portfolio</a></li>
      <li><a href="quote.php">Check stock price</a></li>
      <li><a href="buy.php">Buy stocks</a></li>
      <li><a href="sell.php">Sell stocks</a></li>
      <li><a href="add.php">Deposit funds</a></li>
      <li><a href="history.php">Transaction history</a></li>
      <li><a href="settings.php">Settings</a></li>
    </ul>
</div>

<div class="display_stock">
    <table>
        <tbody>
            <tr>
                <td>Symbol</td>
                <td>Name</td>
                <td>Price</td>
            </tr>
    <?php
        print("<tr>");
        print("<td>" . $stock_data["symbol"] . "</td>");
        print("<td>" . $stock_data["name"] . "</td>");
        print("<td>" . number_format($stock_data["price"], 2, ',', '.') . " $" . "</td>");
        print("</tr>");
    ?>
        </tbody>
    </table>
</div>

<div>
    <a href="javascript:history.go(-1);">Search again</a> or <a href="index.php">go back</a>
</div>

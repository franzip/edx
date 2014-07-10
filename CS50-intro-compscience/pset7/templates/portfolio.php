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
                <td>Company</td>       
                <td>Share value</td>
                <td>Quantity</td>
                <td>Total value</td>
            </tr>
            <?php if (empty($user_stock)): ?>
            <tr>
                <td colspan="4"> You don't own any stocks currently. </td>
            </tr>
            <?php else: ?>
                <?php foreach ($user_stock as $quote): ?>
                    <tr>
                    <td> <?= $quote["name"] . " (" . $quote["symbol"] . ")" ?> </td>
                    <td> <?= number_format($quote["price"], 2, ',', '.') . " $"?></td> 
                    <td> <?= $quote["quantity"] ?></td>
                    <td> <?= number_format($quote["tot_val"], 2, ',', '.') . " $"?></td>
                    </tr>
                <?php endforeach ?>
            <? endif ?>
        </tbody>
    </table>
</div>

<div class="display_stock">
    <table>
        <tbody>
            <tr>
                <td>Current Cash Balance</td>
                <td>Shares Value</td>
                <td>Total User's Assets</td>
            </tr>
            <tr>
                <td><?= number_format($user_assets["balance"], 2, ',', '.') . " $" ?></td>
                <td><?= number_format($user_assets["share_value"], 2, ',', '.' ) . " $" ?></td>
                <td><?= number_format($user_assets["total_asset"], 2, ',', '.') . " $" ?></td>
            </tr>
        </tbody>
    </table>
</div>


<div>
    <a href="logout.php">Log Out</a>
</div>

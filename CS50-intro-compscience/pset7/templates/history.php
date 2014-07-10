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
            <?php if ($action == "all"): ?>
            <tr>
                <td>Date</td>
                <td>Action</td>
                <td>Quantity</td>
                <td>Amount</td>
                <td>Symbol</td>
            </tr>
                <?php foreach($data as $row): ?>
                    <tr>
                    <td><?= $row["time"] ?></td>
                    <td><?= $row["type"] ?></td>
                    <td><?= $row["quantity"] ?></td>
                    <td><?php print($row["amount"] . " $") ?></td>
                    <td><?= $row["symbol"] ?></td>
                    </tr>
                 <? endforeach ?>
            <? endif ?>
            <?php if ($action == "purchase" || $action == "sell"): ?>
            <tr>
                <td>Date</td>
                <td>Quantity</td>
                <td>Amount</td>
                <td>Symbol</td>
            </tr>
                <?php foreach($data as $row): ?>
                    <tr>
                    <td><?= $row["time"] ?></td>
                    <td><?= $row["quantity"] ?></td>
                    <td><?php print($row["amount"] . " $") ?></td>
                    <td><?= $row["symbol"] ?></td>
                    </tr>
                 <? endforeach ?>
            <? endif ?>
            <?php if ($action == "deposit"): ?>
            <tr>
                <td>Date</td>
                <td>Amount</td>
            </tr>
                <?php foreach($data as $row): ?>
                    <tr>
                    <td><?= $row["time"] ?></td>
                    <td><?php print($row["amount"] . " $") ?></td>
                    </tr>  
                <? endforeach ?>
            <? endif ?>
        </tbody>
    </table>
</div>

<div>
    <a href="javascript:history.go(-1);">Back</a>
</div>

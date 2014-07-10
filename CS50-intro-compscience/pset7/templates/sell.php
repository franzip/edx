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

<?php if (empty($symbols)): ?>
<p> You don't own any stocks yet. </p>
<?php else: ?>
<form action="sell.php" method="post">
    <fieldset>
        <select class="form-group" name="symbol">
            <?php foreach ($symbols as $symbol):
            print("<option value=" . "'" . $symbol["symbol"] . "'" . ">" . $symbol["symbol"] . "</option>");
            endforeach ?>
        </select>
        <div class="form-group">
            <input class="form-control" name="quantity" placeholder="Quantity to sell" type="text"/>
        </div>
        <div class="form-group">
            <button type="submit" class="btn btn-default">Sell!</button>
        </div>
    </fieldset>
</form>
<? endif ?>


<div>
    <a href="javascript:history.go(-1);">Back</a>
</div>

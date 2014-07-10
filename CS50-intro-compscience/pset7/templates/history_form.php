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

<form action="history.php" method="post">
    <span>Show:</span>
    <select class="form-group" name="query-data">
        <option value="all" selected>All</option>
        <option value="purchase">Purchase</option>
        <option value="sell">Sell</option>
        <option value="deposit">Deposit</option>
    </select>
    <div class="form-group">
        <button type="submit" class="btn btn-default">Get history!</button>
    </div>
</form>

<div>
    <a href="javascript:history.go(-1);">Back</a>
</div>

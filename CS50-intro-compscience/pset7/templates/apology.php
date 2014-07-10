<?php if (isset($_SESSION["id"])): ?>
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

<?php endif ?>

<div class="error-wrapper">
    <img src="img/error-icon.png" class="slideRight" />
    <p class="lead text-danger">
        Sorry!
    </p>
</div>
<p>
    <?= htmlspecialchars($message) ?>
</p>
<?php if (isset($invalid_data)): $_SESSION["psw_reset"] = true; ?>
<p>
    <a href="reset.php">
        <?= htmlspecialchars($invalid_data) ?>
    </a>
</p>
<?php endif ?>

<a href="javascript:history.go(-1);">Back</a>

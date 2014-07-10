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

<p>Username: <?= $user ?></p>
<p>Email: <?= $email ?></p>

<p>To change your password, fill the following form.</p>
<br/>
<form action="settings.php" method="post">
    <fieldset>
        <div class="form-group">
            <input autofocus class="form-control" name="old_password" placeholder="Old Password" type="password"/>
        </div>
        <div class="form-group">
            <input class="form-control" name="old_confirm" placeholder="Confirmation" type="password"/>
        </div>
        <br/>
        <div class="form-group">
            <input class="form-control" name="new_password" placeholder="New Password" type="password"/>
        </div>
        <div class="form-group">
            <input class="form-control" name="new_confirm" placeholder="Confirmation" type="password"/>
        </div>
        <div class="form-group">
            <button type="submit" class="btn btn-default">Change Password</button>
        </div>
    </fieldset>
</form>

<div>
    <a href="javascript:history.go(-1);">Back</a>
</div>

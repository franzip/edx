<p class="text-danger reset-msg">
    Provide your username OR your email to reset your password.<br/>
    Just 1 of them, not both.
</p>
<form action="reset.php" method="post">
    <fieldset>
        <div class="form-group">
            <input autofocus class="form-control" name="username-reset" placeholder="Username" type="text"/>
        </div>
        <div class="form-group">
            <input class="form-control" name="email-reset" placeholder="Email" type="text"/>
        </div>
        <div class="form-group">
            <button type="submit" class="btn btn-default">Reset</button>
        </div>
    </fieldset>
</form>
<div>
    <a href="javascript:history.go(-2);">Back</a>
</div>

<div class="error-wrapper">
    <img src="img/success-icon.png" class="slideRight" />
</div>
</p>
<p>
    <?= htmlspecialchars($message) ?>
</p>
<p>
    You will be now redirected to the home page. <br/> 
    Please wait...
</p>

<!-- Redirect to home page -->
<script type="text/javascript">
    setTimeout(function() { 
               location.href = "/";
               }, 6000);
</script>

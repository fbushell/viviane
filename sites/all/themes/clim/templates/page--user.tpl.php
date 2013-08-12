<div class="container <?php print $classes; ?>"<?php print $attributes; ?> >
	<div class="login-wrap">
  	<div id="login-logo">
       <a href="/" title="<?php print t('Home'); ?>" rel="home" id="logo">
		      <img src="/sites/all/themes/clim/images/viviane_loading.gif"/>
		    </a>
    </div>

    <?php print $messages; ?>
    <?php print render($page['content']) ?>
  
  	<span id="forgot"><a href="user/password">forgot your password?</a></span>
  </div>
</div> <!-- /page -->

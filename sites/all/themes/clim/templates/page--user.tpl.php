<div class="container <?php print $classes; ?>"<?php print $attributes; ?> >
	 
	 <div class="row">
    <div class="span6"> 
    	<div id="logo">
	       <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home" id="logo">
			      <img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>"/>
			    </a>
	    </div>
  	</div>

    <div class="span6">
      <?php print $messages; ?>
      <?php print render($page['content']) ?>
    
    	<span id="forgot"><a href="user/password">forgot your password?</a></span>
   	<div class="span6">
  </div>
</div> <!-- /page -->

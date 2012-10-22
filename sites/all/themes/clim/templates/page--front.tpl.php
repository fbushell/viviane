<div class="navbar">
	<div class="navbar-inner">
		<div class="container">
			<div class="row">
				<div class="span5">
			    <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home" id="logo">
			      <img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>"/>
			    </a>
		    </div>
		    <nav id="main-menu">
					<?php include 'menu.inc'; ?>
				</nav>
    	</div>
  	</div>
	</div>
</div>
	

<div class="container" class="<?php print $classes; ?>"<?php print $attributes; ?>>
    <?php print $messages; ?>
</div>

<footer id="footer">
  
</footer> 
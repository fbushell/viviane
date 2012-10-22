<div class="navbar">
	<div class="navbar-inner">
		<div class="container">
	    <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home" id="logo">
	      <img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>"/>
	    </a>
	    <nav id="main-menu">
	      <?php include 'menu.inc'; ?>
	    </nav>
  	</div>
	</div>
</div>

<div class="container" class="<?php print $classes; ?>"<?php print $attributes; ?>>
  <div class="row">
  	<div id="content-header" class="span12">
      <?php print $messages; ?>
      <?php if ($tabs): ?>
      	<div class="tabs"><?php print render($tabs); ?></div>
      <?php endif; ?>
    </div> 
    <div class="span12">
    	<?php print render($page['content']) ?>
    </div>
  </div>
</div>

<footer id="footer">
 
</footer> 
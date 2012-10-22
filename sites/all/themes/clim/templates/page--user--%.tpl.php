<div class="container <?php print $classes; ?>"<?php print $attributes; ?> >
	 
  <section id="main" class="clearfix">
     <?php print $messages; ?>

      <div id="content-area">
        <?php print render($page['content']) ?>
      </div>
   
  </section> <!-- /main -->
  
</div> <!-- /page -->

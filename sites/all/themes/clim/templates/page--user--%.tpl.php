<div class="container <?php print $classes; ?>"<?php print $attributes; ?> >
	 
  <section id="main" class="clearfix">
     <?php print $messages; ?>

      <div id="content-area">
        <?php //print render($page['content']) ?>
      </div>
      <h5>Accueil Viviane</h5>

      <ul>
      	<li><a href="/admin/content">Website Content</a></li>
      	<li><a href="/node/13/edit?destination=admin/content">Edit About Info</a></li>
        <li><a href="/node/add/work">Add New Work</a></li>
  			<li><a href="/">Return to Homepage</a></li>
      	<li><a href="/user/logout">Logout</a></li>
      </ul>
   
  </section> <!-- /main -->
  
</div> <!-- /page -->

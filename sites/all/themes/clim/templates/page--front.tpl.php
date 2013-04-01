<?php 
  $home_query_string = "
    SELECT entity_id, body_value
    FROM field_data_body
    WHERE entity_id = 13
  ";

  $home_query = db_query( $home_query_string );
  $home_node = $home_query->fetchAll();
  $node_home = node_load(13);

  //dsm($node_home);

  // $intro_quote = "
  //   <div class=\"intro-quote\">
  //     <p>
  //       I obsessively accumulate and transform conceptually 
  //       interesting, useless but precious objects. Many of 
  //       my works indirectly criticize global contemporary 
  //       society including wastefulness, environmental negligence, 
  //       digital invasion, pharmaceutical foods or lack 
  //       of observation. 
  //     </p>
  //   </div>
  // ";

  $statement = $node_home->body['und'][0]['value'];

?>

<header id="header">
    <div id="logo">
      <h5><a href="/">Viviane Le Courtois</a></h5>
    </div>
    <nav id="nav">
      <?php //include 'menu.inc'; ?>
    </nav>
</header>

<div id="wrapper">
  <div id="intro">
      <?php print $intro_quote; ?>
      <div id="statement">
        <p><?php print $statement; ?></p>
      </div>
  </div>

  <div class="container-fluid <?php print $classes; ?>"<?php print $attributes; ?>>
    <?php print $messages; ?>
    <?php print render($page['content']) ?>
  </div>
</div>

<footer class="footer">
  <div class="contact">
    <h6>Viviane Le Courtois</h6>
    <a href="mailto:vivianelecourtois@gmail.com">vivianelecourtois@gmail.com</a>
    <div class="year">
      <h6><?php echo date("Y"); ?></h6>
    </div>
  </div>
</footer>

<div id="loader">
  <div id="name-splash"></div>
</div>
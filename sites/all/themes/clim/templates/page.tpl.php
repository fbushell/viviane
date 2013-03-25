<header id="header">
  <div id="logo">
    <h5><a href="/">Viviane Le Courtois</a></h5>
  </div>
  <nav id="nav">
    <?php //include 'menu.inc'; ?>
  </nav>
</header>

<div id="wrapper" class="<?php print $classes; ?>"<?php print $attributes; ?>>
  <?php print $messages; ?>
  <?php print render($page['content']) ?>
</div>
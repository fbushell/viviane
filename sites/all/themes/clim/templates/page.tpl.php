<header id="header">
  <div class="wrap">
    <div id="logo">
      <a href="/">Viviane Le Courtois</a>
    </div>
    <nav id="nav">
      <?php //include 'menu.inc'; ?>
    </nav>
  </div>
</header>

<div class="wrap <?php print $classes; ?>"<?php print $attributes; ?>>
  <?php print $messages; ?>
  <?php print render($page['content']) ?>
</div>
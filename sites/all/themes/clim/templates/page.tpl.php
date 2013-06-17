<?php include "info.inc"; ?>

<header id="header">
  <div id="logo">
    <a href="/">Viviane Le Courtois</a>
  </div>
  <nav id="nav">
    <div class="information">About</div>
    <div class="information-close">
      <a href="#">Close</a>
    </div>
  </nav>
</header>

<div id="wrapper" class="<?php print $classes; ?>"<?php print $attributes; ?>>
  <?php print $messages; ?>
  <?php print render($page['content']) ?>
</div>
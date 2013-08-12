<?php include "info.inc"; ?>
<div class="lord-of-the-wrap">
  <header id="header">
    <div class="back"><a href="/">←</a></div>
    <div id="logo">
      <a href="/">Viviane Le Courtois</a>
    </div>
    <nav id="nav">
      <div class="information">●</div>
      <div class="information-close">
        <a href="#">╳</a>
      </div>
    </nav>
  </header>

  <div id="wrapper" class="<?php print $classes; ?>"<?php print $attributes; ?>>
    <?php print $messages; ?>
    <?php print render($page['content']) ?>
  </div>
  <div class="up">↑</div>
</div>
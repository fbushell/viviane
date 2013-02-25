<div id="wrapper">
  <header id="header">
    <div class="wrap">
      <div id="logo">
        <h5><a href="/">Viviane Le Courtois</a></h5>
      </div>
      <nav id="nav">
        <?php //include 'menu.inc'; ?>
      </nav>
    </div>
  </header>

  <div class="container-fluid <?php print $classes; ?>"<?php print $attributes; ?>>
    <?php print $messages; ?>
    <?php print render($page['content']) ?>
  </div>
</div>

<div id="loader">
  <div id="name-splash"><h1>Viviane Le Courtois</h1></div>
</div>
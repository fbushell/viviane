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

<div id="wrapper">
  <div id="intro">
      <?php //print $intro_quote; ?>
      <div id="statement">
        <p><?php //print $statement; ?></p>
      </div>
  </div>

  <div class="<?php print $classes; ?>"<?php print $attributes; ?>>
    <?php print $messages; ?>
    <?php print render($page['content']) ?>
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
</div>

<div id="loader">
  <div id="name-splash"></div>
</div>
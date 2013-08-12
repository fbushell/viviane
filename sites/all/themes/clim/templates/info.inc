<?php

  $home_query_string = "
    SELECT entity_id, body_value
    FROM field_data_body
    WHERE entity_id = 13
  ";

  $home_query = db_query( $home_query_string );
  $home_node = $home_query->fetchAll();
  $node_home = node_load(13);
  $statement_txt = $node_home->field_artist_statement['und'][0]['value'];
  $statement = "<div class=\"info-tab statement\">$statement_txt</div>";
  $resume_txt = $node_home->field_resume['und'][0]['value'];
  $resume = "<div class=\"info-tab resume\">$resume_txt</div>";
  $biography_txt = $node_home->field_biography['und'][0]['value'];
  $biography = "<div class=\"info-tab biography\">$biography_txt</div>";
  $contact_txt = $node_home->field_contact['und'][0]['value'];
  $contact = "<div class=\"info-tab contact\">$contact_txt</div>";

	$info = "
		<section class=\"info-section\">
			<nav id=\"info-nav\">
				<a href=\"#statement\">Statement</a>
				<a href=\"#biography\">Biography</a>
				<a href=\"#resume\">Resume</a>
				<a href=\"#contact\">Contact</a>
			</nav>
			<div class=\"info-content\">
				$statement
				$biography
				$resume
				$contact
			</div>
		</section>
	";

	print $info;
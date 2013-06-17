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

  $contact = "<div class=\"info-tab contact\">Honorably Discharged Army Ranger Cameron Poe is sentenced to a maximum-security federal penitentiary to serve a 7 to 10-year term for using his military knowledge to kill a drunk man who had been attempting to assault his pregnant wife Tricia (Monica Potter). Eight years later, Poe is paroled on good conduct, and is eager to see his daughter Casey (Landry Allbright) whom he has never met.</div>";

	$info = "
		<section class=\"info-section\">
			<div class=\"info-content\">
				<nav id=\"info-nav\">
					<a href=\"#statement\">Statement</a>
					<a href=\"#biography\">Biography</a>
					<a href=\"#resume\">Resume</a>
					<a href=\"#contact\">Contact</a>
				</nav>
				$statement
				$biography
				$resume
				$contact
			</div>
		</section>
	";

	print $info;
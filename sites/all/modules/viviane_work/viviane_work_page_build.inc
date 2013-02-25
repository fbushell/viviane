<?php
/**
* @file
*
* Build homepage
*
*/

function viviane_work_page_build(){

	// Init vars
	$module_path  = drupal_get_path('module','viviane_work');

	// Grab node id from url
	$nid = arg(1);

	// Load the node from the url
	$work_node = node_load($nid);

	//dsm($work_node);

	// Init
	$title = $work_node->title;
	$body = $work_node->body['und'][0]['value'];
	$start_yr = $work_node->field_starting_year['und'][0]['value'];
	$end_yr = $work_node->field_ending_year['und'][0]['value'];
	$imgs = $work_node->field_images['und'];
	$images = '';
	$range = '';
	$html = '';

	// Check to what the year range is
	if ( $start_yr === $end_yr ) { 

		$range = $start_yr;

	} else {

	 	$range = $start_yr . ' — ' . $end_yr;

	}

	// Loop through images
	foreach ($imgs as $key => $value) {

		$img_url = file_create_url($value['uri']);

		$images .= "
			<div class=\"img-wrap\">
				<img src=\"$img_url\" />
			</div>
		";

	}

	// Gimme that beautiful markup
	$html = "
		<h3>$title</h3>
		<div class=\"work-body\">
			$body
		</div>
		<div class=\"work-yr\">
			$range
		</div>
		<div class=\"work-imgs-wrap\">
			$images
		</div>
	";

	// Throw it to the page
	return $html;


}
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

	$js_path = "$module_path/js/jquery.flexslider-min.js";
	drupal_add_js($js_path, array('scope' => 'footer', 'weight' => 2));
	$js_path = "$module_path/js/init.js";
	drupal_add_js($js_path, array('scope' => 'footer', 'weight' => 3));

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

		$uri = $value['uri'];
				
		// Load image vars with image style
	  $img_vars = array(
	  	'style_name' => 'work_slider',
	  	'path' => $uri,
	  	'alt' => '',
	  	'title' => '',
	  	'width' => '',
	  	'height' => '',
	  );
	  
	  // Theme image
	  $img_styled =  theme_image_style($img_vars);

		$images .= "
			<li>
				$img_styled
			</li>
		";

	}

	// Gimme that beautiful markup
	$html = "
		<h3>$title | $range</h3>
		<div class=\"work-slider-wrap\">
			<div class=\"flexslider\">
				<ul class=\"slides\">
					$images
				</ul>
			</div>
		</div>
	";

	// Throw it to the page
	return $html;


}
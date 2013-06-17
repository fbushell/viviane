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
	$home_path  = drupal_get_path('module','viviane_home');

	$js_path = "$module_path/js/jquery.fitvids.min.js";
	drupal_add_js($js_path, array('scope' => 'footer', 'weight' => 2));
	$js_path = "$home_path/js/main.js";
	drupal_add_js($js_path, array('scope' => 'footer', 'weight' => 3));

	// Grab node id from url
	$nid = arg(1);

	// Load the node from the url
	$work_node = node_load($nid);

	//dsm($work_node);

	// Init
	$title     = $work_node->title;
	$body      = $work_node->body['und'][0]['value'];
	$start_yr  = '';
	$end_yr    = '';
	$work_yr   = '';
	$work_type = '';
	$video  = '';
	if ( isset($work_node->field_video['und'][0]['value']) ) {

		$video_link = $work_node->field_video['und'][0]['value'];

		$video = "
			<div class=\"work-video\">
				<iframe src=\"http://player.vimeo.com/video/$video_link?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff\" 
					width=\"1068\" 
					height=\"600\" 
					frameborder=\"0\" 
					webkitAllowFullScreen mozallowfullscreen allowFullScreen>
				</iframe>
			</div>
		";
	}
	// Setup the work years
	if ( isset($work_node->field_starting_year['und'][0]['value']) ) {
		$start_yr = $work_node->field_starting_year['und'][0]['value'];
	}

	if ( isset($work_node->field_ending_year['und'][0]['value']) ) {
		$end_yr = '—' . $work_node->field_ending_year['und'][0]['value'];
	}

	$work_yr = $start_yr . $end_yr; 

	// Work Types
	if ( isset($work_node->field_type['und'][0]) ) {

		$work_type = '';

		foreach ( $work_node->field_type['und'] as $key => $type ) {

			$work_type .= "<span class=\"types\">{$type['value']}</span>";

		}

	}
	$imgs = $work_node->field_images['und'];
	$images = '';
	$html = '';

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
			<div class=\"work-img\">
				$img_styled
			</div>
		";

	}

	// Gimme that beautiful markup
	$html = "
		<div class=\"work-wrap\">
			<header class=\"work-header\">
				<div class=\"work-title\"><h6>$title</h6></div> 
				<div class=\"work-date\"><h6>$work_yr</h6></div>
				<div class=\"work-body\">$body</div>
			</header>
			$images
			$video
		</div>
	";

	// Throw it to the page
	return $html;


}
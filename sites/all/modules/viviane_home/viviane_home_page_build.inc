<?php
/**
* @file
*
* Build homepage
*
*/

function viviane_home_page_build(){

	// Init vars
	$module_path = drupal_get_path('module','viviane_home');
	$works       = array();
	$work_events = '';

	// Adding javascript
	$js_path = "$module_path/js/main.js";
	drupal_add_js($js_path, array('scope' => 'footer', 'weight' => 10));
	

  // Build query for nids ordered by work year
  $node_query_string = "
		SELECT n.nid, n.title, s.field_starting_year_value, s.entity_id
		FROM node AS n
		JOIN field_revision_field_starting_year AS s
		ON n.nid = s.entity_id
		ORDER BY s.field_starting_year_value DESC
  ";

  // Use drupal's db_query function 
	$node_query = db_query( $node_query_string );
  $work_node = $node_query->fetchAll();

  // Build all the work nodes
  foreach ( $work_node as $key => $info ) {

  	// node_load all work items
  	$nid = $info->nid;
  	$works[] = node_load($nid);

  }

  //dsm($works);

  // Loop through works
  foreach ( $works as $work => $value ) {

  	//dsm($value->field_images['und']);
  	// Vars
		$title = $value->title;
		$nid   = $value->nid;
		$uri   = $value->field_images['und'][0]['uri'];
		$start_yr    = '';
		$ending_yr   = '';
		$work_type   = '';


		// Setup the work years
		if ( isset($value->field_starting_year['und'][0]['value']) ) {
			$start_yr = $value->field_starting_year['und'][0]['value'];
		}

		if ( isset($value->field_ending_year['und'][0]['value']) ) {
			$ending_yr = '—' . $value->field_ending_year['und'][0]['value'];
		}

		$work_yr = $start_yr . $ending_yr; 

		// Work Types
		if ( isset($value->field_type['und'][0]) ) {

			$work_type = '';

			foreach ( $value->field_type['und'] as $key => $type ) {

				$work_type .= "<span class=\"types\">{$type['value']}</span>";

			}

		}

		// Load image vars with image style
	  $img_vars = array(
	  	'style_name' => 'work_sm',
	  	'path' => $uri,
	  	'alt' => '',
	  	'title' => '',
	  	'width' => '',
	  	'height' => '',
	  );
	  
	  // Theme image
	  $img_styled =  theme_image_style($img_vars);
	  
	  $img_final = "
	  	$img_styled
	  ";

	  $work_events .= "
	  	<a href=\"/work/$nid\">
				<div class=\"list-item\">
  				<span class=\"list-yr\"><h6>$start_yr</h6></span>
  				<span class=\"list-title\"><h6>$title</h6></span>
  				<div class=\"list-img hidden\">$img_final</div>
  				</span>
			  </div>
	   	</a>
		";
 	}

	$html = "
		<div class=\"list-container\">
				$work_events
		</div>
	";

	return $html; 

}

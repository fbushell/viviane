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
	// $js_path = "$module_path/js/jquery.easing.1.3.js";
	// drupal_add_js($js_path, array('scope' => 'footer', 'weight' => 1));
	$js_path = "$module_path/js/jquery.imagesloaded.min.js";
	drupal_add_js($js_path, array('scope' => 'footer', 'weight' => 2));
	$js_path = "$module_path/js/jquery.masonry.min.js";
	drupal_add_js($js_path, array('scope' => 'footer', 'weight' => 3));
	$js_path = "$module_path/js/homepage.js";
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



		// Featured works
		if ( isset($value->field_featured['und'][0]['value']) ) {
			$featured = $value->field_featured['und'][0]['value'];
		} else {
			$featured = 0;
		}

  	if ( $featured === '1' ) {

  	// Load image vars with image style
		  $img_vars = array(
		  	'style_name' => 'work_lg',
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

		  // Build each work item
		  $work_events .= "
	  		<div class=\"item col lg\">
	  			<div class=\"item-inner\">
			  		<a href=\"/work/$nid\">
				  		<div class=\"item-img\">
				  			$img_final
				  		</div>
				  		<div class=\"title-wrap\">
				  			<div class=\"item-title\">
				  				<h6>$title</h6>
				  				<div class=\"item-type\">
					  				$work_type
					  			</div>
				  			</div>
				  		</div>
				  	</a>
				  </div>
			  </div>
	  	";
  	} else {
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
  		<div class=\"item col sm\">
  			<div class=\"item-inner\">
		  		<a href=\"/work/$nid\">
			  		<div class=\"item-img\">
			  			$img_final
			  		</div>
			  		<div class=\"title-wrap\">
			  			<div class=\"item-title\">
			  				<h6>$title</h6>
			  				<div class=\"item-type\">
				  				$work_type
				  			</div>
			  			</div>
			  		</div>
			  	</a>
			  </div>
		  </div>
  	";
  	}

  }

	$html = "
		<div id=\"iso-container\">
			$work_events
		</div>
		<div id=\"loader\"></div>
	";

	return $html; 

}

<?php
/**
* @file
*
* Build homepage
*
*/

function viviane_home_page_build(){

	// Init vars
	$module_path  = drupal_get_path('module','viviane_home');
	$works = array();
	$work_events = '';

	// Adding javascript
	$js_path = "$module_path/js/jquery.easing.1.3.js";
	drupal_add_js($js_path, array('scope' => 'footer', 'weight' => 1));
	$js_path = "$module_path/js/jquery.isotope.min.js";
	drupal_add_js($js_path, array('scope' => 'footer', 'weight' => 2));
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
  	$nid = $value->nid;
  	$uri = $value->field_images['und'][0]['uri'];
				
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
	  		<a href=\"/work/$nid\">
		  		<div class=\"item-img\">
		  			$img_final
		  		</div>
		  		<div class=\"item-title\">
		  			$title
		  		</div>
		  	</a>
		  </div>
  	";
  }

  $categories = "
  	<ul>
  		<li>walking</li>
  		<li>eating</li>
  		<li>growing</li>
  		<li>fossilizing</li>
  		<li>pickling</li>
  		<li>observing</li>
  		<li>transforming</li>
  		<li>breathing</li>
  		<li>collecting</li>
  		<li>sharing</li>
  	</ul>
  ";

	$html = "
		<div id=\"iso-container\">
			$work_events
		</div>
		$categories
		<div id=\"loader\"></div>
	";

	return $html; 

}

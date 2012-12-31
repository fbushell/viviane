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
	$year_width = 75;
	$works = array();
	$timeline_build = timeline_build();
	//$work_build = timeline(2006, 2000);
	$work_events = '';

	// Adding javascript
	$js_path = "$module_path/js/jquery.easing.1.3.js";
	drupal_add_js($js_path, array('scope' => 'footer', 'weight' => 1));
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
  foreach ( $works as $work ) {

  	$start_yr = $work->field_starting_year['und'][0]['value'];

  	if ( isset($work->field_ending_year['und'][0]['value']) ) { 

  			$end_yr = $work->field_ending_year['und'][0]['value']; 

  	};

  	$work_events .= timeline($end_yr, $start_yr, $work);


  }

	$html = "
		<div id=\"timeline-wrap\">
			$timeline_build
		</div>
		$work_events
		<div id=\"loader\"></div>
	";

	return $html; 

}

/**
*
* @function
*
* Build the timeline
*
*/
function timeline_build() {

	// Init
	$current_year = date("Y");
	$born = 1969;
	$y = $born;
	$years = array();
	$timeline = '';
	$html = '';

	// Create every year on the timeline
	while ( $y <= $current_year ) {

		$years[] = $y;
		//array_push($years, $y);
		$y++;

	}

	// Sort years array
	arsort($years);

	//dsm($years);

	foreach ($years as $key => $value) {

		$timeline .= "
			<div class=\"year\">
				$value
				<span class=\"year-line\"></span>
			</div>
		";

	}

	$html = "
		<div class=\"content\">
				$timeline
		</div>
	";

	return $html;
  
}


/**
* @function
*
* Calculate the widths of the timeline and return the lengths
*
*/
function timeline($end_yr = NULL, $start_yr = NULL, $work) {

	// Init
	$current_year = date("Y");
	$yr_length = 75;
	$html = '';

	// Beginning and End points
	$finish_yr = $current_year - $end_yr;
	$end_pos = ($finish_yr + 1) * $yr_length  . 'px';
	$beg_yr = $end_yr - $start_yr;
	$beg_pos = $beg_yr * $yr_length . 'px';

	// Other Info
	$title = $work->title;

	$html = "
		<div class=\"event\" style=\"left: $end_pos; width: $beg_pos;\">
			$title
		</div>
	";

	return $html;


}
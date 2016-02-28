<?php
	$img = $_POST["img"];

	function encodeURIComponent($str) {
		$revert = array('%21'=>'!', '%2A'=>'*', '%27'=>"'", '%28'=>'(', '%29'=>')');
		return strtr(rawurlencode($str), $revert);
	}

	if (preg_match("/\.(png|jpeg|jpg)$/i", $img)) {
		// Download File
		echo nl2br(htmlentities(shell_exec("wget " . $img . " --output-document=./img/" . encodeURIComponent($img) . " 2>&1")), false);
	} else {
		echo "false";
	}
	
	// Remove Older Files
	echo nl2br(htmlentities(shell_exec("find ./img/* -mtime +1 -exec rm {} \\; 2>&1")), false);
?>
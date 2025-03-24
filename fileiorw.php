<?PHP

	$f_ref = fopen ("testfile1.txt", 'r') 
		|| die ("Failed to find file! Why are you messing with me?"); // show as different from try...catch
	
	echo "on the inside we have : ";
	
	$line = fgets($f_ref);
	//$line = fgets($f_ref);
	
	fclose ($f_ref);
	
	echo $line."<BR> groovy!";
	
?>
<!DOCTYPE html>
<HTML lang="en">
	<HEAD>
		<TITLE>Frank Co. Educational</TITLE>
        <link rel="stylesheet" href="BU.css">
		<SCRIPT>
			function suggest(){
			
				if ((fname.value != "") && (lname.value != "")){
					if (nname.value == ""){
						suggestion.innerHTML = "suggested nickname";
						nname.value = fname.value.charAt(0) + lname.value;
					}else{
						suggestion.innerHTML = "";
					}
				}	
			}
			
			function validate(){
							
				//grab the inputs to test
				var results = document.getElementById("appForm");
				let error = false;
				for (let i = 0; i < results.length; i++){
					results.elements[i].style.background = "white";
					if (results.elements[i].value == ""){
						results.elements[i].style.background = "red";
						error = true;
					} else if (results.elements[i].name == "email"){
						
						let regexfilter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
						
						if (!regexfilter.test(results.elements[i].value)){
							error = true;
							badAddress.innerHTML = "Requires a legitimate email address.";
							results.elements[i].style.background = "orange";
						} else {
							badAddress.innerHTML = "";
						}
					}
				}
				
				if (error){
					warning.innerHTML = "Please fill in indicated fields.";
				}
				
				return (!error);
			
			}
		</SCRIPT>
	</HEAD>
	<BODY>
		<DIV class="gridcontainer">		

        <?php include "BUheader.html" ?>
        <?php include "BUnav.php" ?>

			
			
			<DIV class="content">
			
				<IMG class="contentImage" alt="training" src="instructor.png">
			
				<H1>Newsletter and Forum Sign Up</H1>
				
				<P>At Frank Co. we value your opinions. Come join us in our user forum and receive the latest newsletter right to your inbox. We are here to equip you for the future.</P>
				
				<FORM id="appForm" action="" 
					onsubmit="return validate()" method="POST">
					First name: <INPUT type="text" name="firstName" id="fname" autocomplete="off" onchange="suggest()"><BR>
					Last name: <INPUT type="text" name="lastName" id="lname" autocomplete="off" onchange="suggest()"><BR>
					Forum nickname: <INPUT type="text" name="nickName" id="nname" autocomplete="off">
					<SPAN id="suggestion"></SPAN><BR>
					Email address: <INPUT type="text" name="email" autocomplete="off"><SPAN id="badAddress"></SPAN><BR>
					<INPUT type="submit" value="Submit"><BR>
					<SPAN id="warning"></SPAN>
				</FORM>

			</DIV>

			<FOOTER>
				<P>Frank Co. is a registered trade-mark of no one in particular.</P>
			<FOOTER>
		</DIV>
	</BODY>
</HTML>
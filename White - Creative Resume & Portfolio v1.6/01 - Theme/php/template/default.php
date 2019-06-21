<?php ob_start(); ?>

<html>
<head>
</head>
		
<body>
			
	<p>
		<strong>Name:</strong><br/>
		<?php echo $name; ?>
	</p>
	
	<p>
		<strong>Email:</strong><br/>
		<?php echo $email; ?>
	</p>
	
	<p>
		<strong>Message:</strong><br/>
		<?php echo $message; ?>
	</p>
			
</body>
			
</html>

<?php
$contents=ob_get_contents();
ob_end_clean();
return($contents);
?>


	
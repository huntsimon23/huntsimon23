<?
	//define the receiver of the email
	
	define('TO_NAME','Simon Hunt');  //put your name
	define('TO_EMAIL','hunt.simon23.com');  //put your email

	define('TEMPLATE_PATH','template/default.php');
 

	define('SMTP_HOST','smtp.gmail.com'); //for example gmail: smtp.gmail.com
	define('SMTP_USERNAME','hunt.simon23@gmail.com'); //put your email
	define('SMTP_PASSWORD','shalom77'); //put your password
	define('SUBJECT','Contact from your portfolio page'); //change if you want the subject
	
	// Messages
	define('MSG_INVALID_NAME','Please enter your name.');
	define('MSG_INVALID_EMAIL','Please enter valid e-mail.');
	define('MSG_INVALID_MESSAGE','Please enter your message.');
	define('MSG_SEND_ERROR','Sorry, we can\'t send this message.');

?>
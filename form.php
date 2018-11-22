<?php 

$your_name = htmlspecialchars($_POST["your_name"]); 
$email = htmlspecialchars($_POST["email"]); 
$message = htmlspecialchars($_POST["messages"]); 


$myemail = "hovorun.volodymyr@gmail.ru"; 


$your_name = check_input($_POST["your_name"], "Введите ваше имя!"); 
$email = check_input($_POST["email"], "Введите ваш e-mail!"); 
$message = check_input($_POST["message"], "Вы забыли написать сообщение!"); 

 
if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $email)) 
{ 
show_error("<br /> Е-mail адрес не существует"); 
} 


$message_to_myemail = "Здравствуйте!  
Вашей контактной формой было отправлено сообщение!  
Имя отправителя: $your_name  
E-mail: $email  
Текст сообщения: $message  
Конец"; 
/* Отправляем сообщение, используя mail() функцию */ 
$from  = "From: $yourname <$email> \r\n Reply-To: $email \r\n";  
mail($myemail, $tema, $message_to_myemail, $from); 
?> 
<p>Ваше сообщение было успешно отправлено!</p> 
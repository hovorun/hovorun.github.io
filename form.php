<?php 

$your_name = htmlspecialchars($_POST["your_name"]); 
$email = htmlspecialchars($_POST["email"]); 
$message = htmlspecialchars($_POST["messages"]); 


$myemail = "hovorun.volodymyr@gmail.ru"; 


$your_name = check_input($_POST["your_name"], "������� ���� ���!"); 
$email = check_input($_POST["email"], "������� ��� e-mail!"); 
$message = check_input($_POST["message"], "�� ������ �������� ���������!"); 

 
if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $email)) 
{ 
show_error("<br /> �-mail ����� �� ����������"); 
} 


$message_to_myemail = "������������!  
����� ���������� ������ ���� ���������� ���������!  
��� �����������: $your_name  
E-mail: $email  
����� ���������: $message  
�����"; 
/* ���������� ���������, ��������� mail() ������� */ 
$from  = "From: $yourname <$email> \r\n Reply-To: $email \r\n";  
mail($myemail, $tema, $message_to_myemail, $from); 
?> 
<p>���� ��������� ���� ������� ����������!</p> 
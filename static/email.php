<?php

//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;


ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $tel = $_POST['tel'];
    $message = $_POST['message'];



    //Load Composer's autoloader
    require 'vendor/autoload.php';

    //Create an instance; passing `true` enables exceptions
    $mail = new PHPMailer(true);

    try {
        //Server settings                  //Enable verbose debug output
        $mail->isSMTP();
        $mail->Host = 'smtp.mailtrap.io';
        $mail->SMTPAuth = true;
        $mail->Port = 2525;
        $mail->Username = '5bea9c302280ca';
        $mail->Password = '16a1b406d76154';                             //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

        //Recipients
        $mail->setFrom($_POST['email'], $name);
        $mail->addAddress('mreyeshn96dev@gmail.com');     //Add a recipient


        // add attachments

        if( strlen($_FILES['file']['tmp_name'][0]) > 0)
        {
            for ($i = 0, $b = count($_FILES['file']['name']); $i <= $b; $i++) {

                if(isset($_FILES['file']['tmp_name'][$i])) {
                    $mail->addAttachment($_FILES['file']['tmp_name'][$i], $_FILES['file']['name'][$i]);
                }
                
            }
        }


        //Content
        $mail->isHTML(true);                                  //Set email format to HTML
        $mail->Subject = 'Contacto desde el sitio web';
        $mail->Body    = "<strong>Nombre:</strong> $name<br><strong>Correo electrónico:</strong> $email<br><strong>Telefono/Celular:</strong> $tel<br><br><br>$message";

        $mail->send();

        header("Location: " . $_SERVER['HTTP_ORIGIN'] . "/contactus?success=true");
        exit();
    } catch (Exception $e) {

        die($e);
        header("Location: " . $_SERVER['HTTP_ORIGIN'] . "/contactus?success=false");
        exit();
    }
}

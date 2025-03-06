<?php
session_start();

// Enable error reporting for development
error_reporting(E_ALL);
ini_set('display_errors', 1);

// CSRF Protection
if (!isset($_POST['csrf_token']) || $_POST['csrf_token'] !== $_SESSION['csrf_token']) {
    die("CSRF token validation failed");
}

// reCAPTCHA Validation
$recaptcha_secret = 'YOUR_RECAPTCHA_SECRET_KEY';
$recaptcha_response = $_POST['g-recaptcha-response'];

$url = 'https://www.google.com/recaptcha/api/siteverify';
$data = [
    'secret' => $recaptcha_secret,
    'response' => $recaptcha_response
];

$options = [
    'http' => [
        'header' => "Content-type: application/x-www-form-urlencoded\r\n",
        'method' => 'POST',
        'content' => http_build_query($data)
    ]
];

$context = stream_context_create($options);
$result = file_get_contents($url, false, $context);
$recaptcha = json_decode($result);

if (!$recaptcha->success || $recaptcha->score < 0.5) {
    header("Location: error.html");
    exit;
}

// Sanitize inputs
$name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
$phone = filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_STRING);
$service = filter_input(INPUT_POST, 'service', FILTER_SANITIZE_STRING);
$message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);

// Validate inputs
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    header("Location: error.html");
    exit;
}

// Configure PHPMailer (install via composer)
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host = 'smtp.yourprovider.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'your@email.com';
    $mail->Password = 'your-email-password';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    // Recipients
    $mail->setFrom('noreply@sschcare.com', 'SSCH Care');
    $mail->addAddress('recipient@example.com');
    
    // Content
    $mail->isHTML(true);
    $mail->Subject = 'New Quote Request';
    $mail->Body = "
        <h2>New Service Inquiry</h2>
        <p><strong>Name:</strong> $name</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Phone:</strong> $phone</p>
        <p><strong>Service:</strong> $service</p>
        <p><strong>Message:</strong><br>".nl2br($message)."</p>
    ";

    $mail->send();
    header("Location: thank-you.html");
} catch (Exception $e) {
    error_log("Message could not be sent. Mailer Error: {$mail->ErrorInfo}");
    header("Location: error.html");
}
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = 'beastheaker@gmail.com'; // Replace with your email address
    $subject = 'New Contact Message from ' . $name;
    $body = "Name: $name\nEmail: $email\nMessage:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "<script>alert('Message sent successfully!'); window.location.href = 'contact.html';</script>";
    } else {
        echo "<script>alert('Message sending failed. Please try again later.'); window.location.href = 'contact.html';</script>";
    }
}
?>
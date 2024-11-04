<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Collect form data and sanitize it
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Validate the form inputs
    if (!empty($name) && !empty($email) && !empty($message) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
        
        // Set the recipient email address (replace with your email)
        $to = "xutabesa@zohomail.eu"; 

        // Set the email subject
        $subject = "New Contact Us Message from $name";

        // Set the email body
        $body = "You have received a new message from the contact form on your website.\n\n".
                "Name: $name\n".
                "Email: $email\n\n".
                "Message:\n$message";

        // Set the email headers
        $headers = "From: $email\r\n";
        $headers .= "Reply-To: $email\r\n";
        
        // Send the email
        if (mail($to, $subject, $body, $headers)) {
            // Success message (can be redirected to a success page or show a success message)
            echo "Thank you for contacting us, $name. Your message has been sent.";
        } else {
            // Failure message
            echo "Sorry, something went wrong. Please try again later.";
        }
    } else {
        // Validation error
        echo "Please make sure all fields are filled out correctly and the email is valid.";
    }
}
?>

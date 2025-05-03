<?php
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "sajat@emailem.hu";
    $subject = "Kapcsolat űrlap";
    $message = "Név: " . $_POST["name"] . "\nEmail: " . $_POST["email"] . "\nÜzenet:\n" . $_POST["message"];
    $headers = "From: noreply@domain.hu";

    mail($to, $subject, $message, $headers);
    echo "Sikeresen elküldve";
  }
?>
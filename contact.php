<?php

if (isset($_POST['submit'])) {
    $name =  $_POST['name'];
    $subject =  $_POST['subject'];
    $mailFrom =  $_POST['mail'];
    $message =  $_POST['message'];

    $mailTo = "luka.mangano@ynov.com";
    $headers = "De: ".$mailFrom;
    $txt= "Nouveau message de : ".$name.". provenant du site de drone \n\n".$message;

    mail($mailTo, $subject, $txt, $headers);
    header("Location: index.php?mailsend");
}

?>
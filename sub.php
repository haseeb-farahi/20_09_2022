<?php

echo 'working...';

$conn = mysqli_connect('localhost','root','','sub_email');

if(isset($_POST['email'])){
    $email mysqli_real_escape_string(conn,$_POST['email']);
    echo  "the email: " . $_POST['email']+"subcribed";
    $query = " INSERT INTO test(email)VALUE('$email')";


    if(mysqli_query($conn,$query)){
        echo 'email added succesfully';

    
    }else{
        echo 'email not added! error:' .mysqli_error($conn);
    }
}

// if(isset($_GET['email'])){
//     echo 'your Emsil is '.$_GET['email'];
// }
<?php 
    // 设置header
    header('content-type:application/json;charset=utf-8');
    // 读取
    $jsonString = file_get_contents('movement.json');

    // 返回
    echo $jsonString;
    
    // 休息一会
    sleep(1);
 ?>
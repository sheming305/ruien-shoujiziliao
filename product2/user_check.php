<?php
        include("conn.php");
        //设置页面编码
        header("Content-type:text/html;charset=UTF-8");
        $username=trim($_GET["username"]);
        $sql="select * from username_list where username='$username'";
        $query=mysql_query($sql);
        $rst=mysql_fetch_object($query);
        if ($rst==false)
        {
        echo 'false';
        }
        else
        {
        echo 'true';
        }
?>
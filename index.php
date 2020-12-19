<?php 
require 'Confing/confing.php';
$db = new Database();

/*giao diện header*/
require('View/masster/head.php');

if (isset($_GET['controller'])) {
		require 'Route/admin/web.php'; /*xử lý các request trong Route/web.php*/
	} else {
		header('location:index.php?controller=Xl-clien'); /*require giao diện trang chủ*/
	}

require 'View/masster/footer.php'; /*giao diện footer*/

$db->closeDatabase();


?>
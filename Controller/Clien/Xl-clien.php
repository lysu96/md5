<?php 
class INSER_MD5 {
	public function __construct()
	{
		require_once('Model/Clien/Modelmd5.php');

		$Modelmd5 = new Modelmd5();
		$errorInsert = $this->mahoaMD5($Modelmd5);
		$errorSeach = $this->giaiMD5($Modelmd5);

		require('View/Home/index.php');
	}

	public function mahoaMD5($Modelmd5) {
		$txt_ND = $txt_NDMD5 = NULL;
		$errorInsert = array();
		$errorInsert['txt_ND'] = $errorInsert['txt_NDMD5'] = NULL;

		if (isset($_POST['mahoaMD5'])) {
			if (empty($_POST['txt_ND'])) {
				$errorInsert['txt_ND'] = '* Dữ liệu rỗng';
			} else {
				$txt_ND = $_POST['txt_ND'];
				$txt_NDMD5 = md5($_POST['txt_ND']);
				$errorInsert['txt_ND'] = $txt_ND;
				$errorInsert['txt_NDMD5'] = $txt_NDMD5;
			}

			if ($txt_ND && $txt_NDMD5) {
				$Modelmd5->Add_md5($txt_ND, $txt_NDMD5);
				// echo "<script>alert('thêm thành công')</script>";
			}
			
		}

		return $errorInsert;
	}

	public function giaiMD5($Modelmd5) {
		$txt_ND ;
		$errorSeach = array();
		$errorSeach['txt_ND'] = $errorSeach['txt_NDMD5'] = NULL;

		if (isset($_POST['giaiMD5'])) {
			if (empty($_POST['txt_ND'])) {
				$errorSeach['txt_ND'] = '* Dữ liệu rỗng';
			} else {
				$txt_ND = $_POST['txt_ND'];
				$errorSeach['txt_ND'] = $txt_ND;
			}

			if ($txt_ND) {
				$errorSeach['txt_NDMD5'] = $Modelmd5->Seach_md5($txt_ND);
			}
			
		}

		return $errorSeach;
	}

}
$header = new INSER_MD5();


 ?>
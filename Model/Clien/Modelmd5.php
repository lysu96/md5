<?php 
class Modelmd5 extends Database{
	protected $db;

	public function __construct()
	{
		$this->db = new Database();
		$this->db->connect();
	}

	public function Add_md5($noi_dung, $ma_md5)
	{	
		$sql = "INSERT INTO tbl_txt(noi_dung, ma_md5) VALUES ('$noi_dung','$ma_md5')";
		$this->db->conn->query($sql);
	}

	public function Seach_md5($ma_md5) {
		$sql = "SELECT * FROM tbl_txt WHERE ma_md5 = '$ma_md5'";
		$result = $this->db->conn->query($sql);
		$list = array();
		while ($data = $result->fetch_array()) {
			$list[] = $data;
		}
		
		return $list;
	}

}

 ?>
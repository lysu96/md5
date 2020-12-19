<?php

class Database
{
	public $conn = NULL;
	private $server = 'localhost';
	private $user = 'root';
	private $pass = '';
	private $dbName = 'mahoa';
    // Hàm kết nối CSDL
	public function connect()
	{
		$this->conn = new mysqli($this->server, $this->user, $this->pass, $this->dbName);

		if ($this->conn->connect_error) {
			echo "kết nối thất bại";
			printf($this->conn->connect_error);
			exit();
		}
		$this->conn->set_charset("utf8");
		echo "kết nối thành công";
	}
    // Hàm đóng kết nối CSDL
	public function closeDatabase()
	{
		if ($this->conn) {
			$this->conn->close();
		}
	}
}
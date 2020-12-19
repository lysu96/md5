
<!--  -->
<div class="w3-overlay w3-hide-large w3-animate-opacity" onclick="w3_close()" style="cursor:pointer" id="myOverlay"></div>
<div class="w3-main" style="margin-left:250px;">

  <div id="myTop" class="w3-container w3-top w3-theme w3-large">
    <p><i class="fa fa-bars w3-button w3-teal w3-hide-large w3-xlarge" onclick="w3_open()"></i>
      <span id="myIntro" class="w3-hide">Hmooblee</span></p>
    </div>

    <div class="w3-container" style="padding:80px">
      <div class="w3-container w3-padding-16 w3-card" style="background-color:#eee">
        <h3 class="w3-center">MD5</h3>
        <form method="post">
        <div class="w3-content" style="max-width:800px">
          <label>Nhập nội dung</label>
          <input id="idinputxt" class="w3-input" name="txt_ND" type="text" value="<?php if (isset($errorInsert['txt_ND'])) {
            echo($errorInsert['txt_ND']);
          }else{
            echo($errorSeach['txt_ND']);
          } ?>" required>

          <div class="w3-row">
            <div class="w3-col m6">
              <button class="w3-button w3-block w3-teal" name="mahoaMD5">Mã hóa</button>
            </div>
            <div class="w3-col m6">
              <button class="w3-button w3-block w3-teal" name="giaiMD5"">Giải mã</button>
            </div>
          </div>

          <label>Mã MD5 (Nội dung giải mã)</label>
          <textarea id="txtMD5" class="w3-input" name="txt_NDMD5" rows="4"><?php if (isset($errorInsert['txt_NDMD5'])) {
            echo ($errorInsert['txt_NDMD5']);
          } elseif ($errorSeach['txt_NDMD5']) {
            foreach ($errorSeach['txt_NDMD5'] as $value) {
              echo ($value['noi_dung']);
             }
          } else{
             echo "";
          } ?></textarea>
        </div>
        </form>

      </div>
    </div>

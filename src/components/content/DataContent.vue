<template>
  <div class="data-content">
    <table id="data-table" cellspacing="0" cellpadding="0">
      <thead>
        <tr>
          <th>Mã khách hàng</th>
          <th>Họ và tên</th>
          <th>Giới tính</th>
          <th>Ngày sinh</th>
          <th>Nhóm khách hàng</th>
          <th>Điện thoại</th>
          <th>Email</th>
          <th>Địa chỉ</th>
          <th>Số tiền nợ</th>
          <th>Mã thẻ thành viên</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1234</td>
          <td>Trần Văn Quang</td>
          <td>Nam</td>
          <td>23/3/3333</td>
          <td>Vip</td>
          <td>09876543211</td>
          <td>tranvanquan@gmail.cm</td>
          <td>tranvanquan@gmail.cm</td>
          <td>tranvanquan@gmail.cm</td>
          <td>tranvanquan@gmail.cm</td>
        </tr>
        <tr>
          <td>1234</td>
          <td>Trần Văn Quang</td>
          <td>Nam</td>
          <td>23/3/3333</td>
          <td>Vip</td>
          <td>09876543211</td>
          <td>tranvanquan@gmail.cm</td>
          <td>tranvanquan@gmail.cm</td>
          <td>tranvanquan@gmail.cm</td>
          <td>tranvanquan@gmail.cm</td>
        </tr>
        <tr>
          <td>1234</td>
          <td>Trần Văn Quang</td>
          <td>Nam</td>
          <td>23/3/3333</td>
          <td>Vip</td>
          <td>09876543211</td>
          <td>tranvanquan@gmail.cm</td>
          <td>tranvanquan@gmail.cm</td>
          <td>tranvanquan@gmail.cm</td>
          <td>tranvanquan@gmail.cm</td>
        </tr>
        <tr>
          <td>1234</td>
          <td>Trần Văn Quang</td>
          <td>Nam</td>
          <td>23/3/3333</td>
          <td>Vip</td>
          <td>09876543211</td>
          <td>tranvanquan@gmail.cm</td>
          <td>tranvanquan@gmail.cm</td>
          <td>tranvanquan@gmail.cm</td>
          <td>tranvanquan@gmail.cm</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'DataContent',
  data () {
    return {}
  }
}
</script>

<style>
.data-content {
  width: 100%;
  height: calc(100vh - 246px);
  overflow: auto;
}
#data-table {
  min-width: 100%;
  border-collapse: collapse;
}
#data-table thead th {
  height: 60px;
  text-align: left;
  border-bottom: 1px solid #ccc;
}
#data-table tbody td {
  height: 44px;
  text-align: left;
  border-bottom: 1px solid #ccc;
}
#data-table thead {
  border-bottom: 1px solid #ccc;
}
</style>

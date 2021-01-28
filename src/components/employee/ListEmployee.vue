<template>
  <div>
    <div class="header-content">
      <div class="title-header">Danh mục nhân viên</div>
      <div class="add-header">
        <button class="btn-add">
          <div class="btn-add-icon"></div>
          <div class="btn-add-text" @click="btnAdd">Thêm khách hàng</div>
        </button>
      </div>
    </div>
    <div class="filter-content">
      <div class="filter-left">
        <input
          type="text"
          class="icon-search input-search"
          placeholder="Tìm kiếm theo Mã, Tên Khác"
        />
      </div>
      <div class="filtet-right">
        <button class="btn-fresh"></button>
      </div>
    </div>
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
        </tbody>
      </table>
    </div>
    <div class="pagging-bar">
      <div class="pagging-info"><b>Hiển thị khách hàng 20/100</b></div>
      <div class="pagging-option">
        <div class="first-page"></div>
        <div class="pre-page"></div>
        <div class="list-page">
          <button class="btn-page select-page">1</button>
          <button class="btn-page">2</button>
          <button class="btn-page">3</button>
          <button class="btn-page">4</button>
        </div>
        <div class="next-page"></div>
        <div class="last-page"></div>
      </div>
      <div class="pagging-recode"><b>10 khách hàng/ trang</b></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Employee",
  data() {
    return {};
  },
  methods: {
    btnAdd() {
      console.log(1);
    }
  },
};
</script>

<style></style>

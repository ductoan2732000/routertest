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
        <button class="btn-fresh" @click="clickRefresh"></button>
      </div>
    </div>
    <div class="data-content">
      <table id="data-table" cellspacing="0" cellpadding="0">
        <thead>
          <tr>
            <th>Mã nhân viên</th>
            <th>Họ và tên</th>
            <th>Giới tính</th>
            <th>Ngày sinh</th>
            <th>Điện thoại</th>
            <th>Email</th>
            <th>Chức vụ</th>
            <th>Phòng ban</th>
            <th>Mức lương co bản</th>
            <th>Tình trạng công việc</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in employees" :key="index">
            <td>{{ item.EmployeeCode }}</td>
            <td>{{ item.FullName }}</td>
            <td>{{ formartGender(item.Gender) }}</td>
            <td>{{ formartDateOfBirth(item.DateOfBirth) }}</td>
            <td>{{ item.PhoneNumber }}</td>
            <td>{{ item.Email }}</td>
            <td>{{ item.PositionName }}</td>
            <td>{{ item.DepartmentName }}</td>
            <td>{{ item.BasicSalary }}</td>
            <td>{{ formartStatus(item.Status) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="pagging-bar">
      <div class="pagging-info">
        Hiển thị khách hàng <b>{{'3/ ' + employees.length}}</b>
      </div>
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
      <select class="pagging-recode">
        <option value="">10 khách hàng/ trang</option>
        <option value="">20 khách hàng/ trang</option>
        <option value="">30 khách hàng/ trang</option>
      </select>
    </div>
    <Dialog :isHide="isHideParent" @closePopup="closePopup"></Dialog>
  </div>
</template>

<script>
import * as axios from "axios";
import Dialog from "./DialogEmployee.vue";
export default {
  name: "Employee",
  data() {
    return {
      employees: [],
      isHideParent: true
    };
  },
  methods: {
    formartGender(Gender) {
      if (Gender == 0) return "Nam";
      else if (Gender == 1) return "Nữ";
      else return "Khác";
    },
    formartDateOfBirth(date) {
      let d = new Date(date);
      let month = d.getUTCMonth() + 1;
      let day = d.getUTCDate();
      let year = d.getUTCFullYear();
      return year + "/" + month + "/" + day;
    },
    formartStatus(Status) {
      if (Status == 0) return "Đang làm việc";
      else if (Status == 1) return "Đang công tác";
      else return "Đã nghỉ việc";
    },
    btnAdd() {
      this.isHideParent = false;
    },
    closePopup() {
      this.isHideParent = true;
    },
    clickRefresh() {
      location.reload();
    }
  },
  components: {
    Dialog
  },
  async created() {
    const response = await axios.get("https://localhost:44373/api/Employees");
    this.employees = response.data.Data;
  }
};
</script>

<style></style>

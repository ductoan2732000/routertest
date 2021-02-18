<template>
  <div>
    <div class="header-content">
      <div class="title-header">Nhân viên</div>
      <div class="add-header">
        <button class="btn-add" @click="btnAdd">
          <div class="btn-add-text">Thêm</div>
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
        <!-- <DropDown
          :Datas="SelectDepartments"
          class="select-department-position"
        /> -->
      </div>
      <!-- <div class="filtet-right">
        <button
          class="btn-delete"
          :class="{ deleteon: DeleteOnTrue }"
          @click="clickDelete"
        ></button>
        <button class="btn-fresh" @click="clickRefresh"></button>
      </div> -->
    </div>
    <div class="data-content">
      <table id="data-table" cellspacing="0" cellpadding="0">
        <thead>
          <tr>
            <!-- <th></th> -->
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
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in employees" :key="index">
            <!-- <td>
              <input
                type="checkbox"
                class="checkbox-row-table"
                v-model="checkedRow[item.EmployeeId]"
              />
            </td> -->
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
            <td class="functions">
              <button class="adjuss">Sửa</button>
              <Function :Datas="Functions" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="pagging-bar">
      <div class="pagging-info">
        Tổng số
        <b>{{
          this.ofset +
            1 +
            "-" +
            (parseInt(this.limit) + this.ofset) +
            " / " +
            this.number
        }}</b>
      </div>
      <div class="pagging-option">
        <button class="first-page">Trước</button>
        <div class="list-page">
          <button class="btn-page select-page">{{ page[0] }}</button>
          <button
            class="btn-page"
            @click="selectPage(page[1])"
            v-html="page[1]"
          ></button>
          <button class="btn-page" @click="selectPage(page[2])">
            {{ page[2] }}
          </button>
          <button class="btn-page" @click="selectPage(page[3])">
            {{ page[3] }}
          </button>
        </div>
        <button class="last-page">Sau</button>
      </div>
      <DropUp
        :Datas="SelectPositions"
        class="pagging-recode"
        @ClickAnItemChoose="updateNumber($event)"
      />
    </div>
    <Dialog :isHide="isHideParent" @closePopup="closePopup"></Dialog>
  </div>
</template>

<script>
import * as axios from "axios";
import Dialog from "./DialogEmployee.vue";
import DropDown from "../base/DropDown";
import DropUp from "../base/DropUp";
import Function from "../base/Function";
export default {
  name: "Employee",
  data() {
    return {
      employees: [],
      page: [1, 2, 3, 4],
      number: 0,
      limit: 10,
      ofset: 0,
      isHideParent: true,
      checkedRow: {},
      DeleteOnTrue: this.clickDelete(),
      // SelectDepartments: {
      //   selectItems: "Chọn phòng ban",
      //   items: [
      //     "Tất cả phòng ban",
      //     "Phòng giám đốc",
      //     "Phòng nhân sự",
      //     "Phòng giao ban"
      //   ]
      // },
      SelectPositions: {
        selectItems: "10 bản ghi 1 trang",
        items: [
          "10 bản ghi 1 trang",
          "20 bản ghi 1 trang",
          "30 bản ghi 1 trang"
        ]
      },
      Functions: {
        selectItems: "",
        items: ["Nhân bản", "Xóa", "Ngừng sử dụng"]
      }
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
    },
    clickDelete() {
      for (let property in this.checkedRow) {
        if (this.checkedRow[property] == true) return true;
        else return false;
      }
    },
    updateNumber(e) {
      this.limit = e.slice(0, 2);
      this.updateView();
    },
    async updateView() {
      const response = await axios.get(
        "https://localhost:44373/api/v1/Employees/Pagging?limit=" +
          this.limit +
          "&ofset=" +
          this.ofset
      );
      this.employees = response.data.Data;
    },
    selectPage(pageIsChoose) {
      let maxPage = 0;
      if (this.number % this.limit == 0) {
        maxPage = this.number / this.limit;
      } else maxPage = Math.floor(this.number / this.limit) + 1;

      if (pageIsChoose <= maxPage) {
        let j = 0;
        for (let i = pageIsChoose; i <= maxPage; i++) {
          this.page[j] = i;
          j++;
        }
        if (j <= 3) {
          for (let i = j; i <= 3; i++) this.page[i] = 0;
        }
      }

      console.log(this.page);
    }
  },
  components: {
    Dialog,
    DropDown,
    DropUp,
    Function
  },
  async created() {
    const numberTotal = await axios.get(
      "https://localhost:44373/api/v1/Employees/number"
    );
    const response = await axios.get(
      "https://localhost:44373/api/v1/Employees/Pagging?limit=" +
        this.limit +
        "&ofset=" +
        this.ofset
    );

    this.number = numberTotal.data.Data.Total;
    this.employees = response.data.Data;
  }
};
</script>

<style></style>

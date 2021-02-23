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
          required
          v-model="searchByOther"
          v-on:keyup.enter="searchByCodeAndName(searchByOther)"
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
      <table id="data-table">
        <thead>
          <tr>
            <!-- <th></th> -->
            <th>Mã nhân viên</th>
            <th>Tên nhân viên</th>
            <th>Chức danh</th>
            <th>Tên đơn vị</th>
            <th>Số tài khoản</th>
            <th>Tên ngân hàng</th>
            <th>Trạng thái</th>
            <th>Chi nhánh</th>
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
            <td>{{ item.Title }}</td>
            <td>{{ item.DepartmentName }}</td>
            <td>{{ item.BankCode }}</td>
            <td>{{ item.BankName }}</td>
            <td>{{ formartStatus(item.Status) }}</td>
            <td>{{ item.Branch }}</td>
            <td class="functions">
              <button class="adjuss" @click="UpdateData(item)">Sửa</button>
              <Function
                :Datas="Functions"
                :dataId="item.EmployeeId"
                @ClickAnItemChoose="chooseFunctionData($event, item.EmployeeId)"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="pagging-bar">
      <div class="pagging-info">
        Tổng số
        <b>{{
          this.ofset + 1 + "-" + this.checkLimited() + " / " + this.number
        }}</b>
      </div>
      <div class="pagging-option">
        <button class="first-page" @click="firstPage">Trước</button>
        <div class="list-page">
          <button class="btn-page select-page">{{ page[0] }}</button>
          <button
            class="btn-page"
            @click="selectPage(page[1])"
            v-html="this.checkShowPageNull(page[1])"
          ></button>
          <button class="btn-page" @click="selectPage(page[2])">
            {{ this.checkShowPageNull(page[2]) }}
          </button>
          <button class="btn-page" @click="selectPage(page[3])">
            {{ this.checkShowPageNull(page[3]) }}
          </button>
        </div>
        <button class="last-page" @click="chooseLastPage">Sau</button>
      </div>
      <DropUp
        :Datas="SelectPositions"
        class="pagging-recode"
        @ClickAnItemChoose="updateNumber($event)"
      />
    </div>
    <Dialog
      :isHide="isHideParent"
      :Employee="employeeTemp"
      :listBank="listBankTemp"
      :checkShowIsTrue="checkBankIsTrue"
      :checkRequireCode="checkRequireCode"
      :checkRequireName="checkRequireName"
      :checkRequireDep="checkRequireDep"
      @closePopup="closePopup"
      @closePopupAndReload="closePopupAndReload"
      @checkShowIsTrueContact="checkShowIsTrueContact($event)"
      @checkShowIsTrueBank="checkShowIsTrueBank($event)"
      @changeRequireDep="changeRequireDep($event)"
      @changeRequireName="changeRequireName($event)"
      @changeRequireCode="changeRequireCode($event)"
    ></Dialog>
    <PopUp
      :checkPopUp="!deleteEmployeeShow"
      :msgPopup="msgEmployeePopup"
      :indexDelete="indexDeleteBank"
      @closePopUpAlert="closeAlertPopUp"
      @OutPopUpAlert="outAlertPopUp"
      @notDeletBank="notDeletBankFromEmployee($event)"
      @deleteBankYes="deleteBankYesFromEmployee($event)"
    ></PopUp>
  </div>
</template>

<script>
import * as axios from "axios";
import Dialog from "./DialogEmployee.vue";
import DropDown from "../base/DropDown";
import DropUp from "../base/DropUp";
import Function from "../base/Function";
import PopUp from "../base/PopUp";
export default {
  name: "Employee",
  data() {
    return {
      deleteEmployeeShow: false,
      msgEmployeePopup: "",
      indexDeleteBank: "",
      searchByOther: "",
      EmployeeOrigin: {
        EmployeeId: "00000000-0000-0000-0000-000000000000",
        EmployeeCode: "",
        FullName: "",
        DateOfBirth: "",
        Gender: 0,
        IdentityCard: "",
        IdentityDate: "",
        IdentityLocation: "",
        Email: "",
        PhoneNumber: "",
        PositionGroupId: "6528b15d-6674-724f-79a4-4b24de418577",
        DepartmentId: "00000000-0000-0000-0000-000000000000",
        PersonalTaxCode: "",
        BasicSalary: "",
        JoiningDate: "",
        Status: 0,
        CreatedDate: "",
        CreatedBy: "",
        ModifiedDate: "",
        ModifiedBy: "",
        PositionName: "Phó giám đốc",
        DepartmentName: "",
        Title: "",
        Branch: "",
        BankCode: "",
        BankName: "",
        BankBranch: "",
        BankLocation: "",
        PhoneLandline: "",
        Address: ""
      },
      EmployeeBackUp: {},
      EmployeeUpdateStatus: {},
      employees: [],
      checkRequireCode: true,
      checkRequireName: true,
      checkRequireDep: true,
      page: [1, 2, 3, 4],
      page1: 1,
      page2: 2,
      page3: 3,
      page4: 4,
      number: 0,
      limit: 10,
      ofset: 0,
      isHideParent: true,
      checkBankIsTrue: true,
      employeeTemp: {
        EmployeeId: "00000000-0000-0000-0000-000000000000",
        EmployeeCode: "",
        FullName: "",
        DateOfBirth: "",
        Gender: 0,
        IdentityCard: "",
        IdentityDate: "",
        IdentityLocation: "",
        Email: "",
        PhoneNumber: "",
        PositionGroupId: "6528b15d-6674-724f-79a4-4b24de418577",
        DepartmentId: "",
        PersonalTaxCode: "",
        BasicSalary: "",
        JoiningDate: "",
        Status: null,
        CreatedDate: "",
        CreatedBy: "",
        ModifiedDate: "",
        ModifiedBy: "",
        PositionName: "Phó giám đốc",
        DepartmentName: "",
        Title: "",
        Branch: "",
        BankCode: "",
        BankName: "",
        BankBranch: "",
        BankLocation: "",
        PhoneLandline: "",
        Address: ""
      },
      listBankOrigin: [],
      listBankTemp: [],
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
    closeAlertPopUp() {
      this.deleteEmployeeShow = false;
    },
    outAlertPopUp() {
      location.reload();
    },
    notDeletBankFromEmployee() {
      this.deleteEmployeeShow = false;
      this.indexDeleteBank = "";
    },
    async deleteBankYesFromEmployee(e) {
      this.deleteEmployeeShow = false;
      this.indexDeleteBank = "";
      const response = await axios.delete(
        "https://localhost:44373/api/v1/Employees?id=" + e
      );
      console.log(response.data);
      this.reloadEmployee();
    },
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
      if (Status == 0) return "Đang sử dụng";
      else if (Status == 1) return "Ngưng sử dụng";
      else if (Status == 2) return "Khác";
      else return "";
    },
    firstPage() {
      this.ofset = 0;
      this.selectPage(1);
    },
    lastPage() {
      let a = this.number % this.limit;
      this.ofset = this.number - a;
      this.reloadEmployee();
    },
    chooseLastPage() {
      let maxPage;
      if (this.number % this.limit == 0) {
        maxPage = this.number / this.limit;
      } else {
        maxPage = Math.ceil(this.number / this.limit);
      }
      this.selectPage(maxPage);
    },
    checkLimited() {
      if (this.limit + this.ofset > this.number) {
        return this.number;
      } else return this.limit + this.ofset;
    },
    btnAdd() {
      this.isHideParent = false;
      this.checkBankIsTrue = true;
      this.employeeTemp = { ...this.EmployeeOrigin };
      this.employeeTemp.EmployeeCode = "NV00" + this.number.toString();
      this.checkRequireCode = false;
      this.checkRequireName = true;
      this.checkRequireDep = true;
      this.listBankTemp = [];
    },
    datetimeToDate(str) {
      return str.slice(0, 10);
    },
    async UpdateData(data) {
      this.EmployeeBackUp = { ...data };
      if (this.EmployeeBackUp.DateOfBirth != null) {
        this.EmployeeBackUp.DateOfBirth = this.datetimeToDate(
          this.EmployeeBackUp.DateOfBirth
        );
      }
      if (this.EmployeeBackUp.IdentityDate != null) {
        this.EmployeeBackUp.IdentityDate = this.datetimeToDate(
          this.EmployeeBackUp.IdentityDate
        );
      }
      this.isHideParent = false;
      this.checkBankIsTrue = true;
      this.employeeTemp = this.EmployeeBackUp;
      if (
        this.employeeTemp.EmployeeCode != "" &&
        this.employeeTemp.EmployeeCode != null
      ) {
        this.checkRequireCode = false;
      } else this.checkRequireCode = true;
      if (
        this.employeeTemp.FullName != "" &&
        this.employeeTemp.FullName != null
      ) {
        this.checkRequireName = false;
      } else this.checkRequireName = true;
      if (
        this.employeeTemp.DepartmentId != "" &&
        this.employeeTemp.DepartmentId != null
      ) {
        this.checkRequireDep = false;
      } else this.checkRequireDep = true;
      const response = await axios
        .get(
          "https://localhost:44373/api/v1/Banks/EmployeeId?id=" +
            data.EmployeeId
        )
        .then(response => (this.listBankOrigin = response.data.Data));
      this.listBankTemp = [...this.listBankOrigin];
      // const response = await axios
      //   .get(
      //     "https://localhost:44373/api/v1/Banks/EmployeeId?id=" +
      //       this.EmployeeBackUp.EmployeeId
      //   )
      //   .then(response => (this.listBank = response.data.Data));
    },
    stopUse(data) {
      console.log(data);
    },
    async chooseFunctionData(e, dataId) {
      if (e == this.Functions.items[1]) {
        this.deleteEmployeeShow = await true;
        this.indexDeleteBank = dataId;
        this.msgEmployeePopup =
          "Bạn có chắc chắn muốn xóa nhân viên này không ?";

        // const response = await axios.delete(
        //   "https://localhost:44373/api/v1/Employees?id=" + dataId
        // );
        // console.log(response.data);
        // location.reload();
      } else if (e == this.Functions.items[2]) {
        const response = await axios.get(
          "https://localhost:44373/api/v1/Employees/id?id=" + dataId
        );
        this.EmployeeUpdateStatus = response.data.Data;
        this.EmployeeUpdateStatus.Status = 1;
        console.log(this.EmployeeUpdateStatus);
        await axios.put(
          "https://localhost:44373/api/v1/Employees",
          this.EmployeeUpdateStatus
        );
        this.reloadEmployee();
      }
    },
    async getBankById(id) {
      const response = await axios
        .get("https://localhost:44373/api/v1/Banks/EmployeeId?id=" + id)
        .then(response => (this.listBankOrigin = response.data.Data));
    },
    closePopup() {
      this.isHideParent = true;
    },
    closePopupAndReload() {
      this.isHideParent = true;
      this.reloadEmployee();
    },
    checkShowIsTrueContact(e) {
      this.checkBankIsTrue = true;
    },
    checkShowIsTrueBank() {
      this.checkBankIsTrue = false;
    },
    changeRequireDep(e) {
      this.checkRequireDep = e;
    },
    changeRequireName(e) {
      this.checkRequireName = e;
    },
    changeRequireCode(e) {
      this.checkRequireCode = e;
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
      this.limit = parseInt(e.slice(0, 2));
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
    checkShowPageNull(page) {
      if (page == null) return "*";
      else return page;
    },
    selectPage(pageIsChoose) {
      let maxPage;
      if (pageIsChoose != null) {
        if (this.number % this.limit == 0) {
          maxPage = this.number / this.limit;
        } else {
          maxPage = Math.ceil(this.number / this.limit);
        }
        let arrTemp = [0, 0, 0, 0];
        if (pageIsChoose <= maxPage) {
          let i = pageIsChoose;
          let j = 0;
          for (j; j <= 3; j++) {
            if (i <= maxPage) {
              arrTemp[j] = i;
              i++;
            } else {
              arrTemp[j] = null;
            }
          }
          // console.log(arrTemp);
          // console.log(i);
          // console.log(j);
        }
        this.page = arrTemp;
        this.loadEmployeeWhenSelectPage(pageIsChoose, maxPage);
      }
    },
    loadEmployeeWhenSelectPage(page, maxPage) {
      if (page == maxPage) {
        this.lastPage();
        console.log(this.ofset);
        console.log(this.limit);
      } else {
        this.ofset = this.limit * page - this.limit;
        console.log(this.ofset);
        console.log(this.limit);
        this.reloadEmployee();
      }
    },
    async searchByCodeAndName(data) {
      if (data != "") {
        const response = await axios.get(
          "https://localhost:44373/api/v1/Employees/search?EmployeeCode=" +
            data +
            "&FullName=" +
            data +
            "&PhoneNumber=" +
            data
        );
        this.employees = response.data.Data;
      } else if (data == "" || data == null) {
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
    },
    async reloadEmployee() {
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
  },
  components: {
    Dialog,
    DropDown,
    DropUp,
    Function,
    PopUp
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

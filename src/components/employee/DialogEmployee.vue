<template>
  <div>
    <div
      class="m-dialog dialog-detail"
      title="Thông tin nhân viên"
      :class="{ isHide: isHide }"
    >
      <div class="dialog-modal"></div>
      <div class="dialog-content" id="content-dialog">
        <div class="dialog-header" id="move-dialog" @mousedown="dragElement">
          <div class="dialog-header-title">THÔNG TIN NHÂN VIÊN</div>
          <div class="option-employee">
            <input type="checkbox" id="check1" name="" value="" />
            <label for="check1" class="checkbox-check">Là khách hàng</label>
          </div>
          <div class="option-employee">
            <input type="checkbox" id="check2" name="" value="" />
            <label for="check2" class="checkbox-check">Là nhà cung cấp</label>
          </div>
          <div class="dialog-header-help"></div>
          <div class="dialog-header-close">
            <button v-on:click="btnCancelOnClick">x</button>
          </div>
        </div>
        <div class="dialog-body">
          <div class="m-row m-flex">
            <!-- <div class="m-col el-avatar-employee m-flex-1">
              <div class="el-avatar"></div>
              <div class="el-avatar-note text-align-center">
                (Vui lòng chọn ảnh có định dạng <br /><b
                  >.jpg, .jpeg, .png, .gif. </b
                >)
              </div>
            </div> -->
            <div class="m-col el-left m-flex-4">
              <div class="m-row mg-top-0 m-flex">
                <div class="m-col m-flex-2">
                  <div class="m-label">
                    Mã (<span class="label-required">*</span>)
                  </div>
                  <div class="m-control">
                    <input
                      id="txtEmployeeCode"
                      fieldName="EmployeeCode"
                      required
                      class="input-required"
                      :class="{ 'border-red': checkRequiredInput() }"
                      @blur="checkRequiredInput(Employee.EmployeeCode)"
                      type="text"
                      v-model="Employee.EmployeeCode"
                    />
                  </div>
                </div>
                <div class="m-flex-3 mg-left-10px">
                  <div class="m-label">
                    Họ và tên (<span class="label-required">*</span>)
                  </div>
                  <div class="m-control">
                    <input
                      id="txtFullName"
                      fieldName="FullName"
                      class="input-required"
                      type="text"
                      required
                      v-model="Employee.FullName"
                    />
                  </div>
                </div>
                <div class="m-flex-2 mg-left-10px">
                  <div class="m-label">Ngày sinh</div>
                  <input
                    class="m-combobox-input"
                    type="date"
                    autocomplete="off"
                    v-model="Employee.DateOfBirth"
                  />
                </div>
                <div class="m-flex-2 mg-left-10px">
                  <div class="m-label">Giới tính</div>
                  <select
                    id="cbxGender"
                    class="m-control"
                    v-model="Employee.Gender"
                  >
                    <option value="0">Nam</option>
                    <option value="1">Nữ</option>
                    <option value="2">Khác</option>
                  </select>
                </div>
              </div>
              <div class="m-row m-flex">
                <div class="m-flex-6">
                  <div class="m-label">
                    Đơn vị (<span class="label-required">*</span>)
                  </div>
                  <select
                    id="cbxPosition"
                    class="m-control"
                    v-model="Employee.DepartmentId"
                  >
                    <option disabled value="">Chọn vị trí</option>
                    <option
                      v-for="(item, index) in listEmployeeDepartment"
                      :key="index"
                      :value="item.DepartmentId"
                    >
                      {{ item.DepartmentName }}
                    </option>
                    <!-- <option value="19165ed7-212e-21c4-0428-030d4265475f">
                      Nhân viên
                    </option> -->
                  </select>
                </div>
                <div class="m-flex-3 mg-left-10px">
                  <div
                    class="m-label"
                    title="Số chứng minh thư nhân dân hoặc căn cước công dân"
                  >
                    Số CMND
                  </div>
                  <div class="m-control">
                    <input
                      id="txtIdentityNumber"
                      fieldName="text"
                      type="text"
                      required
                      v-model="Employee.IdentityCard"
                    />
                  </div>
                </div>
                <div class="m-flex-2 mg-left-10px">
                  <div class="m-label">Ngày cấp</div>
                  <input
                    class="m-combobox-input"
                    type="date"
                    autocomplete="off"
                    v-model="Employee.IdentityDate"
                  />
                </div>
              </div>
              <div class="m-row m-flex">
                <div class="m-flex-1">
                  <div class="m-label">Chức danh</div>
                  <div class="m-control">
                    <input
                      id="txtIdentityPlace"
                      fieldName="PhoneNumber"
                      class="input-required"
                      type="text"
                      v-model="Employee.Title"
                    />
                  </div>
                </div>
                <div class="m-flex-1 mg-left-10px">
                  <div class="m-label">Nơi cấp</div>
                  <div class="m-control">
                    <input
                      id="txtIdentityPlace"
                      fieldName="PhoneNumber"
                      class="input-required"
                      type="text"
                      v-model="Employee.IdentityLocation"
                    />
                  </div>
                </div>
              </div>
              <button
                @click="ShowTrue"
                class="dialog-contact"
                :class="{ backgoundblue: checkShowIsTrue }"
              >
                Liên hệ
              </button>
              <button
                @click="ShowFalse"
                class="dialog-contact"
                :class="{ backgoundblue: !checkShowIsTrue }"
              >
                Tài khoản ngân hàng
              </button>
              <div v-show="checkShowIsTrue == true" class="area2">
                <div class="m-row m-flex mg-left-10px mg-right-10px">
                  <div class="m-flex-1">
                    <div class="m-label">Địa chỉ</div>
                    <div class="m-control">
                      <input
                        id="txtIdentityPlace"
                        fieldName="PhoneNumber"
                        class="input-required"
                        type="text"
                        v-model="Employee.Address"
                      />
                    </div>
                  </div>
                </div>
                <div class="m-row m-flex mg-left-10px">
                  <div class="m-flex-0">
                    <div class="m-label">DT di động</div>
                    <div class="m-control">
                      <input
                        id="txtAddress"
                        fieldName="Address"
                        type="text"
                        v-model="Employee.PhoneNumber"
                      />
                    </div>
                  </div>
                  <div class="m-flex-0 mg-left-10px">
                    <div class="m-label">DT cố định</div>
                    <div class="m-control">
                      <input
                        id="txtAddress"
                        fieldName="Address"
                        type="text"
                        v-model="Employee.PhoneLandline"
                      />

                      <!-- <span class="currency-for-input">(VNĐ)</span> -->
                    </div>
                  </div>
                  <div class="m-flex-0 mg-left-10px">
                    <div class="m-label">Email</div>
                    <div class="m-control">
                      <input
                        id="txtAddress"
                        fieldName="Address"
                        type="text"
                        v-model="Employee.Email"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div v-show="checkShowIsTrue == false">
                <div class="area2">
                  <table id="table-bank" cellspacing="0" cellpadding="0">
                    <thead>
                      <tr>
                        <th>
                          Số tài khoản (<span class="label-required">*</span>)
                        </th>
                        <th>
                          Tên ngân hàng (<span class="label-required">*</span>)
                        </th>
                        <th>Chi nhánh</th>
                        <th>Tỉnh/Tp ngân hàng</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item, index) in listBank" :key="index">
                        <td><input type="text" v-model="item.BankCode" /></td>
                        <td><input type="text" v-model="item.BankName" /></td>
                        <td><input type="text" v-model="item.BankBranch" /></td>
                        <td>
                          <input type="text" v-model="item.BankLocation" />
                        </td>
                        <td>
                          <button class="btn-delete"></button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="m-row mg-top-0 m-flex">
                    <button
                      class="m-col mg-left-10px btn-area2"
                      @click="addNewBank(Employee.EmployeeId)"
                    >
                      Thêm dòng
                    </button>
                    <button
                      class="m-col mg-left-10px btn-area2"
                      @click="deleteABank"
                    >
                      Xóa hết dòng
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="dialog-footer">
          <button
            id="btnCancel"
            class="m-btn m-btn-default m-btn-cancel"
            v-on:click="btnCancelOnClick"
          >
            Hủy
          </button>
          <div class="addout-add">
            <button
              id="btnSave"
              class="m-btn m-btn-default"
              v-on:click="saveEmployee"
            >
              <i class="far fa-save"></i><span class="btn-text">Cất</span>
            </button>
            <button
              id="btnSave"
              class="m-btn m-btn-default mg-left-10px"
              v-on:click="saveAndAddEmployee"
            >
              <i class="far fa-save"></i
              ><span class="btn-text">Cất và thêm</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import * as axios from "axios";
export default {
  props: {
    isHide: Boolean,
    Employee: Object,
    checkShowIsTrue: Boolean
  },
  data() {
    return {
      listEmployeeDepartment: [],
      listBank: [],
      listEmployeePosition: [],
      bankTemp: {
        BankId: "00000000-0000-0000-0000-000000000000",
        BankCode: "",
        BankName: "",
        BankBranch: "",
        BankLocation: "",
        EmployeeId: "00000000-0000-0000-0000-000000000000"
      },
      dialog: false,
      display: "none"
      // checkShowIsTrue: true
    };
  },
  methods: {
    ShowTrue() {
      this.$emit("checkShowIsTrueContact", true);
      // this.checkShowIsTrue = true;
    },
    ShowFalse() {
      // this.checkShowIsTrue = false;
      this.$emit("checkShowIsTrueBank", false);
      if (this.Employee.EmployeeId == "00000000-0000-0000-0000-000000000000") {
        this.listBank = [];
      } else {
        this.getBankById();
      }
    },
    dragElement(e) {
      var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;

      let dialog = e.target.parentNode;
      dragMouseDown(e);

      function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
      }

      function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        dialog.style.top = dialog.offsetTop - pos2 + "px";
        dialog.style.left = dialog.offsetLeft - pos1 + "px";
      }

      function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
      }
    },
    btnAddOnClick() {
      this.isHide = false;
    },
    btnCancelOnClick() {
      this.$emit("closePopup", true);
    },
    rowOnClick(employee) {
      alert(employee.FullName);
    },
    addNewBank(Id) {
      this.bankTemp.EmployeeId = Id;
      this.listBank.push({ ...this.bankTemp });
    },
    deleteABank() {
      this.bankTemp.EmployeeId = this.Employee.EmployeeId;
      this.listBank.push(this.bankTemp);
    },
    async saveEmployee() {
      if (this.Employee.EmployeeId == "00000000-0000-0000-0000-000000000000") {
        console.log(this.Employee);
        const response = await axios.post(
          "https://localhost:44373/api/v1/Employees",
          this.Employee
        );
        console.log(response);
      } else {
        const response = await axios.put(
          "https://localhost:44373/api/v1/Employees",
          this.Employee
        );
        console.log(response);
      }

      location.reload();
    },
    saveAndAddEmployee() {
      this.saveEmployee();
    },
    async deleteBank(bankId) {
      const response = await axios.delete(
        "https://localhost:44373/api/v1/Banks?id=" + bankId
      );
    },
    async deleteBankByEmpployeeId(employeeId) {
      const response = await axios.delete(
        "https://localhost:44373/api/v1/Banks/id?id=" + employeeId
      );
    },

    checkRequiredInput(text) {
      if (text == "" || text == null) {
        return true;
      }
      // console.log(false);
    },
    async getListEmployeeDepartment() {
      await axios
        .get("https://localhost:44373/api/v1/Departments")
        .then(response => (this.listEmployeeDepartment = response.data.Data));
      console.log(this.listEmployeeDepartment);
    },
    // async getListBank() {
    //   await axios
    //     .get("https://localhost:44373/api/v1/Banks")
    //     .then(response => (this.listBank = response.data.Data));
    //   console.log(this.listBank);
    // }
    async getBankById() {
      const response = await axios
        .get(
          "https://localhost:44373/api/v1/Banks/EmployeeId?id=" +
            this.Employee.EmployeeId
        )
        .then(response => (this.listBank = response.data.Data));
    }
  },
  created() {
    this.getListEmployeeDepartment();
    // this.getListBank();
    //this.Employee.EmployeeDepartment.EmployeeDepartmentId = this.listEmployeeDepartment[0];
    //console.log(this.Employee.EmployeeDepartment.EmployeeDepartmentId);
    // this.getListEmployeePosition();
    this.checkShowIsTrue = true;
  }
};
</script>
<style scoped>
.isHide {
  display: none;
}
.m-dialog {
  z-index: 999;
}

.dialog-header {
  position: relative;
  height: 40px;
  /* line-height: 60px; */
  padding-left: 16px;
  display: flex;
  font-size: 24px;
  display: flex;
  align-items: center;
}
.dialog-header-help {
  position: absolute;
  right: 50px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  align-items: center;
  border: none;
  background-color: transparent;
}
.dialog-header-close {
  position: absolute;
  right: 16px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  cursor: pointer;
  align-items: center;
  border: none;
  background-color: transparent;
  font-size: 24px;
  line-height: 24px;
}
.dialog-modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: black;
  opacity: 0.4;
}

.dialog-content {
  height: 550px;
  position: fixed;
  border-radius: 5px;
  width: 835px;
  background-color: #fff;
  left: calc(50% - 325px);
  top: calc(50% - 300px);
  overflow: auto;
}
.dialog-content::-webkit-scrollbar {
  width: 5px;
}
.dialog-content::-webkit-scrollbar-track {
  background-color: #fff;
}
.dialog-content::-webkit-scrollbar-thumb {
  background-color: #bbbbbb;
  border-radius: 10px;
}
.dialog-content::-webkit-scrollbar-thumb:hover {
  background-color: #019160;
}
.dialog-body {
  padding: 0 16px 16px 16px;
}
.dialog-footer {
  display: flex;
  width: 100%;
  height: 60px;
  background-color: #e9ebee;
  border-radius: 0 0 5px 5px;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  box-sizing: border-box;
}
.addout-add {
  display: flex;
}
.el-avatar-employee {
  padding-top: 16px;
  padding-right: 16px;
}
.el-avatar-note {
  font-size: 12px;
}
.el-avatar-employee .el-avatar {
  border: 1px solid #ccc;
  width: 160px;
  height: 160px;
  margin: 0 auto;
  border-radius: 50%;
  cursor: pointer;
  /* background-image: url('../../assets/content/img/default-avatar.jpg'); */
  /* background-repeat: no-repeat;
  background-position: center;
  background-size: cover; */
}
.currency-for-input {
  position: absolute;
  right: 40px;
  line-height: 40px;
  font-style: italic;
}
.text-align-right {
  text-align: right;
}

.text-align-center {
  text-align: center;
}

a {
  text-decoration: none;
  color: #000000;
}

.m-row {
  margin-top: 16px;
}

.m-flex-1 {
  flex: 1;
}

.m-flex-2 {
  flex: 2;
}

.m-flex-3 {
  flex: 3;
}

.m-flex-4 {
  flex: 4;
}

.m-flex-5 {
  flex: 5;
}

.m-flex-6 {
  flex: 6;
}

.m-label {
  margin-bottom: 4px;
}

.m-flex {
  display: flex;
}

.mg-left-10px {
  margin-left: 10px;
}
.mg-right-10px {
  margin-right: 10px;
}
.mg-left-20px {
  margin-left: 20px;
}

.mg-top-0 {
  margin-top: 0px;
}

.label-required {
  color: #ff0000;
}

.notice-required {
  display: none;
  position: absolute;
  background-color: #ff4747;
  color: #ffffff;
  top: 0;
  padding: 5px;
  border-radius: 5px;
}

.notice-required-abow {
  display: block;
  width: 10px;
  height: 10px;
  position: absolute;
  background-color: #ff4747;
  transform: rotate(45deg);
  left: 50%;
}

input[required]::after {
  display: block;
  width: 10px;
  height: 10px;
  position: absolute;
  background-color: #ff4747;
  transform: rotate(45deg);
  left: 50%;
  content: "Thông tin";
}

input.border-red {
  border: 1px solid #ff4747;
}

.loading {
  display: none;
}
.loading-modal {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #000;
  opacity: 0.5;
  z-index: 999;
}
.loading-icon {
  position: fixed;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  top: calc(50% - 15px);
  left: calc(50% - 15px);
  border: 2px solid #4cff00;
  border-bottom: none;
  animation: spin 2s linear infinite;
}

.row-selected {
  background-color: #01916026 !important;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.box-toast-msg {
  display: none;
  position: fixed;
  background-color: #ffffff;
  padding: 24px;
  color: #019160;
  font-size: 20px;
  bottom: 24px;
  text-align: center;
  right: 24px;
  border: 1px solid #ccc;
}

.group-label-info {
  margin-top: 10px;
  font-weight: bold;
  text-transform: uppercase;
}

.hr-group-label {
  width: 70px;
  margin-left: 0;
  border: 2px solid #019160;
  background-color: #019160;
}
.el-avatar-employee {
  padding-top: 16px;
  padding-right: 16px;
}
.el-avatar-employee .el-avatar {
  border: 1px solid #ccc;
  width: 160px;
  height: 160px;
  margin: 0 auto;
  border-radius: 50%;
  cursor: pointer;
  /* background-image: url('../../assets/content/img/default-avatar.jpg'); */
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
input,
select {
  padding: 10px 16px;
  border-radius: 4px !important;
  outline: none !important;
  width: 100%;
  height: 40px;
  box-sizing: border-box !important;
}

input[type="radio"] {
  height: 20px;
  width: 20px;
}
input {
  border: 1px solid #bbbbbb;
}
input:focus,
select:focus {
  border-color: #019160;
}

input::placeholder {
  font-size: 11px;
}

.input-search {
  padding-left: 40px;
}

.m-date-picker {
  display: block;
}

.m-date-picker .dateInput {
  position: relative;
  display: flex;
  align-items: center;
}

.m-date-picker .dateInput .ui-datepicker-trigger {
  width: 16px;
  height: 16px;
  position: absolute;
  right: 0px;
  z-index: 1;
  border: 12px solid rgba(0, 0, 0, 0);
  border-radius: 0 5px 5px 0;
  cursor: pointer;
}

.m-date-picker .dateInput .dateInput-icon-box {
  width: 40px;
  height: 40px;
  border-radius: 0 5px 5px 0;
  position: absolute;
  right: 0;
  border-left: 1px solid #bbbbbb;
  z-index: 0;
}

/* Combobox */
.m-combobox {
  position: relative;
  display: block;
}

.m-combobox input {
  padding-right: 56px;
  z-index: 1;
}

.m-combobox button {
  position: absolute;
  right: 0;
  width: 40px;
  height: 40px;
  border: 0;
  border-left: 1px solid #bbbbbb;
  background-color: rgba(0, 0, 170, 0);
  outline: none;
  cursor: pointer !important;
  z-index: 999;
}

.m-combobox .m-combobox-data {
  display: none;
  position: absolute;
  top: 61px;
  background-color: #ffffff;
  width: 100%;
  z-index: 3;
  border-radius: 5px;
  padding: 5px 0 5px 0;
  z-index: 999;
  box-sizing: border-box;
  -webkit-box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.2);
}

.m-combobox .m-combobox-data .m-combobox-item {
  display: flex;
  height: 40px;
  /*border-bottom: 1px solid #bbbbbb;*/
  border-top: none;
  line-height: 40px;
  padding: 0 16px;
}

.m-combobox .m-combobox-data .m-combobox-item:hover {
  background-color: #e9ebee;
  cursor: pointer;
}

.m-combobox .m-combobox-data .m-combobox-item:last-child {
  border-bottom: none;
}

.m-combobox .m-combobox-data .mCombobox__item--selected {
  background-color: #019160 !important;
  color: #ffffff;
}
/* #btnSave {
    background-image: url('../../assets/content/icon/save.png');
} */
#btnCancel {
  background-color: #e5e5e5;
  color: #000000;
  margin-right: 16px;
}
#btnCancel:hover {
  background-color: #d2cfcf;
}
input:focus {
  border: 1px solid #01b075 !important;
}
input.border-red {
  border: 1px solid #ff4747;
}
.m-btn {
  display: flex;
  align-items: center;
  background-color: #019160;
  border-radius: 4px;
  height: 40px;
  font-size: 13px;
  color: #ffffff;
  font-family: GoogleSans-Regular;
  padding-left: 16px;
  padding-right: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  min-width: 100px;
  justify-content: center;
}

.m-btn:hover,
.m-btn:focus {
  background-color: #2fbe8e;
}

.m-btn .m-btn-icon {
  background-position: center;
}

.m-btn .btn-text {
  margin-left: 8px;
}

.m-btn .m-btn-text .m-second-button {
  border: 1px solid #bbbbbb;
  background-color: #ffffff;
  border-radius: 4px;
  height: 40px;
  color: #000000;
  padding-left: 24px;
  padding-right: 24px;
  text-align: center;
  outline: none;
  cursor: pointer;
}

.m-second-button:hover {
  background-color: #e9ebee;
}

.m-btn-cancel {
  color: #000000;
  background-color: transparent;
}

.m-btn-cancel:hover,
.m-btn-cancel:focus {
  background-color: #bbbbbb;
}
#content-dialog {
  /* position: absolute; */
  z-index: 9;
}

#move-dialog {
  cursor: move;
  z-index: 10;
}
.backgoundblue {
  background-color: #019160;
}
.backgroundgray {
  background-color: #d2cfcf;
}
</style>

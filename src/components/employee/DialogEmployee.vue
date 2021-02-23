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
            <input type="checkbox" id="check1" name="option-c" value="" />
            <label for="check1" class="checkbox-check">Là khách hàng</label>
          </div>
          <div class="option-employee">
            <input type="checkbox" id="check2" name="option-c" value="" />
            <label for="check2" class="checkbox-check">Là nhà cung cấp</label>
          </div>
          <div class="dialog-header-help"></div>
          <div class="dialog-header-close">
            <button v-on:click="btnCancelOnClick" class="btn-x m-btn-default">
              <i class="far fa-save"></i><span class="btn-text">x</span>
            </button>
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
                      ref="txtEmployeeCode"
                      fieldName="EmployeeCode"
                      required
                      class="input-required"
                      :class="{ 'border-red': this.checkRequireCode }"
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
                      :class="{ 'border-red': this.checkRequireName }"
                      @blur="checkRequiredInputName(Employee.FullName)"
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
                    :class="{ 'border-red': this.checkRequireDep }"
                    @blur="checkRequiredSelect(Employee.DepartmentId)"
                    v-model="Employee.DepartmentId"
                  >
                    <option
                      disabled
                      value="00000000-0000-0000-0000-000000000000"
                      >Chọn vị trí</option
                    >
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
                      <input type="text" v-model="Employee.PhoneNumber" />
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
                          Tên ngân hàng
                        </th>
                        <th>Chi nhánh</th>
                        <th>Tỉnh/Tp ngân hàng</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item, index) in listBank" :key="index">
                        <td>
                          <input type="text" v-model="item.BankCode" />
                        </td>
                        <td><input type="text" v-model="item.BankName" /></td>
                        <td><input type="text" v-model="item.BankBranch" /></td>
                        <td>
                          <input type="text" v-model="item.BankLocation" />
                        </td>
                        <td>
                          <button
                            class="btn-delete"
                            @click="deleteARowBank(index)"
                          ></button>
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
        <PopUp
          :checkPopUp="!popUpShow"
          :msgPopup="msgPopup"
          :indexDelete="indexDelete"
          @closePopUpAlert="closeAlert"
          @OutPopUpAlert="outAlert"
          @notDeletBank="notDeletBank($event)"
          @deleteBankYes="deleteBankYes($event)"
        ></PopUp>
      </div>
    </div>
  </div>
</template>
<script>
import * as axios from "axios";
import PopUp from "../base/PopUp";
export default {
  props: {
    isHide: Boolean,
    Employee: Object,
    checkShowIsTrue: Boolean,
    listBank: Array,
    checkRequireCode: Boolean,
    checkRequireName: Boolean,
    checkRequireDep: Boolean
  },
  components: {
    PopUp
  },
  data() {
    return {
      listEmployeeDepartment: [],
      // listBank: [],
      // checkRequireCode: true,
      // checkRequireName: true,
      // checkRequireDep: true,
      // checkBankCode: [],
      listEmployeePosition: [],
      bankTemp: {
        BankId: "00000000-0000-0000-0000-000000000000",
        BankCode: "",
        BankName: "",
        BankBranch: "",
        BankLocation: "",
        EmployeeId: "00000000-0000-0000-0000-000000000000"
      },
      EmployeeAfterAdd: {},
      popUpShow: false,
      indexDelete: "",
      optionDeleteBank: "",
      msgPopup: "",
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
    closeAlert() {
      this.popUpShow = false;
    },
    outAlert() {
      // location.reload();
      this.popUpShow = false;
      this.$emit("closePopupAndReload");
    },
    notDeletBank(e) {
      this.popUpShow = false;
      this.optionDeleteBank = e;
      this.indexDelete = "";
    },
    deleteBankYes(e) {
      this.popUpShow = false;
      this.listBank.splice(Number(e), 1);
      console.log(e);
      this.indexDelete = "";
    },
    focusInput() {
      this.$refs.txtEmployeeCode.focus();
    },
    ShowFalse() {
      // this.checkShowIsTrue = false;
      this.$emit("checkShowIsTrueBank", false);
      // if (this.Employee.EmployeeId == "00000000-0000-0000-0000-000000000000") {
      //   this.listBank = [];
      // } else {
      //   this.getBankById();
      // }
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
      this.listBank = [];
    },
    deleteARowBank(index) {
      this.popUpShow = !this.popUpShow;
      this.msgPopup = "Bạn có chắc chắn muốn xóa tài khoản ngân hàng này ?";
      this.indexDelete = index.toString();
      // if (this.optionDeleteBank == "No") {
      // } else {
      //   this.listBank.splice(index, 1);
      // }
    },
    async saveEmployee() {
      if (this.Employee.EmployeeId == "00000000-0000-0000-0000-000000000000") {
        const response = await axios.post(
          "https://localhost:44373/api/v1/Employees",
          this.Employee
        );
        console.log(response.data.Message);
        if (response.data.Message.includes("(Thêm thành công).")) {
          await this.getEmployeeByCode(this.listBank);
        }
        this.msgPopup = await response.data.Message;
        this.popUpShow = !this.popUpShow;
        // alert(response.data.Message);
      } else {
        const response = await axios.put(
          "https://localhost:44373/api/v1/Employees",
          this.Employee
        );

        console.log(response.data.Message);
        if (response.data.Message.includes("(Sửa thành công).")) {
          await axios.delete(
            "https://localhost:44373/api/v1/Banks/id?id=" +
              this.Employee.EmployeeId
          );
          await this.addListBank();
        }
        this.msgPopup = await response.data.Message;
        this.popUpShow = !this.popUpShow;
      }

      // await location.reload();
    },
    async bankGetIdAfterAdd(Id) {
      if (this.listBank.length != 0) {
        for (let i = 0; i < this.listBank.length; i++) {
          await console.log(this.EmployeeAfterAdd.EmployeeId);
          this.listBank[i].EmployeeId = await Id;
          await console.log(this.listBank[i].EmployeeId);
        }
      }
    },
    async addListBank() {
      if (this.listBank.length != 0) {
        for (let i = 0; i < this.listBank.length; i++) {
          await axios.post(
            "https://localhost:44373/api/v1/Banks",
            this.listBank[i]
          );
        }
      }
    },
    async getEmployeeByCode(data) {
      const response = await axios
        .get(
          "https://localhost:44373/api/v1/Employees/search?EmployeeCode=" +
            this.Employee.EmployeeCode +
            "&FullName=" +
            this.Employee.EmployeeCode +
            "&PhoneNumber=" +
            this.Employee.EmployeeCode
        )
        .then(async function(response) {
          if (data.length != 0) {
            for (let i = 0; i < data.length; i++) {
              data[i].EmployeeId = response.data.Data[0].EmployeeId;
              await axios.post("https://localhost:44373/api/v1/Banks", data[i]);
            }
          }
        });
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
        this.$emit("changeRequireCode", true);
      } else this.$emit("changeRequireCode", false);
    },
    checkRequiredInputName(text) {
      if (text == "" || text == null) {
        this.$emit("changeRequireName", true);
      } else this.$emit("changeRequireName", false);
    },
    checkRequiredSelect(text) {
      if (
        text == "" ||
        text == null ||
        text == "00000000-0000-0000-0000-000000000000"
      ) {
        this.$emit("changeRequireDep", true);
      } else this.$emit("changeRequireDep", false);
    },
    // checkBankCodeIsTrue(text, index) {
    //   console.log(text);
    //   if (text == "" || text == null) {
    //     this.checkBankCode[index] = true;
    //   } else this.checkBankCode[index] = false;
    // },
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
  // watch: {
  //   isHide() {
  //     // document.getElementById("txtEmployeeCode").focus();
  //     this.$refs.txtEmployeeCode.focus();
  //     console.log("afas");
  //   }
  // },
  mounted() {
    this.$watch(
      "isHide",
      function() {
        this.focusInput();
      },
      { immediate: true }
    );
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

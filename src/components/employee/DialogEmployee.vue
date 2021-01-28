<template>
  <div class="dialog isHide">
        <div class="title">
            <div class="title_text"><b>THÔNG TIN KHÁCH HÀNG</b></div>
            <button class="title_x"></button>
        </div>
        <div class="frame">
            <div class="frame1">
                <div class="avatar">
                    <div class="avatar_img"></div>
                    <div class="avatar_text">Ảnh .jpg, .png, .gif</div>
                </div>
                <div class="information">
                    <div class="infor1">
                        <div class="customer_ms">
                            <div class="customer_ms_text">Mã khách hàng(*)</div>
                            <input type="text" name="name" value="" class="customer_ms_input"/>
                        </div>
                        <div class="customer_id">
                            <div class="customer_id_text">Mã thẻ thành viên</div>
                            <input type="text" name="name" value="" class="customer_id_input" />
                        </div>
                        <div class="birthday">
                            <div class="birthday_text">Ngày sinh</div>
                            <input type="text" name="name" value="" class="birthday_input" />
                        </div>
                    </div>
                    <div class="infor2">
                        <div class="name">
                            <div class="name_text">Họ và tên(*)</div>
                            <input type="text" name="name" value="" class="name_input" />
                        </div>

                        <div class="category">
                            <div class="category_text">Nhóm khách hàng</div>
                            <input type="text" name="name" value="" class="category_input" />
                        </div>

                        <div class="gender">
                            <div class="gender_text">Giới tính</div>
                            <div class="gender_select">
                                <div>
                                    <input type="radio" name="gender_select" value="man" class="man" checked>
                                    <label for="man">Nam</label>
                                </div>

                                <div>
                                    <input type="radio" name="gender_select" value="woman" class="woman">
                                    <label for="woman">Nữ</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                
            </div>
            <div class="frame2">
                <div class="email">
                    <div class="email_text">Email</div>
                    <input type="text" name="name" value="" class="email_input" />
                </div>
                <div class="contact">
                    <div class="contact_text">Số điện thoại(*)</div>
                    <input type="text" name="name" value="" class="contact_input" />
                </div>
            </div>
            <div class="frame3">
                <div class="company">
                    <div class="company_text">Tên công ty</div>
                    <input type="text" name="name" value="" class="company_input" />
                </div>
                <div class="tax_id">
                    <div class="tax_id_text">Mã số thuế</div>
                    <input type="text" name="name" value="" class="tax_id_input" />
                </div>
            </div>
            <div class="address">
                <div class="address_text">Địa chỉ</div>
                <input type="text" name="name" value="" class="address_input" />
            </div>
        </div>
        <div class="footer">
            <div class="footer_right">
                <div class="cancel">Hủy</div>
                <div class="save">
                    <div class="save_icon"></div>
                    <div class="save_text">Lưu</div>
                </div>
                <div class="save_and_add">Lưu và thêm mới</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "ListEmployeeDetail",
  props: {
    isHide: Boolean
  },
  methods: {
    btnAddOnClick() {
      // this.isHide = false;
    },
    btnCancelOnClick() {
      // this.isHide = true;
      this.$emit("closePopup", true);
    },
    rowOnClick(employee) {
      alert(employee.FullName);
    }
  },
  data() {
    return {
      dialog: false,
      // isHide: true,
      display: "none",
      employee: {
        EmployeeId: "",
        EmployeeCode: "",
        FirstName: "",
        LastName: "",
        FullName: "",
        Gender: "",
        DateOfBirth: "",
        PhoneNumber: "",
        Email: "",
        Address: "",
        IdentityNumber: "",
        IdentityDate: "",
        IdentityPlace: "",
        JoinDate: "",
        MaritalStatus: "",
        PersonalTaxCode: "",
        Salary: "",
        EducationalBackground: "",
        WorkStatus: "",
        PositionId: "",
        PositionName: "",
        DepartmentId: "",
        DepartmentName: "",
        QualificationId: "",
        QualificationName: "",
        GenderName: "",
        WorkStatusName: ""
      }
    };
  }
};
</script>
<style scoped>
@import url("../../assets/style/list-employee-detail.css");
.isHide {
  display: none;
}
</style>

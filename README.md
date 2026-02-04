# BÀI TẬP KIỂM THỬ PHẦN MỀM (MANUAL TESTING)
# 🛒 E-Commerce Website - Manual Testing Project

Dự án này tập trung vào việc xây dựng bộ tài liệu kiểm thử thủ công (Manual Testing) toàn diện cho một hệ thống Web bán hàng giả lập. Quy trình thực hiện tuân thủ các chuẩn mực QA công nghiệp, từ lập kế hoạch, thiết kế test case đến báo cáo chỉ số chất lượng.

---

## 🏗 Cấu trúc thư mục (Project Structure)

Dựa trên cấu trúc repository và yêu cầu bài tập, dự án được tổ chức như sau:

| Thư mục | Nội dung chi tiết |
| --- | --- |
| `📂 01_Test_Plan` | Kế hoạch kiểm thử (Scope, Test Approach, Environment, Risks). |
| `📂 02_Test_Cases` | Danh sách 45+ ca kiểm thử cho Auth, Product & Cart, Checkout. |
| `📂 03_RTM` | Ma trận truy vết yêu cầu đảm bảo độ bao phủ yêu cầu  95%. |
| `📂 04_Bug_Reports` | Danh sách các lỗi phát hiện (bao gồm Critical, Major, Minor). |
| `📂 05_Test_Report_and_Metrics` | Báo cáo tổng kết kết quả kiểm thử và các chỉ số chất lượng định lượng. |

---

## 💻 Bối cảnh hệ thống

Dự án thực hiện kiểm thử trên hệ thống E-commerce với 3 phân hệ chính:

1. **Module 1 - Xác thực (Authentication):** Đăng ký, Đăng nhập, Quên mật khẩu, Đăng xuất (R1 - R6).
2. **Module 2 - Sản phẩm & Giỏ hàng:** Tìm kiếm, Lọc sản phẩm, Xem chi tiết, Giỏ hàng (R7 - R12).
3. **Module 3 - Thanh toán (Checkout):** Địa chỉ giao hàng, Phương thức thanh toán, Đặt hàng (R13 - R16).

---

## 📋 Quy chuẩn thực hiện (Deliverables Standards)

Dự án cam kết đạt điểm cao ( 9.0) bằng việc tuân thủ các tiêu chuẩn sau:

### 1. Ca kiểm thử (Test Cases)

* **Số lượng:** Tối thiểu 45 test case.
* **Đa dạng:** Bao gồm ít nhất 10 negative cases, 5 boundary cases và 5 security validation cases.
* **Format:** Đầy đủ Precondition, Steps, Expected Result, Priority và Type.

### 2. Báo cáo lỗi (Bug Reports)

* **Số lượng:** Tối thiểu 10 bug giả lập.
* **Phân loại:** Đảm bảo có ít nhất 2 lỗi Critical và 4 lỗi Major.

### 3. Chỉ số chất lượng (Test Metrics)

Báo cáo tại thư mục `05` phản ánh 4 chỉ số cốt lõi:

* **Execution Rate:** Tỷ lệ thực thi các ca kiểm thử.
* **Defect Density:** Mật độ lỗi theo từng module.
* **Severity Distribution:** Phân bổ mức độ nghiêm trọng của lỗi.
* **Requirement Coverage:** Độ bao phủ yêu cầu dựa trên RTM.

---
---

Bạn đã hoàn thành xong cấu trúc `README.md`. Bạn có muốn mình giúp soạn chi tiết nội dung cho **Ma trận RTM (03)** để khớp chính xác với 16 yêu cầu (R1-R16) không?

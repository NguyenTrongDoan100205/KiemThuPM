# Bài tập thực hành kiểm thử với JUnit  
## Chủ đề: Phân tích dữ liệu điểm số học sinh

---

## 1. Mô tả bài toán
Bài tập yêu cầu xây dựng một chương trình Java để phân tích dữ liệu điểm số của học sinh, đồng thời viết các ca kiểm thử đơn vị (unit test) bằng JUnit nhằm đảm bảo tính đúng đắn của chương trình.

Chương trình gồm lớp `StudentAnalyzer` với hai chức năng chính:
- Đếm số lượng học sinh đạt loại Giỏi
- Tính điểm trung bình của các điểm hợp lệ

Điểm hợp lệ được xác định nằm trong khoảng từ **0 đến 10**.
---

## 2. Các chức năng chính

### 2.1. `countExcellentStudents(List<Double> scores)`
- Đếm số học sinh có điểm **>= 8.0**
- Bỏ qua các điểm không hợp lệ (< 0 hoặc > 10)
- Bỏ qua giá trị `null`
- Nếu danh sách rỗng hoặc `null`, trả về **0**

### 2.2. `calculateValidAverage(List<Double> scores)`
- Tính điểm trung bình của các điểm hợp lệ (0–10)
- Bỏ qua các điểm không hợp lệ và giá trị `null`
- Nếu không có điểm hợp lệ, trả về **0**
---

## 3. Cấu trúc thư mục
unit-test/
├── src/
│ └── StudentAnalyzer.java
├── test/
│ └── StudentAnalyzerTest.java
└── README.md

- `src/`: Chứa mã nguồn Java
- `test/`: Chứa các mã kiểm thử đơn vị bằng JUnit

---

## 4. Công cụ và công nghệ sử dụng
- Java JDK 8 trở lên
- JUnit 5
- IDE: Eclipse
- Git & GitHub để quản lý mã nguồn

---

## 5. Hướng dẫn chạy chương trình

### 5.1. Mở project trong Eclipse
- Clone repository từ GitHub
- Import project vào Eclipse
- Đảm bảo JDK đã được cấu hình đúng

---

## 6. Hướng dẫn chạy kiểm thử đơn vị (JUnit)

### Cách 1: Chạy bằng Eclipse
1. Mở file `StudentAnalyzerTest.java`
2. Chuột phải vào file
3. Chọn **Run As → JUnit Test**
4. Quan sát kết quả:
   - Màu xanh: Test chạy thành công
   - Màu đỏ: Có lỗi cần sửa

### Cách 2: Chạy toàn bộ test
- Chuột phải vào thư mục `test`
- Chọn **Run As → JUnit Test**
---

## 7. Kết luận
Thông qua bài tập này, sinh viên:
- Làm quen với kiểm thử đơn vị bằng JUnit
- Biết cách tổ chức mã nguồn theo chuẩn
- Thực hành sử dụng GitHub Issues và Commit gắn với Issue
- Biết cách khai thác AI tạo sinh để hỗ trợ lập trình

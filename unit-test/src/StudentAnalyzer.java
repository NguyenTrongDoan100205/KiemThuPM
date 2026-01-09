package BT;


import java.util.List;

public class StudentAnalyzer {

    /**
     * Phân tích điểm số và trả về số lượng học sinh đạt loại Giỏi.
     * @param scores danh sách điểm số từ 0 đến 10
     * @return số học sinh đạt loại Giỏi (>= 8.0)
     */
    public int countExcellentStudents(List<Double> scores) {
        if (scores == null || scores.isEmpty()) {
            return 0;
        }

        int count = 0;
        for (Double score : scores) {
            if (score == null) {
                continue;
            }
            if (score >= 0 && score <= 10 && score >= 8.0) {
                count++;
            }
        }
        return count;
    }

    /**
     * Tính điểm trung bình các điểm hợp lệ (0–10)
     * @param scores danh sách điểm
     * @return điểm trung bình hợp lệ, nếu không có điểm hợp lệ trả về 0
     */
    public double calculateValidAverage(List<Double> scores) {
        if (scores == null || scores.isEmpty()) {
            return 0;
        }

        double sum = 0;
        int count = 0;

        for (Double score : scores) {
            if (score == null) {
                continue;
            }
            if (score >= 0 && score <= 10) {
                sum += score;
                count++;
            }
        }

        if (count == 0) {
            return 0;
        }

        return sum / count;
    }
}


using UnityEngine;

public class Lab5_AddForce : MonoBehaviour
{
    public float forceAmount = 500f;
    Rigidbody rb;

    void Start()
    {
        // Lấy thành phần Rigidbody gắn trên vật thể
        rb = GetComponent<Rigidbody>();

        // Đẩy vật thể về phía trước ngay khi bắt đầu Game
        // ForceMode.Impulse tạo ra một lực đẩy tức thời (như cú sút bóng)
        rb.AddForce(Vector3.forward * forceAmount);
    }
}
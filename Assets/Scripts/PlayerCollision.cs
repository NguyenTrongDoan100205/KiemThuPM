using UnityEngine;

public class PlayerCollision : MonoBehaviour
{
    // Hàm này sẽ tự động chạy khi Player chạm vào vật thể khác
    void OnCollisionEnter2D(Collision2D collision)
    {
        // Hiển thị tên vật cản mà Player vừa chạm vào
        Debug.Log("Kết quả Lab 2: Đã va chạm với " + collision.gameObject.name);
    }
}
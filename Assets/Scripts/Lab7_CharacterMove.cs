using UnityEngine;

public class Lab7_CharacterMove : MonoBehaviour
{
    private CharacterController controller;
    public float playerSpeed = 5f;

    private Vector3 velocity;
    private float gravity = -9.81f;

    void Start()
    {
        controller = GetComponent<CharacterController>();

        if (controller == null)
        {
            Debug.LogError("LỖI: Player chưa có CharacterController!");
        }
    }

    void Update()
    {
        if (controller == null) return;

        bool isGrounded = controller.isGrounded;

        if (isGrounded && velocity.y < 0)
        {
            velocity.y = -2f; // giữ bám mặt đất
        }

        float x = Input.GetAxis("Horizontal");
        float z = Input.GetAxis("Vertical");

        Vector3 move = transform.right * x + transform.forward * z;

        controller.Move(move * playerSpeed * Time.deltaTime);

        velocity.y += gravity * Time.deltaTime;
        controller.Move(velocity * Time.deltaTime);
    }
}

describe('Cart and Checkout Test', () => {
  // Thực hiện đăng nhập trước mỗi kịch bản test
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
  });

  // Kịch bản 3: Kiểm tra chức năng thêm sản phẩm vào giỏ hàng
  it('Should add a product to the cart', () => {
    cy.get('.inventory_item').first().find('.btn_inventory').click();
    cy.get('.shopping_cart_badge').should('have.text', '1');
  });

  // Kịch bản 4: Kiểm tra chức năng sắp xếp sản phẩm
  it('Should sort products by price low to high', () => {
    cy.get('.product_sort_container').select('lohi');
    cy.get('.inventory_item_price').first().should('have.text', '$7.99');
  });

  // YÊU CẦU THÊM 1: Kiểm tra chức năng xóa sản phẩm khỏi giỏ hàng
  it('Should remove a product from the cart', () => {
    // Thêm sản phẩm vào giỏ trước
    cy.get('.inventory_item').first().find('.btn_inventory').click();
    cy.get('.shopping_cart_badge').should('have.text', '1');
    
    // Nhấn nút Remove (Nút lúc này đã đổi từ Add to cart thành Remove)
    cy.get('.inventory_item').first().find('.btn_inventory').click();
    
    // Xác minh số lượng sản phẩm không hiển thị (giỏ hàng trống)
    cy.get('.shopping_cart_badge').should('not.exist');
  });

  // YÊU CẦU THÊM 2: Kiểm tra quy trình thanh toán
  it('Should complete the checkout information flow', () => {
    // 1. Thêm sản phẩm và đi đến giỏ hàng
    cy.get('.inventory_item').first().find('.btn_inventory').click();
    cy.get('.shopping_cart_link').click();
    
    // 2. Nhấn Checkout
    cy.get('#checkout').click();
    
    // 3. Điền thông tin thanh toán
    cy.get('#first-name').type('John');
    cy.get('#last-name').type('Doe');
    cy.get('#postal-code').type('12345');
    
    // 4. Nhấn Continue
    cy.get('#continue').click();
    
    // 5. Xác minh chuyển đến trang xác nhận (bước 2)
    cy.url().should('include', '/checkout-step-two.html');
    cy.get('.title').should('contain', 'Checkout: Overview');
  });
});
import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const totalPrice = cartList.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0,
      )
      const totalItems = cartList.length
      return (
        <div className="cart-summary-container">
          <div className="cart-summary-content">
            <h1 className="price">
              <span className="label">Order Total: </span>Rs {totalPrice}/-
            </h1>
            <p className="total-items">{totalItems} Items in cart</p>
            <button className="desktop-checkout-btn" type="button">
              Checkout
            </button>
          </div>
          <button className="mobile-checkout-btn" type="button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary

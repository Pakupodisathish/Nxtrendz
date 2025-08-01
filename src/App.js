import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import ProductItemDetails from './components/ProductItemDetails'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import CartContext from './context/CartContext'

import './App.css'

class App extends Component {
  state = {
    cartList: [],
  }

  //   TODO: Add your code for remove all cart items, increment cart item quantity, decrement cart item quantity, remove cart item

  addCartItem = product => {
    this.setState(prevState => {
      const {cartList} = prevState
      const findProduct = cartList.find(item => item.id === product.id)
      if (findProduct === undefined) {
        return {cartList: [...cartList, product]}
      }
      const updatedCartList = cartList.map(item => {
        if (item.id === product.id) {
          return {...item, quantity: product.quantity + item.quantity}
        }
        return item
      })
      return {cartList: updatedCartList}
    })
    //   TODO: Update the code here to implement addCartItem
  }

  removeAllCartItems = () => {
    this.setState({cartList: []})
  }

  removeCartItem = productId => {
    this.setState(prevState => ({
      cartList: prevState.cartList.filter(item => item.id !== productId),
    }))
  }

  incrementCartItemQuantity = productId => {
    this.setState(prevState => ({
      cartList: prevState.cartList.map(item => {
        if (item.id === productId) {
          return {...item, quantity: item.quantity + 1}
        }
        return item
      }),
    }))
  }

  decrementCartItemQuantity = productId => {
    this.setState(prevState => {
      const updatedCartList = prevState.cartList
        .map(item => {
          if (item.id === productId) {
            return {...item, quantity: item.quantity - 1}
          }
          return item
        })
        .filter(item => item.quantity > 0)
      return {cartList: updatedCartList}
    })
  }

  render() {
    const {cartList} = this.state

    return (
      <CartContext.Provider
        value={{
          cartList,
          addCartItem: this.addCartItem,
          removeCartItem: this.removeCartItem,
          removeAllCartItems: this.removeAllCartItems,
          incrementCartItemQuantity: this.incrementCartItemQuantity,
          decrementCartItemQuantity: this.decrementCartItemQuantity,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/products" component={Products} />
          <ProtectedRoute
            exact
            path="/products/:id"
            component={ProductItemDetails}
          />
          <ProtectedRoute exact path="/cart" component={Cart} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </CartContext.Provider>
    )
  }
}

export default App

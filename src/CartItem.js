import React from 'react';
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { useGlobalContext } from './context';

const CartItem = () => {
    const { increase, decrease, removeItem, cart, clearCart, total } = useGlobalContext()

    return (
        <>
            <main>
                {cart.map((item) => {
                    const { id, price, title, img, amount } = item;
                    return (
                        <article key={id} className="phone-section">
                            <img src={img} alt={title} style={{ maxWidth: 100 }} />
                            <div className="item-desc">
                                <div>
                                    <h4>{title}</h4>
                                    <p>${price}</p>
                                    <button className="remove-btn" onClick={() => removeItem(id)}>
                                        remove
                                    </button>
                                </div>

                                <div className="item-control">
                                    <button className="control" onClick={() => increase(id)}>
                                        +{FaAngleUp}
                                    </button>
                                    <h2>{amount}</h2>
                                    <button className="control" onClick={() => decrease(id)}>
                                        -{FaAngleDown}
                                    </button>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </main>
            <hr />
            <footer>
                <div className="price-container">
                    <h3>Total</h3>
                    <h3 className="total-price">${total}</h3>
                </div>
                <button className="clear-btn" onClick={clearCart}>clear cart</button>
            </footer>
        </>
    )
}

export default CartItem
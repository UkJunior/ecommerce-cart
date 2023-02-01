export const reducer = (state, action) => {
    if (action.type === "DISPLAY") {
        return { ...state, cart: action.payload };
    }
    
    if (action.type === "CLEAR-ITEMS") {
        return { ...state, cart: [] };
    }

    if (action.type === "REMOVE-ITEM") {
        return { ...state, cart: action.payload };
    }

    if (action.type === "INCREASE") {
        let tempCart = state.cart.map((cartItem) => {
            if (cartItem.id === action.payload) {
                return { ...cartItem, amount: cartItem.amount + 1 };
            }
            return cartItem;
        });
        console.log("tempCart", tempCart);
        return { ...state, cart: tempCart };
    }

    if (action.type === "DECREASE") {
        let tempCart = state.cart
            .map((cartItem) => {
                if (cartItem.id === action.payload) {
                    return { ...cartItem, amount: cartItem.amount - 1 };
                }
                return cartItem;
            })
            .filter((cartItem) => cartItem.amount !== 0);
        return { ...state, cart: tempCart };
    }

    if (action.type === "GET-TOTAL") {
        let { total, amount } = state.cart.reduce(
            (accum, num) => {
                const { price, amount } = num;
                const itemTotal = price * amount;
                accum.total += itemTotal;
                accum.amount += amount;
                return accum;
            },
            { total: 0, amount: 0 }
        );
        total = parseFloat(total.toFixed(2));
        return { ...state, total: total, amount: amount };
    }
    
    if(action.type === 'LOADED'){
        return {...state, loading: false}
    }
}
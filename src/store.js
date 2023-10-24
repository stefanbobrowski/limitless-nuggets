import React, { createContext, useReducer } from 'react';

const initialState = {
	text: 'Default text...',
	showCart: false,
	cart: [],
	subtotal: 0,
	openCheckout: false,
};

export const Context = createContext(initialState);

export const Store = ({ children }) => {
	const [state, dispatch] = useReducer((state, action) => {
		switch (action.type) {
			case 'UPDATE_TEXT':
				return { ...state, text: action.payload };
			case 'TOGGLE_SHOW_CART':
				return {
					...state,
					showCart: !state.showCart,
				};
			case 'SHOW_CART':
				return {
					...state,
					showCart: true,
				};
			case 'HIDE_CART':
				return {
					...state,
					showCart: false,
				};
			case 'ADD_TO_CART':
				return {
					...state,
					cart: [...state.cart, action.payload],
					subtotal: state.subtotal + action.payload.price,
				};
			case 'REMOVE_FROM_CART':
				return {
					...state,
					cart: state.cart.filter(
						(item) => item !== state.cart[action.payload]
					),
					subtotal: state.subtotal - state.cart[action.payload].price,
				};
			case 'CLEAR_CART':
				return {
					...state,
					cart: [],
					subtotal: 0,
				};
			case 'OPEN_CHECKOUT':
				return {
					...state,
					openCheckout: true,
				};

			case 'CLOSE_CHECKOUT':
				return {
					...state,
					openCheckout: false,
				};
			default:
				return { ...state };
		}
	}, initialState);

	return (
		<Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
	);
};

import * as actionType from '../constants/cartConstant'




// export const cartReducer = (state,action)=>{
//     switch(action.type){
//         case actionType.ADD_TO_CART:
//             const item = action.payload;
//             const exist = state.cartItems.find(product=> product.id === item.id );
//             if(exist){
//                 return {...state, cartItems: state.cartItems.map(data => data.id === exist.id ? item : data)}
//             }else{
//                 return {...state, cartItems: [...state.cartItems,item]}
//             }

//         case actionType.REMOVE_FROM_CART:
//             return {...state, cartItems: state.cartItems.filter(product => product.id !== action.payload)}
//         default:
//             return state;
//     }
// }





const initialState = {
    cartItems: [],
    loading: false,
    error: null
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.CART_LOADING:
            return {
                ...state,
                loading: true
            };

        case actionType.CART_ADD_ITEM:
        case actionType.CART_REMOVE_ITEM:
        case actionType.CART_UPDATE_QTY:
            return {
                ...state,
                loading: false,
                // cartItems: action.payload.items, // Backend theke pawa items array
                // cartItems: action.payload && action.payload.items ? action.payload.items : [],
                cartItems: action.payload && action.payload.items ? [...action.payload.items] : [],
                error: null
            };

        case actionType.CART_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };


        case actionType.CART_CLEAR:
            return {
                ...initialState  
            };    

        default:
            return state;
    }
};
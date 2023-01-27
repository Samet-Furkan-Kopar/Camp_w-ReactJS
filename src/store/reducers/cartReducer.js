import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";
import { cartItems } from "../initialValues/cartItems";

const initialState = {
    cartItems:cartItems
}
//sepetin son halini tuttugumuz yer reducer //state=başlangıç değer//default varsa süslü parante kullanmana gerek yok başka bir yerde import ederken
export default function cartReducer(state=initialState,{type,payload}){

    switch (type) {
        case ADD_TO_CART:
            let product = state.cartItems.find((p)=>p.product.id === payload.id)
            if (product) {//product id ile benim gnderdiğim product id ye eşitse ani sepette daha önceden varsa
              product.quantity++;
              return{
                ...state,//içerisindeki elemanları ayırarak yeni bir obje oluşturuyo
              }  ;
            } else {//sepette gönderdiğim ürün yoksa
                return{
                    ...state,
                    cartItems:[...state.cartItems,{quantity:1,product:payload}],//yeni bir array oluşturmuş olduk 13. video 2.07 dk
                };
            }
            case REMOVE_FROM_CART:
            return{
                ...state,
                cartItems: state.cartItems.filter((c)=>c.product.id !== payload.id),//filter gönderilen idli değerin aynısı sepette olduğundan  onu siler yeni array yaar
            };

        default:
            return state;
    }
}
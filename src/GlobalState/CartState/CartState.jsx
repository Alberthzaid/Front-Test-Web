import create from 'zustand'
import {persist} from 'zustand/middleware'

export const useCartStore = create(
    persist(
        (set , get)=>({
            cartItems : [],
            cartOpen: false,
            cartEmpty:true,

            addItem:(product)=>{
                const existingItem = get().cartItems.find(item => item.id === product.id);

                if(existingItem){
                    set((state) =>({
                        cartItems: state.cartItems.map(item =>
                            item.id === product.id ?{...item , quantity:item.quantity + 1}:item
                        )
                    }));
                }else{
                    set((state)=>({
                        cartItems:[...state.cartItems , {...product , quantity : 1}]
                    }));
                }

                set({cartEmpty:false})
            },

            clearCart:()=>{
                set({cartItem:[]});
                set({cartEmpty:true})
            },

            removeItem:(productID)=>{
                set((state)=>({
                    cartItems: state.cartItems.filter(item => item.id !== productID )
                }));
            },

            toggleCart: ()=>{
                set((state)=>({
                    cartOpen: !state.cartOpen
                }));
            }

        }),
        {
            name:'cart-data'
        }
    )
)
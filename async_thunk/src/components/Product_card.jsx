import React from "react";
import { useDispatch } from 'react-redux';
import { add_To_Cart } from "../reduxSlice/Cart_Slice";
import { add_To_Wishlist } from "../reduxSlice/Wishlist_Slice";

const Product_card = ({ products }) => {

    const dispatch = useDispatch()

    return (
        <div>

            <div key={products.id} className="border border-black h-full p-4">
                <div>
                    <img src={products.image} alt="" className="size-56 object-contain mx-auto" />
                </div>

                <div className="flex flex-col gap-3 my-4">
                    <p className="text-[#112D32]"> {products.title} </p>
                    <p className="line-clamp-3 text-[#254E58] text-justify" > {products.description} </p>
                </div>

                <button className="text-[#88BDBC] border bg-[#254E58] px-4 py-1 rounded hover:text-[#254E58] hover:bg-[#88BDBC]" onClick={() => dispatch(add_To_Cart(products))}>AddToCart</button>
                <button className="text-[#88BDBC] border bg-[#254E58] px-4 py-1 rounded hover:text-[#254E58] hover:bg-[#88BDBC]" onClick={() => dispatch(add_To_Wishlist(products))}>AddToWishlist</button>
            </div>
        </div>
    )
}

export default Product_card
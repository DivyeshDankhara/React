import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import toast, { Toaster } from 'react-hot-toast';
import { remove_To_Wishlist } from '../reduxSlice/Wishlist_Slice';

const Wishlist = () => {
  const { wishlistItem } = useSelector((state) => state.wishlist);
  console.log(wishlistItem);

  const dispatch = useDispatch();

  return (
    <div>
      {
        wishlistItem.length === 0 ?
          <div className='h-screen flex justify-center items-center text-xl text-red-400'>
            <div className='hidden'>

              {
                toast('Wishlist Is Empty !!')
              }
              <Toaster
                position="top-center"
                reverseOrder={false}
                gutter={8}
                containerClassName=""
                containerStyle={{}}
                toastOptions={{
                  // Define default options
                  className: '',
                  duration: 1000,
                  removeDelay: 1000,
                  style: {
                    background: 'white',
                    color: 'red',
                    margin: "100px 100px",

                  },

                  // Default options for specific types
                  error: {
                    duration: 2000,
                    iconTheme: {
                      primary: 'red',
                      secondary: 'black',

                    },
                  },
                }}
              />
            </div>
            wishlist is empty !
          </div> :
          <div className='grid grid-cols-3 gap-5 p-4'>
            {wishlistItem.map((product) => {
              return (
                <div key={product.id} className="border border-black h-full p-4">
                  <div>
                    <img src={product.image} alt="" className="size-56 object-contain mx-auto" />
                  </div>

                  <div className="flex flex-col gap-3 my-4">
                    <p className="text-[#112D32]"> {product.title} </p>
                    <p className="line-clamp-3 text-[#254E58] text-justify" > {product.description} </p>
                  </div>

                  <button className="text-[#88BDBC] border bg-[#254E58] px-4 py-1 rounded hover:text-[#254E58] hover:bg-[#88BDBC]" onClick={() => dispatch(remove_To_Wishlist(product))}>RemoveToWishlist</button>
                </div>
              )
            })}
          </div>
      }

    </div >
  )
}

export default Wishlist
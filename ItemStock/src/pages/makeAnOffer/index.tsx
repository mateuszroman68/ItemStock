import React from "react";
import { Link } from "react-router-dom";
 

const MakeAnOffer = () => {


    return(
        <div className="grid grid-cols-1 justify-items-center">
        <div className='m-8  bg-gray-800 border-b  rounded   overflow-hidden shadow-lg w-1/2 '>
        <div className="flex flex-1 m-2  ">
        <div className="mb-3 xl:w-96 flex flex-1  ml-16 mr-16 mt-4 ">
        <label  className="form-label inline-block mt-4 ml-2 mr-4 mb-2 text-gray-50 w-min " >Sell</label >
        <input
        type="text"
        className="
            form-control
            block
            w-3/12
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            mt-2
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        "
        id="exampleFormControlInput1"
        placeholder="Vol."
        />
        <label  className="form-label inline-block mt-4 ml-2 mr-2 mb-2 text-gray-50 w-min " >*</label >
        <input
        type="text"
        className="
            form-control
            block
            w-4/12
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            mt-2
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        "
        id="exampleFormControlInput1"
        placeholder="Price"
        />
        <h2></h2>
        <label  className="form-label inline-block mt-4 ml-16 mr-4 mb-2 text-gray-50 w-min" >Buy</label >
        <input
        type="text"
        className="
            form-control
            block
            w-3/12
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            mt-2
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        "
        id="exampleFormControlInput1"
        placeholder="Vol."
        />
        <label  className="form-label inline-block mt-4 ml-2 mr-2 mb-2 text-gray-50 w-min " >*</label >
         <input
        type="text"
        className="
            form-control
            block
            w-4/12
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            mt-2
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        "
        id="exampleFormControlInput1"
        placeholder="Price"
        />
    </div>
    
</div>

<div className=" grid grid-rows-1 flex items-center justify-center  m-2 ">
        <div className="mb-3 xl:w-96 flex items-center justify-center  mt-4   ">
        <label  className="form-label inline-block m-2 text-gray-50 w-2/6 " >Price limit</label >
        <input
        type="text"
        className="
            form-control
            block
            w-4/6
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        "
        id="exampleFormControlInput1"
        placeholder="{item.currentPrice}"
        />
    </div>
</div>

<div className="grid grid-rows-1 flex items-center justify-center m-2">
        <div className="mb-3 xl:w-96  flex items-center justify-center mt-4 ">
        <label  className="form-label inline-block m-2 text-gray-50 w-2/6 " >Expiry Date</label >
        <input
        type="text"
        className="
            form-control
            block
            w-4/6
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        "
        id="exampleFormControlInput1"
        placeholder="{today's date}"
        />
    </div>
</div>

<div className="flex flex-1 ">
        <div className=" xl:w-96 flex flex-1  ">
        <label  className="form-label inline-block m-2 text-gray-50 w-full " >_____________________________________________________________________</label >
        
    </div>
</div>
<div className="flex flex-1 ml-8">
        <div className="xl:w-96 flex flex-1  ">
        <label  className="form-label inline-block m-2 text-gray-50 w-2/4 " >Summary</label >
        
    </div>
</div>

<div className="flex flex-1 ml-8">
        <div className="mb-3 xl:w-96 flex flex-1  ">
        <label  className="form-label inline-block m-2 text-gray-50 w-2/4 " >Order value:</label >
        <label className="form-label inline-block m-2 text-gray-50 w-2/4 ">priceLimit.input*Buy/sell Vol.</label>
    </div>
    
</div>
<div className="flex flex-1 ml-8">
        <div className="mb-3 xl:w-96 flex flex-1  ">
        <label  className="form-label inline-block m-2 text-gray-50 w-2/4 " >Transaction fee:</label >
        <label className="form-label inline-block m-2 text-gray-50 w-2/4 ">Order value* 0,5%</label>
    </div>
    
</div>
<div className="flex flex-1 ml-8">
        <div className="mb-3 xl:w-96 flex flex-1  ">
        <label  className="form-label inline-block m-2 text-gray-50 w-2/4 " >Total:</label >
        <label className="form-label inline-block m-2 text-gray-50 w-2/4 ">order value +Order value* 0,5%</label>
    </div>
    
</div>

<div className=" flex items-center justify-center mb-8">

<button className="bg-neutral-200 px-8 py-2 ml-4 mr-4 text-xl border-b  rounded  text-neutral-600 hover:text-grey-800 hover:shadow-[inset_13rem_0_0_0] hover:shadow-amber-200 duration-[400ms,700ms] transition-[color,box-shadow]">
    Confirm
</button>
<button className="bg-neutral-200 px-8 py-2  ml-4 mr-4 text-xl border-b  rounded  text-neutral-600 hover:text-grey-800 hover:shadow-[inset_13rem_0_0_0] hover:shadow-amber-200 duration-[400ms,700ms] transition-[color,box-shadow]">
    Cancel
</button>

</div>


        </div>
        </div>
    )
}


export default MakeAnOffer;
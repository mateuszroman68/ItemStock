import React from "react";
import { Link } from "react-router-dom";

const AddItem = () =>{


        return(
            <div>
                <div className="grid grid-cols-12">
			<div className="  m-8 col-span-6 ">
				<div className="bg-white rounded overflow-hidden shadow-lg">
					<div className="text-center p-6 bg-gray-800 border-b">
						<svg
							aria-hidden="true"
							role="img"
							className="h-24 w-24 text-white rounded-full mx-auto"
							width="32"
							height="32"
							preserveAspectRatio="xMidYMid meet"
							viewBox="0 0 256 256"
						>
							<path
								fill="currentColor"
								d="M172 120a44 44 0 1 1-44-44a44 44 0 0 1 44 44Zm60 8A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-153.8 58.4a81.3 81.3 0 0 1 24.5-23a59.7 59.7 0 0 0 82.6 0a81.3 81.3 0 0 1 24.5 23A87.6 87.6 0 0 0 216 128Z"
							/>
						</svg>
						<p className="pt-2 text-lg font-semibold text-gray-50">John Doe</p>
						<p className="text-sm text-gray-100">John@.com</p>
						<div className="mt-5">
							<Link to="/users/manage">
								<a className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100">
									Manage your Account
								</a>
							</Link>
						</div>
                        <div className="mt-5" >
                        <Link to="/users/add">
                        <a
                        className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
                        >
                        Put an item for sell
                        </a>
                        </Link>
                    </div>
                    <div className="mt-5" >
                        <Link to="/users/all">
                        <a
                        className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
                        >
                        Your all trades
                        </a>
                        </Link>
                    </div>
					</div>
					<div className="border-b">
						<Link to="/account/campaigns">
							<a className="px-4 py-2 hover:bg-gray-100 flex">
								<div className="text-green-600">
									<svg
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="1"
										viewBox="0 0 24 24"
										className="w-5 h-5"
									>
										<path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
									</svg>
								</div>
								<div className="pl-3">
									<p className="text-sm font-medium text-gray-800 leading-none">Active</p>
									<p className="text-xs text-gray-500">View your active auctions</p>
								</div>
							</a>
						</Link>
						<Link to="/account/donations">
							<a className="px-4 py-2 hover:bg-gray-100 flex">
								<div className="text-gray-800">
									<svg
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="1"
										viewBox="0 0 24 24"
										className="w-5 h-5"
									>
										<path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
									</svg>
								</div>
								<div className="pl-3">
									<p className="text-sm font-medium text-gray-800 leading-none">Donations</p>
									<p className="text-xs text-gray-500">View your last donations</p>
								</div>
							</a>
						</Link>
					</div>

					<div className="">
						<button className="w-full px-4 py-2 pb-4 hover:bg-gray-100  items-center">
							<p className=" items-center  text-sm font-medium text-gray-800 leading-none">
								{' '}
								<img
									className="w-10 h-10 flex ml-auto mr-auto"
									src="https://static.vecteezy.com/system/resources/previews/006/692/551/original/logout-icon-template-black-color-editable-log-out-icon-symbol-flat-illustration-for-graphic-and-web-design-free-vector.jpg"
								/>{' '}
								Logout
							</p>
						</button>
					</div>
				</div>
			</div>

			<div className='m-8 col-span-6 bg-gray-800 border-b  rounded   overflow-hidden shadow-lg'>
            <div className="flex flex-1 m-2">
            <div className="mb-3 xl:w-96 flex flex-1  ">
            <label  className="form-label inline-block mt-4 ml-2 mr-2 mb-2 text-gray-50 w-2/4 " >Title</label >
            <input
            type="text"
            className="
                form-control
                block
                w-full
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
                mt-2
            "
            id="exampleFormControlInput1"
            placeholder="e.g. Air Pods 3 "
            />
        </div>
        
</div>

<div className="flex flex-1 m-2">
            <div className="mb-3 xl:w-96 flex flex-1  ">
            <label  className="form-label inline-block m-2 text-gray-50 w-2/4 " >Category</label >
            

<select id="countries" className="
                form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-zinc-400
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            "
 >
  <option className="text-black">Please select</option>
  <option value="US">United States</option>
  <option value="CA">Canada</option>
  <option value="FR">France</option>
  <option value="DE">Germany</option>
</select>

        </div>
</div>

<div className="flex flex-1 m-2">
            <div className="mb-3 xl:w-96 flex flex-1  ">
            <label  className="form-label inline-block m-2 text-gray-50 w-2/4 " >Description</label >
            <input
            type="text"
            className="
                form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                h-60
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            "
            id="exampleFormControlInput1"
            placeholder=""
            />
        </div>
</div>

<div className="flex flex-1 m-2">
            <div className="mb-3 xl:w-96 flex flex-1  ">
            <label  className="form-label inline-block m-2 text-gray-50 w-2/4 " >Condition</label >
            <select id="countries" className="
                form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-zinc-400
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            "
 >
  <option className="text-black">Please select</option>
  <option>New</option>
  <option >Very good</option>
  <option >Good</option>
  <option >Average</option>
  <option >Poor</option>

</select>
        </div>
</div>
<div className="flex flex-1 m-2">
            <div className="mb-3 xl:w-96 flex flex-1  ">
            <label  className="form-label inline-block m-2 text-gray-50 w-2/4 " >Price</label >
            <input
            type="text"
            className="
                form-control
                block
                w-full
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
            placeholder=""
            />
        </div>
</div>

<div className="flex flex-1 m-2">
            <div className="mb-3 xl:w-96 flex flex-1  ">
            <label  className="form-label inline-block m-2 text-gray-50 w-2/4 " >Amount</label >
            <input
            type="text"
            className="
                form-control
                block
                w-full
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
            placeholder=" How many items do You have?"
            />
        </div>
        
</div>

<div className=" flex items-center justify-center mb-4">

    <button className="bg-neutral-200  border-b  rounded   px-12 py-4 text-xl text-neutral-600 hover:text-grey-800 hover:shadow-[inset_13rem_0_0_0] hover:shadow-amber-200 duration-[400ms,700ms] transition-[color,box-shadow] rounded">
        Add an item
    </button>

</div>


			</div>
		</div>
	);
            </div>
        )
}

export default AddItem;
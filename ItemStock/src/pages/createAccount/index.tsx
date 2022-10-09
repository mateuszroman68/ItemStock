import React from "react";
import { Link } from "react-router-dom";

const CreateAccount = () => { 
    return (
        <main className="mx-auto flex w-5/12 items-center justify-center bg-gray-800 border-b  rounded   overflow-hidden shadow-lg  text-white mt-8 mb-8">
        <section className="flex w-[30rem] flex-col space-y-10 mt-8 mb-8">
            <div className="text-center text-2xl font-medium">Create an account</div>

            <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
                <input
                    type="text"
                    placeholder="Email or Username"
                    className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
                />
            </div>

            <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
                />
            </div>
            <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
                <input
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
                />
            </div>

            <button className="bg-neutral-200  border-b  rounded   px-12 py-4 text-xl text-neutral-600 hover:text-grey-800 hover:shadow-[inset_13rem_0_0_0] hover:shadow-amber-200 duration-[400ms,700ms] transition-[color,box-shadow] rounded">
                <Link to="/user">Create</Link>
            </button>

            

            
        </section>
    </main>
    )
}

export default CreateAccount;
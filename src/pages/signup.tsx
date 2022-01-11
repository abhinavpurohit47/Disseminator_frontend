import React from 'react'

const signup = () => {
    return (
            <div>
                <div>
        <div className="flex justify-center w-full overflow-hidden"> 
        <div className="flex flex-col">

       
            <div className = "flex flex-wrap justify-center p-8 m-8 overflow-hidden rounded-lg shadow-2xl ">
            
                <div className="flex-wrap justify-center">
                <fieldset className="justify-center p-2 m-2 bg-transparent">
                <legend className="flex flex-row justify-center p-1 m-1 text-xl font-bold">
                    Sign Up
                </legend>
                <div className="flex flex-row m-2">
                <label className="block text-xl" htmlFor ="email-address">
                    Name
                </label>
                    <input className="w-full p-1 ml-4 text-white bg-transparent border-2 rounded-lg outline-none hover:bg-black hover:to-white"
                     type="text" name="name"
                  id="name"
                />
                    </div>
                <div className="flex flex-row m-2">
                <label className="block text-xl" htmlFor ="email-address">
                    Email
                </label>
                    <input className="w-full p-1 ml-4 text-white bg-transparent border-2 rounded-lg outline-none hover:bg-black hover:to-white"
                     type="email" name="email-address"
                  id="email-address"
                />
                    </div>
                    <div className="flex flex-row m-2">  
                <label className="block text-xl" 
                htmlFor ="password">
                    Password
                </label>
                    <input className="w-full p-1 ml-4 text-white bg-transparent border-2 rounded-lg outline-none hover:bg-black hover:to-white" 
                    type="password"  
                    name="password"
                  id="password"
                />
                    </div>
  
                </fieldset>
                <div className="flex flex-row justify-center">
                         <input className = "justify-center block p-2 text-white bg-transparent border-2 outline-none cursor-pointer rounded-xl text-bold" 
                        type="submit" value="Sign Up" />
                </div>

                </div>
            </div>
             </div>
            </div>
        </div>
        </div>
    )
}

export default signup

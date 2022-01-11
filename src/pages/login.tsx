import React from 'react'

const login = () => {
    return (
        <div>
        <div className="flex justify-center w-full overflow-hidden"> 
        <div className="flex flex-col">

       
            <div className = "flex flex-wrap justify-center p-8 m-8 overflow-hidden rounded-lg shadow-2xl ">
            
                <div className="flex-wrap justify-center">
                <fieldset className="flex flex-col p-2 m-2 bg-transparent">
                <legend className="justify-center p-1 m-1 text-xl font-bold">
                    Log In
                </legend>
                <div className="flex flex-row m-2">
                <label className="block text-2xl" htmlFor ="email-address">
                    Email
                </label>
                    <input className="w-full p-1 ml-4 text-white bg-transparent border-2 rounded-lg outline-none hover:bg-black hover:to-white"
                     type="email" name="email-address"
                  id="email-address"
                />
                    </div>
                    <div className="flex flex-row m-2">  
                <label className="block text-2xl" 
                htmlFor ="password">
                    Password
                </label>
                    <input className="w-full p-1 ml-4 text-white bg-transparent border-2 rounded-lg outline-none hover:bg-black hover:to-white" 
                    type="password"  
                    name="password"
                  id="password"
                  
                />
                    </div>
                    {/* <label className="p-1 m-1 text-2xl leading-4 text-white cursor-pointer">
                        <input type="checkbox" /> Remember Me
                    </label>   */}
                </fieldset>
                <div className="flex flex-row p-2 ">
                        <input className = "justify-center block float-left p-2 mr-16 font-semi-bold text-black bg-yellow-500 border-2 outline-none cursor-pointer xs:mr-2 rounded-xl text-bold hover:bg-transparent hover:text-white duration-500" 
                         
                        type="submit" value="Sign in" />
                 
                    <p className="justify-center block float-right p-2 text-white bg-transparent border-2 outline-none cursor-pointer rounded-xl text-bold">
           Register</p>
           </div> 
                </div>
            </div>
             </div>
            </div>
        </div>
    )
}

export default login

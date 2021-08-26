import axios from "axios";
import { FunctionComponent,useState } from "react";

const EmailForm:FunctionComponent<{
id:string
}> = ({id}) => {

const [emailFrom,setEmailFrom] = useState("");
const[emailTo,setEmailTo] =useState("");
const[message,setMessage] = useState(null);

const handleEmail = async(e) => {
    e.preventDefault();
    try{
    const {data} =  await axios({
            method:"POST",
            url:`${process.env.NEXT_PUBLIC_API}/api/files/email`,
            data:{
                id,
                emailFrom,
                emailTo,
            }
        });
        setMessage(data.message)
    }
    catch(error){
        setMessage(error.data.response.message)
    }
};
return (
        <div className="flex flex-col items-center justify-center w-full p-2 space-y-3">
            
<h3>Send your file through mail!</h3>
<br />
 <form className="flex flex-col items-center justify-center w-full p-2 space-y-3" action="" onSubmit={handleEmail}>
     <input type="email"
      className="flex text-white rounded-xl bg-gray-800 flex-col items-center justify-center w-full p-2"
       placeholder="Email From"
        required 
        onChange={(e) =>
        setEmailFrom(e.target.value)} 
     value ={emailFrom} />
     <br />
     <input type="email" 
     className="flex flex-col rounded-xl items-center text-white bg-gray-800 justify-center w-full p-2"
       placeholder="Email To"
        required onChange={(e) =>
        setEmailTo(e.target.value)} 
     value ={emailTo}/>
     <button type="submit" className="w-44 my-5 p-3 bg-gray-800 rounded-lg focus:outline-none">Email</button>
     </form>
{
    message && <p className="font-medium text-red-500">{message}</p>
}

        </div>
    )
}

export default EmailForm


import { GetServerSidePropsContext, NextPage } from 'next';
import React from 'react';
import axios from 'axios';
import { IFile } from 'libs/types';
import RenderFile from '@components/RenderFile';
import fileDownload from 'js-file-download'

const index:NextPage <{
  file:IFile;
}> = ({ file:{format,name,sizeInBytes,id} }) => {

const handleDownload = async() => {
  const { data } = await axios.get(
 `http://localhost:5000/api/files/${id}/download`,
  {responseType : "blob",
});

fileDownload(data,name);
}



  return <div className= "flex flex-col items-center justify-center py-3 space-y-4 bg-gray-900 rounded-xl shadow-lg w-96">
    {!id  ? 
    <span>
      oops! File does not exist! Check the URL
    </span> : <>
    
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 flex flex-row" viewBox="0 0 20 20" fill="currentColor">
   <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
</svg>

<h1>Your file is ready to be downloaded </h1>
<RenderFile file = {{ format,name,sizeInBytes}} />

<button className="rounded-xl cursor-pointer  bg-gray-700 active:bg-gray-800 m-4 p-2 focus:outline-none px-8"
 onClick = {handleDownload}>
  Download</button>
     </>}
  </div>
}
 

export default index;

export async function getServerSideProps(context:GetServerSidePropsContext){
  const { id } = context.query;  
  let file;
  try{
  const {data} = await axios.get(`http://localhost:5000/api/files/${id}`)
    file = data

} catch(error){
console.log(error.response.data);
file = {}
}
return{
  props: {
    file,
  },
}
}


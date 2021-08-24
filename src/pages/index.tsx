import DropZoneComponent from "@components/DropZoneComponent";
import RenderFile from "@components/RenderFile";
import { useState } from "react";
import axios from "axios";
import DownloadFile from "@components/DownloadFile";
import EmailForm from "@components/EmailForm";


export default function Home() {
  const[file,setFile] =  useState(null);
  const[id,setId] =  useState(null);
  const[downloadPageLink,setDownloadPageLink] =  useState(null)
  const[uploadState,setUploadState] = useState<"Uploading" | "Upload Failed" | "Uploaded" | "Upload">("Upload");

  // console.log({file});
  const handleUpload = async() => {
  if ( uploadState === "Uploading") return;

  setUploadState ("Uploading");
    const formData = new FormData()
    formData.append('myFile',file)
    try{
      const {data}  = await axios ({
        method:"post",
        data :formData,
        url:`${process.env.NEXT_PUBLIC_API}/api/files/upload`,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setDownloadPageLink(data.downloadPageLink)
      setId(data.id);
    }
    catch(error){
      console.log(error.response)
      setUploadState("Upload Failed");
    }
  };

  const resetComponent = () => {
    setFile(null);
    setDownloadPageLink(null);
    setUploadState("Upload");
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="my-4 text-3xl font-medium">
        Share your File with The Disseminator!!
      </h1>
      <div className="flex flex-col items-center justify-center bg-gray-700 shadow-xl w-96 rounded-xl active:bg-gray-800">
        {!downloadPageLink && <DropZoneComponent setFile={setFile} />}
{/* render file */}
{
  file && 
       ( 
        <RenderFile 
        file = {{
          format:file.type.split("/")[1],
          name:file.name,
          sizeInBytes:file.size,
        }}
        />
        )}
{/* {file?.name} */}

        {/* upload button */}
{
  !downloadPageLink  && file && (

        <button className="w-44 my-5 p-3 bg-gray-800 rounded-lg focus:outline-none"
        onClick = {handleUpload}>
          {uploadState}
        </button>
        )}
{
  downloadPageLink && (
    <div className="p-2 text-center">
  <DownloadFile downloadPageLink = {downloadPageLink} />
    <EmailForm id={id} />
    <button className="w-44 my-5 p-3 bg-gray-800 rounded-lg focus:outline-none" onClick={resetComponent}>
    Upload New File
  </button>
  </div>
  )}

      </div>
    </div>
  );
}

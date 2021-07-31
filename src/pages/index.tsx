import DropZoneComponent from "@components/DropZoneComponent";
import { useState } from "react";


export default function Home() {
  const[file,setFile] =  useState(null)
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="my-4 text-3xl font-medium">
        Share your File with The Disseminator!!
      </h1>
      <div className="flex flex-col items-center justify-center bg-gray-700 shadow-xl w-96 rounded-xl">
        <DropZoneComponent setFile={setFile} />
        {/* render file */}
{
  file?.name
}

        {/* upload button */}
      </div>
    </div>
  );
}

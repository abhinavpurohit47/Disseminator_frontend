import React, { FunctionComponent } from 'react'
import {IFile} from "libs/types";
import { sizeInMb } from 'libs/sizeInMb';
const RenderFile:FunctionComponent<{file:IFile;}> 
=({file:{format,sizeInBytes,name}}) => {
    return (
        <div className="flex items-center w-full p-4 my-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
            {/* <img src = {`/images/${format}.png`} alt =""/> */}
            <span className="mx-6">{name}</span> 
            <span className="ml-auto">{sizeInMb(sizeInBytes)}</span>
        </div>
    )
}

export default RenderFile;

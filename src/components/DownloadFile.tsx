import React from 'react'

const DownloadFile = ({downloadPageLink}) => {
    return (
            <div className="p-1"> 
                <h1 className="my-2 text-lg font-medium"> 
        Your file is ready to be downloaded.
         </h1>
            <div className="flex space-x-3">
            <span className="break-all">
                {downloadPageLink}
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" className="text-yellow-500 active:text-yellow-900  h-7 w-7 cursor-pointer object-contain" viewBox="0 0 20 20" fill="currentColor">
  <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
  <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"
  onClick = {() => navigator.clipboard.writeText(downloadPageLink)}
  
  />
</svg>
            </div>
        </div>
    )
}

export default DownloadFile

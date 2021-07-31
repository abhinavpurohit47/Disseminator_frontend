import React, { Dispatch, useCallback, FunctionComponent } from 'react'
import { useDropzone } from 'react-dropzone'

const DropZoneComponent:FunctionComponent<{setFile:Dispatch<any>}> = ({setFile}) => {

    const onDrop = useCallback((acceptedFiles) => {
        console.log(acceptedFiles);
        setFile(acceptedFiles[0])
    }, []);

const { getRootProps, getInputProps,isDragAccept,isDragReject } = useDropzone({
    onDrop,
multiple:false,
});
    
return (
        <div className="p-6 w-full">
            <div {...getRootProps()} className= "h-80 w-full rounded-md cursor-pointer focus:outline-none">
                <input {...getInputProps()} /> 
                <div className={"flex flex-col p-6 items-center justify-center border-2 h-full border-dashed border-yellow-light rounded-xl space-y-3 " +
            (isDragReject === true ? "border-red-600" :"")+
            (isDragAccept === true ? "border-green-500" : "")
        }>
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
</svg>              
                {isDragReject ? (
                    <p className="mt-2 text-base  text-gray-300">
                        Opps! one file at a time.
                    </p>):(
                        <div>
                <p>
                    Drag & Drop Files Here. 
                </p>
                </div>
                    )}
            </div>
        </div>
        </div>
    );
};

export default DropZoneComponent;

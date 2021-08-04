export interface IFile{
    name:string;
    sizeInBytes:number;
    format:string;
    //making ID an optional property
    id?:string;
}
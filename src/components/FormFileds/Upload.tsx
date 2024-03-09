import React from "react";
import { useDropzone } from "react-dropzone";
import { ICONS } from "../../assets/icons";
import Button from "../partial/Button";

const Upload = () => {
  const { getRootProps, getInputProps } = useDropzone();
  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <div className="flex flex-col items-center justify-center gap-4 p-6 border border-dashed border-2 rounded-[8px]">
        <div className="p-2 rounded-full bg-primary_light h-9 w-9 flex items-center justify-center">
          <img src={ICONS.UPLOAD} className="w-full" alt="" />
        </div>
        <p className="text-center text-black_300">
          Drag and drop image here, or click add image
        </p>
        <Button state="black-outlined">Add Image</Button>
      </div>
      {/* <ul>
        {acceptedFiles.map((file) => (
          <li key={file.name}>{file.name}</li>
        ))}
      </ul> */}
    </div>
  );
};
export default Upload;

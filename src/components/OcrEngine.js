import React, { useRef, useState, useEffect } from "react";
import DragNDrop from "../svg/DragNDrop";
import UploadFile from "../svg/UploadFile";
import ViewDetails from "../svg/ViewDetails";

function OcrEngine() {
  const fileInputRef = useRef(null);
  const [files, setFiles] = useState([]); // Store an array of files
  const [fileTypes, setFileTypes] = useState([]); // Store corresponding file types
  const [fileStatuses, setFileStatuses] = useState([]); // Store the status of each file (Processing/Complete)
  const [selectedFile, setSelectedFile] = useState(null); // File selected for viewing
  const [isModalVisible, setIsModalVisible] = useState(false); // Control modal visibility

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const newFiles = Array.from(event.target.files);
    const newFileTypes = newFiles.map((file) => file.type);
    const newFileStatuses = newFiles.map(() => "Processing");

    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    setFileTypes((prevFileTypes) => [...prevFileTypes, ...newFileTypes]);
    setFileStatuses((prevStatuses) => [...prevStatuses, ...newFileStatuses]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFiles = Array.from(event.dataTransfer.files);
    const droppedFileTypes = droppedFiles.map((file) => file.type);
    const droppedFileStatuses = droppedFiles.map(() => "Processing");

    setFiles((prevFiles) => [...prevFiles, ...droppedFiles]);
    setFileTypes((prevFileTypes) => [...prevFileTypes, ...droppedFileTypes]);
    setFileStatuses((prevStatuses) => [...prevStatuses, ...droppedFileStatuses]);
  };

  const handleViewDetails = (file) => {
    setSelectedFile(file);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedFile(null);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setFileStatuses((prevStatuses) =>
        prevStatuses.map(() => "Complete")
      );
    }, 5000);

    return () => clearTimeout(timer);
  }, [files]);

  return (
    <>
      {/* Heading */}
      <div className="flex justify-between">
        <div className="ml-6 flex flex-col justify-center mb-14">
          <h2 className="font-bold text-[32px]">OCR Engine</h2>
          <p>Lorem ipsum dolor sit amet Maecenas rutru.</p>
        </div>
        <div onClick={handleBrowseClick}>
          <UploadFile />
        </div>
      </div>

      {/* Drag and drop area */}
      <div
        className="w-[97%] custom-dotted-border border-[1px] border-[#0056B399] rounded h-[238px] flex gap-2 items-center justify-center"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <DragNDrop />
        <p className="font-bold">
          Drag and drop files here or{" "}
          <span
            onClick={handleBrowseClick}
            className="cursor-pointer text-[#0056B3] ml-2 underline font-bold"
          >
            Browse File
          </span>
        </p>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*,.pdf"
          className="hidden"
          onChange={handleFileChange}
          multiple
        />
      </div>

      <h3 className="mt-4 font-bold text-[32px]">Recent Documents:</h3>

      {/* File List */}
      <div className="bg-[#F3F3F3] w-[97%] border-[1px] border-[#D8D6D6] rounded mt-5 px-20">
        {files.length > 0 && (
          <div className="mt-12 mx-auto">
            <ul className="flex gap-2">
              <li className="w-full my-2 flex justify-start font-bold mb-12 gap-x-4 ml-8 mr-10 py-[2px]">
                <p className="w-1/4">Name: </p>
                <p className="w-1/4">Type: </p>
                <p className="w-1/4">Status: </p>
                <p className="w-1/4">Action:</p>
              </li>
            </ul>
          </div>
        )}

<div className="w-full">
  {files.map((file, index) => (
    <div
      key={index}
      className="flex justify-start items-center font-bold mb-12 ml-8 mr-10 py-[2px] rounded border-b-[1px] border-[#D8D6D6] pb-10 last:border-b-0 last:border-pb-0 "
    >
      <p className="w-1/4">{file.name}</p>
      <p className="w-1/4 font-semibold">{fileTypes[index]}</p>
      <div className="w-1/4">
        <p
          className={`w-[40%] text-center -ml-5 rounded text-[14px] py-1 ${
            fileStatuses[index] === "Complete"
              ? "bg-[#D0F9EE] text-[#19BA92]"
              : "bg-[#0056B3] text-white"
          }`}
        >
          {fileStatuses[index]}
        </p>
      </div>
      <div
        onClick={() => handleViewDetails(file)}
        className="w-1/4 cursor-pointer"
      >
        <ViewDetails />
      </div>
    </div>
  ))}
</div>

      </div>

      {/* Modal */}
      {isModalVisible && selectedFile && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-black bg-opacity-50 w-full h-full flex flex-col items-center justify-center p-6 relative">
      {/* Close Button */}
      <button
        onClick={handleCloseModal}
        className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Close
      </button>
      
      {/* File Name */}
      <h2 className="text-2xl font-bold mb-4">{selectedFile.name}</h2>
      
      {/* Content Preview */}
      <div className="flex items-center justify-center w-full h-[80%]">
        {selectedFile.type.startsWith("image/") ? (
          <img
            src={URL.createObjectURL(selectedFile)}
            alt={selectedFile.name}
            className="w-auto max-h-full rounded shadow"
          />
        ) : (
          <p className="text-gray-700">Preview not available for this file type.</p>
        )}
      </div>
    </div>
  </div>
)}

    </>
  );
}

export default OcrEngine;

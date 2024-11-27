import React, { useRef, useState, useEffect } from "react";
import * as pdfjsLib from "pdfjs-dist";
import pdfWorker from "pdfjs-dist/build/pdf.worker.min.js";
import DragNDrop from "../svg/DragNDrop";
import UploadFile from "../svg/UploadFile";
import ViewDetails from "../svg/ViewDetails";

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

function OcrEngine() {
  const fileInputRef = useRef(null);
  const modalContainerRef = useRef(null); 
  const [files, setFiles] = useState([]);
  const [fileTypes, setFileTypes] = useState([]);
  const [fileStatuses, setFileStatuses] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

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

  // Render PDF Pages
  const renderPDF = (file) => {
    const reader = new FileReader();

    reader.onload = async (event) => {
      const pdfData = new Uint8Array(event.target.result);
      const pdf = await pdfjsLib.getDocument({ data: pdfData }).promise;

      modalContainerRef.current.innerHTML = ""; 

      for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
        const page = await pdf.getPage(pageNumber);
        const viewport = page.getViewport({ scale: 1 });

        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
          canvasContext: context,
          viewport,
        };

        await page.render(renderContext).promise;
        modalContainerRef.current.appendChild(canvas);
      }
    };

    reader.readAsArrayBuffer(file);
  };

  useEffect(() => {
    if (selectedFile && selectedFile.type === "application/pdf") {
      renderPDF(selectedFile);
    }
  }, [selectedFile]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFileStatuses((prevStatuses) => prevStatuses.map(() => "Complete"));
    }, 5000);

    return () => clearTimeout(timer);
  }, [files]);

  return (
    <>
    <div className="ml-5">
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
        className="  w-[98%]  border-[1px] border-[#0056B399] rounded h-[238px] custom-dotted-border flex gap-2 items-center justify-center"
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

      <h3 className="mt-4  font-bold text-[32px]">Recent Documents:</h3>

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
          <div className="bg-white w-[80%] h-[80%] p-6 relative rounded shadow-lg overflow-auto">
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
            <div
              ref={modalContainerRef}
              className="w-full h-[80%] flex flex-col items-center justify-center"
            >
              {selectedFile.type.startsWith("image/") ? (
                <img
                  src={URL.createObjectURL(selectedFile)}
                  alt={selectedFile.name}
                  className="w-auto max-h-full rounded shadow"
                />
              ) : selectedFile.type === "application/pdf" ? (
                <div className="text-center">Rendering PDF...</div>
              ) : (
                <p className="text-gray-700">
                  Preview not available for this file type.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>

    </>
  );
}

export default OcrEngine;

import React, { useState, useRef } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
const FileUploader = () => {
  const [files, setFiles] = useState([]);
  const [code, setCode] = useState([]);
  const dropRef = useRef(null);

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const droppedFiles = Array.from(e.dataTransfer.files);
    const newFiles = files.concat(droppedFiles);
    setFiles(newFiles);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const uploadFilesToServer = async () => {
    const formData = new FormData();
    files.forEach((file) => {
      formData.append("documents", file);
    });

    const res = await axios.post("https://sharedude.onrender.com/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    setCode(res.data.code);
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles((prev) => [...prev, ...selectedFiles]);
  };

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center">
      <input className="form-control fs-3 text-center m-2" style={{width: '120px'}} type="text" value={code} placeholder="000000" aria-label="Disabled input example" disabled></input>

      <div
        ref={dropRef}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="border border-2 border-secondary p-5 text-center rounded bg-light"
        style={{ cursor: "pointer" }}
      >
        <p className="text-muted mb-2">Drag and drop files here</p>
        <p>or</p>
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          className="form-control"
        />
      </div>
      <Button className="Button mt-2" onClick={uploadFilesToServer}>
        Upload to Server
      </Button>

      {files.length > 0 && (
        <div className="my-4">
          <h5>Uploaded Files:</h5>
          <ul className="list-group">
            {files.map((file, idx) => (
              <li key={idx} className="list-group-item">
                {file.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FileUploader;

import React from "react";
import FileUploader from './FileUploader'
import FileGet from "./FileGet";
import { useState } from "react";
import { ToggleButtonGroup, ToggleButton } from "react-bootstrap";
const FileShareComponent = () => {
  const [IsToGet, SetDisplay] = useState(true)
  return (
    <div
      className="d-flex justify-content-center text-white text-center flex-column align-items-center"
      style={{ marginTop: "70px" }}
    >
      <h1>File Uploader</h1>
      <p className="w-50">
        Click on the upload area or simply drag and drop your file here to get
        started. Once uploaded, you’ll receive a unique code to share with
        others — fast, secure, and super easy!
      </p>
      <div style={{ marginBottom: "7px" }}>
      <ToggleButtonGroup type="radio" name="options" defaultValue={2}>
        <ToggleButton className="Button m-0" onClick={()=>SetDisplay(true)} id="tbg-radio-2" value={2}>
          Get Files by Code
        </ToggleButton>
        <ToggleButton className="Button m-0" onClick={()=>SetDisplay(false)} id="tbg-radio-1" value={1}>
          Share Files
        </ToggleButton>
      </ToggleButtonGroup>
        
      </div>
      {IsToGet ? <FileGet /> : <FileUploader />}
    </div>
  );
};

export default FileShareComponent;

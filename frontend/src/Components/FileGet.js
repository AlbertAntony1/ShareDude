import axios from "axios";
import React, { useRef } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";

const FileGet = () => {
  const inputElement = useRef();
  const [files, setFiles] = useState([]);
  const [code, setCode] = useState("");
  var filename;

  function downloadAll() {
    var urls = [];
    files.forEach(file => {
      urls.push(`../images/uploads/documents${file.split(`documents`).pop()}`);
    });
    var interval = setInterval(download, 300, urls);

    function download(urls) {
      var url = urls.pop();
      var a = document.createElement("a");
      a.setAttribute("href", url);
      a.setAttribute("download", url);
      a.setAttribute("target", "_blank");
      a.click();

      if (urls.length === 0) {
        clearInterval(interval);
      }
    }
  }
  async function checkdata() {
    setCode(inputElement.current.value);
    await axios
      .post("https://sharedude.onrender.com/file-get", {
        data: code,
      })
      .then((response) => {
        setFiles(response.data[0].files);
      })
      .catch((err) => console.error(err));
  }
  return (
    <div>
      <h3>Enter Code to Get File</h3>
      <div className="d-flex justify-content-center">
        <input className="my-2 p-0" type="number" ref={inputElement}></input>
        <Button className="Button my-2 mx-2" onClick={checkdata}>
          Check
        </Button>
      </div>
      <ul className="list-group">
        {files.map((file, idx) => (
          <li
            key={idx}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {(filename = file.split(code).pop())}
            <a href={`../images/uploads/documents/${filename}`} download>
              <Button className="Button"> Download</Button>
            </a>
          </li>
        ))}
        {files.length > 0 ? (
          <Button className="Button m-2" onClick={downloadAll}>
            Download All
          </Button>
        ) : (
          <p>No Files</p>
        )}
      </ul>
    </div>
  );
};

export default FileGet;

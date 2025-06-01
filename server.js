const express = require("express");
const app = express();
const port =  process.env.PORT || 5000;
const cors = require("cors");
const path = require('path');
const mongoDB_Connection = require("./mongodbConnection");
const multer = require("multer");
let code = "00000";

app.use(cors());
app.use(express.json());


var storage = multer.diskStorage({
  destination: function (_req, file, cb) {
    var folderPath = `${__dirname}/frontend/public/images/uploads/${file.fieldname}`;
    cb(null, folderPath);
  },
  filename: function (_req, file, cb) {
    code = Math.floor(Math.random() * 1000000).toString();
    cb(null, code + file.originalname);
  },
});

var upload = multer({ storage });



app.get("/", (req, res) => {
  res.send('running')
});

app.get("/get-data", (_req, res) => {
  mongoDB_Connection.viewItems((result) => {
    res.send(result);
  });
});

app.post("/file-get", (req, res) => {
  code = req.body.data;
  mongoDB_Connection.listfiles(code, (result)=> res.send(result));
});

app.post("/add", (req) => {
  Time = new Date().toLocaleString();
  var item = {
    Name: req.body.Name,
    Image: req.body.Image,
    Message: req.body.Message,
    Time: Time,
  };
  mongoDB_Connection.addItems(item);
});

app.post("/add-feedback", (req, res) => {
  var item = req.body.data;
  mongoDB_Connection.addFeedback(item);
});

app.post(
  "/upload",
  upload.array("documents"),
  function (req, res, next) {
    let item = {
        'code': code,
        'files': []
    };
    req.files.forEach((file) => {
      item.files.push(file.path);
    })
    mongoDB_Connection.sharefiles(item);
    res.json(item);
  }
);
app.post(
  "/profile-picture",
  upload.single("profile-picture"),
  function (req, res, next) {
    res.send(req.file.filename);
    
  }
);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}/`);
});

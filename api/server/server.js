require("dotenv").config();
const express = require("express");
const multer = require("multer");

const app = express();

const sequelize = require("./models").sequelize;
sequelize.sync();

const hostname = process.env.HOST;
const PORT = process.env.PORT;
const port = PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Image Load
app.use("/images", express.static(__dirname + "/uploads"));

// Listen Port
app.listen(port, hostname, () => {
  console.log(`Server is listening at ${hostname}:${PORT}`);
});
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + "/uploads"); // cb 콜백함수를 통해 전송된 파일 저장 디렉토리 설정
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // cb 콜백함수를 통해 전송된 파일 이름 설정
  },
});

// Set Static
// const path = require('path');
// app.use(express.static(path.join(__dirname, '../../ui/build')));

// Response Index File
// app.get('*', (req, resp) => {
//     resp.sendFile(path.join(__dirname, '../../ui/build', 'index.html'));
// });

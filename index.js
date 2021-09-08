const express = require('express');
const config = require('./config')//import ENV variables

const app = express();

app.use(express.static('build'));
// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });
const PORT = process.env.PORT
console.log(PORT)


app.listen(config.PORT,()=>{
  console.log(`server running on port ${config.PORT}`);
});
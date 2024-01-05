let express = require('express');
let app = express();
app.use(express.static('public'));
app.get("/", (req, res) => { res.send("Hello World"); });
app.listen(9000);
console.log("Server is On");
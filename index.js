const https = require('https');
const fs = require('fs');
const config = require(__dirname + "/config_ssl.json");

const options = {
    cert: fs.readFileSync(config.crt),
    key: fs.readFileSync(config.key)
};

let server = https.createServer(options, (req, res) => {
    res.writeHead(200);
    res.end('hello world\n');
})

server.listen(8080,()=>{
    console.log(fs.readFileSync(config.crt));
    console.log("Connected")
});
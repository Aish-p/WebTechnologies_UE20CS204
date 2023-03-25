const http = require('http');
getReq();
console.log('');
postReq();
console.log('');
getReq();
function postReq() {
const data = JSON.stringify({ hsp_id: "405", hsp_name: "Humanity", 
hsp_dept: "Outpatient", hsp_timings: "6:00-12:00" });
const options = {
hostname: 'localhost',
port: 8081,
method: 'POST',
headers: {
'Content-Type': 'application/json',
'Content-Length': Buffer.byteLength(data)
}
};
const req = http.request(options, res => {
console.log(`statusCode: ${res.statusCode}`);
res.on('data', d => {
process.stdout.write(d);
});
});
req.write(data);
req.end();
}
function getReq() {
http.get('http://localhost:8081', (res) => {
const chunks = [];
res.on('data', chunk => chunks.push(chunk));
res.on('end', () => {
console.log(Buffer.concat(chunks).toString());
});
});
}

const http = require("http");
const MongoClient = require('mongodb').MongoClient;
http.createServer((req, res) => {
if (req.method === 'GET') {
MongoClient.connect('mongodb://localhost:27017', (err, client) => {
if (err) throw err;
const db = client.db('hospital');
db.collection('Healthcare').find().toArray((err, record) => {
if (err) throw err;
res.writeHead(200, { "Content-Type": "application/json" });
res.write(JSON.stringify(record));
res.end();
client.close();
});
});
}
if (req.method === 'POST') {
const chunks = [];
req.on('data', chunk => chunks.push(chunk));
req.on('end', () => {
const data = JSON.parse(Buffer.concat(chunks).toString());
MongoClient.connect('mongodb://localhost:27017', (err, client) => {
if (err) throw err;
const db = client.db('hospital');
db.collection('healthcare').insertOne(data)
.then(() => {
res.writeHead(200, { "Content-Type": "text" });
res.write('Inserted record!');
res.end();
client.close()
})
});
})
}
}).listen(8081);

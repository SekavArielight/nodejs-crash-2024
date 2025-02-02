import http from "http";
const PORT = 9000;

const server = http.createServer((req, res) => {
    res.end("<h1>How far?</h1>")
});

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
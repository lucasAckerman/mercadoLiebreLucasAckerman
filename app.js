const express = require('express')
const path = require('path')

const app = express();
const expressPort = 3030;

const publicPath = path.resolve(__dirname, './public')
app.use(express.static(publicPath))

app.listen(process.env.PORT || expressPort, () => {
  console.log(`Servidor iniciado en el puerto: ${expressPort}`)
})

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname,"./views/index.html"));
})

app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname,"./views/register.html"));
})

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname,"./views/login.html"));
})
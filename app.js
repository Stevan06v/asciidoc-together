const express = require("express");
const Asciidoctor = require("asciidoctor");

const PORT = 3000;

const app = express();
const asciidoctor = Asciidoctor();

app.use(express.static("public"));


app.get('/test',(req,res)=>{
    var html = asciidoctor.convert(req.query.code,{standalone:true});
    console.log(html);

    res.send(html);
})


// app.get('/asciidoctor.css', (req, res) => {
//     res.setHeader('Content-Type', 'text/css');
//     res.sendFile(__dirname + '/public/asciidoctor.css');
//   });



app.get('/code',(req,res)=>{
    var html = asciidoctor.convert('=hallo', { standalone: true });
    console.log(html);
})

app.listen(PORT, () => {
  console.log(`Server started and is reachable under http://localhost:${PORT}`);
});

const express = require("express");
const app = express();
const port = 3000;

const Category = require("./models/Categories");
const Food = require("./models/Food");
var bodyParser = require("body-parser");
const multer = require("multer");
var storage = multer.memoryStorage();
var uploadMem = multer({ storage: storage });

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.get("/", async (req, res) => {
  const category = await Category.fetchAll();
  const food = await Food.fetchAll();
  // console.log(data)
  res.render("index",{category,food});
});
app.post("/add_food", uploadMem.single("file"), async (req, res) => {
  if (req.file) {
        fs.writeFileSync(
      `public/images/${req.file.name}.${req.file.mimetype.split("/")[1]}`,
      req.file.buffer
    );
    le
    const selesai = await Channel.forge({
      title: channel.snippet.title,
      channel_url: req.body.url,
      channel_id: channel.id,
      published_at: channel.snippet.publishedAt,
      page_token: "",
      username: channel.snippet.customUrl,
      total_video: totalVideo
    }).save();
  }else{

  }
  // console.log(data)
  
});
app.post("/add_category",async (req, res) => {
  return res.json({status:true,data:req.body})
  try{
    
    let {name}=req.body
    const selesai = await Category.forge({
      name
    }).save();
  if(selesai){
    res.json({status:true,data:selesai})
  }else{
    res.json({status:false,data:selesai})
  }
  }catch(e){
    res.json({status:false,data:e.message})
  }
  
  
});
app.get("/all_category", async (req, res) => {
  const category = await Category.fetchAll();
  
    res.json({status:true,data:category})
  
  
});
app.post("/update", async (req, res) => {
  const data = await Queue.fetchAll();
  // console.log(data)
  res.render("index", { data: data.models });
});
app.post("/delete", async (req, res) => {
  const data = await Queue.fetchAll();
  // console.log(data)
  res.render("index", { data: data.models });
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

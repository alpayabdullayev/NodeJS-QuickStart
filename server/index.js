import express from "express";
import cors from "cors";

const app = express();
const PORT = 8000;

let products = [
  {
    id: 1,
    name: "Alma",
    price: 5,
    image: "https://img2.milli.az/n/clickable/204433/07/4/alma_041.jpg",
    info: "Quba Almasi",
  },
  {
    id: 2,
    name: "Xengel",
    price: 0.9,
    image: "https://img5.lalafo.com/i/posters/original/50/61/24/c3dda0cd34f0e4edf27e4d2d50.jpeg",
    info: "Gurce Xengeli",
  },
  {
    id: 3,
    name: "Kete",
    price: 3,
    image: "https://i.ytimg.com/vi/3AMoeShCB68/sddefault.jpg",
    info: "Gence Ketesi",
  },
  {
    id: 4,
    name: "Un",
    price: 2,
    image: "",
    info: "Bismak",
  },
];

let counter = 5

app.use(express.json());
app.use(cors())


//GET
app.get("/products", (req, res) => {
  res.send(products);
});

//GET BY ID
app.get("/products/:id",(req,res)=>{
    const {id} = req.params
    const product = products.find(x=>x.id === +id)
    if (product) {
        res.json(product);
      } else {
        res.status(404).json({ message: 'tapilmadi' });
      }
})

//UPDATE
app.put("/products/:id",(req,res)=>{
    const {id} = req.params

    products = products.filter(x=>x.id !== +id)
    products.push({id:+id, ...req.body})
    products.sort((a, b) => a.id > b.id ? 1 : b.id > a.id ? -1 : 0);

    res.send(products)
})

//POST
app.post("/products",(req,res)=>{
    products.push({id:counter++ ,...req.body})
    res.send(products)
})

//DELETE
app.delete("/products/:id",(req,res)=>{
    const {id} = req.params
    const productsId = products.findIndex(x=>x.id === +id)

    if (productsId !== -1) {
        const Deletedproducts = products.filter(x=>x.id !== +id)
        res.send(Deletedproducts)
        res.status(200).json({message:"products silindi"})
    }
    else{
        res.status(404).json({message:"products tapilmadi"})
    }
})



app.listen(PORT,()=>{
    console.log(`Example app listening on port ${PORT}`)
})

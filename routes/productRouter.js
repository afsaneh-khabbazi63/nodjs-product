const express =require("express")
const router= express.Router()
const {
    getProduct,
    createProduct,
    editProdudt,
    deleteProduct
} =require("../controllers/productController")

router.get("/products", getProduct)
router.post("/products", createProduct)
router.put("/products",editProdudt)
router.delete("/products",deleteProduct)

module.exports= router
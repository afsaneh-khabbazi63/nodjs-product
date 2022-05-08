
const getProduct = (req,res) =>{
    res.send("diplay product")
}

const createProduct=(req,res)=>{
    res.send("create ")
}

function editProdudt(req,res){
    res.send("update ")
}

function deleteProduct(req,res){
    res.send("delete product")
}

module.exports={
    getProduct,
    createProduct,
    editProdudt,
    deleteProduct
}
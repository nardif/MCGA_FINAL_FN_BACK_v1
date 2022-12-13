const esquemaProducts = require('../models/products')

//Metodos para mostrar, actualizar y borrar productos

// obtiene todos los productos

const getProducts = async (req, res) => {    
    try{
        const response = await esquemaProducts.find() 
        return res.status(200).json({
            data: response,
            error: false,
            msg: 'Productos'
        })
    }catch(error){
        return res.status(400).json({
            error: true,
            msg: error
        })
    }
}

// obtiene productos por id

const getProductsById = async (req, res) => {
     try{
         const response = await esquemaProducts.findOne({ id: req.params.id })

         if(!response || response.length === 0){
             return res.status(404).json({
                 error: true,
                 msg: 'El producto no se encuentra'
             })
         }

         return res.status(200).json({
             data: response,
             error: false,
             msg: 'Producto encontrado'
         })
     }catch(error){
         return res.status(400).json({
             error: true,
             msg: error
         })
     }
 }

 // obtiene productos por noombre

 const getProductsByName = async (req, res) => {
    try{
        const response = await esquemaProducts.findOne({ name: req.params.name })

        if(!response || response.length === 0){
            return res.status(404).json({
                error: true,
                msg: 'El producto no se encuentra'
            })
        }

        return res.status(200).json({
            data: response,
            error: false,
            msg: 'Producto encontrado'
        })
    }catch(error){
        return res.status(400).json({
            error: true,
            msg: error
        })
    }
}

// agrega un nuevo producto

 const addProduct =  async (req, res) => {
    try{
         const Product = new esquemaProducts(req.body)
         const newProduct = await Product.save()
         return res.status(201).json({
            data: newProduct,
            error: false,
            msg: 'Producto creado'
         })
    }catch (error){
         return res.status(400).json({
             error: true,
             msg: error
         })
     }
 }

// borrar por id (si hay id repetido borra el primero que encuentra)

 const deleteProductById = async (req, res) => {
    try{
        // console.log(req.params.id);
        const response = await esquemaProducts.deleteOne({ _id: req.params.id })
        if(!response || response.length === 0){
            return res.status(404).json({
                error: true,
                msg: 'No se encuentra el producto que desea eliminar'
            })
        }
        return res.status(204).json({
            data: response,
            error: false,
            msg: 'Producto eliminado'
        })
    }catch(error){
        return res.status(200).json({
            error: true,
            msg: error
        })
    }
}

// actualizar por id REVISAR
const updateProductById = async (req, res) => {
    try {
     
        const response = await esquemaProducts.findByIdAndUpdate(req.params.id, req.body, {new: true, });//solo permite actualizar si lo busco con el id de mongo
        if (!response) {
            return res.status(400).json({
                error: true,
                msg: 'No se pudo actualizar el Producto',
            });
        }
        return res.status(200).json({
            data: response,
            error: false,
            message: 'Producto actualizado'
        }) 
    } catch (error) {
        return res.status(400).json({
            error: true,
            msg: error,
        });
    }
}

module.exports = {getProducts,addProduct,getProductsById,getProductsByName,deleteProductById,updateProductById}
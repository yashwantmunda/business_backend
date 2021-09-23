const router = require('express').Router();
const Business = require('../models/businessModel');

// @GET request


router.post('/create',async (req,res) => {

    const newBusiness = new Business({
        name: req.body.name,
        category:req.body.category,
        size: req.body.size,
        owner: req.body.owner,
        phone: req.body.phone,
        email: req.body.email,
        location: req.body.location,
        description: req.body.description,
        address: {
            street: req.body.address.street,
            city: req.body.address.city,
            state: req.body.address.state,
            zipCode: req.body.address.zipCode,
            country: req.body.address.country
        }
    });

    const result = await newBusiness.save();

    res.status(200).json({
        message:'Your business is registed'
    })

});

router.put('/update/:id', async (req,res) => {
    const address = { ...req.body.address }
    try {
        const business = await Business.findByIdAndUpdate({_id:req.params.id},
            {
                $set:{
                    ...req.body,
                    address:address
                }
    },{new: true});
        res.status(201).json({message:"Information updated",data:business})
    } catch (error) {
        res.status(500).json({message:'business info not updated'})
    }
});


router.get('/fetch', async (req,res) => {
    try {
        const businesses = await Business.find({});
        res.status(200).json({message: "Successfully retrieved data", data: businesses});
    } catch (error) {
        res.status(404).json({message:"unable to fetch data from the server"})
    }
});

router.get('/fetch/:id', async (req,res) => {
    try {
        const business = await Business.findById({_id:req.params.id}); 
        res.status(200).json({message: "Successfully retrieved data", data: business});
    } catch (error) {
        res.status(404).json({message:"unable to fetch data from the server"})
    }
})


router.delete('/delete/:id',async (req,res) => {
    try {
        const deletedInfo = await Business.findByIdAndDelete({_id:req.params.id});
        res.status(200).json({
            message:'Business info deleted',
            data: deletedInfo
        });
    } catch (error) {
        res.status(500).json({message:"unable to delete business data"}) 
    }
})



module.exports = router
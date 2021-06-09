const Customer = require('../models/Customer');
module.exports = {
    async signupCustomer (req,res) {
        const customer = new Customer({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email:req.body.email,
            phone:req.body.phone,
            password: req.body.password,
        });
        try{
            const saveCustomer = await customer.save();
            res.json(saveCustomer);
        }catch (err){
    res.json({message:err});
        }
    },
    async signIncustomer (req,res) {
        const customer = new Customer({
            email:req.body.email,
            password: req.body.password,
        });
        try{
            const signIncustomer = await customer.save();
            res.json(signIncustomer);
        }catch (err){
    res.json({message:err});
        }
    }
}
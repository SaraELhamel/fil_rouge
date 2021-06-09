const Buyer = require('../models/Buyer');
module.exports = {
    async signupBuyer (req,res) {
        const buyer = new Buyer({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email:req.body.email,
            phone:req.body.phone,
            password: req.body.password,
        });
        try{
            const saveBuyer = await buyer.save();
            res.json(saveBuyer);
        }catch (err){
    res.json({message:err});
        }
    },
    async signInbuyer (req,res) {
        const buyer = new Buyer({
            email:req.body.email,
            password: req.body.password,
        });
        try{
            const signInbuyer = await buyer.save();
            res.json(signInbuyer);
        }catch (err){
    res.json({message:err});
        }
    }
}
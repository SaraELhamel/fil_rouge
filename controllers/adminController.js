const Admin = require('../models/Admin');
module.exports = {
    async signupAdmin (req,res) {
        const admin = new Admin({
            name: req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            password: req.body.password,
        });
        try{
            const saveAdmin = await admin.save();
            res.json(saveAdmin);
        }catch (err){
    res.json({message:err});
        }
    },
    async signInadmin (req,res) {
        const admin = new Admin({
            phone:req.body.phone,
            password: req.body.password,
        });
        try{
            const signinAdmin = await admin.save();
            res.json(signinAdmin);
        }catch (err){
    res.json({message:err});
        }
    }
}
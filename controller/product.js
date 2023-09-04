const fs = require('fs');

const UserModel = require('../model/product')
const User = UserModel.Product

const path = require("path")
const data = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../json.json')), 'utf-8');
let products = data.product;
const nodemailer = require("nodemailer");


exports.getProduct = async (req, res) => {
    try {
        const user = await User.find();
        res.status(200).json(user);
    }
    catch (err) {
        res.status(400).json(err);
    }
}
exports.getAllProduct = async (req, res) => {
    try {
        let id = req.params.id
        const user = await User.findById(id);
        res.status(200).json(user);
    }
    catch (err) {
        res.status(400).json(err);
    }
}

exports.addProduct = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(200).json(req.body);
    }
    catch (err) {
        res.status(400).json(err);

    }
}

exports.replaceData = async (req, res) => {
    let id = req.params.id;
    const user = await User.findOneAndUpdate({ UserId: id }, req.body);
    res.json(user);
}

exports.deleteData = async (req, res) => {
    try {
        let id = req.params.id;
        const user = await User.findOneAndDelete({ UserId: id });
        res.json({ code: 0, response: 'Deleted Successfully!!' })
    }
    catch (err) {
        res.status(400).json(err)
    }
}

exports.sendMail = async (req, res) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            host: "smtp.forwardemail.net",
            port: 465,
            secure: true,
            auth: {
                user: "bsp7779@gmail.com",
                pass: "fyjxdqtwhmqvzyeo",
            },
        })
        const info = await transporter.sendMail({
            from: 'bsp7779@gamil.com', // sender address
            to: "misalsagar2425@gmail.com", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
        });
        res.status(200).json({ msg: "Mail Sent Successfully!!!" })
    }
    catch (err) {
        res.status(400).json(err)
    }
}
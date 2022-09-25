import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import express from 'express'

import User from '../db/userModel.js'
import Token from "../db/tokenModel.js";
import tokenModel from "../db/tokenModel.js";
import mongoose, {Schema} from "mongoose";
import Memory from "../db/memoryModel.js";

const router = express.Router()

router.post('/signup', async (req, res) => {
    try {
        const {email, password, confirmPassword, firstName, lastName} = req.body
        const userExists = await User.findOne({email})

        if (userExists)
            return res.status(400).json({message: 'Bu email adresine sahip bir kullanıcı bulunuyor'})

        if (password !== confirmPassword)
            return res.status(400).json({message: 'Girmiş olduğunuz şifreler eşleşmiyor'})

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await User.create({
            email,
            name: `${firstName} ${lastName}`,
            password: hashedPassword,
        })

        const accessToken = jwt.sign(
            {email: user.email, id: user._id},
            process.env.ACCESS_TOKEN_SECRET,
            {
                expiresIn: '3m'
            }
        )

        const refreshToken = jwt.sign(
            {email: user.email, id: user._id},
            process.env.REFRESH_TOKEN_SECRET,
        )

        await Token.create({
            userId: user._id,
            refreshToken: refreshToken,
        })

        res.status(200).json({user, accessToken, refreshToken})

    } catch (e) {
        console.log(error.message)
    }
})

router.get('/logout/:id', async (req, res) => {
    try {
        const {id} = req.params

        if (!mongoose.Types.ObjectId.isValid(id))
            res.status(404).json({message: 'User id is not valid.'})

        const user = await User.findById(id)

        console.log(user)

        await tokenModel.findOneAndUpdate({
                userId: id
            },
            {refreshToken: null},
            {new: true} //Update sonrası güncel veriyi döner
        )
        res.status(200).json({message: 'Çıkış işlemi başarıyla gerçekleştirilmiştir.'})
    } catch (e) {
        res.status(500).json(e)
    }
})

router.post('/signin', async (req, res) => {
    try {
        const {email, password} = req.body

        const user = await User.findOne({email})
        if (!user) return res.status(404).json({message: 'Kullanıcı bulunamadı'})

        const isPasswordCorrect = await bcrypt.compare(password, user.password)

        if (!isPasswordCorrect) return res.status(404).json({message: 'Giriş bilgilerinizi kontrol edip tekrar deneyiniz'})

        const accessToken = jwt.sign(
            {email: user.email, id: user._id},
            process.env.ACCESS_TOKEN_SECRET,
            {
                expiresIn: '3m'
            }
        )

        const refreshToken = jwt.sign(
            {email: user.email, id: user._id},
            process.env.REFRESH_TOKEN_SECRET
        )


        await tokenModel.findOneAndUpdate(
            {userId: user._id},
            {
                refreshToken: refreshToken
            }, {new: true}
        )

        res.status(200).json({user, accessToken})
    } catch (e) {
        res.status(500).json({message: 'Bir hata oluştu'})
    }
})

export default router
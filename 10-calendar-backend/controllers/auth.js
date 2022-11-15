const {response} = require('express');
const bcrypt = require('bcryptjs')
const Usuario = require('../models/Usuario');
const { generarJWT } = require('../helpers/jwt');

const crearUsuario = async(req, res = response)=>{
    const {name, email, password} = req.body;

    try {

        let usuario = await Usuario.findOne({email: email})

        if (usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'Existe un usuario con el correo'
            })
        }

        usuario = new Usuario (req.body);

        //Encriptar contraseña
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync( password, salt);

        await usuario.save();

        //todo
        const token = await generarJWT (usuario.id, usuario.name)

        res.status(201).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }
}

const loginUsuario = async(req, res = response)=>{
    const { email, password} = req.body;

    try {
        let usuario = await Usuario.findOne({email: email})

        if (!usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario no existe'
            });
        }

        //Confirmar los passwords
        const validPassword = bcrypt.compareSync(password, usuario.password);
        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'Password incorrecto'
            });
        }
        //Generar nuesto JWT
        const token = await generarJWT (usuario.id, usuario.name)
        return res.status(201).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }
}

const revalidarToken = async(req, res = response)=>{
    const {uid, name} = req;

    const token = await generarJWT (uid, name)
    
    res.json({
        ok: true,
        msg: 'renew',
        uid,
        name,
        token
    })
}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}
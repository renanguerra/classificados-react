const Classificados = require('../models/Classificados')
const {Op} = require('sequelize')

module.exports = {
    async store(req,res){
        const {title , description} = req.body
        
        const date = new Date()

        const classificados = await Classificados.create({title,description,date})

        return res.json(classificados);
    },

    async index(req,res){
        const classificados = await Classificados.findAll()

        return res.json(classificados)
    },

    async indexSearch(req,res){
        const {title} = req.params;

        const classificados = await Classificados.findAll({
            where: {
                title: {[Op.like]: `%${title}%`}
            }
        })
        return res.json(classificados)
    }
}
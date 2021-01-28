const { Model, DataTypes } = require('sequelize')

class Classificados extends Model {
    static init(sequelize){
        super.init({
            title: DataTypes.STRING,
            description: DataTypes.STRING,
            date: DataTypes.DATE
        }, {
            sequelize
        }
        )
    }
}

module.exports = Classificados;
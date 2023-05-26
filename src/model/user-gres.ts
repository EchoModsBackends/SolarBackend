import { DataTypes, Model, Sequelize } from 'sequelize';
import sequelize from '../utilities/db';

const User = sequelize.define('User', {
    created: { type: DataTypes.DATE, allowNull: false },
    banned: { type: DataTypes.BOOLEAN, defaultValue: false },
    discordId: { type: DataTypes.STRING, allowNull: false, unique: true },
    accountId: { type: DataTypes.STRING, allowNull: false, unique: true },
    username: { type: DataTypes.STRING, allowNull: false, unique: true },
    username_lower: { type: DataTypes.STRING, allowNull: false, unique: true },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    mfa: { type: DataTypes.BOOLEAN, defaultValue: false },
    gameserver: { type: DataTypes.STRING, defaultValue: null },
    canCreateCodes: { type: DataTypes.BOOLEAN, defaultValue: false },
    isServer: { type: DataTypes.BOOLEAN, defaultValue: false }
},
{
    schema: 'server',
}
);

sequelize.sync();

const model = sequelize.model('User');

module.exports = model;
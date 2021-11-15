const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const board_file = sequelize.define(
      "board_file", // ���̺� ��
      // ��Ű�� ����
      {
        idx: {
          type: DataTypes.INTEGER
          , allowNull: false // �ʼ�
          , primaryKey: true
          , autoIncrement: true
        },
        content_idx: {
          type: DataTypes.INTEGER
          , allowNull: false
        },
        file_path: {
          type: DataTypes.STRING(500)
          , allowNull: false
        },
        file_name: {
            type: DataTypes.STRING(100)
            , allowNull: false
          },
        reg_dt: {
          type: DataTypes.DATE
          , allowNull: false
          , defaultValue: Sequelize.NOW
        },
        del_yn: {
            type: DataTypes.STRING(1)
            , allowNull: false
            , defaultValue: 'N'
          },
      },
      // ���̺� �ɼ�
      {
        charset: 'utf8',
        //charset: "utf8mb4", //�̸�Ƽ�ܱ��� �Էµǰ��Ϸ��� utf8mb4�� utf8mb4_general_ci �Է��Ѵ� => ��������
        collate: "utf8_general_ci", // �ѱ� ����ǵ���
        freezeTableName: true,
        tableName: 'board_file', // ���̺�� ���� 
        timestamps: false // createAt, updateAt �ڵ�
      }
    );

    board_file.associate = (db) => {
      board_file.belongsTo(db.board_content, {
        foreignKey: 'idx'
      })
    }
  
    return board_file;
  };
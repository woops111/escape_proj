const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const board_content = sequelize.define(
      "board_content", // ���̺� ��
      // ��Ű�� ����
      {
        idx: {
          type: DataTypes.INTEGER
          , allowNull: false // �ʼ�
          , primaryKey: true
          , autoIncrement: true
        },
        board_idx: {
          type: DataTypes.INTEGER
          , allowNull: false
        },
        board_alias: {
          type: DataTypes.STRING(10)
          , allowNull: false
        },
        seq: {
          type: DataTypes.INTEGER
          , allowNull: false
        },
        seq_grp: {
          type: DataTypes.BIGINT
          , allowNull: false
        },
        parent_idx: {
          type: DataTypes.INTEGER
        },
        mem_idx: {
          type: DataTypes.INTEGER
          , allowNull: false
        },
        mem_nick: {
          type: DataTypes.STRING(50)
        },
        title: {
          type: DataTypes.STRING(200)
          , allowNull: false
        },
        content: {
          type: DataTypes.TEXT
        },
        show_yn: {
          type: DataTypes.STRING(1)
          , allowNull: false
          , defaultValue: 'N'
        },
        reg_dt: {
          type: DataTypes.DATE
          , allowNull: false
          , defaultValue: Sequelize.NOW
        },
        upd_dt: {
          type: DataTypes.DATE
        },
        ip_addr: {
          type: DataTypes.STRING(20)
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
        tableName: 'board_content', // ���̺�� ���� 
        timestamps: false // createAt, updateAt �ڵ�
      }
    );

    board_content.associate = (db) => {
      board_content.belongsTo(db.board_mas, {
        foreignKey: 'idx'
      })
    }
  
    return board_content;
  };
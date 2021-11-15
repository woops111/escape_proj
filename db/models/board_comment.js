const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const board_comment = sequelize.define(
      "board_comment", // ���̺� ��
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
        comment: {
          type: DataTypes.STRING(2000)
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
        tableName: 'board_comment', // ���̺�� ���� 
        timestamps: false // createAt, updateAt �ڵ�
      }
    );

    board_comment.associate = (db) => {
      board_comment.belongsTo(db.board_content, {
        foreignKey: 'idx'
      })
    }
  
    return board_comment;
  };
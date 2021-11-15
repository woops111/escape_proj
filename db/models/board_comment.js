const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const board_comment = sequelize.define(
      "board_comment", // 테이블 명
      // 스키마 정의
      {
        idx: {
          type: DataTypes.INTEGER
          , allowNull: false // 필수
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
      // 테이블 옵션
      {
        charset: 'utf8',
        //charset: "utf8mb4", //이모티콘까지 입력되게하려면 utf8mb4와 utf8mb4_general_ci 입력한다 => 오류난다
        collate: "utf8_general_ci", // 한글 저장되도록
        freezeTableName: true,
        tableName: 'board_comment', // 테이블명 지정 
        timestamps: false // createAt, updateAt 자동
      }
    );

    board_comment.associate = (db) => {
      board_comment.belongsTo(db.board_content, {
        foreignKey: 'idx'
      })
    }
  
    return board_comment;
  };
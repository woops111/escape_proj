const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const board_file = sequelize.define(
      "board_file", // 테이블 명
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
      // 테이블 옵션
      {
        charset: 'utf8',
        //charset: "utf8mb4", //이모티콘까지 입력되게하려면 utf8mb4와 utf8mb4_general_ci 입력한다 => 오류난다
        collate: "utf8_general_ci", // 한글 저장되도록
        freezeTableName: true,
        tableName: 'board_file', // 테이블명 지정 
        timestamps: false // createAt, updateAt 자동
      }
    );

    board_file.associate = (db) => {
      board_file.belongsTo(db.board_content, {
        foreignKey: 'idx'
      })
    }
  
    return board_file;
  };
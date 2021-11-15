module.exports = (sequelize, DataTypes) => {
    const board_mas = sequelize.define(
      "board_mas", // 테이블 명
      // 스키마 정의
      {
        idx: {
            type: DataTypes.INTEGER
            , allowNull: false // 필수
            , primaryKey: true
            , autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(100)
            , allowNull: false
        },
        alias: {
          type: DataTypes.STRING(10)
          , allowNull: false
      },
        // id, createdAt, updatedAt => 필드 자동 생성
      },
      // 테이블 옵션
      {
        charset: 'utf8',
        collate: "utf8_general_ci", // 한글 저장되도록
        tableName: 'board_mas', // 테이블명 지정 
        timestamps: true // createAt, updateAt 자동
      }
    );
  
    return board_mas;
  };
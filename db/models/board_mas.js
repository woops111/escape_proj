module.exports = (sequelize, DataTypes) => {
    const board_mas = sequelize.define(
      "board_mas", // ���̺� ��
      // ��Ű�� ����
      {
        idx: {
            type: DataTypes.INTEGER
            , allowNull: false // �ʼ�
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
        // id, createdAt, updatedAt => �ʵ� �ڵ� ����
      },
      // ���̺� �ɼ�
      {
        charset: 'utf8',
        collate: "utf8_general_ci", // �ѱ� ����ǵ���
        tableName: 'board_mas', // ���̺�� ���� 
        timestamps: true // createAt, updateAt �ڵ�
      }
    );
  
    return board_mas;
  };
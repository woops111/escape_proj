module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User", // ���̺� ��
    // ��Ű�� ����
    {
      email: {
        type: DataTypes.STRING(100), // 40�� �̳�
        allowNull: false, // �ʼ�
        unique: true, // �ߺ� ����
      },
      nickname: {
        type: DataTypes.STRING(100),
        allowNull: false, // �ʼ�
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      // id, createdAt, updatedAt => �ʵ� �ڵ� ����
    },
    // ���̺� �ɼ�
    {
      charset: 'utf8',
      collate: "utf8_general_ci", // �ѱ� ����ǵ���
    }
  );

  return User;
};
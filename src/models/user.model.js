import db from "../config/db.js";

export const createUser = async (user) => {
  const [result] = await db.execute(
    `INSERT INTO users (first_name, last_name, email, password)
     VALUES (?, ?, ?, ?)`,
    [user.first_name, user.last_name, user.email, user.password]
  );

  return result;
};

export const getUsers = async () => {
  const [rows] = await db.execute("SELECT * FROM users");
  return rows;
};

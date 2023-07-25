import connection from "../config/connectDB";

let getAllUser = async (req, res) => {
  const [rows] = await connection.execute("SELECT * FROM `test`");

  return res.status(200).json({
    message: "ok",
    data: rows,
  });
};

let createUser = async (req, res) => {
  const { name, age } = req.body;

  if (!name || !age) {
    return res.status(200).json({
      message: "required pamrams",
    });
  }
  await connection.execute("INSERT INTO test(name, age) VALUES (?, ?)", [
    name,
    age,
  ]);
  return res.status(200).json({
    message: "ok",
  });
};

let updateUser = async (req, res) => {
  const { name, age, id } = req.body;

  if (!name || !age || !id) {
    return res.status(200).json({
      message: "required pamrams",
    });
  }
  await connection.execute("UPDATE `test` SET name=?, age=? WHERE id=? ", [
    name,
    age,
    id,
  ]);
  return res.status(200).json({
    message: "ok",
  });
};

let deleteUser = async (req, res) => {
  let id = req.params.id;

  if (!id) {
    return res.status(200).json({
      message: "required pamrams",
    });
  }
  await connection.execute("DELETE FROM test WHERE id=? ", [id]);

  return res.status(200).json({
    message: "ok",
  });
};
module.exports = {
  getAllUser,
  createUser,
  updateUser,
  deleteUser,
};

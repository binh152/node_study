import connection from "../config/connectDB";

let getHomePage = async (req, res) => {
  // logic
  const [rows] = await connection.execute("SELECT * FROM `test`");
  return res.render("index.ejs", { dataTest: rows });
};

let getDetailPage = async (req, res) => {
  let id = req.params.id;
  let [user] = await connection.execute("SELECT * FROM `test` where id= ? ", [
    id,
  ]);
  console.log(user);
  return res.send(JSON.stringify(user));
};

let createUser = async (req, res) => {
  await connection.execute("INSERT INTO test(name, age) VALUES (?, ?)", [
    req.body.name,
    req.body.age,
  ]);
  return res.redirect("/");
};
let deleteUser = async (req, res) => {
  await connection.execute("DELETE FROM test WHERE id=? ", [req.body.userId]);
  return res.redirect("/");
};

let getEditUser = async (req, res) => {
  let id = req.params.id;
  let [user] = await connection.execute("SELECT * FROM `test` where id= ? ", [
    id,
  ]);
  return res.render("update.ejs", { dataTest: user[0] });
};

let updateUser = async (req, res) => {
  await connection.execute("UPDATE `test` SET name=?, age=? WHERE id=? ", [
    req.body.name,
    req.body.age,
    req.body.id,
  ]);
  return res.redirect("/");
};

module.exports = {
  getHomePage,
  getDetailPage,
  createUser,
  deleteUser,
  getEditUser,
  updateUser,
};

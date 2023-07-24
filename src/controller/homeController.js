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
  console.log(req.body);
  await connection.execute("INSERT INTO test(name, age) VALUES (?, ?)", [
    req.body.name,
    req.body.age,
  ]);
  return res.redirect("/");
};

module.exports = { getHomePage, getDetailPage, createUser };

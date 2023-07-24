import connection from "../config/connectDB";

let getHomePage = async (req, res) => {
  // logic
  const [rows, fields] = await connection.execute("SELECT * FROM `test`");
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

module.exports = { getHomePage, getDetailPage };

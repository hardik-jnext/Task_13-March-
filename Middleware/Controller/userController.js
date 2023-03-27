const getUser = (req, res) => {
  res.send("This is get method");
};

const postUser = (req, res) => {
    res.send("This is post method");
  };
  const putUser = (req, res) => {
    res.send("This is put method");
  };
  const deleteUser = (req, res) => {
    res.send("This is delete method");
  };

module.exports = {getUser,postUser,putUser,deleteUser};

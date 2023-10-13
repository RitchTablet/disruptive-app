// controllers/userController.js

exports.getAllUsers = (req, res) => {
  const users = [
    { id: 1, name: 'Usuario 1' },
    { id: 2, name: 'Usuario 2' },
    { id: 3, name: 'Usuario 3' },
  ];

  res.json(users);
};

exports.createUser = (req, res) => {
  const { name } = req.body;

  const newUser = { id: 4, name };
  res.status(201).json(newUser);
};

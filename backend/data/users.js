import bcrypt from "bcryptjs";

const users = [
  {
    name: "Brad Traversy",
    email: "brad@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "jphn@example.com",
    password: bcrypt.hashSync("123456", 10),
  },

  {
    name: "Jane Doe",
    email: "jane@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;

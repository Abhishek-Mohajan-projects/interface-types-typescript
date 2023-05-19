interface IUser {
  id: number;
  name: string;
  age: number;
}

let users: IUser[] = [];

let user1: IUser = {
  id: 1,
  name: "abhishek",
  age: 21,
};

let user2: IUser = {
  id: 2,
  name: "mohajan",
  age: 22,
};

users.push(user1);
users.push(user2);

const userInfo = (user: IUser) => {
  console.log(`id: ${user.id}, name: ${user.name}, age: ${user.age} `);
};

users.forEach((user) => userInfo(user));

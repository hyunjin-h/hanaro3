// const user = { id: 1, name: "Hong", passwd: "xxx", addr: "Seoul" };
// const { passwd, ...userInfo } = user;
// console.log(userInfo);

const arr = [[{ id: 1 }], [{ id: 2 }, { id: 3 }]];

const [[{ id: id1 }], [{ id: id2 }, { id: id3 }]] = arr;

console.log(id1, id2, id3);

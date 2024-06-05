let userName = "Jack";
let hasLoggedIn = true;

let myNumber: number = 10;
let myRegex: RegExp = /foo/;

const names: string[] = userName.split(" ");
const myValues: Array<number> = [1, 2, 3 /* "asdf" */];

const myPerson: {
  first: string,
  last: string
} = {
  first: "jack",
  last: "Herrington"
};

interface Person {
  first: string,
  last: string
}

const dude: Person = { first: "Dan", last:"Patrick" };

const ids: Record<number,string> = {
  10: "a",
  20: "b"
}

ids[30] = "c";
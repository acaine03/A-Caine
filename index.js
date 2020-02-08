// 'const' is not about IMMUTABILITY (ability to change) - it's about NO REASSIGNMENT.
// OBJECTS can change. PRIMITIVES cannot.
const me = {};

// I CANNOT REASSIGN 'me'.
// me = "23";

// I CAN reassign the VALUE of 'key' inside of 'me'.
me.name = "Caine";

const someone = {
  name: "III",
  age: 21,
  pets: {
    cat: "Dora",
    dog: "Fido"
  }
};

someone.name = "Ed";

console.log(someone.pets.cat);

someone.name = "Ed";
someone.occupation = "dev";

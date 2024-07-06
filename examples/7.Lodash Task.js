const _ = require("lodash");

let users = [
  { id: 1, name: "Alice", age: 25, active: true },
  { id: 2, name: "Bob", age: 30, active: false },
  { id: 3, name: "Charlie", age: 35, active: true },
  { id: 4, name: "David", age: 40, active: false },
];

function getActiveUsers(users) {
  return _.filter(users, (user) => user.active); // Filter users by active property
}

function getSortedUsersByAge(users) {
  return _.sortBy(users, (user) => user.age); // Sort users by age property
}

function getUserNames(users) {
  return _.map(users, (user) => user.name); // Map users to their names
}

function getUserById(users, id) {
  return _.find(users, (user) => user.id === id); // Find user by id property
}

function addUser(users, newUser) {
  return _.concat(users, newUser); // Add new user to the array
}

function removeUserById(users, id) {
  return _.remove(users, (user) => user.id === id); // Remove user by id and return updated array
}

// Additional Task: Update user information
function updateUser(users, updatedUser) {
  const index = _.findIndex(users, (user) => user.id === updatedUser.id);
  if (index !== -1) {
    users[index] = updatedUser; // Update user object at the found index
  }
  return users; // Return the potentially updated users array
}

// Example usage
const activeUsers = getActiveUsers(users);
const sortedUsers = getSortedUsersByAge(users);
const userNames = getUserNames(users);
const userById = getUserById(users, 3);

const newUser = { id: 5, name: "Eve", age: 28, active: true };
const updatedUser = { id: 2, name: "Bob (Updated)", age: 30, active: true };

const usersWithNewUser = addUser(users, newUser);
const usersAfterRemoval = removeUserById(usersWithNewUser, 1);
const usersAfterUpdate = updateUser(usersAfterRemoval, updatedUser);

console.log(activeUsers);
console.log(sortedUsers);
console.log(userNames);
console.log(userById);
console.log(usersWithNewUser);
console.log(usersAfterRemoval);
console.log(usersAfterUpdate);

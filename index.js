const faker = require('faker');



/**
 * @desc generate 50 users data -> 1/2 dynamic 🥴 .. 
 */
const generateUsers = () => {

  let users = [];

  for(let id = 0 ; id < 50 ; id++){
    
    let firstName = faker.name.findName();
    let lastName = faker.name.lastName();
    let email = faker.internet.email();

    users.push({ id, firstName, lastName, email });

  }


  return { users };
}


module.exports = generateUsers ;

const express = require('express');
const { faker } = require('@faker-js/faker');
const app = express();
const port = 8000;

const createUser = () => {
  const newFake = {
    password: faker.internet.password(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.number(),
    lastName: faker.name.lastName(),
    firstName: faker.name.firstName(),
    _id: faker.datatype.number(),
  };
  return newFake;
};

const createCompany = () => {
  const newFake = {
    _id: faker.datatype.number(),
    name: faker.company.name(),
    address: {
      street: faker.address.street(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country(),
    },
  };
  return newFake;
};

app.get('/api/users/new', (request, response) => {
  const newUser = createUser();
  response.json(newUser);
});

app.get('/api/companies/new', (request, response) => {
  const newCompany = createCompany();
  response.json(newCompany);
});

app.get('/api/user/company', (request, response) => {
  const newUser = createUser();
  const newCompany = createCompany();
  response.json({ newUser, newCompany });
});

app.listen(port, () => console.log(`Listening on port: ${port}`));

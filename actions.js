const axios = require("axios");

//TYPES
const { GOT_DESSERTS_DATA, NEW_DESSERT_DATA } = require("./types");

const gotDesserts = (desserts) => {
  return {
    type: GOT_DESSERTS_DATA,
    desserts,
  };
};

const addDessert = (newDessert) => {
  return {
    type: NEW_DESSERT_DATA,
    newDessert,
  };
};
const fetchDesserts = () => {};
const postDessert = () => {};

/* YOUR CODE GOES HERE */
module.exports = { gotDesserts, addDessert, fetchDesserts, postDessert };

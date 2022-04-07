const axios = require("axios");
console.log(111);
axios
  .get("/test/")
  .then((res) => {})
  .catch((err) => {
    console.log("axios error");
  });

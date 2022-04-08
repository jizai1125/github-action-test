const axios = require("axios");
console.log(222);
axios
.get("/test/")
.then((res) => {})
.catch((err) => {
  console.log("axios error");
});
console.log('mmmm');

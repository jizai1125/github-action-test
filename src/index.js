const axios = require("axios");
console.log(1113);
axios
.get("/test/")
.then((res) => {})
.catch((err) => {
  console.log("axios error");
});
console.log('22222');

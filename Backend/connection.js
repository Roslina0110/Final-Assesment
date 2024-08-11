const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://roslinamanue:PDcUzGJ8YxFgIHUa@cluster0.g8pbmvb.mongodb.net/employeedb?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
 
  
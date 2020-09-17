const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://yogesh:yogesh15@yogeshcluster.6qvws.mongodb.net/jobseeker?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Database Connected");
    })
    .catch((error) => {
        console.log("Error in connecting database" + error);
    });
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const applicationRoutes = require("./routes/applicationRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dotenv.config();

const PORT = process.env.PORT || 4000;
// Connect to database
connectDB();

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With,X-Auth-Token, Content-Type, Accept",
//     "Authorization"
//   );
//   next();
// });

app.use("/api/application", applicationRoutes);

app.get("/", (req, res) => {
  res.send("Server is running");
});

//routes
// --------------------- @POST /api/application ---------------------
// --> Description: create a new application
// --> Body:
// {
//     "personalDetails":{
//         "name": "Vivek",
//         "gender": "Male",
//         "addressLine1": "237/5",
//         "addressLine2": "Tirupati Park 2",
//         "city": "Jamnagar",
//         "state": "Gujarat",
//         "country": "India",
//         "pincode": 361006
//     },
//     "transactionNumber": "123ABCD",
//     "transactionDate": "2021-11-10",
//     "transactionAmount": 1500,
//     "programType": "Full-Time",
//     "program": "Phd in CSE",
//     "degreeStatus": "Master Degree Completed with >60%",
//     "academicRecords":[{
//         "degreeName": "CSE",
//         "universityName": "Charusat",
//         "passingYear": 2019,
//         "cgpa": "10"
//     },{
//         "degreeName": "CSE",
//         "universityName": "Charusat",
//         "passingYear": 2018,
//         "cgpa": "10"
//     },
//     {
//         "degreeName": "CSE",
//         "universityName": "Charusat",
//         "passingYear": 2017,
//         "cgpa": "10"
//     }
//     ],
//     "netStatus": "Yes",
//     "netRecords": [{
//         "examName": "JEE",
//         "score": "20",
//         "validity": "none"
//     },{
//         "examName": "GRE",
//         "score": "10",
//         "validity": "none"
//     }
//     ]
// }
// --------------------- @GET /api/application/:id ---------------------
// --> Description: get a specific application using application id
// --> Body: none
// --> Returns: application object from database
//
//
//

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

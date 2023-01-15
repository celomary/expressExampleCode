import dotenv from "dotenv";
dotenv.config();
const url = `mongodb+srv://${process.env.EXP_USERNAME}:${process.env.EXP_PASSWORD}@${process.env.EXP_CLUSTER}.tlcopwh.mongodb.net/${process.env.EXP_DBNAME}?retryWrites=true&w=majority`;

export { url };

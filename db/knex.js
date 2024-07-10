import Knex from "knex";
import knexfile from "../knexfile.js";
const environment = process.env.NODE_ENV || "development";
const config = knexfile;
const knex = Knex(config);
export default knex;

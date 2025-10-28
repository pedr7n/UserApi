import { DocumentStore } from "ravendb";
import dotenv from 'dotenv';
dotenv.config();

const store = new DocumentStore(
    process.env.RAVENDB_URL || "http://localhost:8080",
    process.env.RAVENDB_DATABASE || "UserDB"
);

store.initialize();

export default store;



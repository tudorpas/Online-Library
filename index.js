import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// IMPORT ROUTERS
import homeRouter from "./routes/home.js";
import idRouter from "./routes/books.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3000;

// MAKING /PUBLIC FOLDER STATIC
app.set('views', path.join(__dirname, '/public'));
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, '/public')))

// USE ROUTERS
app.use('/', homeRouter);
app.use('/carti', idRouter);



app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));

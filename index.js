import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import * as plugins from './db/plugins.js';

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({
        message: 'Behold The MEVN Stack!'
    });
});

app.get('/plugins', (req, res) => {
    plugins.getAll().then((plugins) => {
        res.json(plugins);
    });
});

app.post('/plugins', (req, res) => {
    plugins.create(req.body).then((plugin) => {
        res.json(plugin);
    }).catch((error) => {
        res.status(500);
        res.json(error);
    });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`listening on ${port}`);
}); 
 
 
 
 
 

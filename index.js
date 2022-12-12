const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5001;

const app = express();

app.use(cors());
app.use(express.json());


app.get('/', async (req, res) => {
    res.send('react tutorial server is running');
})

app.listen(port, () => (`react tutorial server is running on ${port}`));
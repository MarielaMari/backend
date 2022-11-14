import express from 'express';

const PORT = 4444;
const app = express ();

app.get ('/hello', (req, res) => {
    console.log ('hello, "safety hazards" is working')
});

app.listen (PORT, () => console.log (`Listening on ${PORT}`));

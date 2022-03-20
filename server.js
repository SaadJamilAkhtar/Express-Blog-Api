const express = require('express');
const app = Express();
const port = process.env.POST || 5000;



app.listen(port, () => {
    console.log(`Server listening at port : ${port} ...`)
});
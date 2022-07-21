const express = require('express');

const app = express();
const appPort = 3000;

app.get('/', (request, response) => {
    response.json({
        message: 'This express app is running on Docker!!',
        tip: 'Go to the /docker route, please!'
    });
});

app.get('/docker', (request, response) => {
    response.redirect('https://github.com/Esdrasmelo');
})

app.listen(appPort, () => console.log(`Server is running at http://localhost:${appPort}`));
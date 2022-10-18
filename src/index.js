const app = require('./app');

const port = 3333;
const callback = () => console.log('server running on port', port);

app.listen(port, callback);

const server = require('./server/app');
const PORT = process.env.PORT || 5000

server.listen(
    PORT,
    () => console.log(`\n\t╬ Vivito y coleando en puerto ${PORT} ╬\n`)
);


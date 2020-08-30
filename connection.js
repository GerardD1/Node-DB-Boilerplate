const { Pool } = require('pg');
const connectionString = 'postgres://lgjfpwjripaqio:e3800329a0f7dfeb5455183233008e595daaad06757663b5f0b489907829832d@ec2-54-156-121-142.compute-1.amazonaws.com:5432/dd2nejhvrm9ic4';
const pool = new Pool({
    connectionString: connectionString,
    ssl: connectionString.includes('localhost') ? false : {
        rejectUnauthorized: false
    }
});
module.exports = pool;
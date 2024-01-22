import monk from 'monk';
const connectionString = process.env.MONGODB_URI || 'localhost/mevnStack';
const db = monk(connectionString);

export default db;


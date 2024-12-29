module.exports = {
  development: {
    client: 'mysql2', // Use 'mysql2' instead of 'mysql'
    connection: {
      host: '127.0.0.1', // Update this to your database host
      user: 'root',      // Your MySQL username
      password: 'Ibrahiim22.',      // Your MySQL password
      database: 'dashboard' // Your database name
    },
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  }
};

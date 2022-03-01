require('dotenv').config();

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      user:'postgres',
      password:"makeithappen10@",
      host: 'localhost',
      database:"express"
    },
    migrations: {
      directory: './data/migrations',
    },
    
    seeds: { directory: './data/seeds' },
  },

  testing: {
    client: 'postgresql',
    connection: 'postgres://localhost:5432/demo',
    user:'postgres',
    password:"makeithappen10@",
    migrations: {
      directory: './data/migrations',
    },
    seeds: { directory: './data/seeds' },
  },

  production: {
    client: 'postgresql',
    connection: 'postgres://localhost:5432/demo',
    user:'postgres',
    password:"makeithappen10@",
    migrations: {
      directory: './data/migrations',
    },
    seeds: { directory: './data/seeds' },
  },
};

module.exports = {
  servers: {
    one: {
      host: '202.92.144.42',
      username: 'mbcarandang',
      // pem:
      password: 'c0nc0rd3'
      // or leave blank for authenticate from ssh-agent
    }
  },

  meteor: {
    name: 'sarai',
    path: '/home/mon/SARAI/applications/sarai',
    servers: {
      one: {}
    },
    buildOptions: {
      serverOnly: true,
    },
    env: {
      ROOT_URL: 'sarai.uplb.ph',
      MONGO_URL: 'mongodb://localhost:27017/sarai'
    },

    //dockerImage: 'kadirahq/meteord'
    deployCheckWaitTime: 60
  },

  mongo: {
    oplog: true,
    port: 27017,
    servers: {
      one: {},
    },
  },
};
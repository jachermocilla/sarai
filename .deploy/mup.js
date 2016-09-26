module.exports = {
  servers: {
    one: {
      host: '202.92.144.41',
      username: 'nina',
      // pem:
      password: 'sarai006'
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
      serverOnly: false,
    },
    env: {
      PORT: 80,
      ROOT_URL: 'http://sarai.uplb.ph',
      MONGO_URL: 'mongodb://localhost:27017/sarai'
    },

    //dockerImage: 'kadirahq/meteord'
    deployCheckWaitTime: 120
  },

  mongo: {
    oplog: true,
    port: 27017,
    servers: {
      one: {},
    },
  },
};
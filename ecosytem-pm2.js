module.exports = {
  apps : [{
    name: "API_TESTE",
    script: "src/server.js",
    instances : 1,          // number of workers you want to run
    exec_mode : "cluster",  // to turn on cluster mode; defaults to 'fork' mode
    env_teste: {
      NODE_ENV: "teste",
    }
  }]
}

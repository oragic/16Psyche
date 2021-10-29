module.exports = {
  apps : [{
    name: "API_TESTE",
    script: "src/server.js",
    instances : 1,         
    exec_mode : "cluster",  
  }]
}

module.exports = {
  HOST: "ep-spring-tooth-axq2wtjv-pooler.c-4.us-east-2.aws.neon.tech",
  USER: "neondb_owner",
  PASSWORD: "npg_K8DJbApz1huC",
  DB: "neondb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
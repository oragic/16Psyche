import dotenv from 'dotenv';
dotenv.config();

const config = {
  mongoUrl:`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?authSource=admin?retryWrites=true`
};

export default config;

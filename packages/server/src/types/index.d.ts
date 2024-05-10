declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: string;
      PORT: number;
      ORIGIN: string;
      MONGODB_URL: string;
      REDIS_URL: string;
      JWT_SECRET: string;
    }
  }
}

export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: string;
      PORT: number;
      MONGODB_URL: string;
      REDIS_URL: string;
    }
  }
}

export {};

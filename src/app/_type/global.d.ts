declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // server environments
      readonly OPEN_AI_API_KEY: string;

      // client environments
    }
  }
}

export {};

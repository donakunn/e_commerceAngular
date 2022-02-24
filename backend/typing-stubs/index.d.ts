import session from 'express-session';

declare module 'express-session' {
  export interface SessionData {
    username: { [key: string]: any };
  }
}
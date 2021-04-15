import { config, createSchema } from '@keystone-next/keystone/schema';
import 'dotenv/config';
import { User } from './schemas/User';

const databaseUrl =
  process.env.DATABASE_URL || 'mongodb://localhost/keystone-sick-fits-tutorial';

console.log(databaseUrl);
const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, // how long should a user stay signed in?
  secret: process.env.COOKIE_SECRET,
};

export default config({
  // @ts-ignore
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    },
  },
  db: {
    adapter: 'mongoose',
    url: databaseUrl,
    //todo add data seeding here
  },
  lists: createSchema({
    // schema items go here
    User,
  }),
  ui: {
    // todo change this for roles
    isAccessAllowed: () => true,
  },
  // todo add session values here
});

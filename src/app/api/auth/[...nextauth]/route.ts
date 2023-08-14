import NextAuth, { type NextAuthOptions } from "next-auth";
import { MongoClient, ObjectId } from 'mongodb';
import TwitchProvider from "next-auth/providers/twitch"

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24 * 7
  },
  providers: [
    TwitchProvider({
      clientId: process.env.twitchClientId || 'not exist',
      clientSecret: process.env.twitchClientSecret || 'not exist',
    }),
  ],
  callbacks: {
    async session({ session, token }:any) {
      const client = new MongoClient(process.env.mongodb||'no db env');
      const dbName = process.env.db_name;
      await client.connect();
      const db = client.db(dbName);
      const collection = db.collection('kkanbu');
      const kkanbuInfo = await collection.findOne({twitch:session.user.name})
      client.close()
      if (kkanbuInfo){
        session.token = token.token
        session.kkanbu = kkanbuInfo
        session.user.kkanbu = kkanbuInfo
      return session 
      }
      return null
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

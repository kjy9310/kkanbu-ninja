import NextAuth, { type NextAuthOptions } from "next-auth";
import { MongoClient, ObjectId } from 'mongodb';
import TwitchProvider from "next-auth/providers/twitch"
import { env } from "process";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24 * 7,
  },
  providers: [
    TwitchProvider({
      clientId: process.env.twitchClientId || 'not exist',
      clientSecret: process.env.twitchClientSecret || 'not exist',
    }),
    
  ],
  callbacks: {
    async jwt({token, account}) {
      if (account) {
        token = Object.assign({}, token, { access_token: account.access_token });
      }
      return token
    },
    async session({ session, token }:any) {
      const client = new MongoClient(process.env.mongodb||'no db env');
      const dbName = process.env.db_name;
      console.log('loggin in token',JSON.stringify(token))
      const method = 'GET';
      const headers = {
        Authorization: `Bearer ${token.access_token}`,
        'Client-Id': process.env.twitchClientId||''
      };
      const res = await fetch(`https://api.twitch.tv/helix/users`, { method, headers })
      const twitchUser = await res.json()
      const twitchUserData = twitchUser.data&&twitchUser.data.length>0&&twitchUser.data[0]
        if (twitchUserData){
          console.log('loggin in twitchUser',JSON.stringify(twitchUserData))
          await client.connect();
          const db = client.db(dbName);
          const collection = db.collection('kkanbu');
          const kkanbuInfo = await collection.findOne({twitch:twitchUserData.login})
          console.log('got kkanbuInfo', kkanbuInfo)
          client.close()
          if (kkanbuInfo){
            session.token = token.token
            session.kkanbu = kkanbuInfo
            session.user.kkanbu = kkanbuInfo
          return session 
        }
      }
      return null
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

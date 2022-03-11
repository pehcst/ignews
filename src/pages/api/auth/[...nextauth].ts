import { query as q } from "faunadb";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

import { fauna } from "../../../services/fauna";

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      authorization: { params: { scope: "read:user" } },
    }),
  ],
  callbacks: {
    async session(session) {
      try {
        const useractiveSubscription = await fauna.query(
          q.Get(
            q.Intersection([
              q.Match(
                q.Index("subscription_by_user_ref"),
                q.Select(
                  "ref",
                  q.Get(
                    q.Match(
                      q.Index("user_by_email"),
                      q.Casefold(session.token.email)
                    )
                  )
                )
              ),
              q.Match(
                q.Index("subscription_by_status"), "active"),
            ])
          )
        );
        
        return {
          ...session,
          activeSubscription: useractiveSubscription,
        };
      } catch {
        return {
          ...session,
          activeSubscription: null,
        }
      }
      
    },
    async signIn({ user, account, profile }) {
      const { email } = user;

      try {
        fauna.query(
          q.If(
            q.Not(
              q.Exists(
                q.Match(
                  q.Index("user_by_email"),
                  q.Casefold(user.email as string)
                )
              )
            ),
            q.Create(q.Collection("users"), { data: { email } }),
            q.Get(
              q.Exists(
                q.Match(
                  q.Index("user_by_email"),
                  q.Casefold(user.email as string)
                )
              )
            )
          )
        );

        return true;
      } catch (error) {
        return false;
      }
    },
  },
});

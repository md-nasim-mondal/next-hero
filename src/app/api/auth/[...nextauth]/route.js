import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {
          label: "Email",
          type: "text",
          required: true,
          placeholder: "Your Email",
        },
        password: {
          label: "Password",
          type: "password",
          required: true,
          placeholder: "Enter Your Password",
        },
        // username: {
        //   label: "User Name",
        //   type: "text",
        //   required: true,
        //   placeholder: "Enter username",
        // } 
      },
      async authorize(credentials) {

        const { email, password } = credentials;

        if (!credentials) {
          null;
        }
        if (email) {
          const currentUser = users.find(user => user.email === email)
          if (currentUser) {
            if (currentUser.password === password) {
              return currentUser;
            }
          }
        }
        return null;
      },
    }),
  ],
});

const users = [
  {
    id: 1,
    name: "Mehedi",
    email: "m@gmail.com",
    password: "password"
  },
  {
    id: 2,
    name: "Zihad",
    email: "z@gmail.com",
    password: "password"
  },
  {
    id: 3,
    name: "Shakil",
    email: "s@gmail.com",
    password: "password"
  },
]

export { handler as GET, handler as POST };

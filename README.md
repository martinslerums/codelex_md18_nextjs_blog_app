This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


## Prerequisites

Create a cloud.mongodb.com account in order to have a cloud-data base.

## Getting Started

First, perform npm actions:

```bash
npm install
```

Adjust .env file with your MongoDB variables:

```bash
MONGO_USERNAME=
MONGO_PASSWORD=
MONGO_CLUSTER=
```

In /ibs/mongo/script.tsx file provide your MONGO_URI link and fill it with your account variables:

```bash
const MONGODB_URI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}.tr5zj0y.mongodb.net/BlogsMongoDB`
```

Run the development server:

```bash
npm run dev
```

Navigate to app/api/user/route.tsx file, un-comment POST request in order to create your admin user. 
Default values: username: Admin, password: password

```bash
// export const POST = async () => {
//     try {
//         await connectMongoDB()
//         const passwordHash = await hash("password", 10)
//         const adminUser = await UserModel.create({
//             username: "Admin",
//             password: passwordHash,
//         })
//         console.log("User created")

//         return NextResponse.json({
//             adminUser
//         })
//     }catch (error) {
//         console.error("Error message: ", error)
//     }
// }
```
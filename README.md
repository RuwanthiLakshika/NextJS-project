nextJS project details -     
Techstack - nextJs / MongoDB/ Mongoose/ Nodemail/tailwindcss

## Overview
This project is built using various libraries and tools to ensure a secure and efficient application. Below is a summary of the key dependencies and their roles within the project.

## Dependencies
Axios: A promise-based HTTP client for making requests to external APIs.

bcryptjs: Used for encrypting sensitive data, specifically for hashing passwords securely.

jsonwebtoken: Handles token generation and verification for secure communication. Tokens are sent securely via cookies from the server side to prevent manipulation on the frontend.

Nodemailer: A library to send emails from the server, useful for notifications, password resets, etc.

react-hot-toast: A library for showing notifications in the React frontend.

mongoose: A wrapper around MongoDB drivers to facilitate interactions with the MongoDB database.

![image](https://github.com/user-attachments/assets/ae12c2ff-b513-477f-a5cd-4c457a1b67bd)

![image](https://github.com/user-attachments/assets/cb8c547a-5d4b-4d57-8094-16602b3faedc)

## Environment Variables
Sensitive information, such as database credentials and API keys, is stored in environment variables. This ensures that no sensitive data is hard-coded into the application, providing additional security, especially in production environments.

## Token-Based Authentication
The token-based authentication mechanism works as follows:

Token Generation: When a user interacts with the API, a token is generated. This token is an encrypted string, one portion of which is stored in the user's database record, and the other is sent to the user via a cookie.

Token Verification: Upon receiving an API request, the token is verified. The API checks the database to match the token with the corresponding user. If found, the user's information is retrieved, and the verification status is updated to true. This process ensures that only valid, verified users can proceed with certain actions.

Token Expiry: A verifyExpiry time is maintained to ensure tokens are valid only for a certain period, enhancing security.

## Password Security with bcryptjs
Passwords are securely hashed using the bcryptjs library. The key process involves:

Salt Generation: A random string (salt) is generated to make each password hash unique.

Password Hashing: The salt is combined with the password, and a hashing algorithm is applied to create a secure, irreversible hash.

## Importance of Password Hashing
Security: Hashing with salt ensures that even if an attacker gains access to the hashed passwords, they cannot easily retrieve the original passwords.

Uniqueness: The use of salt makes each hash unique, meaning even if two users have the same password, their hashed passwords will differ.



This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

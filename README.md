# 🏬 Medusa Auth Starter

### A starter template which includes complete Medusa Authflow i.e Registration, User Login & Logout

> Check the official Medusa docs here - https://docs.medusajs.com/api/store/ 

## 🌌 Tech Stack
* [Next.js](https://nextjs.org/) - Frontend Framework
* [Tailwind CSS](https://tailwindcss.com/) - CSS Utility Framework
* [Medusa.js](https://medusajs.com/) - ecom Platform

## 🌠 Sub Dependencies
* [React Hook Form](https://react-hook-form.com/)
* [React Query](https://tanstack.com/query/v4)

## 🔬 Local Setup & Installation
* Start off by installing `medusa` client globally on your system
```bash
$ yarn global add @medusajs/medusa-cli
```

> 📌 Quick Note (By default)
>
> * Admin runs on PORT - 7000
> * Storefront runs on PORT - 8000
> * Backend runs on PORT - 9000

* `cd` into each directory and install the dependencies
```bash
# Backend
cd backend
yarn install

# Admin
cd admin
yarn install

# Storefront
cd storefront
yarn install
```
* The backend server should be running in the background while developing the application!

>### 👤 Creating a new admin user
>* `cd` into the `backend` directory and run the following command
>```bash
>$ medusa user -e some@email.com -p somepassword
>```
>* This will create a new user which can be used to access the dashboard

* Test the application by running the server, admin and storefront
```bash
# Backend
cd backend
yarn start

# Admin
cd admin
yarn start

# Storefront
cd storefront
yarn dev
```

## 🎯 Overview
* Register Component

![1](https://user-images.githubusercontent.com/35108041/196891657-55df5526-0992-4272-87d0-49cbc4c9f788.png)

* Login Component

![2](https://user-images.githubusercontent.com/35108041/196891667-81321565-e09a-4c10-a3a0-5d9fbdaa1678.png)

* Authenticated User (*any protected route*)

![3](https://user-images.githubusercontent.com/35108041/196892272-d21582da-8846-459a-b32c-239bd9501632.png)


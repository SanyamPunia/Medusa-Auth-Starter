<h2 align="center">🏬 Medusa Auth Starter</h2>

<div align="center">
    <img src="https://img.shields.io/static/v1?label=medusa&message=js&color=blueviolet&style=for-the-badge" alt="medusa-badge"/>
    <img src="https://img.shields.io/static/v1?label=Version&message=1.5.0&color=success&style=for-the-badge" alt="v1.5.0">
    <img src="https://img.shields.io/static/v1?label=PRs&message=welcome&color=success&style=for-the-badge" alt="prs-welcome">
    <img src="https://img.shields.io/static/v1?label=Starter&message=Template&color=success&style=for-the-badge" alt="starter-template">
    <p style="font-weight: bold"> A Starter Template which includes complete Medusa Authflow i.e Registration, User Login & Logout</p>
</div>

## 🍀 Key Features
1. This starter template provides authentication workflow out of the box, so you don't have to re-invest your time building it from scratch.
2. Maintable folder structure and following Medusa's similar code practices.
3. Currently supporting version [`v.1.5.0`](https://github.com/medusajs/medusa/releases/tag/v1.5.0)
4. Tailwind CSS integration with Next.js for styling.

<!-- ## 👨‍🌾 Contributors
* [Sanyam Punia](https://github.com/SanyamPunia)
* [Yash Punia](https://github.com/yash-Punia/)
-->
## 🌌 Tech Stack

- [Next.js](https://nextjs.org/) - Frontend Framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS Utility Framework
- [Medusa.js](https://medusajs.com/) - ecom Platform

## 🌠 Sub Dependencies

- [React Hook Form](https://react-hook-form.com/)
- [React Query](https://tanstack.com/query/v4)

## 🔬 Local Setup & Installation

1. Start off by installing `medusa` client globally on your system

```bash
$ yarn global add @medusajs/medusa-cli
```

> 📌 Quick Note (By default)
>
> - Admin runs on PORT - 7000
> - Storefront runs on PORT - 8000
> - Backend runs on PORT - 9000

2.  `cd` into each directory and install the dependencies

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

3.  The backend server should be running in the background while developing the application!

> ### 👤 Creating a new admin user
>
> - `cd` into the `backend` directory and run the following command
>
> ```bash
> $ medusa user -e some@email.com -p somepassword
> ```
>
> - This will create a new user which can be used to access the dashboard

4.  Test the application by running the server, admin and storefront

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

1.  Register Component

![1](https://user-images.githubusercontent.com/35108041/196891657-55df5526-0992-4272-87d0-49cbc4c9f788.png)

2.  Login Component

![2](https://user-images.githubusercontent.com/35108041/196891667-81321565-e09a-4c10-a3a0-5d9fbdaa1678.png)

3.  Authenticated User (_any protected route_)

![3](https://user-images.githubusercontent.com/35108041/196892272-d21582da-8846-459a-b32c-239bd9501632.png)

## 🥏 Deployment

Follow the deployment guide provided in the docs -

- Server - https://docs.medusajs.com/deployments/server/
- Admin - https://docs.medusajs.com/deployments/admin/
- Storefront - https://docs.medusajs.com/deployments/storefront/

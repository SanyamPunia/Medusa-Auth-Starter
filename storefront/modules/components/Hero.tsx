import Login from "@modules/account/login";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="container mx-auto text-center flex flex-col gap-3">
      <h1 className="font-playfair text-4xl">Auth Starter Template</h1>
      <p className="font-notosans text-sm text-gray-500">
        Made using{" "}
        <Link target="_blank" rel="noreferrer" href="https://medusajs.com/">
          <a className="text-red-400 hover:text-red-700">Medusa.js</a>
        </Link>
        ,{" "}
        <Link target="_blank" rel="noreferrer" href="https://nextjs.org/">
          <a className="text-red-400 hover:text-red-700">Next.js</a>
        </Link>{" "}
        &{" "}
        <Link target="_blank" rel="noreferrer" href="https://tailwindcss.com/">
          <a className="text-red-400 hover:text-red-700">Tailwind CSS</a>
        </Link>
      </p>
      <Login />
    </div>
  );
};

export default Hero;

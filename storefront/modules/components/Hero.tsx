import Login from "@modules/account/login";

const Hero = () => {
  return (
    <div className="container mx-auto text-center flex flex-col gap-3">
      <h1 className="font-playfair text-4xl">Auth Starter Template</h1>
      <p className="font-notosans text-sm text-gray-500">
        Made using <a className="text-red-400 hover:text-red-700" href="https://medusajs.com/" target="_blank">Medusa.js</a>, <a className="text-red-400 hover:text-red-700" href="https://nextjs.org/" target="_blank">Next.js</a> & <a className="text-red-400 hover:text-red-700" href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a>
      </p>
      <Login />
    </div>
  );
};

export default Hero;

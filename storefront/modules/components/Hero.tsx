import Login from "@modules/account/login";

const Hero = () => {
  return (
    <div className="container mx-auto text-center flex flex-col gap-3">
      <h1 className="font-playfair text-4xl">Auth Starter Template</h1>
      <p className="font-notosans text-sm text-gray-500">
        Made using Medusa.js, Next.js & Tailwind CSS
      </p>
      <Login />
    </div>
  );
};

export default Hero;

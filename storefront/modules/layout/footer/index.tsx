import Link from 'next/link';

const Footer = () => {
  return (
    <div className="my-24 text-center container mx-auto">
      <h1 className="font-notosans text-sm text-gray-500">
        Made with <span className="text-lg">♥</span> by{' '}
        <Link href="https://github.com/SanyamPunia/" passHref>
          <a target="_blank" className="text-red-400 cursor-pointer transition hover:text-gray-500">
            Sanyam
          </a>
        </Link>{' '}
        &{' '}
        <Link href="https://github.com/Yash-Punia/" passHref>
          <a target="_blank" className="text-red-400 cursor-pointer transition hover:text-gray-500">
            Yash
          </a>
        </Link>
      </h1>
    </div>
  );
};

export default Footer;

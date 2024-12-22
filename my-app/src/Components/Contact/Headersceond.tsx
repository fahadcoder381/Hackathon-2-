import Link from 'next/link';
import Image from 'next/image';

const ContactHeader = () => {
  return (
    <div
      className="bg-cover bg-center h-[350px] flex items-center justify-center"
      style={{ backgroundImage: "url('/shop img.png')" }}
    >
      {/* Header Section */}
      <header className="text-center  bg-opacity-70 p-6 rounded-md ">
        <div className="flex flex-col items-center">
          <Link href="/">
            <img src="/logo.png" alt="MUZ Logo" className="h-18 w-16 " />
          </Link>
          <h1 className="text-3xl font-bold mb-2">Contact</h1>
          <nav className="breadcrumb text-sm">
            <Link href="/" className="text-black hover:underline">
              Home
            </Link>
            <span className="mx-2">&gt;</span>
            <Link href="/" className="text-black hover:underline">
            Contact
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default ContactHeader ;
import { useRouter } from 'next/router';
import logo from 'public/images/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import AddIcon from '@mui/icons-material/Add';
import { items } from './list';
import ProfileDropdown from './profileDropdown';

export default function Header() {
  const router = useRouter();
  const hideHeader =
    router.pathname.includes('login') || router.pathname.includes('register');

  if (hideHeader) return;

  return (
    <header>
      <nav className="bg-white  py-4 border-b-[1px] border-[#CBCBCB]">
        <div className="flex flex-wrap justify-between items-center container">
          <Link href={'/'} className="flex flex-row items-center">
            <Image src={logo} className="mr-3 h-6 sm:h-9" alt="dimensio logo" />
            <p>Dimensio</p>
          </Link>
          <div className="flex flex-row items-center lg:order-2">
            <Link
              href={'/new-ticket'}
              className="text-white bg-blue focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-[30px]"
            >
              <AddIcon className="mr-2" />
              New ticket
            </Link>
            <ProfileDropdown />
          </div>
          <div className="justify-between text-base items-center w-full lg:flex lg:w-auto lg:order-1">
            <ul className="flex flex-col mt-4 lg:flex-row lg:space-x-[40px] lg:mt-0">
              {items.map((item) => (
                <li key={item.link}>
                  <Link
                    href={item.link}
                    className="block  text-black hover:text-blue"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

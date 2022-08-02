import {
  ClipboardCheckIcon,
  CubeIcon,
  UserGroupIcon,
  TruckIcon,
  HomeIcon,
  ClipboardCopyIcon,
  LogoutIcon,
} from '@heroicons/react/outline';
import { logout } from '@store/counter/loginReducer';
import { useAppDispatch } from '@store/hooks';
import Link from 'next/link';
import { useRouter } from 'next/router';

const navigation = [
  {
    name: 'Inicio',
    href: '/dashboard',
    icon: <HomeIcon className="mx-2 block h-6 w-6" aria-hidden="true" />,
  },
  {
    name: 'Productos',
    href: '/products',
    icon: <CubeIcon className="mx-2 block h-6 w-6" aria-hidden="true" />,
  },
  {
    name: 'Clientes',
    href: '/clients',
    icon: <UserGroupIcon className="mx-2 block h-6 w-6" aria-hidden="true" />,
  },
  {
    name: 'Cotizaciones',
    href: '/quotes',
    icon: (
      <ClipboardCopyIcon className="mx-2 block h-6 w-6" aria-hidden="true" />
    ),
  },
  {
    name: 'Notas',
    href: '/orders',
    icon: (
      <ClipboardCheckIcon className="mx-2 block h-6 w-6" aria-hidden="true" />
    ),
  },
  {
    name: 'Deposito',
    href: '/deposit',
    icon: <TruckIcon className="mx-2 block h-6 w-6" aria-hidden="true" />,
  },
];

export default function Example({ children }) {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const navigation2 = [
    {
      name: 'Cerrar Sesión',
      handle: () => {
        dispatch(logout());
        router.push('/login');
      },
      icon: <LogoutIcon className="mx-2 block h-6 w-6" aria-hidden="true" />,
    },
  ];

  return (
    <div className="h-screen">
      <div className="relative h-full">
        <div>
          <div className="fixed left-0 top-0 h-screen w-64 rounded-r-2xl bg-white">
            <div className="flex w-full justify-center p-4">
              <img className="w-20" src="/Logo_1.svg" alt="logo" />
            </div>
            <div className="">
              {navigation.map((option) => (
                <div key={option.name} className="my-1 w-full px-2">
                  <Link href={option.href}>
                    <button
                      className={`flex w-full rounded-md p-2 text-left hover:bg-blue-400 hover:text-white ${
                        option.href === router.asPath
                          ? 'disabled pointer-events-none bg-blue-800 font-bold text-white'
                          : ''
                      }`}
                    >
                      <span className="mr-2">{option.icon}</span>
                      {option.name}
                    </button>
                  </Link>
                </div>
              ))}
            </div>
            <hr className="m-4 rounded-full border-slate-300" />
            <div className="">
              {navigation2.map((option) => (
                <div key={option.name} className="my-1 w-full px-2">
                  <button
                    onClick={option.handle}
                    className={`flex w-full rounded-md p-2 text-left hover:bg-blue-400 hover:text-white`}
                  >
                    <span className="mr-2">{option.icon}</span>
                    {option.name}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex w-full">
          <div className="w-80"></div>
          <div className="w-full">{children}</div>
        </div>
      </div>
    </div>
  );
}

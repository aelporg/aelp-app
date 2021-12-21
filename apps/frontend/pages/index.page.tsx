import Link from 'next/link';
import Button from '../components/atoms/button';
import Logo from '../components/atoms/logo/logo';

const links = [
  { name: 'Features', href: '#features' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Sign In', href: '/auth/sign-in' },
];

export function Index() {
  return (
    <div className="flex h-screen flex-col px-10 py-5">
      <nav className="flex justify-between items-end">
        <Logo size="lg" />
        <div>
          {links.map(link => {
            return (
              <Link key={link.name} passHref href={link.href}>
                <li className="inline cursor-pointer text-gray-500 p-3 font-medium hover:border-accent hover:text-accent border-b-[3px] border-transparent text-xl">
                  {link.name}
                </li>
              </Link>
            );
          })}
          <Link href="/auth/sign-up" passHref>
            <Button variant="secondary" size="lg" className="ml-2">
              Sign Up
            </Button>
          </Link>
        </div>
      </nav>
      <div className="flex px-12 flex-col flex-grow justify-center landing-page items-start">
        <h1 className="text-6xl font-bold mb-8 leading-tight">
          Focus on teaching, while we do the hard work
        </h1>
        <p className="text-gray-400 text-2xl mb-8 w-10/12">
          <b>aelp</b> makes creating and managing classrooms easy. Automate
          grading, take exams with fully-featured Web IDE. Host competitions,
          get your questions answered.
        </p>
        <Link href="/auth/sign-up" passHref>
          <Button size="xl" variant="primary">
            Create your free Classroom
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Index;

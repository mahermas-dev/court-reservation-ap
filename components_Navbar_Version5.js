import Link from 'next/link';

export default function Navbar({ user }) {
  return (
    <nav>
      <Link href="/">Home</Link>
      {user ? (
        <> 
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/logout">Logout</Link>
        </>
      ) : (
        <> 
          <Link href="/login">Login</Link>
          <Link href="/signup">Signup</Link>
        </>
      )}
    </nav>
  );
}
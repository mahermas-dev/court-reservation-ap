import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabaseClient';
import Navbar from '../components/Navbar';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    async function getUser() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) router.push('/login');
      else setUser(user);
    }
    getUser();
  }, [router]);

  return (
    <> 
      <Navbar user={user} />
      <div className="container">
        <h2>Dashboard</h2>
        {user ? (
          <div>
            <p>Welcome, {user.email}!</p>
            <p>Here you will be able to manage your reservations and organizations.</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}
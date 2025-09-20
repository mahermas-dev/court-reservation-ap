import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import Navbar from '../components/Navbar';

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    getUser();
    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    return () => {
      authListener?.unsubscribe();
    };
  }, []);

  return (
    <> 
      <Navbar user={user} />
      <div className="container">
        <h1>Court Reservation App</h1>
        <p>Welcome to your new court reservation platform!</p>
        {!user && <p><a href="/login">Login</a> or <a href="/signup">Signup</a> to get started.</p>}
        {user && <p>Go to your <a href="/dashboard">dashboard</a> to manage your reservations.</p>}
      </div>
    </>
  );
}
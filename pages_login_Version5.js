import { useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabaseClient';
import Navbar from '../components/Navbar';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  async function handleLogin(e) {
    e.preventDefault();
    setError('');
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setError(error.message);
    else router.push('/dashboard');
  }

  return (
    <> 
      <Navbar />
      <div className="container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label>Email:<br />
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
          </label><br /><br />
          <label>Password:<br />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
          </label><br /><br />
          <button type="submit">Login</button>
        </form>
        {error && <p style={{color: 'red'}}>{error}</p>}
      </div>
    </>
  );
}
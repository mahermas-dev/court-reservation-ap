import { useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabaseClient';
import Navbar from '../components/Navbar';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  async function handleSignup(e) {
    e.preventDefault();
    setError('');
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) setError(error.message);
    else router.push('/dashboard');
  }

  return (
    <> 
      <Navbar />
      <div className="container">
        <h2>Signup</h2>
        <form onSubmit={handleSignup}>
          <label>Email:<br />
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
          </label><br /><br />
          <label>Password:<br />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
          </label><br /><br />
          <button type="submit">Signup</button>
        </form>
        {error && <p style={{color: 'red'}}>{error}</p>}
      </div>
    </>
  );
}
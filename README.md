# Court Reservation App

A starter template for a court reservation web application using **Next.js** and **Supabase** (authentication, users, organizations).

## Features

- User authentication (signup/login/logout)
- Organization/user management foundation
- Easily extensible for courts, reservations, admin dashboard, etc.
- Deployable to Vercel, Netlify, or as static export (see Next.js docs)

## Getting Started

1. **Clone this repo** and install dependencies:

   ```bash
   npm install
   ```

2. **Create a [Supabase](https://supabase.com/) project:**

   - Go to [Supabase](https://app.supabase.com/) and start a new project.
   - Get your project URL and anon/public key.

3. **Configure environment variables:**

   - Copy `.env.local.example` to `.env.local` and fill in your Supabase credentials.

4. **Run the development server:**

   ```bash
   npm run dev
   ```

5. **Deploy:**  
   - [Vercel](https://vercel.com/) (recommended)
   - Or [Netlify](https://www.netlify.com/)  
   - Or [GitHub Pages (static export)](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports#github-pages)

## Database Table Suggestions

Create these tables in Supabase for further features:

- `organizations` (id, name, owner_id, created_at)
- `courts` (id, organization_id, name, location, ...)
- `reservations` (id, court_id, user_id, start_time, end_time, ...)

You can use Supabase's table editor or SQL editor.

## Next Steps

- Build CRUD for organizations and courts
- Add reservation form and calendar
- Add admin/owner views

## License

MIT
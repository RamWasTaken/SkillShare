# SkillShare - Learn and Teach Platform

A modern platform for learning and teaching skills, built with Next.js 14, Supabase, and Tailwind CSS.

## Features

- Authentication with Google and GitHub
- Role-based access control (Student/Instructor)
- Course listing and detail pages
- Course creation and management
- User authentication and enrollment
- Real-time chat and messaging
- File uploads and media handling
- Interactive leaderboard
- Responsive design

## Tech Stack

- **Frontend**:
  - Next.js 14 (App Router)
  - TypeScript
  - Tailwind CSS
  - Shadcn UI
  - Radix UI
  - React Hook Form + Zod
  - Framer Motion

- **Backend**:
  - Supabase (PostgreSQL, Auth, Storage)
  - Next.js API Routes
  - Vercel Blob Storage

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account
- Vercel account (for deployment)

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Vercel Blob Storage
BLOB_READ_WRITE_TOKEN=your_vercel_blob_token

# OAuth Configuration
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_google_client_id
NEXT_PUBLIC_GITHUB_CLIENT_ID=your_github_client_id
```

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/skillshare.git
   cd skillshare
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Supabase Setup

1. Create a new Supabase project
2. Enable the following authentication providers:
   - Google
   - GitHub
3. Create the following tables:
   - profiles
   - courses
   - enrollments
   - reviews
   - messages

## Deployment

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

## Testing

```bash
# Run unit tests
npm test

# Run E2E tests
npm run cypress
```

## VS Code Extensions

- Postgres
- Tailwind CSS IntelliSense
- ESLint
- Prettier
- TypeScript and JavaScript Language Features

## License

MIT 

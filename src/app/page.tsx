import { useSupabase } from '@/providers/supabase-provider'

export default function Home() {
  const { user, signInWithOAuth } = useSupabase()

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Welcome to SkillShare
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Learn and teach skills in a collaborative environment
          </p>
          {!user ? (
            <div className="space-x-4">
              <button
                onClick={() => signInWithOAuth('google')}
                className="bg-white text-gray-900 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Sign in with Google
              </button>
              <button
                onClick={() => signInWithOAuth('github')}
                className="bg-gray-800 text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-700 transition-colors"
              >
                Sign in with GitHub
              </button>
            </div>
          ) : (
            <div className="text-white">
              <p>Welcome back, {user.email}</p>
            </div>
          )}
        </div>
      </div>
    </main>
  )
} 
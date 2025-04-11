'use client'

import { useSupabase } from '@/providers/supabase-provider'
import React from 'react'
import { AuthChangeEvent, Session } from '@supabase/supabase-js'

export default function Home() {
  const { supabase } = useSupabase()
  const [user, setUser] = React.useState<any>(null)

  React.useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event: AuthChangeEvent, session: Session | null) => {
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [supabase])

  const signInWithOAuth = async (provider: 'google' | 'github') => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    })

    if (error) {
      console.error('Error signing in:', error.message)
    }
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold">Welcome to SkillShare</h1>
        <p className="text-xl">Your platform for learning and sharing knowledge.</p>
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
      </main>
    </div>
  )
} 
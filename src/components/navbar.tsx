'use client'

import React from 'react'
import Link from 'next/link'
import { useSupabase } from '@/providers/supabase-provider'

export default function Navbar() {
  const { supabase } = useSupabase()

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold">SkillShare</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/courses" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300">
                Courses
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <button
              onClick={async () => {
                await supabase.auth.signOut()
              }}
              className="ml-4 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
} 
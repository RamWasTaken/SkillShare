import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { Course } from '@/types/course'

export async function GET() {
  const supabase = createRouteHandlerClient({ cookies })

  const { data: courses, error } = await supabase
    .from('courses')
    .select('*, instructor:profiles(*)')
    .order('created_at', { ascending: false })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(courses)
}

export async function POST(request: Request) {
  const supabase = createRouteHandlerClient({ cookies })
  const { data: { session } } = await supabase.auth.getSession()

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await request.json()
  const { title, description, price, thumbnail } = body as Partial<Course>

  if (!title || !description || !price) {
    return NextResponse.json(
      { error: 'Missing required fields' },
      { status: 400 }
    )
  }

  const { data: course, error } = await supabase
    .from('courses')
    .insert([
      {
        title,
        description,
        price,
        thumbnail,
        instructor_id: session.user.id,
      },
    ])
    .select()
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(course)
} 
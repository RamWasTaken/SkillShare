export type Course = {
  id: string
  title: string
  description: string
<<<<<<< HEAD
  instructor_id: string
  created_at: string
  updated_at: string
  price: number
  image_url?: string
  lessons: {
    id: string
    title: string
    description: string
    order: number
  }[]
=======
  price: number
  thumbnail: string
  instructor_id: string
  created_at: string
  updated_at: string
}

export type CourseWithInstructor = Course & {
  instructor: {
    id: string
    email: string
    name: string
    avatar_url: string
  }
}

export type CourseReview = {
  id: string
  course_id: string
  user_id: string
  rating: number
  comment: string
  created_at: string
}

export type CourseEnrollment = {
  id: string
  course_id: string
  user_id: string
  created_at: string
>>>>>>> 98c9c67ead9145d502e89e9ef460bf7512025a66
} 
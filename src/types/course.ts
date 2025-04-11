export interface Course {
  id: string;
  title: string;
  description: string;
  instructor_id: string;
  price: number;
  created_at: string;
  updated_at: string;
  thumbnail_url?: string;
  video_url?: string;
  category?: string;
  level?: 'beginner' | 'intermediate' | 'advanced';
  duration?: number;
  rating?: number;
  enrolled_students?: number;
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
} 
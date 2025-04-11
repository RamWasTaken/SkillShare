'use client'

import * as React from 'react'
import Image from 'next/image'
import { CourseWithInstructor } from '@/types/course'
import { Star } from 'lucide-react'

interface CourseCardProps {
  course: CourseWithInstructor
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image
          src={course.thumbnail}
          alt={course.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{course.title}</h3>
          <span className="text-lg font-bold text-gray-900">${course.price}</span>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src={course.instructor.avatar_url}
              alt={course.instructor.name}
              width={24}
              height={24}
              className="rounded-full"
            />
            <span className="ml-2 text-sm text-gray-600">
              {course.instructor.name}
            </span>
          </div>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-600">4.8</span>
          </div>
        </div>
      </div>
    </div>
  )
} 
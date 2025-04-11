'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface CourseCardProps {
  id: string
  title: string
  description: string
  imageUrl: string
  instructor: string
}

export default function CourseCard({ id, title, description, imageUrl, instructor }: CourseCardProps) {
  return (
    <Link href={`/courses/${id}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative h-48">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="mt-1 text-sm text-gray-500">{description}</p>
          <p className="mt-2 text-sm text-gray-600">By {instructor}</p>
        </div>
      </div>
    </Link>
  )
} 
"use client";

import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Menu } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

const mockStories = [
  { id: 1, username: 'user1', imageUrl: '/placeholder.svg?height=60&width=60' },
  { id: 2, username: 'user2', imageUrl: '/placeholder.svg?height=60&width=60' },
  { id: 3, username: 'user3', imageUrl: '/placeholder.svg?height=60&width=60' },
  { id: 4, username: 'user4', imageUrl: '/placeholder.svg?height=60&width=60' },
  { id: 5, username: 'user5', imageUrl: '/placeholder.svg?height=60&width=60' },
  { id: 6, username: 'user6', imageUrl: '/placeholder.svg?height=60&width=60' },
  { id: 7, username: 'user7', imageUrl: '/placeholder.svg?height=60&width=60' },
  { id: 8, username: 'user8', imageUrl: '/placeholder.svg?height=60&width=60' },
];

const mockPosts = [
  { id: 1, username: 'user1', imageUrl: '/placeholder.svg?height=600&width=600', likes: 10, caption: 'Beautiful day!' },
  { id: 2, username: 'user2', imageUrl: '/placeholder.svg?height=600&width=600', likes: 15, caption: 'Amazing view!' },
  { id: 3, username: 'user3', imageUrl: '/placeholder.svg?height=600&width=600', likes: 20, caption: 'Great times!' },
];

export default function HomePage() {
  return (
    <div className="flex">
      <aside className="hidden md:block w-64 bg-gray-100 p-4">
        <nav className="space-y-4">
          <Link href="/" className="block font-semibold text-gray-800 hover:text-gray-600">Home</Link>
          <Link href="/explore" className="block font-semibold text-gray-800 hover:text-gray-600">Explore</Link>
          <Link href="/notifications" className="block font-semibold text-gray-800 hover:text-gray-600">Notifications</Link>
          <Link href="/profile" className="block font-semibold text-gray-800 hover:text-gray-600">Profile</Link>
        </nav>
      </aside>
      
      <main className="flex-1 space-y-6">
        <nav className="md:hidden flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Instagram</h1>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </nav>

        <div className="space-y-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <ScrollArea className="w-full whitespace-nowrap">
              <div className="flex space-x-4">
                {mockStories.map((story) => (
                  <div key={story.id} className="flex flex-col items-center space-y-1">
                    <Avatar className="w-16 h-16 border-2 border-pink-500 p-1">
                      <AvatarImage src={story.imageUrl} alt={story.username} />
                      <AvatarFallback>{story.username[0].toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <span className="text-xs">{story.username}</span>
                  </div>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>

          <div className="space-y-6">
            {mockPosts.map(post => (
              <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow">
                <div className="p-4 flex items-center space-x-2">
                  <Avatar>
                    <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt={post.username} />
                    <AvatarFallback>{post.username[0].toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <Link href="/profile" className="font-semibold hover:underline">{post.username}</Link>
                </div>
                <img src={post.imageUrl || "/placeholder.svg"} alt={`Post by ${post.username}`} className="w-full" />
                <div className="p-4 space-y-2">
                  <p><span className="font-bold">{post.likes} likes</span></p>
                  <p><Link href="/profile" className="font-semibold hover:underline">{post.username}</Link> {post.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

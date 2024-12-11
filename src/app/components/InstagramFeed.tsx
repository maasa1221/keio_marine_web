"use client";

import React from "react";
import Image from "next/image";

interface InstagramPost {
  id: number;
  imageUrl: string;
  caption: string;
  likes: number;
  comments: number;
}

const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 1,
    imageUrl: "/sea.png", // 一時的に既存の画像を使用
    caption: "慶應マリンの活動の様子",
    likes: 123,
    comments: 45,
  },
  {
    id: 2,
    imageUrl: "/wind.jpeg",
    caption: "ウインドサーフィンの練習日",
    likes: 98,
    comments: 32,
  },
  {
    id: 3,
    imageUrl: "/Travel.jpg",
    caption: "SUPで海を満喫",
    likes: 156,
    comments: 28,
  },
];

const InstagramFeed: React.FC = () => {
  return (
    <section className="instagram-feed">
      <h2 className="instagram-feed-title">Instagram Feed</h2>
      <div className="instagram-grid">
        {INSTAGRAM_POSTS.map((post) => (
          <div key={post.id} className="instagram-post">
            <div className="relative w-full h-[300px]">
              <Image
                src={post.imageUrl}
                alt={post.caption}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-t-xl"
              />
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-600">{post.caption}</p>
              <div className="flex items-center gap-4 mt-2">
                <span className="text-sm text-gray-500">❤️ {post.likes}</span>
                <span className="text-sm text-gray-500">
                  💬 {post.comments}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <a
          href="https://www.instagram.com/keio.marine/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-colors duration-300"
        >
          Instagramでもっと見る
        </a>
      </div>
    </section>
  );
};

export default InstagramFeed;

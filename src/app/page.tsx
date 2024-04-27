import { index } from "drizzle-orm/mysql-core";
import Link from "next/link";
import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/760d5e8f-97a5-450f-b1fe-be33890fc4d2-vaolmp.png",
  "https://utfs.io/f/bf48cc8e-311a-47b2-8c6d-17d059c9b28a-vaojfi.png",
  "https://utfs.io/f/88ab73d2-d829-47dd-a727-68c73153dd39-xwupdv.png",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "_" + index} className="h-48 w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
      hello gallery work in progress
    </main>
  );
}

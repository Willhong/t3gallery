import { index } from "drizzle-orm/mysql-core";
import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/760d5e8f-97a5-450f-b1fe-be33890fc4d2-vaolmp.png",
  "https://utfs.io/f/bf48cc8e-311a-47b2-8c6d-17d059c9b28a-vaojfi.png",
  "https://utfs.io/f/88ab73d2-d829-47dd-a727-68c73153dd39-xwupdv.png",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="h-48 w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
      hello gallery work in progress
    </main>
  );
}

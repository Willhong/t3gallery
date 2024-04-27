import { headers } from "next/headers";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  headers();
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  console.log(images);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...images, ...images, ...images].map((image, index) => (
          <div key={image.id + "_" + index} className="h-48 w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
      hello gallery work in progress
    </main>
  );
}

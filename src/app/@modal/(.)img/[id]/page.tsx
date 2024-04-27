import { getImage } from "~/server/queries";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: {
    id: string;
  };
}) {
  const idAsNumber = Number(photoId);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid ID");

  const image = await getImage(idAsNumber);
  return (
    <div>
      <img src={image.url} alt={image.name} />
    </div>
  );
}
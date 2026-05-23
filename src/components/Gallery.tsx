import Image from "next/image";

const galleryImages = [
  {
    src: "/images/view.jpg",
    alt: "Garden view from the apartment",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/images/bedroom.jpg",
    alt: "Double bedroom with wardrobe",
    span: "",
  },
  {
    src: "/images/kitchen.jpg",
    alt: "Modern fully equipped kitchen",
    span: "",
  },
  {
    src: "/images/bathroom.jpg",
    alt: "Bathroom with shower",
    span: "",
  },
  {
    src: "/images/living-room.jpg",
    alt: "Bright and comfortable living room",
    span: "",
  },
  {
    src: "/images/workspace.jpg",
    alt: "Living room: another angle",
    span: "col-span-2",
  },
];

export default function Gallery() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[240px] gap-2 md:gap-3">
      {galleryImages.map((img, i) => (
        <div
          key={i}
          className={`relative overflow-hidden rounded-xl bg-stone-200 group ${img.span}`}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes={
              i === 0
                ? "(max-width: 768px) 100vw, 50vw"
                : i === 5
                  ? "(max-width: 768px) 100vw, 50vw"
                  : "(max-width: 768px) 50vw, 25vw"
            }
          />
        </div>
      ))}
    </div>
  );
}

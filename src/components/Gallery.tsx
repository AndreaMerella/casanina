import Image from "next/image";

const galleryImages = [
  {
    src: "/images/living-room.jpg",
    alt: "Spacious living room with dedicated workspace",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/images/kitchen.jpg",
    alt: "Fully equipped modern kitchen",
    span: "",
  },
  {
    src: "/images/bedroom.jpg",
    alt: "Comfortable bedroom with premium linens",
    span: "",
  },
  {
    src: "/images/bathroom.jpg",
    alt: "Elegant bathroom with rain shower",
    span: "",
  },
  {
    src: "/images/view.jpg",
    alt: "Panoramic view over Genoa",
    span: "",
  },
  {
    src: "/images/workspace.jpg",
    alt: "Dedicated desk and high-speed workspace setup",
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

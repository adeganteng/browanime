import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ title, images , id}) => {
  return (
    <Link href={`/${id}`} className="cursor-pointer">
      <Image src={images} alt="image" width={600} height={600} className="w-full max-h-64 object-cover" />
      <h3 className="font-bold md:text-xl lg:text-lg text-sm p-4">{title}</h3>
    </Link>
  );
};

export default AnimeList;

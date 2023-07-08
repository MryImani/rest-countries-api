import Image from "next/image";
import Link from "next/link";
export default function Country(props){
    const { flag, name, nativeName, population, region, capital, theme } =
      props.country;
    const urlPath = `/country/${name}`;
    return (
      <Link href={urlPath}>
        <div
          className={
            theme === "Dark"
              ? "country rounded-md bg-header-dark shadow-sm "
              : "country rounded-md bg-white shadow-sm "
          }
        >
          <div className="">
            <Image
              className=" rounded-t-md img-fluid w-full h-48"
              src={flag}
              alt={`${name}-flag`}
              width={300}
              height={100}
            />
          </div>
          <div className="p-8">
            <p className="font-bold text-lg mb-4">{name}</p>
            <p>
              <span className="font-semibold">Population: </span>
              <span className=" text-gray-500">{population}</span>
            </p>
            <p>
              <span className="font-semibold">Region: </span>
              <span className=" text-gray-500">{region}</span>
            </p>
            <p>
              <span className="font-semibold">Capital: </span>
              <span className=" text-gray-500">{capital}</span>
            </p>
          </div>
        </div>
      </Link>
    );
}
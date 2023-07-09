import Image from "next/image";

export default function CountryDetails(props) {
  const  theme  = props.theme;
  const {
    flag,
    name,
    nativeName,
    population,
    region,
    capital,
    currencies,
    languages,
    subregion,
    topLevelDomain,
    borders,
  } = props.country;
  return (
    <div className="country-details grid gap-6 grid-cols-1 lg:grid-cols-2 mt-24 pb-10">
      <div className="">
        <Image
          className="img-fluid w-full"
          src={flag}
          alt={`${name}-flag`}
          width={150}
          height={100}
        />
      </div>
      <div className="py-4 xl:py-8 xl:px-12">
        <p
          className={
            theme
              ? "font-bold text-3xl mb-4 text-gray-200"
              : "font-bold text-3xl mb-4"
          }
        >
          {name}
        </p>
        <div className="flex flex-col md:flex-row justify-between">
          <ul className=" list-none">
            <li className="my-2">
              <span
                className={
                  theme ? "font-semibold text-gray-200" : "font-semibold"
                }
              >
                Native Name:{" "}
              </span>
              <span
                className={
                  theme
                    ? " text-gray-400 font-semibold"
                    : " text-gray-500 font-semibold"
                }
              >
                {nativeName}
              </span>
            </li>
            <li className="my-2">
              <span
                className={
                  theme ? "font-semibold text-gray-200" : "font-semibold"
                }
              >
                Population:{" "}
              </span>
              <span
                className={
                  theme
                    ? " text-gray-400 font-semibold"
                    : " text-gray-500 font-semibold"
                }
              >
                {population}
              </span>
            </li>
            <li className="my-2">
              <span
                className={
                  theme ? "font-semibold text-gray-200" : "font-semibold"
                }
              >
                Region:{" "}
              </span>
              <span
                className={
                  theme
                    ? " text-gray-400 font-semibold"
                    : " text-gray-500 font-semibold"
                }
              >
                {region}
              </span>
            </li>
            <li className="my-2">
              <span
                className={
                  theme ? "font-semibold text-gray-200" : "font-semibold"
                }
              >
                Sub Region:{" "}
              </span>
              <span
                className={
                  theme
                    ? " text-gray-400 font-semibold"
                    : " text-gray-500 font-semibold"
                }
              >
                {subregion}
              </span>
            </li>
            <li className="my-2">
              <span
                className={
                  theme ? "font-semibold text-gray-200" : "font-semibold"
                }
              >
                Capital:{" "}
              </span>
              <span
                className={
                  theme
                    ? " text-gray-400 font-semibold"
                    : " text-gray-500 font-semibold"
                }
              >
                {capital}
              </span>
            </li>
          </ul>
          <ul className="list-none">
            <li className="my-2">
              <span
                className={
                  theme ? "font-semibold text-gray-200" : "font-semibold"
                }
              >
                Top Level Domain:{" "}
              </span>
              <span
                className={
                  theme
                    ? " text-gray-400 font-semibold"
                    : " text-gray-500 font-semibold"
                }
              >
                {topLevelDomain}
              </span>
            </li>
            <li className="my-2">
              <span
                className={
                  theme ? "font-semibold text-gray-200" : "font-semibold"
                }
              >
                Currencies:{" "}
              </span>
              <span
                className={
                  theme
                    ? " text-gray-400 font-semibold"
                    : " text-gray-500 font-semibold"
                }
              >
                {currencies && currencies.map((currenc) => currenc.name)}
              </span>
            </li>
            <li className="my-2">
              <span
                className={
                  theme ? "font-semibold text-gray-200" : "font-semibold"
                }
              >
                Languages:{" "}
              </span>
              <span
                className={
                  theme
                    ? " text-gray-400 font-semibold"
                    : " text-gray-500 font-semibold"
                }
              >
                {languages.map((languqge) => (
                  <span>{languqge.name}, </span>
                ))}
              </span>
            </li>
          </ul>
        </div>
        <div className="mt-10 flex flex-col lg:flex-row ">
          <p
            className={
              theme ? "font-semibold mr-2 text-gray-200 mt-2" : "font-semibold mr-2 mt-2"
            }
          >
            Border Countries:{" "}
          </p>
          <div className=" flex flex-wrap mt-4 lg:mt-0">
            {borders &&
              borders.map((border) => (
                <div
                  className={
                    theme
                      ? " shadow py-1 px-6 mr-2 bg-header-dark mt-2"
                      : " shadow py-1 px-6 mr-2 mt-2"
                  }
                >
                  <span className={theme ? "text-gray-400" : "text-gray-500"}>
                    {border}
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

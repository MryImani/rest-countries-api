import CountryDetails from "@/components/countryItem/CountryDetails";
import { useRouter } from "next/router";
import { getCountryByName } from "../../../data";
import { AiOutlineArrowLeft } from 'react-icons/ai'
import ThemeContext from "@/store/theme-context";
import { useContext } from "react";

export default function CountryDetail(){
   const themeCxt = useContext(ThemeContext);
    const router = useRouter();
    const name = router.query.name;
    const country = getCountryByName(name);
    return (
      <section className="px-8 md:px-20 pt-16 h-full">
        <button
          className={
            themeCxt.isThemeDark
              ? "flex items-center shadow-md py-2 px-6 bg-header-dark"
              : "flex items-center shadow-md py-2 px-6"
          }
          onClick={() => router.push("/")}
        >
          <AiOutlineArrowLeft
            className={themeCxt.isThemeDark && "text-white"}
          />
          <span
            className={themeCxt.isThemeDark ? "mx-2 text-gray-300" : "mx-2"}
          >
            Back
          </span>
        </button>
        <CountryDetails country={country} theme={themeCxt.isThemeDark} />
      </section>
    );
}
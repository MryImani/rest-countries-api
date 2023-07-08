import CountryDetails from "@/components/countryItem/CountryDetails";
import { useRouter } from "next/router";
import { getCountryByName } from "../../../data";
import { AiOutlineArrowLeft } from 'react-icons/ai'
import Link from "next/link";

export default function CountryDetail(){
    const router = useRouter();
    const name = router.query.name;
    const country = getCountryByName(name);
    return (
      <section className="px-8 md:px-20 mt-16">
        <button className="flex items-center shadow-md py-2 px-6" onClick={() => router.push('/')}>
          <AiOutlineArrowLeft />
          <span className="mx-2">Back</span>
        </button>
        <CountryDetails country={country} />
      </section>
    );
}
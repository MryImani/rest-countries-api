import Country from "@/components/countryItem/Country";
import { getAllCountries } from "../../data"

export default function Home() {
 const countries = getAllCountries();

  return (
    <section className="home px-8 md:px-20 py-12">
      <div className="country-list grid gap-16 grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 mt-12">
        {countries.map((country) => (
          <Country key={country.name} country={country} />
        ))}
      </div>
    </section>
  );
}

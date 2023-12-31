import Country from "@/components/countryItem/Country";
import {
  getAllCountries,
  getAllCountriesInRegion,
  getCountryByName,
} from "../../data";
import SearchBar from "@/components/toolBar/SearchBar";
import Filter from "@/components/toolBar/Filter";
import { useState } from "react";
import ThemeContext from "@/store/theme-context";
import { useContext } from "react";

export default function Home() {
   const themeCxt = useContext(ThemeContext);
  const countries = getAllCountries();
  const [countriesList, setCountriesList] = useState(countries);
  const [country, setCountry] = useState(null);

  function submitHandler(name) {
    const country = getCountryByName(name);
    setCountry(country);
  }

  function filterHandler(region) {
    if (region === "all") {
      const countries = getAllCountries();
      setCountriesList(countries);
    } else {
      const countries = getAllCountriesInRegion(region);
      setCountriesList(countries);
    }
  }

  let content = countriesList.map((country) => (
    <Country key={country.name} country={country} theme={themeCxt.isThemeDark} />
  ));
  if (country) {
    content = (
      <Country
        key={country.name}
        country={country}
        theme={themeCxt.isThemeDark}
      />
    );
  }
  return (
    <section className="home px-8 md:px-20 py-12 h-full">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
        <SearchBar submit={submitHandler} theme={themeCxt.isThemeDark} />
        <Filter filter={filterHandler} theme={themeCxt.isThemeDark} />
      </div>
      <div className="country-list grid gap-16 grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 mt-12">
        {content}
      </div>
    </section>
  );
}

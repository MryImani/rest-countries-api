import Country from "@/components/countryItem/Country";
import { getAllCountries, getAllCountriesInRegion, getCountryByName } from "../../data"
import SearchBar from "@/components/toolBar/SearchBar";
import Filter from "@/components/toolBar/Filter";
import { useState } from "react";

export default function Home() {
  const countries = getAllCountries();
  const [countriesList,setCountriesList] = useState(countries);
  const [country , setCountry] = useState(null);
 
 function submitHandler(name) {
   const country = getCountryByName(name);
   setCountry(country);
 }

 function filterHandler(region){
  if(region === "all")
  {
     const countries = getAllCountries();
     setCountriesList(countries);
  }
  else
  {
  const countries = getAllCountriesInRegion(region);
  setCountriesList(countries);
  }

 }

 let content = countriesList.map((country) => (
   <Country key={country.name} country={country} />
 ));
 if (country)
 {
 content= <Country key={country.name} country={country} />
 }
   return (
     <section className="home px-8 md:px-20 py-12">
       <div className="flex items-center justify-between">
         <SearchBar submit={submitHandler} />
         <Filter filter={filterHandler}/>
       </div>
       <div className="country-list grid gap-16 grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 mt-12">
         {content}
       </div>
     </section>
   );
}

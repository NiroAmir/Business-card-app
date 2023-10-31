import React, { useEffect, useState } from "react";

export default function Effect() {
  const [countries, setCountries] = useState();

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);
  return <div>{JSON.stringify(countries)}</div>;
}

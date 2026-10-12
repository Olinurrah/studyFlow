const country = {
  name: {
    common: "Cambodia",
    official: "Kingdom of Cambodia"
  },
  ccn3: "116",
  currencies: {
    KHR: {
      name: "Cambodian riel",
      symbol: "៛"
    },
    USD: {
      name: "United States dollar",
      symbol: "$"
    }
  },
  capital: ["Phnom Penh"],
  region: "Asia",
  languages: {
    khm: "Khmer"
  },
  area: 181035,
  cca3: "KHM",
  population: 16718971,
  continents: ["Asia"],
  flags: {
    png: "https://flagcdn.com/w320/kh.png",
    svg: "https://flagcdn.com/kh.svg",
    alt: "The flag of Cambodia"
  }
};




const CountryDetails = () => {
  const {
    name,
    ccn3,
    currencies,
    capital,
    region,
    languages,
    area,
    cca3,
    population,
    continents,
    flags,
  } = country;

  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">

        {/* Header */}
        <div className="bg-blue-900 text-white p-6">
          <h1 className="text-3xl font-bold">
            {name.common}
          </h1>

          <p className="text-blue-200 mt-1">
            {name.official}
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 p-6">

          {/* Flag */}
          <div>
            <img
              src={flags.svg}
              alt={flags.alt}
              className="w-full max-h-72 object-contain rounded-lg border"
            />

            <p className="text-sm text-gray-500 mt-3">
              {flags.alt}
            </p>
          </div>

          {/* Basic Information */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Country Information
            </h2>

            <div className="space-y-3">

              <Info
                label="Capital"
                value={capital?.join(", ")}
              />

              <Info
                label="Region"
                value={region}
              />

              <Info
                label="Continent"
                value={continents?.join(", ")}
              />

              <Info
                label="Population"
                value={population?.toLocaleString()}
              />

              <Info
                label="Area"
                value={`${area?.toLocaleString()} km²`}
              />

              <Info
                label="Country Code"
                value={cca3}
              />

              <Info
                label="CCN3"
                value={ccn3}
              />

            </div>
          </div>
        </div>

        {/* Languages */}
        <div className="border-t p-6">
          <h2 className="text-xl font-bold mb-4">
            Languages
          </h2>

          <div className="flex flex-wrap gap-2">
            {Object.entries(languages || {}).map(
              ([code, language]) => (
                <span
                  key={code}
                  className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full"
                >
                  {language} ({code})
                </span>
              )
            )}
          </div>
        </div>

        {/* Currencies */}
        <div className="border-t p-6">
          <h2 className="text-xl font-bold mb-4">
            Currencies
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {Object.entries(currencies || {}).map(
              ([code, currency]) => (
                <div
                  key={code}
                  className="border rounded-xl p-4 bg-gray-50"
                >
                  <p className="text-2xl font-bold">
                    {currency.symbol}
                  </p>

                  <p className="font-semibold">
                    {currency.name}
                  </p>

                  <p className="text-sm text-gray-500">
                    Code: {code}
                  </p>
                </div>
              )
            )}
          </div>
        </div>

        {/* Country Codes */}
        <div className="border-t p-6">
          <h2 className="text-xl font-bold mb-4">
            Country Codes
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">

            <CodeBox
              title="CCA3"
              value={cca3}
            />

            <CodeBox
              title="CCN3"
              value={ccn3}
            />

            <CodeBox
              title="Region"
              value={region}
            />

          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-100 p-4 text-center text-sm text-gray-500">
          Country information powered by REST Countries API
        </div>

      </div>
    </div>
  );
};


// Reusable information component
const Info = ({ label, value }) => {
  return (
    <div className="flex justify-between gap-4 border-b pb-2">
      <span className="font-semibold text-gray-600">
        {label}
      </span>

      <span className="text-gray-900 text-right">
        {value || "N/A"}
      </span>
    </div>
  );
};


// Reusable code box
const CodeBox = ({ title, value }) => {
  return (
    <div className="bg-gray-50 border rounded-lg p-4">
      <p className="text-sm text-gray-500">
        {title}
      </p>

      <p className="text-lg font-bold">
        {value || "N/A"}
      </p>
    </div>
  );
};

export default CountryDetails;
import { 
    createContext, 
    useState, 
    useEffect 
} from "react";

const PlanetContext = createContext();

export const PlanetContextProvider = ({ children }) => {

  const [planets, setPlanets] = useState([]);
  const [residents, setResidents] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [knowMorePlanet,setknowMorePlanet]=useState()

  useEffect(() => {
    fetch(`https://swapi.dev/api/planets/?format=json&page=${currentPage}`)
      .then((res) => res.json())
      .then((data) => {
        setPlanets(data.results);
        setTotalPages(Math.ceil(data.count / data.results.length));
        const residentPromises = data.results.map((planet) =>
          Promise.all(
            planet.residents.map((residentURL) =>
              fetch(residentURL).then((residentResponse) => residentResponse.json())
            )
          )
        );
        Promise.all(residentPromises)
          .then((residentsData) => setResidents(residentsData))
          .catch((error) => console.error('Error fetching residents data:', error));
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching planets data:', error);
        setLoading(false);
      });
  }, [currentPage]);

  // You can provide the values you want to share through the context here
  const contextValues = {
    planets,
    residents,
    totalPages,
    currentPage,
    loading,
    setCurrentPage,
    setknowMorePlanet,
    knowMorePlanet
  };

  return (
    <PlanetContext.Provider value={contextValues}>
      {children}
    </PlanetContext.Provider>
  );
};

export default PlanetContext;

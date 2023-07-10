import { useState } from "react";
import "./App.css";
import ListMovies from "./Components/ListMovies";
////import MovieCard from "./Components/MovieCard";
import AddMovie from "./Components/AddMovie";
//import { Button } from "bootstrap";
import Search from "./Components/Search";
import Rate from "./Components/Rate";


function App() {
  //******This is the Api *******/
  const [Movies, setMovies] = useState([
    {
      _id: "5fedeef47c0ffe00176db1ca",
      title: "Lilo and Stitch",
      rate: 4,
      date: "2002",
      imgUrl:
        "https://static.posters.cz/image/750/affiches-et-posters/lilo-stitch-wave-surf-i120005.jpg.",
      description:
        "A tale of a young girl's close encounter with the galaxy's most wanted extraterrestrial.",
      category: "Entretaiment | Family",
      __v: 0,
    },
    {
      _id: "5fedefe47c0ffe00176db1cb",
      title: "Bambi",
      rate: 5,
      date: "1942",
      imgUrl:
        "https://images.photowall.com/products/71038/walt-disney-bambi.jpg",
      description:
        "Dans ce film, Bambi, un faon nouveau-né, apprend, au hasard de ses promenades, mille et une choses qui sont pour lui autant de sources d'émerveillement.",
      category: "fantasy",
      __v: 0,
    },
    {
      _id: "5fedf02d7c0ffe00176db1cc",
      title: "Dumbo",
      rate: 4,
      date: "1941",
      imgUrl:
        "https://radiodisneyclub.fr/wp-content/uploads/2017/03/Dumbo.png",
      description:
        "Dumbo est un éléphant de fiction créé par la romancière Helen Aberson dans son livre paru en 1939",
      category: "Enfant | Drama",
      __v: 0,
    },
    {
      _id: "5fedf0647c0ffe00176db1cd",
      title: "Aladdin",
      rate: 4,
      date: "2019",
      imgUrl:
        "https://i-mom.unimedias.fr/2020/09/16/aladdin_affiche_teaser_disney_affiche.jpg?auto=format%2Ccompress&crop=faces&cs=tinysrgb&fit=max&w=680",
      description:
        "Le jeune et pauvre Aladdin vit avec son singe Abu dans les rues et est obligé de voler des aliments pour se nourrir.",
      category: "Fantasy  | Adventure",
      __v: 0,
    },
    {
      _id: "5fedf0947c0ffe00176db1ce",
      title: "pinocchio",
      rate: 3,
      date: "1940",
      imgUrl:
        "https://cdn.drouot.com/d/image/lot?size=fullHD&path=220/139682/e1639e5e9e7159466ee5c901f9556819",
      description:
        "Dans un petit village, l'inventeur Gepetto baptise sa dernière marionnette Pinocchio",
      category: "Enfant | Fantasy",
      __v: 0,
    },
    {
      __id: "5fedf0cf7c0ffe00176db1cf",
      title: "Le Roi Lion",
      rate: 5,
      date: "1994",
      imgUrl:
        "https://lumiere-a.akamaihd.net/v1/images/image_8ce8d7f0.jpeg?region=0,0,540,810",
      description:
        "Un lionceau nommé Simba est exilé de son royaume après avoir été accusé d'être responsable de la mort de son père, Mufasa.",
      category: "musical",
      __v: 0,
    },
    {id: "5fedf1067c0ffe00176db1d0",
    title: "Barbie princesse raiponce",
    rate: 5,
    date: "2002",
    imgUrl:
      "https://static.fnac-static.com/multimedia/images_produits/ZoomPE/5/0/4/3348542190405/tsp20221130221823/Barbie-Princee-Raiponce.jpg",
    description:
      "Dans ce film, Barbie est Raiponce, une jeune fille recueilli par une méchante femme Gothel.",
    category: " Fantasy | Animation",
    __v: 0,
    },
  ]);
  //******** Show and Hide Function  *********/
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);

  const [showRate, setShowRate] = useState(false);
  const handleShowRate = () => {
    setSearchRate(0);
    setShowRate(!showRate);
  };

  //******** Search States*********/
  const [searchName, setSearchName] = useState("");
  const [searchRate, setSearchRate] = useState(5);

  //******** Add Movie  Function  *********/
  const AddToMovie = (Movie) => {
    setMovies([...Movies, Movie]);
  };

  console.log(Movies);
  return (
    <>


      <div className="App">
        <button style={{ margin: "20px" }} onClick={handleShow}>
          {show ? "Close" : "Add New Movie"}
        </button>
        {show && <AddMovie AddToMovie={AddToMovie} />}

        <Search setSearchName={setSearchName} setSearchRate={setSearchRate} />
        <button style={{ margin: "20px" }} onClick={handleShowRate}>
          {show ? "Clear" : "Search by Rate"}
        </button>
        {showRate && (
          <Rate searchRate={searchRate} setSearchRate={setSearchRate} />
        )}

        <ListMovies
          Movies={Movies}
          searchName={searchName}
          searchRate={searchRate}
        />
      </div>
    </>
  );
}

export default App;

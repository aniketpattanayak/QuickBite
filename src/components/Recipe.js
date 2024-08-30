import Searchbar from "./Searchbar";
import Newest from "./Newest";
import ItemMenu from "./ItemMenu";
import Itemdetails from "./Itemdetails"
import pizza from "../../public/images/pizza.png"
import deesert from "../../public/images/deesert.png"
import salad from "../../public/images/salad.png"
import noodles from "../../public/images/noodles.png"
import drink from "../../public/images/drink.png"


const Recipe = () => {
    return (
      <>
        <div id="recipe">
          <div id="recipename">
            <h1>Racipes</h1>
          </div>
          <div id="reciperight">
            <Searchbar name="Search Racipes..." />
            <Newest />
          </div>
        </div>
        <div id="itemmenucontainer">
          <div id="itemmenu">
            <ItemMenu img={pizza} name="Pizza" />
            <ItemMenu img={deesert} name="Deesert" />
            <ItemMenu img={salad} name="Salad" />
            <ItemMenu img={noodles} name="Noodles" />
            <ItemMenu img={drink} name="Drink" />
          </div>
          <div>
            <img
              id="recipeimg2"
              src="https://images.unsplash.com/photo-1629032355269-0d9b18d54f25?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fGZvb2RzfGVufDB8fDB8fHww"
            />
          </div>
          <div id="itemmenudetail">
            <Itemdetails
              name="Avacado Salad"
              time="1 h 30 min"
              img="https://images.unsplash.com/photo-1568158879083-c42860933ed7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEF2YWNhZG8lMjBTYWxhZHxlbnwwfHwwfHx8MA%3D%3D"
            />
            <Itemdetails
              name="Russian Salad"
              time="1 h 45 min"
              img="https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UnVzc2lhbiUyMFNhbGFkfGVufDB8fDB8fHww"
            />
          </div>
        </div>
      </>
    );
  };



  export default Recipe;
import heroimg from "../../public/images/heroimg.png";
import stamp from "../../public/images/stamp.png";

const HeroSec = () => {
    return (
      <>
        <div id="hero">
          <div id="heroContainer">
            <div id="leftHero">
              <h1 className="h1">Discover Simple,</h1>
              <h1 className="h1">Delicious, And</h1>
              <h1 id="h1c">Fast Recipes!</h1>
              <p id="p1">
                A recipe is soulless. The essence of the recipe
                <br /> must come from you, the cook
              </p>
              <div id="read">
                <div className="readmore">Read More</div>
                <div className="readmore" id="arrow">
                  <i className="ri-arrow-right-up-line"></i>
                </div>
              </div>
              <div id="round">
                <div id="roundrec">
                  <img
                    className="circular-image "
                    id="img1"
                    src="https://media.istockphoto.com/id/1407232682/photo/selective-focus-of-delicious-mutton-curry.jpg?s=612x612&w=0&k=20&c=YgmmMnkS15h4sRrOhRq2JYG4RnMLxiu5aj7dC__VmeQ="
                    alt="logo"
                  />
                  <img
                    className="circular-image "
                    id="img2"
                    src="            https://media.istockphoto.com/id/1256242420/photo/indian-food-platter-or-thali-contains-vegetarian-recipes-a-complete-meal.jpg?s=612x612&w=0&k=20&c=mFh1j02J3bZYcuarlJCX7dp50e3U1UZY_mAQnrLA3Qo="
                    alt="logo"
                  />
                  <img
                    className="circular-image "
                    id="img3"
                    src="https://media.istockphoto.com/id/1143693080/photo/indian-food-and-indian-cuisine-dishes-top-view.jpg?s=612x612&w=0&k=20&c=5Mxd61e0OLSOLEao32LAIdoVd25x36hY95RW3hEMj5c="
                    alt="logo"
                  />
                  <img
                    className="circular-image "
                    id="img4"
                    src="https://media.istockphoto.com/id/588985668/photo/ema-datshi-bhutanese-chili-cheese-stew.jpg?s=612x612&w=0&k=20&c=PsysqMzbUy1EmW7K6hL0Y76yAviP91GAWYNhegQ4VVE="
                    alt="logo"
                  />
                  <img
                    className="circular-image "
                    id="img5"
                    src="https://media.istockphoto.com/id/1847555104/photo/soya-chaap-butter-masala.jpg?s=612x612&w=0&k=20&c=vMGuzJwxwnzRer-bhlRc7l4VM8Vj4lmYYFqo52DQpvY="
                    alt="logo"
                  />
                </div>
              </div>
              <h2 id="h2">500+ Racipes</h2>
            </div>
            <div id="midcontainer">
              <img width="380px" src={heroimg} />
            </div>
            <div id="rightHero">
              <div id="rightHeroContainer">
                <div>
                  <img id="stamp" src={stamp} />
                </div>
                <div id="para">
                  <h2>Top Recipes</h2>
                  <p>
                    A racipe is asoulless. The assence <br /> of the racipe must
                    come from
                    <br /> you, the cook
                  </p>
                </div>
              </div>
              <div id="checkourrecipe">Check Our Recipe</div>
            </div>
          </div>
        </div>
      </>
    );
  };


export default HeroSec;





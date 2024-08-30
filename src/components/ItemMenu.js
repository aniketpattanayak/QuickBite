const ItemMenu = ({ img, name }) => {
    return (
      <>
        <div id="recipemenu">
          <div id="imgback">
            <img id="pizzaimg" src={img} alt="" />
          </div>
          <p id="menuname">{name}</p>
        </div>
      </>
    );
  };



export default ItemMenu;



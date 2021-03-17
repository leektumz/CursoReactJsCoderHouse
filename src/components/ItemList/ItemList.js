import Item from "../Item/Item";

const ItemList = (props) => (

   <div>
    <h1>Lista</h1>
    <div className='CardsContainer'>
    <ul>
      {props.items.map((x, index) => (
        <div className='cards'>
        <Item key={index} item={x.id} itemTitle={x.title} itemPrice={x.price} ItemPic={x.PictureUrl} />
        </div>
        
      ))}
    </ul>
</div>
  </div>
);

export default ItemList;

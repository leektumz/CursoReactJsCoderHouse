import { useEffect, useState } from "react";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import '../src/App.css'

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    new Promise((todoBien, todoMal) => {
      //Ver que pasa si ponen el setItems(["Pera", "Manzana", "Mango", "Uva"])
      setTimeout(() => {
        todoBien([
          {
          id : '001', 
          title : 'Ford Mustang', 
          price : 200000, 
          PictureUrl : 'https://i.blogs.es/489ffe/charge.cars_-_brand-new_electric_1967_mustang_fastback_05/1366_2000.jpg'
          },

          {
          id : '002', 
          title : 'Espejo de Madera', 
          price : 3000, 
          PictureUrl : 'https://dbdzm869oupei.cloudfront.net/img/sticker/large/17874.jpg'
        }
]);
        
        
      }, 2000);
    }).then((resultado) => setItems(resultado));
  });

  return (
    <div className="App">
      <ItemListContainer items={items} />
    </div>
  );
}

export default App;

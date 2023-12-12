// ItemList.jsx
import React, { useState } from 'react';
import ItemDetailContainer from './ItemDetailContainer';

const ItemList = () => {
  const [productos] = useState([]);
  
  return (
    <div>
      <ItemDetailContainer productos={productos}>
      {
        productos.map((p)=> {
          return(
            <div key={p.id}>
            <h2>Producto: {p.titulo}</h2>
            <h4>$ {p.precio}</h4>
            </div>
          )
        })
      }
      </ItemDetailContainer>
      
    </div>
  );
};

export default ItemList;

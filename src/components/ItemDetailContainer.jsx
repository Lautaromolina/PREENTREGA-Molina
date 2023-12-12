import React, { useState, useEffect } from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

const ItemDetailContainer = ({productosProp}) => {

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      const itemCollection = collection(db, 'Zapatillas');

      try {
        const snapshot = await getDocs(itemCollection);
        const docs = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setProductos(docs);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <SimpleGrid columns={4} spacing={1}>
      <h2>Productos</h2>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        productos.map((p) => (
          <div key={p.id}>
            <h4>{p.nombre}</h4>
            <p>{p.descripcion}</p>
          </div>
        ))
      )}
    </SimpleGrid>
  );
};

export default ItemDetailContainer;

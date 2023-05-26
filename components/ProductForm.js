import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function ProductForm({title: existingTitle, description: existingDescription, price: existingPrice}) {
    const [title, setTitle] = useState(existingTitle || '');
    const [description, setDescription] = useState(existingDescription || '');
    const [price, setPrice] = useState(existingPrice || '');
    const [goToProducts, setGoToProducts] = useState(false);
    const router = useRouter();
    async function createProduct(ev)  {
        ev.preventDefault();
        const data = { title, description, price};
        await axios.post('/api/products', data);
        setGoToProducts(true);
    }
    if (goToProducts) {
        return router.push('/products'); 
    }
    return (
        <form onSubmit={createProduct}>
                <h1>Nuevos Productos</h1>
                <label>Nombre del Producto</label>
                <input type="text" placeholder="nombre del producto" value={title} onChange={ev => setTitle(ev.target.value)}/>
                <label>Descripción</label>
                <textarea placeholder="descripción" value={description} onChange={ev => setDescription(ev.target.value)}></textarea>
                <label>Precio en USD</label>
                <input type="number" placeholder="precio" value={price} onChange={ev => setPrice(ev.target.value)}/>
                <button type="submit" className="btn-primary">Guardar</button>
            </form>
    )
}
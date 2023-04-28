import Layout from "@/components/Layout";
import axios from "axios";
import { useState } from "react";

export default function NewProduct() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    async function createProduct(ev)  {
        ev.preventDefault();
        const data = { title, description, price};
        await axios.post('/api/products', data);
    }
    return (
        <Layout>
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
        </Layout>
    )
}
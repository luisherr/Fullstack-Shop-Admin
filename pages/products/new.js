import Layout from "@/components/Layout";

export default function NewProduct() {
    return (
        <Layout>
            <h1 className="text-blue-900 mb-2 text-xl">Nuevos Productos</h1>
            <input type="text" placeholder="nombre del producto"/>
            <textarea placeholder="descripción"></textarea>
        </Layout>
    )
}
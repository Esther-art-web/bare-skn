import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProductsList from "./ProductsList";

export default function CollectionProductsList(props){
    const location = useLocation();
    const { key } = location.state;


    const [name, setName] = useState('')
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);
  
    
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/api/v1.0/collections/${encodeURIComponent(key)}/products`)
        .then((res) => res.json())
        .then(({collection:name, products}) => {
            if(!name || !products) throw Error();

            setIsLoading(false);
            setName(name);
            setProducts(products);
        }).catch(() => setIsLoading(true));
    });
    return (
        <div style={{width: "100%"}}>
            <section className="page-section">
                <span className="page-subsection-title">
                    <p>{name}</p>
                </span>
                <ProductsList isLoading={isLoading} group_name={name}
                products={products} breadcrumb={true}/>
            </section>
        </div>
    );
}
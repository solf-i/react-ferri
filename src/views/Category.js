import React from 'react'
import { useParams } from 'react-router-dom'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';

const Category = () => {

    const params = useParams();

    return (
        <>
        <ItemListContainer categoryId={params.categoryId} />
        </>
    )
}

export default Category

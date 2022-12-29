import React from 'react';
import {useQuery} from "react-query";
import axios from "../lib/axios.js";
import {Col, List, Row} from "antd";
import {Link} from "react-router-dom";

const Category = () => {

    const categoryQuery = useQuery(
        ['categories'],
        () => axios.get('/api/categories').then(res => res.data)
    )

    return (
        <List
            itemLayout="horizontal"
            dataSource={categoryQuery.data?.categories}
            renderItem={(category) => (
                <List.Item>
                    <List.Item.Meta
                        title={<Link to={`/categories/${category._id}`}>{category.division}</Link>}
                        description={category.body}
                    />
                </List.Item>
            )}
        />
    );
};

export default Category;
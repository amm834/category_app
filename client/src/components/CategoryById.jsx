import React from 'react';
import {useParams} from "react-router-dom";
import {useQuery} from "react-query";
import axios from "../lib/axios.js";
import {Card, Collapse, Space} from "antd";

const {Panel} = Collapse;

const CategoryById = () => {

    const {id} = useParams()
    const categoryQuery = useQuery(
        ['categories', id],
        () => axios.get(`/api/categories/${id}`).then(res => res.data)
    )

    console.log(categoryQuery.data)

    return (
        <div style={{marginTop: '2rem'}}>
            <Card title={categoryQuery?.data?.division} bordered={false}>
                {categoryQuery?.data?.body}

                <h2 style={{marginTop: '2rem'}}>Famous Places</h2>
                <Space direction="vertical" size="small">
                    {categoryQuery?.data?.famousPlaces.map(place => (
                        <Card title={place.name} key={place.id}>
                            {place.about}

                            {/* Hotels */}
                            <div>
                                <h3>Hotels</h3>

                                <Collapse
                                    bordered={false}
                                    defaultActiveKey={['1']}>
                                    {place?.hotels.map(hotel =>
                                        <Panel header={hotel.name} key={hotel.id}>
                                            <b>Address</b>: {hotel.address}
                                            <ul>
                                                {hotel.phone.map(number => <li>{number}</li>)}
                                            </ul>
                                        </Panel>
                                    )}
                                </Collapse>
                            </div>
                        </Card>
                    ))}
                </Space>

            </Card>
        </div>
    );
};

export default CategoryById;
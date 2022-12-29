import {BrowserRouter, Route, Routes} from "react-router-dom";
import Category from "./components/Category.jsx";
import CategoryById from "./components/CategoryById.jsx";
import {Col, Row} from "antd";

function App() {


    return (
        <BrowserRouter>
            <Row
            >
                <Col span={16} offset={4}>
                    <Routes>
                        <Route path="/" element={<Category/>}/>
                        <Route path="/categories/:id" element={<CategoryById/>}/>
                        <Route path="*" element={<h1>Not found</h1>}/>
                    </Routes>
                </Col>
            </Row>
        </BrowserRouter>
    )
}

export default App

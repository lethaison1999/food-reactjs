import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/common-section/CommonSection';
import { Container, Row, Col } from 'reactstrap';

import products from '../assets/fake-data/products';
import ProductCard from '../components/UI/product-card/ProductCard';

import '../styles/all-foods.css';
import '../styles/pagination.css';

const AllFoods = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [pageNumber, setPageNumber] = useState(0);

  const searchProduct = products.filter((item) => {
    if (item.value === '') return item;
    if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) return item;
  });

  const productPerPage = 12;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = searchProduct.slice(visitedPage, visitedPage + productPerPage);
  const pageCount = Math.ceil(searchProduct.length / productPerPage);

  const changPage = ({ selected }) => {
    setPageNumber(selected);
    console.log(selected);
  };

  return (
    <Helmet title=" All-Foods">
      <CommonSection title=" All Foods" />

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6" xs="12">
              <div className="search__widget d-flex align-items-center justify-content-between w-50 ">
                <input
                  type="text"
                  placeholder="I'm looking for..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6" className="mb-5">
              <div className="sorting__widget text-end">
                <select className="w-50">
                  <option>Default</option>
                  <option value="ascending">Alphabetically, A-Z</option>
                  <option value="descending">Alphabetically, Z-A</option>
                  <option value="hight-price">Hight Price </option>
                  <option value="low-price">Low Price </option>
                </select>
              </div>
            </Col>

            {displayPage.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
            <div>
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={changPage}
                previousLabel="Prev"
                nextLabel="Next"
                containerClassName="paginationBtns"
              />
            </div>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default AllFoods;

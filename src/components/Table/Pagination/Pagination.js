import React from 'react';
import { Button, Icon } from 'antd';

import styles from './Pagination.scss';

const Container = (props) => <div className={styles.container}>{props.children}</div>;
const PageBtn = (props) => {
  return (
    <Button
      type={props.btnType}
      onClick={props.onClick}>
      {props.children}
    </Button>
  )
}
const Pagination = (props) => {  
  if(!props.visible) return null;
  const currentPage = props.tableInfo.get("currentPage");
  const paginationPage = props.tableInfo.get("paginationPage");
  const dataSize = props.tableInfo.get("data").size;
  let pages = [];
  if(paginationPage >= 1) {
    for(let i = (paginationPage - 1) * 5 + 1; i <= paginationPage * 5; i++){
      pages.push(i);
      if(i * 10 >= dataSize) break;
    }
  }
  const pageBtns = pages.map((pageNumber, index) => {
    const btnType = pageNumber === currentPage ? "primary" : null;
    return (
      <PageBtn
        btnType={btnType}
        onClick={() => {props.onChangeCurrentPage(pageNumber)}}
        key={index}>
        {pageNumber}
      </PageBtn>
    );
  })
  return (
    <Container>
      <PageBtn
        onClick={props.onPreviousPageClick}>
        <Icon type="left" />
      </PageBtn>
      {pageBtns}
      <PageBtn
        onClick={props.onNextPageClick}>
        <Icon type="right" />
      </PageBtn>
    </Container>
  )
}
export default Pagination;
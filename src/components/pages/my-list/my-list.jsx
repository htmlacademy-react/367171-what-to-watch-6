import React from "react";
import MainLayout from "../../layouts/main-layout/main-layout";
import InnerLayout from "../../layouts/inner-layout/inner-layout";
import PageFooter from "../../sections/page-footer/page-footer";
import Catalog from "../../sections/catalog/catalog";
import {movieItems} from "../../../mocks/movie-items";
import PageHeader from "../../sections/page-header/page-header";

const items = movieItems.slice(0, 9);

const MyList = () => {
  return (
    <MainLayout>
      <InnerLayout className={`user-page`}>
        <PageHeader activeLink={true} className={`user-page__head`}/>
        <Catalog movieItems={items}/>
        <PageFooter/>
      </InnerLayout>
    </MainLayout>
  );
};

export default MyList;

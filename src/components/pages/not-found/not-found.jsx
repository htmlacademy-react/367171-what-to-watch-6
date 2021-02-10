import React from "react";
import MainLayout from "../../layouts/main-layout/main-layout";
import InnerLayout from "../../layouts/inner-layout/inner-layout";
import PageFooter from "../../sections/page-footer/page-footer";
import PageHeader from "../../sections/page-header/page-header";

const pageHeaderHeight = `98px`;
const pageFooterHeight = `94px`;
const pageVerticalPadding = `85px`;

const pageContentHeight = `calc(100vh - (${pageHeaderHeight} + ${pageFooterHeight} + ${pageVerticalPadding}))`;

const NotFound = () => {

  return (
    <MainLayout>
      <InnerLayout className={`page-content`}>
        <PageHeader isLogin={false}/>
        <div style={{display: `flex`, justifyContent: `center`, height: pageContentHeight}}>
          <h1>404. Page not found</h1>
        </div>
        <PageFooter/>
      </InnerLayout>
    </MainLayout>
  );
};

export default NotFound;

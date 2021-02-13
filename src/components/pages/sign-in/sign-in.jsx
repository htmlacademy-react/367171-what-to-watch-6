import React from "react";
import MainLayout from "../../layouts/main-layout/main-layout";
import InnerLayout from "../../layouts/inner-layout/inner-layout";
import PageFooter from "../../sections/page-footer/page-footer";
import PageHeader from "../../sections/page-header/page-header";
import AuthForm from "../../blocks/auth-form/auth-form";

const SignIn = () => {
  return (
    <MainLayout>
      <InnerLayout className={`user-page`}>

        <PageHeader isLogin={false} router={`main.html`} className={`user-page__head`}>
          <h1 className="page-title user-page__title">Sign in</h1>
        </PageHeader>

        <div className="sign-in user-page__content">
          <AuthForm/>
        </div>

        <PageFooter/>

      </InnerLayout>
    </MainLayout>
  );
};

export default SignIn;

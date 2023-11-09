import React, { ComponentType, Suspense } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { AppRootStateType } from "../redux/redux-store";
import { Preloader } from "../components/common/Preloader/Preloader";



export const withSuspense = (Component: React.ComponentType) => {
  return () => {
    return (
      <Suspense fallback={<Preloader />}>
        <Component />
      </Suspense>
    );
  };
};

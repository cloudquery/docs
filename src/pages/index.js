import React from "react";
import { Redirect } from "react-router-dom";

var a = 1;

export default function Home() {
  return (
    <Redirect to="/docs/intro" />
    // <Layout
    //   title={`Hello from ${siteConfig.title}`}
    //   description="Description will go into a meta tag in <head />">
    //   <HomepageHeader />
    //   <main>
    //     <HomepageFeatures />
    //   </main>
    // </Layout>
  );
}

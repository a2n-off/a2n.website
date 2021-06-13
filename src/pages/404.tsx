import React from 'react';
import Header from '../component/header';
import NotFoundSvg from '../component/svg/404';

const Error404 = () => {
  return (
    <section className="404">
      <Header isErrorPage={true}>
        <NotFoundSvg/>
      </Header>
    </section>
  )
}

export default Error404;

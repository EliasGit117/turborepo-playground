import { useState } from 'react';
import { Outlet } from 'react-router-dom';

function BaseLayout() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header className="container mx-auto p-4 flex gap-4">
        <h1 className="text-2xl">Admin App</h1>
      </header>
      <Outlet/>
      <footer className="mt-auto container mx-auto p-4 flex gap-4">
        <h3 className="text-xl">Some Footer</h3>
      </footer>
    </>
  );
}

export default BaseLayout;

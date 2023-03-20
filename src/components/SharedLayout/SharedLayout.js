import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link, Ul } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="movies">Movies</Link>
            </li>
          </Ul>
        </nav>
      </Header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};

import React from 'react';
import { Container } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';

export default function BreadcrumbNew() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <div className='bread_section'>
      <nav aria-label="breadcrumb" className="breadcrumb-nav">
        <Container>
          <div className="breadcrumb">
            <ol className="breadcrumb-item" itemscope itemtype="https://schema.org/BreadcrumbList">
              <li
                key={0}
                itemprop="itemListElement"
                itemscope
                itemtype="https://schema.org/ListItem"
              >
                <NavLink to={'/'} itemprop="item">
                  <span itemprop="name">{"Home"}</span>
                </NavLink>
              </li>
              {pathnames.map((name, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                const isLast = index === pathnames.length - 1;
                return (
                  <li
                    key={index + 1}
                    itemprop="itemListElement"
                    itemscope
                    itemtype="https://schema.org/ListItem"
                    className={isLast ? "active" : ""}
                  >
                    <NavLink to={routeTo} itemprop="item">
                      <span itemprop="name">{name}</span>
                    </NavLink>
                    {!isLast && ' › '}
                    <meta itemprop="position" content={String(index + 1)} />
                  </li>
                );
              })}
            </ol>
          </div>
        </Container>
      </nav>
    </div>
  );
}

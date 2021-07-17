import {css} from 'lit-element';

export const mainStyle = css`
  main {
    width: 100%;
    padding: 0 2rem;
  }

  .cards {
    display: grid;
    gap: 1rem;
  }

  @media (max-width: 575.98px) {
    .cards {
      grid-template-columns: 1fr;
    }
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    .cards {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    .cards {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: 992px) and (max-width: 1199.98px) {
    .cards {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media (min-width: 1200px) and (max-width: 1599.98px) {
    .cards {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media (min-width: 1600px) {
    .cards {
      grid-template-columns: repeat(6, 1fr);
    }
  }

  .empty-data {
    text-align: center;
    margin: 4rem 0;
  }

  .empty-data img {
    width: 500px;
    margin-bottom: 2rem;
  }

  .empty-data p {
    font-size: 1.25rem;
  }
`;

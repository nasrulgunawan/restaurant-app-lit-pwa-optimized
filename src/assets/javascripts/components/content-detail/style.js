import { css } from 'lit-element';

export const detailStyle = css`
  .container {
    max-width: 1000px;
    margin: 0 auto;
  }

  .card {
    background-color: #fff;
    padding: 1rem;
    margin: 1.5rem 0;
    display: flex;
    flex-direction: row;
    border-radius: 0.5rem;
  }

  .card-img {
    position: relative;
  }

  .card-img > img {
    width: 400px;
    height: 100%;
    object-fit: cover;
    border-radius: 0.5rem;
  }

  .card-img .rating {
    position: absolute;
    right: 1rem;
    top: 1rem;
    display: flex;
    background-color: #fff;
    padding: .15rem .5rem;
    border-radius: 1rem;
  }

  .rating .icon {
    width: 1.5rem;
    height: 1.5rem;
    color: var(--primary-color);
    margin-right: 0.25rem;
  }

  .card-text {
    margin: 0.75rem 1.5rem;
  }

  .card-text h2 {
    margin: 0 0 .5rem;
  }

  p {
    margin: 0;
  }

  .header-text {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
  }

  .categories .label-category {
    display: inline-block;
    border-radius: 2rem;
    background-color: #eee;
    padding: 0.25rem 1rem;
    font-size: .85rem;
  }

  .address {
    display: flex;
    align-items: flex-start;
  }

  .address .icon {
    width: 1.75rem;
    height: 1.75rem;
    margin-right: 0.5rem;
    color: rgb(73, 87, 100);
  }

  .detail-address {
    color: rgb(73, 87, 100);
  }

  .detail-address .city {
    font-weight: 500;
  }

  .description {
    color: rgb(73, 87, 100);
  }

  .divider {
    border: 1px solid #f0f2f4;
    height: 80px;
    margin-left: 2rem;
    margin-right: 2rem;
  }
`;
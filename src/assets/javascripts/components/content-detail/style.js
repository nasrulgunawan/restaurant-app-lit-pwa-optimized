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
    margin-right: 0.15rem;
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

  .flex-column {
    flex-direction: column;
  }
  
  .list-menu {
    display: flex;
    flex-wrap: wrap;
  }

  .menu {
    background-color: #eee;
    padding: 1.5rem 1rem;
    margin: .25rem 0 .25rem .5rem;
    border-radius: .25rem;
  }

  .menu-header {
    margin-top: 0;
    margin-bottom: .5rem;
  }

  .mb-2 {
    margin-bottom: 1.5rem;
  }

  .avatar {
    width: 3rem;
    height: 3rem;
    background-color: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-weight: bold;
    margin-right: .5rem;
  }

  .review-name {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .review-content {
    padding: 0 1rem 1rem 3.5rem;
  }

  .review-content p {
    margin-bottom: .25rem;
  }
  
  .review-content span {
    color: rgba(73, 87, 100, .5);
    font-size: 12px;
  }
`;
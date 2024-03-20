import { gql } from "@apollo/client";

export const GET_USER = gql `
query getUser {
    user {
      _id
      firstName
      lastName
      email
      items {
        _id
        name
        price
        description
      }
    }
  }
`;

export const GET_ITEM = gql `
  query getItem {
    item {
        _id
        name
        price
        description
    }
  }
`;

export const GET_ITEMS = gql `
  query getItems($category: String) {
    items(category: $category) {
        _id
        name
        price
        description
        inStock
    }
  }
`;

export const GET_ORDER = gql `
  query getOrder {
    order {
        products
        purchaseDate
    }
  }
`;

export const GET_CATEGORY = gql `
  query getCategory {
    category {
        name
        items
    }
  }

`;

export const GET_CATEGORIES = gql `
  query getCategories {
    categories {
        _id
        image
        items {
          _id
        }
        link
        name
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const VIEW_CART = gql`
  query viewCart {
    viewCart {
      cart {
        _id
        name
        description
        image
        price
        inStock
      }
    }
  }
`





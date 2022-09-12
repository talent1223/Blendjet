## Components

These are the props that a specific UI component needs to render and can contain actions as well

```ts
type ComponentProps = {
  title: string;
  action: () => void;
};
```

## Containers

A container is responsible for passing down stateful props to Components, it may still need some props to come in that do not go through state

```ts
type ContainerProps = {
  title: string;
};
```

## Outsmartly Roots

A root composes one or more Containers together for rendering and hydration these props get passed in from the edge at rendering time

```ts
type RootProps = ContainerProps & AnotherContainerProps;
```

## Global State

The global state store requires input data from the edge at rendering time and also needs to hydrate with this same data

```ts
type StateInput = {
  variants: { id: string }[];
};
```

The global state has output of application sate

```ts
type ApplicationState = {
  selectedVariant: { id: string };
  action: () => void;
};
```

## Outsmartly Content Sources

Content Sources have input types

```ts
type ShopifyProduct = {
  id: string;
  price: number;
};

type ContentfulEntry = {
  title: string;
};

type ExchangeRates = {
  [key: string]: {
    rate: number;
    country: string;
  };
};

type LooxReview = {
  name: string;
  stars: number;
};
```

Content Sources have some output type that can be put together from multiple sources and should be as close to the needs of the UI as possible for performance optimization (minimum extra data)

```ts
type ContentSources = {
  exchangeRates: {};
  shopifyProduct: {
    contentfulTitle: string;
    shopifyPrice: number;
  };
};
```

## Edge Context

Per user context may also be created.

```ts
type Context = {
  country: string;
  itemsCountInCart: number;
};
```

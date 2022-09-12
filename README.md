# BlendJet-UI

This is the UI repo for BlendJet. It handles:

- JSX markup
- styling
- Preact components, component props, component types
- Storybook stories
- data fetching
- data transformation rules

## Setup

Clone/fork the repo. Run `npm install` to install modules.

Make sure you have a `.env` file in the root with the appropriate values.

Run `npm run` to see available scripts defined in `package.json`.

- `npm run tsc` runs the Typescript compiler
- `npm run dev` builds the project and starts a Storybook server on
  `http://localhost:9009`

## Where stuff is

- `.storybook`: holds configuration for Storybook
- `outsmartly`: holds data, client entry points, and root components
- `public`: holds static assets
- `src/components`: basic UI components
- `src/container`: containers around components; these can retrieve from
  application state
- `mock-data`: various mock data
- `stories`: Storybook stories

## State

Avoid reaching into application state from inside components. However, you may
create small-scale local state inside components using `useState()`.

## Terminology, rules, conventions

- A "container" component wraps a single component. It retrieves stuff from
  application state for only that component.
- A "root" can have multiple children. It can aggregate multiple containers.
- You need a root if you want to hydrate.
- If you have a container, you must have a root to hydrate it.
- You can put a component straight on the page, without a root, if it doesn't
  need to hydrate. E.g., it doesn't need anything from state, so there's no need
  for it to live inside a container. But maybe it has some interactivity, so it
  does need to hydrate.
- Stories should never be made from roots. Stories want to come from containers.
  So, every container should/could have a story.

Who is needed for what:

- API: provides static data from Shopify, Contentful, etc.
- Root: is needed for rendering/hydration
- Container: needed for retrieving from application state
- Component: needed for UI. Keep them as simple as possible.

## Theming

If you need a globally-scoped theming class that affects multiple children:

1. Create styling rules for the theme class in `global.scss` using descendent
   selectors.
2. In component stories, conditionally wrap the component in an element that has
   the theme class. This will "fake" the ancestor relationship, just for
   purposes of seeing the component in its standalone story.
3. In `useSharedSate.ts`, we use vanilla JS to add/remove the theme class
   to/from the top-level element `<div class="app">` which sets the theme for
   the entire application.

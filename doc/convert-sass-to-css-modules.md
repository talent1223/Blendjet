# Guidelines for converting from SASS to CSS Modules in Blendjet-UI

## Background reading

Learn the fundamentals of CSS Modules

- [CSS Modules Github repo](https://github.com/css-modules/css-modules/)
- [CSS Modules: Welcome to the Future](https://glenmaddern.com/articles/css-modules)
- [CSS Modules by Example](https://www.javascriptstuff.com/css-modules-by-example)

Combined SASS with CSS Modules

- [How to Use Sass with CSS Modules in Next.js](https://www.freecodecamp.org/news/how-to-use-sass-with-css-modules-in-next-js/)
- [Modular SCSS and Why You Need It](https://medium.com/clover-platform-blog/modular-scss-and-why-you-need-it-6bb2d8c40fd8)

## Examine files and understand them

Start with `.tsx` files in a component directory. Understand how all the `.tsx`
files and components fit together. Then find the `style.scss`. Examine and
understand any:

- nested relationships
- SASS variables
- SASS mixins
- classes that will be applied by JavaScript
- classes needed to support 3rd party libraries
- potential for breaking SASS files into smaller components

## Rename classes in SASS

Rename the rest of the class names in the SASS file. For example:

```scss
// old
.kebab-case-class {
  color: red;
}

// new
.kebabCaseClass {
  color: red;
}
```

```css
/* Result in compiled CSS */
.ModuleName_kebabCaseClass__PE98f {
  color: red;
}
```

```jsx
// How to use that class in the view (JSX code)
<div class={kebabCaseClass}></div>
// Result in DOM
<div class="ModuleName_kebabCaseClass__PE98f"></div>
```

Rename the outermost class name to `.root`. This will result in class `ModuleName_root__12345`.

Remove any duplicated prefix that includes the root context. For example, for file `ProductSelect.module.scss`:

| Original SASS class                          | Rename to this    | Exported class name                   |
| -------------------------------------------- | ----------------- | ------------------------------------- |
| `.product-select`                            | `.root`           | `ProductSelect_root__12345`           |
| `.product-select__form-controls`             | `.formControls`   | `ProductSelect_formControls__9PWuG`   |
| `.product-select__container`                 | `.container`      | `ProductSelect_container__2mwKd`      |
| `.product-select__controls__title-container` | `.titleContainer` | `ProductSelect_titleContainer__7Q2Uv` |

Many rules are nested using SASS's parent selector, `&`. For the initial
migration to CSS Modules, these **may remain nested with an ampersand**. But
ultimately, they should be pulled out to a higher level, to achieve a flatter
style sheet. Use `composes` to apply the base class. See [CSS Modules
documentation](https://github.com/css-modules/css-modules#composition)

```scss
// old
.product-select {
  display: flex;
  flex-flow: row wrap;
  &__controls {
    width: 35%;
    display: inline-flex;
  }
}

// new
.root {
  display: flex;
  flex-flow: row wrap;
}
.controls {
  composes: root;
  width: 35%;
  display: inline-flex;
}
```

```css
/* Result in compiled CSS. Note that `controls` comes after `root`, so those
rules are more specific. This allows us to take advantage of the cascade to
override previous rules. */
.ProductSelect_root__12345 {
  display: flex;
  flex-flow: row wrap;
}
.ProductSelect_controls__12345 {
  width: 35%;
  display: inline-flex;
}
```

```jsx
// JSX code
<div class={controls}></div>
// Result in DOM
<div class="ProductSelect_root__12345 ProductSelect_controls__12345"></div>
```

Rules that are nested that **do not use the `&` parent selector** may remain
nested. This means you don't have to re-type the parent class. Examples:

- simple descendent selectors:

  ```scss
  .parent {
    .child {}
  }
  .root {
    a {}
  }
  ```

- direct descendent selectors:

  ```scss
  .parent {
    & > .child {}
  }
  .root {
    & > a {}
  }
  ```

- pseudo-classes:

  ```scss
  .class:first-child {}
  .class:last-child {}
  .class:nth-child(2) {}
  .class:hover {}
  .class:focus {}
  a:link,
  a:visited,
  a:hover {}
  ```

- psuedo-elements:

  ```scss
  .class::before {}
  .class::after {}
  .class::first-line {}
  ```

For example, here are styles for `.rating` and anchor elements that are direct
descendents.

```scss
// old...fine to leave nested as is
.rating {
  display: flex;
  justify-content: center;
  color: $primary-purple;
  & > a {
    color: $primary-purple;
  }
}
```

```css
/* resulting compiled CSS */
.ModuleName_rating__54jMk {
  display: flex;
  justify-content: center;
  color: $primary-purple;
}
.ModuleName_rating__54jMk > a {
  color: $primary-purple;
}
```

## Use CSS Modules classes in views

Open a .tsx file, and import the exported `styles` object for a module. Then
destructure that object to be able to work with just the class name. For example:

```javascript
import styles from './AddToCartButton.module.scss';
const { root, auto } = styles;
```

Update the views to use the new class names. Be sure to retain any logic for
dynamically applied classes, or those that are driven by props. Use the `cx()`
utility for any conditional classes.

```jsx
<div class={root}>
  <div class={cx(autoWidth && auto)}></div>
</div>
```

If a class name conflicts with a variable or prop in Javascript, just rename
that class, in the SASS file and in the import.

```jsx
import styles from './AddToCartButton.module.scss';
// const { small } = styles;   // Conflict: there is a prop named `small`.

// Rename the SASS class to indicate that it is a styling class. For example,
// you could prepend or append 'css', 'class', or something short and
// descriptive, like 'btn'.
const { smallCss } = styles;
function AddToCartButton({ small }) {
  return <button class={cx(small && smallCss)}>Click me</button>;
}
```

## Classes that will be applied by JavaScript

When Javascript applies a CSS class to an element, there must be a CSS selector
that exactly matches that class. For example, with regular CSS, `.is-active {}`
would have some styling or layout rules associated with it, and normally we
would add the string `is-active` to a DOM element.

```jsx
// vanilla JavaScript
const button = document.querySelector('burger');
if (activeState) {
  button.classList.add('is-active');
}

// Using JSX
<button class={cx('burger', activeState && 'is-active')}>
```

With CSS Modules, and with our own JS code, the best approach is to define the
class name in `.camelCase` in the SASS module file, then import the
converted class name as a JS variable, then add that value to the DOM element,
instead of the literal string.

```scss
// old
.burger.is-active span {
}

//new
.burger.isActive span {
}
```

```jsx
import styles from './ModuleName.module.scss';
const { burger, isActive } = styles;

<button class={cx(burger, activeState && isActive)}>
```

```jsx
// Result in DOM when active
<button class="ModuleName_burger__0QoV5 ModuleName_isActive__gT54L">
```

We should follow this approach whenever possible.

## 3rd-party class names

However, there are cases when we must be able to apply a class name via
JavaScript as a literal string. This can happen in our own codebase during
refactoring or migration, but occurs most commonly when using a 3rd-party
library that needs its own class names.

Typically, 3rd-party class names will need to be in the global scope, since we
can't control how the 3rd-party code adds the class name to DOM elements. So we
can either place the CSS rules in `global.scss` or can put them in a SCSS Module
and apply `:global()` to the class name. This prevents the class name from being
converted to a CSS Module class name.

The result is that the class remains in the global scope. Then we can still
apply the literal string to the DOM element:

```scss
// old
.burger.loox-rating span {
}

//new
.burger:global(.loox-rating) span {
}
```

```css
/* Resulting compiled CSS */
.ModuleName_burger__0QoV5.loox-rating span {
}
```

```jsx
// Result in DOM
<button class="ModuleName_burger__0QoV5 loox-rating">
```

## Clean up, refactor, improve the organization

Continually audit the imported classes, deleting any that are unused.

Delete any styling rules that are not used.

Consider eliminating any SASS mixins that simply apply rules. Instead, create a
class that contains those rules, and compose it into other classes.

Consider breaking up the existing `style.scss` file into multiple module files,
corresponding with components defined in `.tsx` files. Some helper components
will have no class names or styling, and thus will not need an accompanying
module file. But if there is even a single class name in a component, then it
justifies creating a separate SCSS Module file for it.

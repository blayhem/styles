## What is this project.

I did a [Twitch stream](https://www.twitch.tv/blayhem) not so long ago, showcasing the main different ways (that I know of) to style a modern Next/React application.

I created a Next template app using [`create-next-app`](https://nextjs.org/docs/api-reference/create-next-app), and then I took the different ui components in `pages/index.js` and moved them over the `components` folder. There, I used different ways to apply styles to each individual component.

### CSS Modules

`components/card` uses [CSS modules](https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css), supported by Next out of the box.

| Pros                                                                                                                                                     | Cons                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| Simple solution                                                                                                                                          | CSS syntax can get longer/more verbose                                                              |
| No extra dependencies                                                                                                                                    | You may lose some [special functions](https://sass-lang.com/documentation/syntax/special-functions) |
| Avoids [class collisions](https://stackoverflow.com/questions/21828894/how-do-you-avoid-class-name-collisions) without using BEM or other ugly approach. |                                                                                                     |

### SCSS Modules

`components/footer` uses [SCSS modules](https://nextjs.org/docs/basic-features/built-in-css-support#sass-support), a twist to the original CSS modules. SASS is a meta-language on top of CSS, and SCSS is an extension of the syntax of CSS.

This just requires `sass` to be installed as a project dependency.

| Pros                                                | Cons                                            |
| --------------------------------------------------- | ----------------------------------------------- |
| Still a simple solution                             | Stylesheets are still separated from the code   |
| Only one (light) dependency, no extra configuration | You may have duplicated code for similar styles |
| SASS is cleaner and better structured than CSS      |                                                 |

### Tailwind CSS.

`components/grid` uses [TailwindCSS](https://tailwindcss.com/).

Tailwind CSS is a so-called "utility-first" CSS framework, which means that every CSS class is a low-level CSS composition. This allows simplification and standardization of UI components, but CSS classes can be quite long (e.g. `"w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"`).

| Pros                                                                                                                | Cons                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Design system already built for you, with expandability/customization in mind                                       | As the classes can be long, the code can grow exponentially if it's not properly fragmented.                                   |
| It's fully compatible with other CSS methods, and you can use `@apply` to use Tailwind classes with your own styles | It's not as powerful as other solutions, and you may need to add a lot of classes and/or custom CSS on top for advanced stuff. |
| All the code and styles live in the (React) component.                                                              |                                                                                                                                |

### Styled components.

`components/main` uses [styled-components](https://styled-components.com/).

Styled components is a library that uses tagged template literals to style your components, that is, inline CSS in JS. You can see there's only one file for the component, for the presentational component and its style.

| Pros                                                                         | Cons                                                                                                                                                    |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| JS and CSS live together, simple/cleaner file(s)                             | Again, mixing all together adds lines of code and complexity. You can solve this by still separating the styles in a separate js file.                  |
| You can have access to props in the CSS properties, and create complex logic | Sometimes code editors don't highlight the syntax of CSS-in-JS or CSS inside a template string, as the file doesn't have a .css (or similar) extension. |

This is all my very limited and personal opinion with all the different solutions I tried so far in React and Nextjs applications. Please clone the repo, check the components, and try for yourself! You can let me know your thoughts [on Twitter](https://twitter.com/blayhem).

## How to run the application.

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

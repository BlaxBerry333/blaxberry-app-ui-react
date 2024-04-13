# MyApp UI Lib ( React )

MyApp UI Component Library for React

## Quick Start

```tsx
yarn add git+https://github.com/BlaxBerry333/blaxberry-app-ui-react
```

## Tech Stacks

- [Vite]() v5
- [React]() v18
- [TypeScript]() v5
- [Storybook]() v7
- [MUI]() v5

## Project Structure

```
/
├── .storybook/
├── .dist/
├── docs/                           # project's documents
├── public/
├── src/                            # components
│   ├── [...]/
│   ├── ...
│   └── index.ts
├── stories/                        # components' stories
│   ├── [...]/
│   │   ├── [...].mdx
│   │   └── [...].stories.tsx
│   └── ...
├── storybook-static                # storybook static pages
│   ├── ...
│   └── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── ...
```

## Dev Commands

```shell
yarn dev:storybook      # start storybook dev server at :6006

yarn build:lib          # build this repo
yarn build:storybook    # only build storybook static html
yarn build:types        # only build types

yarn check-eslint       # check eslint rules
yarn check-prettier     # check prettier rules

yarn format             # format code
```

## Development Flow

```shell
# 1. check
yarn check-prettier && yarn check-eslint
# 2. build lib
yarn build:lib
# 3. commit then push
git commit -m "commit message"
git push

# 4. move to project used this ui lib
# then install this ui lib again
cd <workplace>/<project>
yarn add git+https://github.com/BlaxBerry333/blaxberry-app-ui-react
```

## Documents

- [Change Log](./docs/changeLog.md)
- [Inspiration From](http://demo.eui6.com/#/form/button.html)

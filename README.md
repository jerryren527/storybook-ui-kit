# Storybook UI Kit

This repository contains a collection of Storybook stories for React components, providing a UI Kit for building web applications. The code in this repository is an implementation of the designs found in the following Figma community link: [Browk UI KIT](https://www.figma.com/community/file/817436609226882468/Browk-UI-KIT).

## What is Storybook?

Storybook is an open-source tool for developing UI components in isolation. It allows developers to build and showcase their components, providing a convenient way to view and interact with them individually. Storybook can be used with various frontend frameworks, including React, Vue, Angular, and more.

## Live Demo

To view and interact with the Storybook UI Kit, click here: [Live Demo](https://storybook-ui-kit.netlify.app/)


## Project Structure

The project structure is organized as follows:

```
storybook-ui-kit/
  ├── .storybook/
  │   └── main.js
  │   └── preview.js
  ├── src/
  │   ├── components/
  │   │   ├── Badge.js
  │   │   ├── Button.js
  │   │   ├── ...
  │   ├── stories/
  │   │   ├── Badge.stories.js
  │   │   ├── Button.stories.js
  │   │   └── ...
  │   ├── styles/
  │   │   ├── Badge.css
  │   │   ├── Button.css
  │   │   └── ...
  ├── ...
```

- `.storybook/`: Contains the Storybook configuration files `main.js` and `preview.js`, where you can customize Storybook's behavior.
- `src/components/`: Contains individual component's implementation (`ComponentName.js`).
- `src/stories/`: Contains Storybook stories that showcase multiple components or complex UI scenarios.
- `src/styles/`: Contains individual component's styles.

## Acknowledgments

The designs used in this project are based on the work available in the [Browk UI KIT](https://www.figma.com/community/file/817436609226882468/Browk-UI-KIT) Figma community link. Feel free to explore the components in the Storybook UI Kit and use them as a foundation for building your own web applications.
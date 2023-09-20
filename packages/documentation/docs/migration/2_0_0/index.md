---
sidebar_position: 0
sidebar_title: Updating to v2
title: Updating to v2
---

# Updating to v2.0.0

Welcome to the migration guide for upgrading from Siemens iX v1 to v2.
Please follow this guide to ensure a smooth and successful migration process.

# Update your code

## Move `@siemens/ix-icons` from `"dependencies"` to `"peerDependencies"`

`@siemens/ix-icons` is no longer a direct dependency of `@siemens/ix`, `@siemens/ix-react`, `@siemens/ix-angular` and `@siemens/ix-vue`.

If you are using `@siemens/ix-react`, `@siemens/ix-angular` and `@siemens/ix-vue` you dont have to adapt any code.
If you are using `@siemens/ix` directly you have to define the custom elements of the `@siemens/ix-icons` package.

```typescript
import { defineCustomElements } from '@siemens/ix-icons/loader';

(async () => {
  await defineCustomElements();
})();
```

For more information check out the [@siemens/ix-icons repository](https://github.com/siemens/ix-icons).

## `@siemens/ix-icons` removed icon font

The internal implementation of `@siemens/ix-icons` changed from icon font to a `SVG` based implementation.
This should not have any direct impact on your application.

## `@siemens/ix`, `@siemens/ix-react`, `@siemens/ix-angular` and `@siemens/ix-vue` with custom icon support.

You can now provide custom icons as inline SVG or via relative/absolute path to the asset.

example of a custom icon via path:
```tsx
  <ix-icon name="./assets/my-icon.svg"></ix-icon>
  <ix-icon name="https://my.example.cdn.address/assets/my-icon.svg"></ix-icon>
```

//TODO: Link icon markdown 
There are some constraints for using custom icons. For more information please refer to the guide in the documentation:
<!-- [here](./../../guidelines/icons.md) -->

## Replace Bootstrap Modal parts with iX Modal components

//TODO: Enhance migration guide regarding new modal system

```tsx
<ix-dialog>
  <ix-modal-header>My Header</ix-modal-header>
  <ix-modal-content>My Content</ix-modal-content>
  <ix-modal-footer>
    <ix-button>Save</ix-button>
    <ix-button>Cancel</ix-button>
  </ix-modal-footer>
</ix-dialog>
```

## Deprecation Notice: ix-menu-item `tabIcon` property

Previously, the `tabIcon` property was used to specify an icon for the `ix-menu-item`. However, to enhance clarity and align with established naming conventions in the library, we have deprecated the `tabIcon` property in favor of the more concise property name `icon`.

```html
<!-- Previous code -->
<ix-menu-item tabIcon="my-icon"></ix-menu-item>

<!-- Updated code -->
<ix-menu-item icon="my-icon"></ix-menu-item>
```

# New design concepts

## ix-basic-navigation and ix-menu

In the latest version of `ix-basic-navigation`, we have changed how menu items overflowing outside the menu container are being handled. Previously, when there were too many items, users had to click on a dropdown to see the hidden ones, resulting in a suboptimal experience.
Now the list of menu items will scroll vertically to prevent overflow.
This ensures that all menu items remain contained within the menu, offering a more intuitive and visually consistent experience.

### New component `ix-menu-category`

`ix-menu-category` is a new addition to the `ix-menu` that enables the creation of second-level navigation within the `ix-menu` component. With `ix-menu-category`, you can organize your menu items into categories, providing a hierarchical structure for your menu navigation.

```tsx
<ix-menu-category label="AI Configuration" icon="rocket">
  <ix-menu-item>Nested Item 1</ix-menu-item>
  <ix-menu-item>Nested Item 2</ix-menu-item>
</ix-menu-category>
```

### Multiple screen layouts within the `ix-basic-navigation`

The `ix-basic-navigation` introduces new layout breakpoints that affect the display and behavior of the menu component based on the screen size. These breakpoints provide a responsive and adaptive menu layout for different devices and screen resolutions.

![Menu Layout](capture_layout_feature.gif)

With the updated version of ix-menu, you have the flexibility to choose which layout breakpoints are supported. You can specify the supported modes using the `breakpoints` property. This allows you to customize the menu's behavior and appearance according to your specific requirements.

The following breakpoints are now available in ix-menu:

- **sm**: `only screen and (min-width: 36em)`
  - Menu not visible.
- **md**: `only screen and (min-width: 48em)`
  - Menu visible but requires expansion to see the complete menu.
- **lg**: `only screen and (min-width: 62em)`
  - Shows the menu as pinned in full width.
  - The overlaying content is moved to the left.

These breakpoints enable the menu to adapt its layout and behavior according to the available screen space, ensuring optimal visibility and usability for different screen sizes.

By setting the `breakpoints` property, you can define which layout modes should be enabled for your menu. For example, if you want to support only the small and medium breakpoints, you can set the `breakpoints` property as follows:

```tsx
<ix-basic-navigation breakpoints={['sm', 'lg']}>
  <ix-menu>
    <!-- Menu items and categories -->
  </ix-menu>
</ix-basic-navigation>
```

## Spinner animation

We replaced the previous animation with a cleaner and more refined alternative.

![Spinner](spinner.gif)

## Shadow DOM

We are excited to announce that we have migrated all of our components to Shadow DOM. This migration brings several benefits and enhancements to the functionality and performance of our library.

Here are the key advantages of migrating to Shadow DOM components:

1. **Interoperable**: Shadow DOM provides encapsulation for components, isolating their styles and markup within a dedicated DOM subtree. This ensures predictable and maintainable styling, while enabling seamless integration of self-contained and reusable components into various projects without conflicts or interference with existing styles and functionality.

2. **Improved Performance**: Shadow DOM components have better performance due to the browser's optimized rendering of the encapsulated DOM subtree. This results in faster initial rendering and improved overall responsiveness of the components.

Please note that as part of this migration, some changes may be required in your codebase if you were relying on direct manipulation or styling of our components. We recommend reviewing our updated documentation and examples to ensure a smooth transition and take full advantage of the benefits offered by Shadow DOM components.

# Questions ❓🙋‍♀️

Don't forget to checkout your [Breaking Changes guide](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES.md).

If you have question or facing problems during migration [contact us over our forum](https://community.siemens.com/c/ix/)
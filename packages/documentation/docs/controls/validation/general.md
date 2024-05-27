import Admonition from '@theme/Admonition';

# Validation

All components which are tagged via `form-ready` are usable inside a `form`.

## Label

Each `form-ready` component comes with an attribute `label` to show a label above the component.

```html
<ix-select label="Demo"></ix-select>
```

The `label` attribute is optional and can be empty to show no label.

## Form layout

//TODO: Rewrite section
//TODO: Should we provide a form layout could be similar to ix-layout-grid

To align `form-ready` components in a complex form layout. You typically don't provide a `label` attribute to each component.

```html
<form>
  <ix-layout-grid>
    <ix-row>
      <ix-col size="2">
        <ix-label htmlFor="my-select-1">Example</ix-label>
      </ix-col>
      <ix-col>
        <ix-select id="my-select-1"></ix-select>
      </ix-col>
    </ix-row>
    <ix-row>
      <ix-col size="2">
        <ix-label htmlFor="my-select-2">Example</ix-label>
      </ix-col>
      <ix-col>
        <ix-select id="my-select-2"></ix-select>
      </ix-col>
    </ix-row>
  </ix-layout-grid>
</form>
```

## Validation text

- **helperText** (optional): Text displayed below the field component to provide additional information.
- **infoText** (optional): Informational text for the field component.
- **warningText** (optional): Warning text for the field component.
- **errorText** (optional): Error text for the field component.
- **validText** (optional): Valid text for the field component.
- **showTextAsTooltip** (optional): Determines whether to display helper, info, warning, error, and valid text as tooltips.

## Validation states

To change the validation representation you have to apply the corresponding classes to the component.

- `ix-valid`: To show component as valid (Priority 1)
- `ix-info`: To show component as info (Priority 2)
- `ix-warning`: To show component as warning (Priority 3)
- `ix-invalid`: To show component as invalid (Priority 4)

The classes have different priority levels which define in which order the styling is applied to the component. (`1` is the lowest priority and `3` the highest)

e.g

```html
<ix-select class="ix-invalid ix-info"></ix-select>
```

Will show the component as `invalid` because `invalid` has a higher priority.

<Admonition type="info" icon="💡" title="Did you using Angular?">
  If you using Angular in combination with ReactiveForms, it is not necessary to apply the class `.ix-invalid` and `.ix-valid` this will be done automatically via value accessors.
</Admonition>

## Suppress valid styling

To suppress the valid component styling you can apply `data-ix-disable-valid` to the `form` to disable
valid styling for the complete form or you can apply the `data-ix-disable-valid` attribute only to the
component you want to disable the styling e.g

```html
<form>
  <ix-select data-ix-disable-valid>
    <ix-select-item value="1" label="Label 1"></ix-select-item>
    <ix-select-item value="2" label="Label 2"></ix-select-item>
  </ix-select>
</form>
```
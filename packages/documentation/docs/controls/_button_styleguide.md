# UX Description

Buttons are used to initiate actions, to apply actions to selected objects and to activate/deactivate functions. Buttons should be used to trigger an immediate action. They can be placed within dialogs, forms, modal windows and other containers. Each content area should include only one primary button. Buttons are the keystones of user interface design, offering users a tangible way to interact with digital environments. Our design guidelines outline key principles for creating effective and user-friendly buttons. By following the button design guidelines, you can create user-friendly interfaces that guide users through their digital journeys with clarity, responsiveness, and accessibility. Consistent, well-designed buttons are the building blocks of a positive user experience.

![Overview](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=1068%3A4671&mode=design&t=QmxiHvZF7qOmGQQj-1)


1. Default varioant
2. Outlined variant
3. Ghost variant


## Variants

- **Primary button:** for the most important or primary actions within the user interface, to draw the user's immediate attention to the most important and frequently used action. These are typically actions that advance the user through a process, such as "Submit," "Save," "Sign Up," or "Checkout." it's crucial to note that primary buttons are identified by their unique and distinguishing colors.

- **Secondary button:** for actions that are less commonly performed or that offer additional choices. These could include actions like "Cancel," "Reset," or "Advanced Options, " or support the primary action. For instance, in a dialog box, a secondary button might be used for "Don't Save" when the primary action is "Save." It's important to underscore that secondary buttons are characterized by a uted grey color.

- **Tertiary button:** are used for actions that are typically not part of the core user journey but serve specialized or conditional purposes.Tertiary buttons can represent actions such as "Advanced Settings," "More Options," "Help," or "Customize." They may also be used for conditional actions like "Change Preferences" or "View Details."


### Emphasis

Emphasis is a fundamental design principle, it tailors button design to suit the specific scene, adapting as required. In essence, emphasizing buttons is like giving them a leading role in the design narrative. It ensures that each button's significance is highlighted, leading users through a cohesive and intuitive user experience where every interaction is well-timed and resonates with the audience. Emphasis establishes a visual hierarchy among buttons. Primary buttons take the center stage, secondary buttons play supporting roles, and tertiary buttons remain in the background. 
Like maintaining a consistent theme in a performance, emphasis keeps button design uniform throughout the interface. This minimizes user confusion and maximizes user satisfaction.

Lower emphasis can also be assigned to content areas through the use of grey buttons. Default (colored) and grey buttons should not be mixed in one line.

Hint: Conflicting naming conventions in components, grey button equals property variant "Secondary" in implemented components.


## Behaviour in context

### Interaction

Buttons are interactive components that enable users to trigger specific actions, navigate between screens or pages, and control the behavior of an application or website.  <kbd>Space</kbd>.

### Text truncation

Button labels are not truncated. All text on buttons is one line only. Labels should be kept concise to allow users to quickly scan, understand and remember them.

### Alignment

Buttons can be left-justified or right-justified or fully span a container's width with right-justified alignment being most commonly used.


### Content

Buttons can contain only text, only icons or both text and icons.

| Variant       | Description and usage                                                                                                |
| ------------- | -------------------------------------------------------------------------------------------------------------------- |
| Icon and text | Use if an icon is wanted and the icon metaphor might not be known to the user.                                       |
| Text-only     | If no well-known icon metaphor exists for the function or no icon is wanted to reduce graphical screen complexity.   |
| Icon-only     | If a well-known icon metaphor is used or the meaning of the icon metaphor is clear from the context. Use cautiously. |

### Icon button

Icon buttons are available in three sizes and two shapes.

| Icon size  | Description and usage                                                                                |
| ---------- | ---------------------------------------------------------------------------------------------------- |
| XS/12      | Extra small icon size, used for very small parent components.                                        |
| S/16       | Small icon size, used for buttons within a parent component, e.g. clear button within search fields. |
| Default/24 | Default icon size, used for all icon buttons without space restrictions due to parent components.    |

| Button shape | Description and usage                                          |
| ------------ | -------------------------------------------------------------- |
| Square       | Default shape, also used within rectangular parent components. |
| Oval         | Alternative shape, used within oval parents components.        |

### Selectable button

The selected state is only available for tertiary (ghost) grey buttons to visualize an on/off state. Hover and active state are available for the selected variant. The selectable button is commonly used within toolbars.

### Button group

A button group, also known as segmented buttons or toggle buttons, is an element consisting of two or more adjacent buttons. Selection/activation of the buttons can either be mutually exclusive (single-select) or not (multi-select). Buttons within a button group should be of the same content variant, i.e. not mixing icon only, text only and icon and text buttons in one group. All buttons within a button group are secondary (outline) buttons and switch to primary when selected/active. Button groups should be used for closely related actions, e.g. switching between different views.

![Button group](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=145-10524&mode=design&t=oeSCpzdXLLAiSHv2-0)


## Options/Formatting

![Anatomy](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=1097%3A5037&mode=design&t=QmxiHvZF7qOmGQQj-1)

1. Contained button       | 2. Outlined button      | 3. Ghost  button        | 4. Icon  button          |
--------------------------|-------------------------|-------------------------|--------------------------|
- A. Container            |- A. Container           |- A. Text label          |- C. Container (optional) |        
- B. Text label           |- B. Text label          |- C. Icon (optional)     |- B. Icon                 |
- C. Icon (optional)      |- C. Icon (optional)     |                         |                          | 

### Sizing

- All buttons have a fixed height.
- Icon-only buttons also have a fixed width.
- Text-only and icon and text buttons have a minimum width of 5rem.
- For text-only and icon and text buttons, no maximum width is defined.
- The width of Primary and Secondary buttons can either depend on screen context or text length.
- The width of Tertiatry buttons with text depends on the text length.
- Text on text-only buttons is horizontally centered.
- On icon-and-text buttons, there is a fixed margin between icon and text of <kbd>0.25rem</kbd>. Icon and text together are horizontally centered. The icon should be placed on the leading side of the button (e.g. left for left-to-right languages).

### Spacing

A default margin between adjacent buttons of <kbd>0.5rem</kbd> is defined. Depending on the context, this margin may be increased, though.

## States

Button states are equal for text-only, icon-only and text and icon buttons.

It is advised not to incorporate "selectable buttons" in order to maintain interface consistency and avoid user confusion.

![Button states](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=132-13020&mode=design&t=oeSCpzdXLLAiSHv2-0)

| State           | Description                                                                                                                    |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Hover           | The hover state is indicated by fill color change and text/icon color change (except primary button).                          |
| Active          | The active state is indicated by fill color change and text/icon color change (except primary button). Equal to pressed state. |
| Disabled        | The disabled state is indicated by fill color change and text/icon color change (except primary button).                       |
| Selected        | The selected state is indicated by text/icon and fill color change. Only available for tertiary (ghost) grey button.           |
| Selected Hover  | The selected state is indicated by fill color change. Only available for tertiary (ghost) grey button.                         |
| Selected Active | The selected state is indicated by fill color change. Only available for tertiary (ghost) grey button.                         |
| Focused         | The focused state is indicated by a focus frame.                                                                               |

## Does and doesn't

- It is advisable to maintain uniform button height throughout the interface, and we recommend a specific height of... for achieving this consistency.
- Button icons are essential visual elements that provide users with quick and intuitive cues about the button's functionality and purpose, it is recommended to place the icon on the leading side of the button element.
- it is recommended to have only one primary button in each visual unit to ensure a clear and singular focus on the main call to action.

- When many actions/functions are necessary, using only buttons can easily overcrowd the screen. Don't only rely on buttons in such cases, but consider alternatives such as dropdown or split buttons or moving some of the functionality to a drawer or a dialog.
- Do not use buttons for navigation. To foward a user to a new page, use a hyperlink instead.

- For more information, see also the UX writing guidelines on [Diaglogs and buttons](/docs/language/dialogs-and-buttons.md).

## Related patterns:

- [Icon button]
- [Dropdown button](./dropdown-button.md)
- [Split button](./split-button.md)
- [Toggle button]
- [Modal](./modal.md)



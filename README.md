# Tarot

Tarot is a light-weight, mobile-first, card-based LESS boilerplate framework.

# Current Status

Tarot is currently in Alpha Status 0.1. This means that variables and syntax are subject to change and that there is very little documentation.

# To-Do

- Add plugins for sidebar
- Add more colors for initial theme
- Add different button colors
- Add different button sizes
- Add more click button effects
- Add card close effects
- Add card switching effects
- Add swiping left and right on cards
- Add swiping up and down on cards
- Add turning cards

# Contributors

<a href="http://github.com/dbeals/">Donald Beals</a> and <a href="http://github.com/mmccullar/">Matt McCullar</a>.

# Contributing

These are just a few notes about contributing.
- Keep selector specificity as low as possible.
- Do not use ID selectors - all styles should be designed to be applied to any element.
- Use specific styles; for example, use border[-side]-width instead of border: none as border: none will mess with subsequent styles.
- Make sure to process the LESS files down to CSS.
- LESS files go in the Source folder, CSS files go in the Distribution folder.
- All LESS files should import GlobalVariables.less.
- Only variables and mixins (must always have parenthesis) are allowed in GlobalVariables.less. This way the contents of GlobalVariables.less does not affect the file that is importing it.
- Colors should be avoided at all cost - these will be set in the Theme.less.
- If you need to use padding/margins use the predefined variables (see GlobalVariables.less.)
- If you need to use colors, use the predefined variables (see top of Theme.less.)
- If a modifier is theme only (defined in Theme.less), then ensure you note that in the readme (see Cards > hover.)

# Design

There are two major design principles in play in Tarot:

First is "cards" - everything in the design should be a card or be designed specifically to work in a card.

Second is modifiers - the majority of the classes are designed as modifiers to be applied to any element. For sake of a definition, we are defining a modifier as a CSS class that is designed to provide a specific aesthetic or work in conjunction with another class. For example, **primary-back** can be applied to any element to change it's background color to the primary color. You can then apply **dark-back** to make the primary-color-background darker. 

# Generic Modifiers

These are modifiers that can be used on any element.

- **[primary/secondary/success/warning/error]**: changes the color of the accent (3px border at the top.)
- **[primary/secondary/success/warning/error]-back**: changes the color of the background.
- **[dark/darker/darkest/light/lighter/lightest]-back**: changes the brightness of the background based on the current -back modifier.
- **[primary/secondary/success/warning/error]-border**: changes the color of the border.
	- Please note that the -border colors are a little darker than the -back colors so that the border sticks out.
- **[dark/darker/darkest/light/lighter/lightest]-border**: changes the brightness of the border based on the current -border modifier.
- **[primary/secondary/success/warning/error]-text**: changes the color of the text.
	- Please note that the -text colors DO NOT match the -back colors; these modifiers are used to change the color of the text so that it shows up properly on the matching back color.
- **square**: removes rounded corners.
- **rounded**: adds rounded corners (0.25rem.)
- **inline**: forces block display on mobile, inline-flex on the default breakpoint. It also removes the bottom border of list-items.
- **pad-none**: sets padding to 0.
- **pad-left, pad-top, pad-right, pad-bottom, pad-all, pad-horizontal, pad-vertical**: sets the respective padding to @basePadding.
- **thin-padding, thick-padding**: changes the padding to be half or double, respectively.
- **thin-margin, thick-margin**: changes the margin to be half or double, respectively.

# Typography

- **text-left, text-center, text-right**: aligns the text to the left, center, and right respectively.
- **small-text, normal-text, large-text, extra-large-text**: changes the font-size to .75rem, 1rem, 1.25rem, and 1.5rem respectively.
- **strong**: bolds the font.
- **emphasis**: applies italic font-style.
- **ellipsis**: attempts to force the element to cut off text with an ellipsis.

# Media
- **rounded-image**: gives the image rounded corners (0.25rem.)
- **circle-image**: rounds a square image into a circle. (50% border radius.)

# Visibility
- **hide-on-[small/medium/large/extra-large]**: hides the element based on the respective breakpoints (see GlobalVariables.less for pixel size.)
- **show-only-on-[small/medium/large/extra-large]**: hides the elements until the respective breakpoint is hit (see GlobalVariables.less for pixel size.)

# Badges / Pills
- **badge**: changes the line-height and font-size to accomodate smaller text. Adds rounded corners and removes word wrap.
- **pill**:  same as *badge*, but more rounded corners (to give it the pill aesthetic.)

# Cards

You can create a card by simply assigning the class "card" to any div. This will give the div a margin of 1rem, a 1px border around the side, a 3px border at the top, a background color determined by the theme, and rounded corners.

## Modifiers

- **no-accent**: removes the accent (changes the 3px border at the top to a 1px border.)
- **hover** *(theme only)*: list-items will have a hover affect applied.
- **three-d** *(theme only): gives the card a 3D appearance.

## Typography

- **header**: bolded text.

## Lists

- **list**: removes list-style and padding so that the list appears to be part of the card.
- **list-item**: used for lists that are never inline. Adds borders.
- **inline-list-item**: used for lists that are inline, but vertical on mobile. Adds borders on mobile.

## Blocks

- **block**: defines a section of a card; adds a top border. The default theme also darkens the background color.

# Grid
Tarot includes a 12 column grid system utilizing a simple naming standard: [number]-column[s]:

- one-column
- two-columns
- three-columns
- etc.

To simplify design, we have included quarters and thirds:
- one-quarter
- two-quarters
- one-third
- etc.

*Please note that there is not a twelve-columns, four-quarters, or three-thirds; you would utilize full-width for this.*

Finally, append -offset to the end of any of these to push the element to the right.
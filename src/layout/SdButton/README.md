# Buttons

## Description

Buttons are made for clicking.

## Usage

```javascript
<template>
    <sd-button @click="onClick">Button</sd-button>
</template>
<script>
import SdButton from '@/layout/SdButton'
export default {
    components: {
        SdButton    
    }, 
    methods: {
        onClick () {
            // stuff happens here
        }
    }
}
</script>
```



## Props

| Prop     | Type    | Description                                                                                    |
| -------- | ------- | ---------------------------------------------------------------------------------------------- |
| id       | String  | Sets the ID of the element                                                                     |
| type     | String  | Sets the type of the rendered element                                                          |
| href     | String  | Changes the rendered element into an `<a/>`                                                    |
| disabled | Boolean | Disables the button.                                                                           |
| rounded  | Boolean | Rounds the corners while setting the padding of the element to equal widths                    |
| pill     | Boolean | Rounds the corners while maintaining the default left and right widths                         |
| outline  | Boolean | Removes background and adds an outline with the set theme color                                |
| flat     | Boolean | Removes the background. Text color                                                             |
| theme    | String  | Sets the color of the element. Accepts `primary, secondary, default, warning, danger, success` |
| align    | String  | Set `align-items: <value>`on the element.                                                      |
| full     | Boolean | Unused                                                                                         |
| block    | Boolean | Sets the element to `display: block`                                                           |
| iconOnly | Boolean | Adjust content padding to allow for proper positioning and rendering of a slotted icon.        |

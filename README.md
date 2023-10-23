# afs-test
some point for next itterations
- add Pinia store (instead of vuex - faster & simpler)
- use vite instead of vue cli (faster)
- add user transisitons
- and some other form & ui/user feedback.
- optimalize scss. + compiling (vite)


## Details

This is a Vue 2 project with TS using these libraries for component setup:
```vue-class-component```
```vue-property-decorator```

## Assignments

### table row
On the "Home" page is a table, add a row to this table that displays the totals of the other rows.

### Async/Await
In the mounted function the data for the table is being fetched, edited and placed in the tableData property with a promise chain. 
Rewrite this function but instead of chaining promises use async/await to do the exact same. 

### Add a security class
On the home page, create a button that opens a modal window containing a form. This form should allow you to add a security class to the table, updating the totals.

### Transfer search
On the Transfers page you find a list of financial transfers with a search bar. Make the transferlist searchable by "recordDate".

### Style the transferRow.vue component
Rework the style for this component, using this design. Make it look as close as possible.  
The texts in the design and the provided data do not match. It is just about recreating the design.
https://i.pinimg.com/736x/29/bc/e5/29bce59f6cdf71eb840d939ba05deff1--best-ui-design-app-ui-design.jpg 
If you for whatever reason do not have a similar result to the image, please let us know when you send in the work.

### Fix the update transfers button
Something is going wrong with this button, fix it and explain why it broke in the comments.

To hand in the project, please create a repository and invite mvanloon@afsgroup.nl and sarissen@afsgroup.nl.
Good luck!

## Notes
Do not use the included buefy UI components for your assignments.

We have tested this project to work with node 16.14.0 (it may work with other versions as well).


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

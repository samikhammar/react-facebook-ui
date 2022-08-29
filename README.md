### i'm currently [looking for a job](https://www.linkedin.com/in/sami-khammar/)

This UI package is one of my **Must Create** projects , i spent a couple of months to achieve this and i'm currently in a need for a software development job. and i'm ready to be recruited.

Please contact me via:

- <a href="http://samikhammar.github.io/" rel="noopener" target="_blank">My Portfolio</a>
- <a href="https://www.linkedin.com/in/sami-khammar/" rel="noopener" target="_blank">My LinkedIn</a>

Thank you.

<!-- markdownlint-disable-next-line -->
<p align="center">
  <a href="https://github.com/samikhammar/react-facebook-ui" rel="noopener" target="_blank"><img width="150" src="https://raw.githubusercontent.com/samikhammar/react-facebook-ui/main/react-facebook-ui-logo.svg" alt="MUI logo"></a>
</p>

<h1 align="center">React Facebook UI</h1>


# [react-facebook-ui](https://www.npmjs.com/package/react-facebook-ui) [![NPM version](https://img.shields.io/npm/v/react-facebook-ui.svg?style=flat)](https://www.npmjs.com/package/react-facebook-ui) [![NPM downloads](https://img.shields.io/npm/dm/downloads.svg?style=flat)](https://npmjs.org/package/react-facebook-ui)

You're using React or NextJs , and want to build a production ready app faster ? you're in the right place , inspired by the facebook user interface, **react-facebook-ui** offers a suite of UI components and functionalities to help you ship new features faster. 

**react-facebook-ui** is **light weight** , **fast** and extremely **easy to use and customize**.

---

## Features

- +30 Powerful UI components (Form , Data-Table , Modal , Sidebar , Toast , Menu ... and much more).
- Standalone , No dependency required.
- Lightweight , less than ~600kb.
- Built-in theme customization.
- Light & Dark theme out of the box.
- RTL Support.
- Responsive.
- NextJs support.
- helper functions (custom useful react hooks, make easy HTTP reaquests, generate fake data ...).

## <a name="demo" href="https://stackblitz.com/edit/react-facebook-ui" target="_blank">Demo & Playground</a>

## Installation

react-facebook-ui is available as an [npm package](https://www.npmjs.com/react-facebook-ui).

```sh
npm install react-facebook-ui
```

## Usage Example

Here is an example of a basic app using `<Button/>` component from `react-facebook-ui`:

```jsx
import React from "react";
import {Button} from "react-facebook-ui";
export default function App() {
    return  <Button color="primary">Hello World!</Button>
}
```

## Documentation

Bellow is `react-facebook-ui` documentation , it contains all the components , hooks , and helper functions explained with examples , so you can use `react-facebook-ui` properly.

- [Installation](#installation)
- [Usage Example](#usage-example)
- [Documentation](#documentation)
- [Getting started with React Facebook UI](#getting-started-with-react-facebook-ui)
- [UI Components](#ui-components) 
  - [1. Card](#card) 
  - [2. Alert](#alert)
  - [3. AutoHideScroll](#AutoHideScroll)
  - [4. Badge](#badge)
  - [5. BottomSheet](#bottom-sheet)
  - [6. Button and Link](#button-and-link)
  - [7. ButtonIcon](#Buttonicon)
  - [8. Collapse](#collapse)
  - [9. DataTable](#datatable)
  - [10. DraggableList](#draggablelist)
  - [11. Form](#form)
    - [11.1. Input and TextArea](#input-and-textarea)
    - [11.2. Checkbox and Switch](#checkbox-and-Switch)
    - [11.3. Dropdown](#dropdown)
    - [11.4. Radio Button and Radio Group](#radio-button-and-radio-group)
  - [12. Grid](#grid)
  - [13. Image](#image)
  - [14. LoadingBar](#loadingbar)
  - [15. MainLayout](#mainlayout)
  - [16. Menu](#menu)
  - [17. Modal](#modal)
  - [18. Navbar](#navbar)
  - [19. Pagination](#pagination)
  - [20. ReadMore](#readmore)
  - [21. Sidebar](#sidebar)
  - [22. Stepper](#stepper)
  - [23. FormStepper](#formStepper)
  - [24. Tabs](#tabs)
    - [24.1. HorizontalTabs](#horizontaltabs)
    - [24.2. VerticalTabs](#verticaltabs)
  - [25. Toast and Notification](#toast-and-notification)
- [Custom Hooks](#custom-hooks)
    - [useHttpRequest](#useHttpRequest)
    - [useFakeData](#useFakeData)
    - [usePagination](#usePagination)
    - [usePaginationOffline](#usePaginationOffline)
    - [useRefFunc](#useRefFunc)
    - [useForm](#useForm)
    - [useStepper](#useStepper)
    - [useAppContext](#useAppContext)
    - [useAppTheme](#useAppTheme)
    - [useAppDirection](#useAppDirection)
    - [useDevice](#useDevice)
    - [useOutsideAlerter](#useOutsideAlerter)
    - [useResizeObserver](#useResizeObserver)
    - [useWindowResize](#useWindowResize)
- [Helper Functions](#helper-functions)
- [Change Theme and CSS](#change-theme)
- [NextJs implimentation](#nextjs-implimentation)
<br/><hr/><br/>

## Getting started with React Facebook UI

After installing the `react-facebook-ui` package on a fresh react project :

> if you are using NextJS , see [**NextJs implimentation**](#nextjs-implimentation) 

1. Create a react component `<AppWrapper/>` in your `src/` directory with name `AppWrapper.js`
2. Wrap `children` prop with the [`<MainLayout />`](#mainlayout) component
3. On your `src/index.js` file , wrap you `<App/>` component with `<AppWrapper/>`.
4. Done



it should look something like this:

**`src/AppWrapper.js`**

```jsx
import React from "react";
import {MainLayout} from "react-facebook-ui";

export default function AppWrapper({children}) {
    // TODO :: configure your app here

    return  <MainLayout defaultAppdata={{theme:'dark'}}>
        {children}
    </MainLayout>
}
```

**`src/index.js`**

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppWrapper from "./AppWrapper";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <AppWrapper>
          <App />
      </AppWrapper>
  </React.StrictMode>
);
```

**NOW you're ready to use the beauty of `react-facebook-ui`**


<br/><br/>

## UI Components

### <a name="card"></a> 1. Card

A `<Card/>` component groups information in a flexible-size container visually resembling a playing card.

**Props**

| prop      | definition          | valid values |
|-----------|---------------------|--------------|
header | header element of the card | component
footer | footer element of the card | component
color  | main color of the `<Card/>` | any color name from [these values](#card-color)
square | if `true` , removes the rounded borders of the card | boolean
fit | fits all content to card and removes default card padding | boolean
fitBody | fits the card children to edges | boolean 
imageTop | the image cover on the top of the card | component `<img/>`
imageBottom | the image cover on the bottom of the card | component `<img/>`
headerBorder | displays header separator | boolean
footerBorder | displays footer separator | boolean
stickHeaderToBody | sticks the header to the body | boolean
stickFooterToBody | sticks the footer to the body | boolean

                         
**Usage Example:**

```jsx
import React from "react";
import {Button, Card, ButtonIcon, Image} from "react-facebook-ui";
import {ReactComponent as SearchIcon} from "./search.svg";

export default function MyComponent() {

    return <Card
        style={{width: 400}}
        fit={true}
        color={"purple"}
        stickHeaderToBody={true}
        headerBorder={false}
        header={<div>
            <h3 className="d-flex flex-fill">Card Title</h3>
            <ButtonIcon color={"orange"} icon={<SearchIcon/>}/>
        </div>}
        imageTop={<Image src={`https://i.pravatar.cc/300?img=${19}`}
                         width={'100%'} height={200}/>}
        footer={<div className="d-flex flex-fill justify-content-end">
            <Button >cancel </Button>
            <Button color="orange">Done</Button>
        </div>}>
        <div className="bg-purple-active-light text-white p-2 border-radius-default">
            Lorem ipsum dolor sit amet, consectetur adipisicing 
	    elit. Aperiam culpa dignissimos harum labore laborum
            nemo nostrum, tempora! Dolor doloribus fuga illo illum 
	    iure laborum magni maxime nihil obcaecati rem tempora
        </div>
    </Card>
}
```

<br/><hr/><br/>

### <a name="alert"></a> 2. Alert

Users need to be aware of important information related to their current activity. that's why you should use the **`<Alert/>`** component more often.

**Props**

| prop      | definition          | valid values |
|-----------|---------------------|--------------|
color | main color of the Alert | any color name from [these values](#alert-color)
transparent | makes the background of the alert half transparent | boolean 
icon | and svg icon component to be displayed on the left of the Alert| svg component 
hideClose | hides the close button of the Alert | boolean
onClose | event after closing the Alert | function

**Usage Example:**

```jsx
import React from "react";
import {Alert} from "react-facebook-ui";

export default function MyComponent() {

    return <Alert color={'danger'}>
           <h2>Fire!!!!</h2>
           <p>
              In case of fire <code>git commit</code> <code>git push</code> then leave the building.
              <br/>
              <b>Note:</b> don't forget to <code>git add .</code> your new files.
           </p>
           </Alert>
}
```

<br/><hr/><br/>

### <a name="AutoHideScroll"></a> 3. AutoHideScroll

The **`<AutoHideScroll/>`** component, is a container component that wraps your content with a scrollbar that can be auto hidden.

Sometimes scrollbars makes your design ugly , but with the `<AutoHideScroll/>` the scrollbar will auto hide if the user is not hovering over the scroll `<div/>` , which gives your design a cleaner look.

**Props**

| prop      | definition          | valid values |
|-----------|---------------------|--------------|
height | default height of the scroll container | number 
width | default width of the scroll container | number 
autoHide | if false , always show the scrollbar | boolean 
horizontal | horizontal scroll instead of default vertical | boolean, 
autoHide_timeout | timeout in milliseconds to hide the scrollbar| number,
showScrollbarBg | shows the background of the scrollbar | boolean


**Usage Example:**

```jsx
import React from "react";
import {AutoHideScroll} from "react-facebook-ui";

export default function MyComponent() {

    return <div className={"card"}>
        <AutoHideScroll height={300}>
            <div style={{width: 300, height: 800}}>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet
            </div>
        </AutoHideScroll>
    </div>
}
```

<br/><hr/><br/>

### <a name="badge"></a> 4. Badge

**`<Badge/>`**  component can be used to indicate a status, notification, or event that appears in relativity with the parent UI item.

**Props**

| prop      | definition          | valid values |
|-----------|---------------------|--------------|
color | main color of the Badge | any color name from [these values](#badge-color)
variant | variant design of the badge | a number from 1 to 5 
pill | makes the badge rounded | boolean
notification | ignores badge content and converts badge to small a dot | boolean
badgePos | position of the badge inside a relative position component   | "bottom-right","bottom-left","top-right","top-left"

**Usage Example:**
```jsx
import React from "react";
import {Badge} from "react-facebook-ui";

export default function MyComponent() {

    return <Badge pill color="teal" variant={3}> +9 NEW</Badge>;
}
```

<br/><hr/><br/>

###  <a name="bottom-sheet"></a> 5. BottomSheet

**`<BottomSheet/>`** is a component  containing supplementary content that are anchored to the bottom of the screen. it can be an alternatives to menus or simple dialog.
 
**Props**

| prop      | definition          | valid values |
|-----------|---------------------|--------------|
showState |  state array to **show** or **hide** the BottomSheet| array: [ state ,setState ]
onClose | event after closing the Bottom Sheet | function
showHandle | show or hide BottomSheet Handle | boolean
closeOnBackdrop | enable closing the BottomSheet when user clicks on Backdrop | boolean


**Usage Example:**
```jsx
import React, {useState} from "react";
import {Button,BottomSheet} from "react-facebook-ui";

export default function MyComponent() {
  const [isOpen, openBottomSheet] = useState(false);

  return <>
    <Button onClick={()=>openBottomSheet(true)}>Open Bottom Sheet</Button>
    <BottomSheet showState={[isOpen,openBottomSheet]}>
      <div style={{height:`30vh`}}>
        <Button color="blue" onClick={()=>openBottomSheet(false)}>close</Button>
      </div>
    </BottomSheet>
  </>
}
```

<br/><hr/><br/>

### <a name="button-and-link"></a> 6. Button and Link

**`<Button/>`** is used as a trigger for action. Depending on the use case, buttons contain a label and/or an icon. There are a variety of styles, sizes, and variations that can be used for different situations.

**Props**

| prop      | definition          | valid values |
|-----------|---------------------|--------------|
color | main color of the button | any color name from [these values](#button-color)
active | 2nd variant the button | any color name from [these values](#button-color-active)
rounded | makes button rounded | boolean
small | makes button small | boolean
large | makes button large | boolean
wide | makes button wide (100% parent width) | boolean
loading | disable's the Button and shows loading indicator | boolean
href | transforms Button into `<a/>` tag with same styles | string link
\_ref | view [useRefFunc](#useRefFunc) hook | object

**Usage Example:**

```jsx
import React from "react";
import {Button} from "react-facebook-ui";

export default function MyComponent() {

  return <div className="card">
      <Button color="primary" rounded>Hello World!</Button>
      <Button href={'https://github.com/samikhammar/react-facebook-ui'} 
      target={'blank'} color={'transparent'} className={'text-blue'}>Link to google</Button>
  </div>
}
```

<br/><hr/><br/>

### <a name="Buttonicon"></a> 7. ButtonIcon

**`<ButtonIcon/>`** is a **Button** that mainly contains an `svg icon component` only.

**Props**

| prop      | definition          | valid values |
|-----------|---------------------|--------------|
icon | and svg icon component to be desplayed on the left of the Alert| svg component 
color | main color of the button | any color name from [these values](#button-color)
active | 2nd variant the button | any color name from [these values](#button-color-active)
rounded | makes button rounded | boolean
small | makes button small | boolean
large | makes button large | boolean
square | transforms button to a square shape | boolean
badge | value to attach a [`<Badge/>`](#badge) component | component
href | transforms Button into <a/> tag with same styles | string link
\_ref | view [useRefFunc](#useRefFunc) hook | object

**Usage Example:**

```jsx
import React from "react";
import { ReactComponent as BellIcon } from "./bell.svg";
import {ButtonIcon,Badge} from "react-facebook-ui";

export default function MyComponent() {

    return  <ButtonIcon icon={<BellIcon/>} active="primary" badge={
                  <Badge color="blue" variant={3}
                         badgePos="bottom-right"
                         notification={true}/>
              }/>
}
```

<br/><hr/><br/>

### <a name="collapse"></a> 8. Collapse

**`<Collapse/>`** provide users with the ability to expand and collapse content as needed. it can simplify  your UI by hiding content until it is needed.

**Props**

| prop      | definition          | valid values |
|-----------|---------------------|--------------|
toggleState | state array to handle open/close state | array: [ state ,setState ]
withAnimation | toggle animation for the Collapse | boolean

**Usage Example:**

```jsx
import React , {useState} from "react";
import {Button,Collapse} from "react-facebook-ui";

export default function MyComponent() {
  const [isOpen, setOpen] = useState(false);

  return <div className="card">
      <Button onClick={()=>setOpen(s=>!s)}>Toggle</Button>
      <Collapse toggleState={[isOpen,setOpen]}>
          <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequatur explicabo iusto nemo non praesentium provident
              sed, ut. A accusantium adipisci amet, aspernatur assumenda
              consectetur, dicta dolorem doloremque doloribus eaque
              et eveniet fuga illum, iure magnam magni molestias
              nihil nisi officia soluta tempore totam ut vel
              voluptatem voluptatum! Ad animi dignissimos eum
              facilis id incidunt ipsa ipsam labore laborum
          </p>
         <div style={{height:'200px'}}>
          some other content
        </div>
      </Collapse>
  </div>
}
```

<br/><hr/><br/>

### <a name="datatable"></a> 9. DataTable

Data-tables are one of the UI Components that almost  every user interact with,  that's why `react-facebook-ui`  provides a powerful **`<DataTable/>`** component.

> to use pagination  [`<Pagination/>`](#pagination) component with **`<DataTable/>`** , or to make the table sort-able you have to use [`usePaginationOffline`](#usePaginationOffline) or [`usePagination`](#usePagination)

**Props**

| prop      | definition          | valid values |
|-----------|---------------------|--------------|
data | list of items to be displayed on the table | array
Row | a row template function that returns a [TableRow](#tableRow) component | function(item) 
multiselect | enables multi select on the data table | boolean
onMultiSelect | called every time selected rows data changes | function(array) 
scrollable | makes the table scroll-able horizontally | boolean
customEmpty | your custom component shown when the table is empty  | component
sortState | state array to handle column sort changes | array: [ state ,setState ]
sortDirectionState | state array to handle column sort direction changes (a-z) | array: [ state ,setState ]
color | an accent color for the table header columns | any color name from [these values](#data-table-color)
 isLoading | if set to `true`, shown loading bar | boolean
 keymap  | function to return the item unique key string |  function(item) 

**Props ( TableRow )** <a name="tableRow"></a>

| prop      | definition          | valid values |
|-----------|---------------------|--------------|
color | Background color of the individual row | any color name from [these values](#table-row-color)

**Props ( TableCol )**

| prop      | definition          | valid values |
|-----------|---------------------|--------------|
name | name of the table header column | string
width | min width of the row column | number
sort | sort key of the data in the current column | string

**Props ( TableActions )**

| prop      | definition          | valid values |
|-----------|---------------------|--------------|
name | name of the table action header column | string
width | min width of the row action column | number


**Props ( TableMenuAction )**

| prop      | definition          | valid values |
|-----------|---------------------|--------------|
MenuItems | functional component contains content of more actions menu | function component


**Usage Example ( Simple Datatable ) :**

```jsx
import React from "react";
import {
    DataTable,
    TableRow,
    TableCol,
    useFakeData,
    TableActions,
    Button, Badge,
} from "react-facebook-ui";

export default function MyComponent() {

    const {data:fakeData, add, remove} = useFakeData(10);

    const onMultiselect = (items) => {
        console.log(items)
    };

    return <>
        <div className="card"><Button onClick={() => add()}>Add Item</Button></div>
        <div className="card">
            <div style={{margin: '-8px -8px -8px'}}>
                <DataTable data={fakeData}
                           multiselect={true}
                           onMultiSelect={onMultiselect}
                           Row={(item) =>
                               <TableRow>
                                   <TableCol name={"ID"} width={20}>{item.id}</TableCol>
                                   <TableCol name={"Full Name"} width={20}>{item.fullName}</TableCol>
                                   <TableCol name={"City"} width={20}>
                                       <Badge color={'adaptive'}>{item.city}</Badge></TableCol>
                                   <TableActions name={"Actions"}>
                                       <Button small={true} color={"card"} rounded>Edit</Button>
                                       <Button small={true} color={"red"} rounded onClick={() => {
                                           remove(item.id)
                                       }}>delete</Button>
                                   </TableActions>
                               </TableRow>}/>
            </div>
        </div>
    </>
}
```
**Usage Example ( Complex Datatable ) :**
```jsx
import React, {useState} from "react";
import {
    Pagination,
    DataTable,
    TableRow,
    TableCol,
    useFakeData,
    TableActions,
    TableMenuAction,
    Button, Badge,
    MenuItem,
    usePaginationOffline
} from "react-facebook-ui";

export default function MyComponent() {

    const  {data:fakeData, add, remove} = useFakeData(10);

    const pagination = usePaginationOffline({page: 1, limit: 6, az: true, sort: 'fullName'}, fakeData);

    const onMultiselect = (items) => {
        console.log(items)
    };

    return <>
        <div className="card"><Button onClick={() => add()}>Add Item</Button></div>
        <div className="card">
            <div style={{margin: '-8px -8px 8px'}}>
                <DataTable data={pagination.pageData.items}
                           sortState={pagination.sortState}
                           isLoading={pagination.isLoading}
                           sortDirectionState={pagination.sortDirectionState}
                           color={'primary'}
                           multiselect={true}
                           onMultiSelect={onMultiselect}
                           Row={(item) =>
                               <TableRow
                                   color={item.fullName && item.fullName.length > 14 ? 'primary'
                                       : item.fullName && item.fullName.length > 10 ? 'red' : ''}>
                                   <TableCol name={"ID"} width={20} sort={'id'}>{item.id}</TableCol>
                                   <TableCol name={"Full Name"} width={20} sort={'fullName'}>{item.fullName}</TableCol>
                                   <TableCol name={"City"} width={20}><Badge
                                       color={'card'}>{item.city}</Badge></TableCol>
                                   <TableCol name={"Email"} width={20} sort={'email'}>{item.email}</TableCol>
                                   <TableActions name={"Actions"}>
                                       <Button small={true} color={"card"} rounded>Edit</Button>
                                       <Button small={true} color={"red"} rounded onClick={() => {
                                           remove(item.id)
                                       }}>delete</Button>
                                       <TableMenuAction MenuItems={({closeMenu}) => <>
                                           <MenuItem onClick={closeMenu}>Save</MenuItem>
                                           <MenuItem onClick={() => {
                                               closeMenu();
                                               remove(item.id);
                                           }}>Delete {item.fullName}</MenuItem>
                                       </>}>
                                       </TableMenuAction>
                                   </TableActions>
                               </TableRow>}/>
            </div>
            <Pagination pageState={pagination.pageState} totalPages={pagination.pageData.totalPages} color={'primary'}/>
        </div>
    </>
}

```

<br/><hr/><br/>

### <a name="draggablelist"></a> 10. DraggableList

**`<DraggableList/>`** is a component that enables a list of items to be reordered via drag and drop.

**Props**

| prop      | definition          | valid values |
|-----------|---------------------|--------------|
list | state of list items| array
setList | state setter for list items | function
drag | toggle ability to drag items | boolean
ItemComponent | list item component template | function(item)
gap | vertical padding gap between list items | number
useHandler | toggle drag indicator | boolean
customHandler | custom handle component | component
keyMap | function to return the item unique key string | function(item)

**Usage Example:**

```jsx
import React from "react";
import { DraggableList, useFakeData} from "react-facebook-ui";

export default function MyComponent() {
  const  {data:list, setData:set_list} = useFakeData(3);

  return <div className="card">
      <DraggableList list={list} setList={set_list}
                     drag={true}
                     ItemComponent={
                         item=><div className="list-item" style={{height:`${item.percent*1.5}px`,minHeight:74}}>
                             {item.index} .{item.fullName}
                         </div>
                     } />
  </div>
}
```

<br/><hr/><br/>

### <a name="form"></a> 11. Form

`react-facebook-ui` provides a great way to manage forms , see the example bellow: 

```jsx
import React from "react";
import {Input,Checkbox, Button, useForm} from "react-facebook-ui";

export default function MyComponent() {
    const form = useForm();
    const chanegValue = () => {
        form.setValue('name', 'Sami Khammar');
        form.setValue('age', 28);
        form.setValue('job', 'full stack developer');
        form.setValue('available', true);
    };
    const resetName = () => {
        form.reset('name');
    };
    return <div >
        <div className="card">
            <Button onClick={chanegValue}>Set value</Button>
            <Button onClick={form.resetForm}>Reset Form</Button>
            <Button onClick={resetName}>Reset Name</Button>
        </div>
        <div className="card">
            <Input
                form={form}
                formName='name'
                type="text"
                placeholder={'Jhon Doe'}
                label={'Name'}
                labelWidth='100px'
                options={{words: {min: 1, max: 2},/*maxLength:10*/}}
                required
            />
            <Input
                form={form}
                formName='age'
                type="number"
                placeholder={'between 15 and 50'}
                label={'Age'}
                labelWidth='100px'
                options={{minimum: 15, maximum: 50}}
                required
            />
            <Input
                form={form}
                formName='job'
                type="textarea"
                placeholder={'Some description'}
                label={'Description'}
                labelWidth='100px'
                options={{words: {min: 1, max: 10},/*maxLength:10*/}}
                required
                />
            <Checkbox
                form={form}
                formName="available"
                label="Available to work"
                switch_
                required
            />
        </div>
        <div className="card">
            <pre className={!form.valid ? "text-danger" :''}>{JSON.stringify(form, null, 2)}</pre>
        </div>
    </div>
}
```
<br/><br/>
    
### <a name="input-and-textarea"></a> 11.1. Input and Textarea

**Inputs** are necessary components for every User Interface , `react-facebook-ui` provides the powerful **`<Input/>`** component with many options and features 

**props**

| prop      | definition          | valid values |
|-----------|---------------------|--------------|
type | the main types of the `<Input/>` | "text" , "number" , "integer" ,"email", "password" , "tel", "date" , "textarea"
form | the form state object returned from [useForm](#useForm) hook | object
formName | name of the input , must be unique | string
disabled | disables the input box | boolean
label | label for the input | string
placeholder | placeholder text for the input | string
border | use border over the input box | boolean 
rounded | makes input box rounded | boolean
prepend	| adds a component at the start of input | component
append	| adds a component at the end of input | component
labelWidth | the width of input label | number  
rows | textarea rows | number
onChange | called when input value changes | function
onFinishTyping | called when user finishes typing after certain amount of time| function
onFinishTypingDelay | the delay to call `onFinishTyping()` in milliseconds  | number
required | makes the input field required and must have a valid value | boolean
options | input validation options , [more info](#InputOptions) | object 

<a name="InputOptions"></a>**Input Validation Options**
| key       | definition          | valid values |
|-----------|---------------------|--------------|
min | if input type is `number` or `integer` , ensures that the value is greater-than or equal the **min** key | number
max | if input type is `number` or `integer` , ensures that the value is lower-than or equal the **max** key | number
words |if input type is `text` or `textarea` , ensures that the value is alphabetical words between `min` and `max` | object `{ min:number , max:number }`
customPattern| a custom **regex** pattern to validate the input value| regex pattern

**Usage Example**

```jsx
import React from "react";
import { Input, InputIcon, useForm } from "react-facebook-ui";
import { ReactComponent as SearchIcon } from "./search.svg";
export default function App() {
    const form = useForm();
    return <div className="card">
        <Input
            form={form}
            formName='search'
            type="text"
            rounded
            placeholder={'Search...'}
            onFinishTyping={(text)=>{
                console.log(text);
            }}
            prepend={<InputIcon icon={<SearchIcon/>} color="primary"/>}
        />
        <Input
            className={"mt-1"}
            form={form}
            formName='description'
            type="textarea"
            rows={5}
            placeholder={'Some description...'}
        />
    </div>
}

```
<br/><br/>

### <a name="checkbox-and-Switch"></a> 11.2. Checkbox and Switch

`react-facebook-ui` provides a **`<Checkbox/>`**  that can be also a **Toggle Switch**  

**props** 
 
| prop      | definition          | valid values |
|-----------|---------------------|--------------|
form | the form state object returned from [useForm](#useForm) hook | object
formName | name of the input , must be unique | string
disabled | disables the checkbox | boolean
label | label for the checkbox | string
isSwitch | transforms shape of a checkbox to a switch | boolean
color | main color of the Checkbox | any color name from [these values](#radio-checkbox-color)
required | makes the input field required and must have a valid value | boolean
onChange | called when input value changes | function

**Usage Example**
 
```jsx
import React from "react";
import {Checkbox,useForm} from "react-facebook-ui";

export default function App() {
    const form = useForm();
    return <div className="card">
            <Checkbox
            required
            formName="mycheckbox"
            form={form}
            label="My checkbox"/>
        </div>
}
```
<br/><br/>

### <a name="dropdown"></a> 11.3. Dropdown

**`<Dropdown/>`** is an **Input Selector** component that provide a **menu** contains a list of options. and allows the user to choose only one option.

**props** 

| prop      | definition          | valid values |
|-----------|---------------------|--------------|
form | the form state object returned from [useForm](#useForm) hook | object
formName | name of the input , must be unique | string
choices | list of drop-down choices |  array of objects,
body | function that returns the selected item as a component | component 
menuItem | function that returns an item as a component in the drop-down menu | component 
keyMap | function to return the item unique key string | function
menuHeader | a component to be displayed in the header of the drop-down menu | component
checkmarkColor | the color of the check-mark next to the selected item | any color name from [these values](#checkmark-color)
disabled | disables the input box | boolean
label | label for the input | string
placeholder | placeholder text for the input | string
border | use border over the input box | boolean 
rounded | makes input box rounded | boolean
prepend	| adds a component at the start of input | component
append	| adds a component at the end of input | component
labelWidth | the width of input label | number  
onChange | called when input value changes | function
required | makes the input field required and must have a valid value | boolean

**Usage Example**
 
```jsx
import React from "react";
import {Dropdown, useForm} from "react-facebook-ui";
export default function App() {
    const form = useForm();
    const choices = [
        undefined,
        {
            id: 0,
            framework: "ReactJs"
        },
        {
            id: 1,
            framework: "VueJs"
        },
        {
            id: 2,
            framework: "Angular"
        },
        {
            id: 3,
            framework: "Other"
        },
    ]
    return <div className={'card'}>
        <Dropdown
            choices={choices}
            form={form}
            formName='myFramework'
            placeholder={'select a framework'}
            label={'Framework'}
            keyMap={value => value === undefined ? '_' : value.id}
            body={item=> item.framework.toString()}
            menuItem={item => item === undefined ? '- None -' : item.framework.toString()}/>
    </div>
}
```
 
<br/><br/>

### <a name="radio-button-and-radio-group"></a> 11.4. Radio Button and Radio Group

**`<RadioGroup/>`** is a component that allows the user to choose only one option out of a set.

**props (Radio Group)** 
 
| prop      | definition          | valid values |
|-----------|---------------------|--------------|
form | the form state object returned from [useForm](#useForm) hook | object
formName | name of the input , must be unique | string
radios | list of radio button [props](#radio-button-props) | array 
disabled | disables all the radio-group | boolean
color | main color of the radio buttons | any color name from [these values](#radio-checkbox-color)
required | makes the radio group required and must have a valid value | boolean
onChange | called when input value changes | function

#### **Radio Button Props** 

| prop      | definition          | valid values |
|-----------|---------------------|--------------|
id | a unique if for each radioButton | string
value | value to be set on the [`useForm`](#useForm) hook | any
label | label for the radioButton | string
disabled | disables the current RadioButton | boolean

**Usage Example**
 
```jsx
import React from "react";
import {RadioGroup,useForm} from "react-facebook-ui";
export default function App() {
    const form = useForm();
    return <div className={'card d-flex flex-column'}>
        <RadioGroup form={form}
                    formName='my-radios'
                    radios={[
                        {
                            id:0,
                            value:'A',
                            label:'Radio A',
                        },
                        {
                            id:1,
                            value:'B',
                            label:'Radio B',
                        },
                        {
                            id:2,
                            value:'C',
                            label:'Radio C',
                            disabled:true
                        }
                    ]}
        />
    </div>
}
```

<br/><hr/><br/>

### <a name="grid"></a> 12. Grid

**`<Grid/>`** is a container component that displays a list of items as a **Custom Responsive Grid**

**Props**

| prop      | definition          | valid values |
|-----------|---------------------|--------------|
data | list of data to be displayed as a grid | array
columns | number of default columns per row | number 
autoResize | auto change item count per row depending on div size | boolean
equalHeight | force items to have equal height | boolean
small | number of columns when div is small | number
medium | number of columns when div is medium | number
large | number of columns when div is large | number
wide | number of columns when div is extra large | number
custom | custom dimensions and columns | array of {columns,min,max}
gap | gap between grid items | number  
template | item component template | component

**Usage Example:**

```jsx
import React from "react";
import {Alert, Grid, useFakeData} from "react-facebook-ui";

export default function MyComponent() {
    const  {data:list} = useFakeData(10);

  return <div className="card">
      <Grid
          small={2}
          medium={4}
          gap="8px"
          custom={[{columns:3,min:550,max:720},{columns:1, min:0, max:400}]}
          data={list}
          template={(item)=>
              <Alert key={item.id}>
                  Hello {item.fullName}
              </Alert>}
      />
  </div>
}
```

<br/><hr/><br/>

### <a name="image"></a> 13. Image

**`<Image/>`** is a component which is an advanced  html `<img/>` element.

**Props**

| prop      | definition          | valid values |
|-----------|---------------------|--------------|
src | image source url | string
circle | makes image circle | boolean
height | default height of the image | number
width | default width of the image | number
cover | sets source image as cover | boolean

**Usage Example:**

```jsx
import React from "react";
import {Image} from "react-facebook-ui";

export default function MyComponent() {

  return <Image src={'https://i.pravatar.cc/500?img=5'} height={200} circle={true}/>
}
```

<br/><hr/><br/>

### <a name="loadingbar"></a> 14.LoadingBar

**`<LoadingBar/>`**  is a component that shows an animated horizontal Loading Bar.

**Props**

| prop      | definition          | valid values |
|-----------|---------------------|--------------|
color | main color of the LoadingBar | any color name from [these values](#loading-bar-color)
height | height of the LoadingBar in pixels | number
skipMargin | force LoadingBar to take 100% space on parents that have `8px` padding | boolean

**Usage Example:**

```jsx
import React from "react";
import {LoadingBar} from "react-facebook-ui";

export default function MyComponent() {

  return <LoadingBar color={'primary'} height={3} skipMargin={true}/>
}
```

<br/><hr/><br/>

### <a name="mainlayout"></a> 15. MainLayout

the **`<MainLayout/>`** component is required to wrap your root app so you can have access to some core features.

**Props**

| prop      | definition          | valid values |
|-----------|---------------------|--------------|
defaultAppdata  | the default and  initial app state | object
toastContainerProps | the default props of Toast Container see [Toast Container Props](#toast-container-props)| object
customThemes | your custom theme object , see [Change Theme](#change-theme) | object

**defaultAppdata props**

| key       | definition          | valid values |
|-----------|---------------------|--------------|
dir | layout direction | "ltr" or "rtl"
theme | theme name | "light" or "dark" or your custom theme name. see [Change Theme](#change-theme)
any additional key | it will be available globally in your app, see [useAppContext](#useAppContext)

**Usage Example:**

```jsx
import React from "react";
import {MainLayout} from "react-facebook-ui";

export default function AppWrapper({children}) {
    // TODO :: configure your app here

    return  <MainLayout defaultAppdata={{theme:'dark'}}>
        {children}
    </MainLayout>
}
```

<br/><hr/><br/>

### <a name="menu"></a> 16. Menu

**`<Menu/>`** is a container component , when triggered , it shows a popover box at the position of the `trigger` element, generally the content of the **`<Menu/>`** is a set of `<MenuItem/>` components , or just  a custom content.

**Props (Menu)**

| prop      | definition          | valid values |
|-----------|---------------------|--------------|
trigger | current ref of element | DOM element 
disabled | enable or disable opening the menu | boolean
position | initial position of the menu | "top" , "top-left" , "top-right" , "bottom" , "bottom-left" , "bottom-right" , "left" , "left-top" , "left-bottom" , "right" , "right-top" , "right-bottom"
autoPosition | enables auto menu on scroll positioning, ( default: `true` ) |boolean
offset | distance between menu and trigger in pixels | number 
showTick | show menu triangle tick | boolean
closeOnBackdrop | enable closing the Menu when user clicks on Backdrop | boolean
sameTriggerWidth | when true , menu will take same width as the trigger | boolean 
width | custom with of the menu in pixels | number 
onOpen | event when opening the menu | function
onClose | event when closing the menu | function

**Props (MenuItem)**

| prop      | definition          | valid values |
|-----------|---------------------|--------------|
disabled | disables menu item | boolean 
href | wraps content by `<a/>` tag  | string link
target | target of `<a/>` element | string 
showCheckmark |  if true, MenuItem will display a check-mark | boolean
checkmarkColor | checkmark color | any color name from [these values](#checkmark-color)
                         
**Usage Example:**

> IMPORTANT: when Menu trigger is a functional component (in the example bellow the trigger is **`<Button/>`**) , using [useRefFunc](#useRefFunc) instead of default React [useRef](https://reactjs.org/docs/hooks-reference.html#useref) is mandatory.
```jsx
import React from "react";
import {useRefFunc,Menu,MenuItem,Button} from "react-facebook-ui";

export default function MyComponent() {
  const {setRef:ref,current:trigger}=useRefFunc(undefined);

  return <div  style={{height:1500, position:'relative'}}>
          <Button _ref={ref} color={'primary'} >Menu</Button>
          <Menu trigger={trigger} position={'bottom'} closeOnBackdrop={false}>
            <MenuItem >Action 01</MenuItem>
            <MenuItem >Action 02</MenuItem>
            <MenuItem disabled>Action 03</MenuItem>
            <MenuItem onClick={()=>trigger.closeMenu()}>Close Menu</MenuItem>
            <hr/>
            <MenuItem href={"https://www.npmjs.com/package/react-facebook-ui"} target={"blank"}>Visit react-facebook-ui</MenuItem>
          </Menu>
  </div>
}
```

<br/><hr/><br/>

### <a name="modal"></a> 17. Modal

A **`<Modal/>`** is a component that displays on an overlay  in front of the UI, it provides the user with a focused way of accomplishing, confirming, or viewing something without entirely leaving a screen or page.

**Props**

| prop      | definition          | valid values |
|-----------|---------------------|--------------|
showState |  state array to **show** or **hide** the modal | array: [ state ,setState ]
header | generaly contains modal title | component
footer | generaly contains modal action buttons | component
large | makes a modal size large | boolean
onClose | event after closing the Modal | function
closeOnBackdrop | enable closing the Modal when user clicks on Backdrop | boolean

**Usage Example:**

```jsx
import React, {useState} from "react";
import {Modal,Button} from "react-facebook-ui";

export default function MyComponent() {
  const [isOpen, setOpen] = useState(false);

  return <div className="card">
    <Button onClick={()=>setOpen(o=>!o)}>Open Modal</Button>
    <Modal showState={[isOpen,setOpen]}
           header={<h3>This is modal title</h3>}
           footer={<Button onClick={() => setOpen(false)}>Close</Button>}>
        <div className="p-2">
            <h3>Hello World</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Beatae delectus dignissimos ex excepturi libero pariatur!</p>
        </div>
    </Modal>
  </div>
}
```

<br/><hr/><br/>

### <a name="navbar"></a> 18. Navbar

**`<Navbar/>`** is a responsive navigation bar component that is displayed on top of the screen. it consists of **`<NavLarge/>`** component for large screens , and **`<NavSmall/>`** component  for small screens.

**Props (Navbar)**

| prop      | definition          | valid values |
|-----------|---------------------|--------------|
responsive | if `true` and when screen width is lower than **mobileWidth** property, switches from [`<NavLarge/>`](#NavLarge) to [`<NavSmall/>`](#NavSmall) | boolean
fixed  | if `true` , makes the nav-bar fixed on top of the page | boolean
mobileWidth | max screen width to display the [`<NavSmall/>`](#NavSmall) (only if responsive is `true`)  | number

<a name="NavLarge"></a>**Props (NavLarge)**

| prop      | definition          | valid values |
|-----------|---------------------|--------------|
navbarHeight | the height of the Navbar | number

<a name="NavSmall"></a>**Props (NavSmall)**

| prop      | definition          | valid values |
|-----------|---------------------|--------------|
navbarHeight | the height of the Navbar | number
toggleState |  state array to handle Navbar toggle changes | array: [ state ,setState ]
toggle | an element to toggle the Navbar | component
logo | logo image component | component
withAnimation | enables animation of the drop-down | boolean

**Usage Example:**

```jsx
import React, {useState} from "react";
import {Navbar,NavLarge,NavItem,NavSmall,ButtonIcon,Button} from "react-facebook-ui";
import { ReactComponent as ListIcon } from "./list.svg";

export default function MyComponent() {
    const [smallNavOpen, set_smallNavOpen] = useState(false);
    const closeMobileMenu = () => {
        set_smallNavOpen(false);
    };

    return <>
        <Navbar fixed={true} >
            <NavLarge >
                <li className="flex-grow-1">
                    <img src="https://logos-marques.com/wp-content/uploads/2020/04/Facebook-logo.png" 
                    alt="logo" style={{height:'100%'}}/>
                </li>
                <li className="d-flex align-items-center"><Button>Custom Item</Button></li>
                <NavItem><a href="#home">Home</a></NavItem>
                <NavItem>About</NavItem>
                <NavItem>Contact</NavItem>
                <NavItem>Friend List</NavItem>
            </NavLarge>
            <NavSmall
                toggleState={[smallNavOpen, set_smallNavOpen]}
                toggle={<ButtonIcon icon={<ListIcon/>} color={smallNavOpen?undefined:"transparent"} 
                active={smallNavOpen?'primary':undefined} onClick={()=>set_smallNavOpen(o=>!o)}/>}
                logo={<img src="https://logos-marques.com/wp-content/uploads/2020/04/Facebook-logo.png" alt="logo"/>}>
                <NavItem onClick={closeMobileMenu}><a href="#home">Home</a></NavItem>
                <NavItem onClick={closeMobileMenu}>About</NavItem>
                <NavItem onClick={closeMobileMenu}>Contact</NavItem>
                <NavItem onClick={closeMobileMenu}>Friend List</NavItem>
            </NavSmall>
        </Navbar>
        <div className="card bg-blue text-white" style={{minHeight:2000}}>
            <h4>page content goes here</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consequatur expedita 
            illo inventore, officiis quae!</p>
        </div>
    </>
}
```

<br/><hr/><br/>

### <a name="pagination"></a> 19. Pagination

Users need to navigate through pages of a set of items. that's why **`<Pagination/>`** component is here.

**Props**

| prop      | definition          | valid values |
|-----------|---------------------|--------------|
pageState |  state array to handle page changes | array: [ state ,setState ]
color | main color of the Page Numbers | any color name from [these values](#pagination-color)
totalPages | count of total pages | number

**Usage Example:**

```jsx
import React, {useState} from "react";
import {Pagination} from "react-facebook-ui";

export default function MyComponent() {
  const [currentPage, setcurrentPage] = useState(1);

  return <Pagination pageState={[currentPage, setcurrentPage]} totalPages={20} color={'primary'}/>
}
```

<br/><hr/><br/>

### <a name="readmore"></a> 20. ReadMore

**`<ReadMore/>`** is a component that hides/shows long text at a specific text character count .


**Props**

| prop      | definition          | valid values |
|-----------|---------------------|--------------|
text | actual long text | string
slice | character count to hide (150 default)| number
showMoreText | component to display as "Show More" | component
showLessText | component to display as "Show Less" | component

**Usage Example:**

```jsx
import React from "react";
import {ReadMore} from "react-facebook-ui";

export default function MyComponent() {
  const longText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet asperiores atque ea excepturi expedita";

  return <ReadMore text={longText} slice={60} 
  showMoreText={<span className={"text-blue"}>Show More</span>} 
  showLessText={<span className={"text-red"}>Show Less</span>}/>
}
```

<br/><hr/><br/>

### <a name="sidebar"></a> 21. Sidebar

**`<Sidebar/>`** is a component that hides additional content beside a page and shown when triggered , must be provided in a **`<SidebarContainer/>`** component as a prop. 

the **`<SidebarContainer/>`** component is a content wrapper that can provide **left** and **right** Sidebars 


<a name="SidebarContainer"></a>**Props ( SidebarContainer )**

| prop      | definition          | valid values |
|-----------|---------------------|--------------|
SidebarLeft |the left sidebar of the page | [`<Sidebar/>` Component](#sidebarComponent) 
SidebarRight |the right sidebar of the page | [`<Sidebar/>` Component](#sidebarComponent) 
sidebarsOverNavbar | enables the ability to display a sidebar over the navbar | boolean
navbarHeight | current [Navbar](#navbar) height | number
 
<a name="sidebarComponent"></a>**Props ( Sidebar)**

| prop      | definition          | valid values |
|-----------|---------------------|--------------|
showState | state array to handle **Sidebar** toggle changes | array: [ state ,setState ]
width| width of the sidebar ( **320px** is default)| number
pushable| if `true` , displays the shown Sidebar over the content | boolean
overNavbar| if `true` , displays the shown Sidebar over the Navbar ( *`sidebarsOverNavbar`* property on [`<SidebarContainer/>`](#SidebarContainer) the must be `true`)| boolean
responsive | if `true` and when screen width is lower than **mobileWidth** property , displays  [`<BottomSheet/>`](#bottom-sheet) instead of a sidebar | boolean
mobileWidth | max screen width to display the  [`<BottomSheet/>`](#bottom-sheet) (only if responsive is `true`)  | number
bottomSheetProps | props object for [`<BottomSheet/>`](#bottom-sheet) component | object 
onMobile| called once when screen width is lower or higher than **mobileWidth** property  (only if responsive is `true`)| function(boolean)


**Usage Example:**
> in the example bellow i'm using [`useForm`](#useForm) hook instead of `useState` because im using a [`Checkbox switch`](#checkbox-and-Switch) to control the sidebars,  feel free to use `useState`

```jsx
import React, { useEffect } from "react";
import { Navbar, NavLarge, SidebarContainer, Sidebar, useForm, Button, Checkbox } from "react-facebook-ui";

export default function MyComponent() {
    const form = useForm();
    useEffect(() => {
        form.setValue('leftPushable', true);
        form.setValue('rightPushable', true);
    }, []);
    return <>
        <Navbar fixed={true} responsive={false}>
            <NavLarge>
                <li className="flex-grow-1">
                    <img src="https://logos-marques.com/wp-content/uploads/2020/04/Facebook-logo.png" alt="logo"
                         style={{height: '100%'}}/>
                </li>
            </NavLarge>
        </Navbar>

        <SidebarContainer
            SidebarLeft={<Sidebar showState={[form.value.toggleLeft, (v) => form.setValue('toggleLeft', v)]}
                                  pushable={form.value.leftPushable}
                                  bottomSheetProps={{showHandle: false}}
                                  width={form.value.leftShrink ? 80 : 320}
                                  className="bg-card border-1 border-color-default">
                Sidebar Left <Button onClick={() => form.setValue('toggleLeft', false)} small>close</Button>
            </Sidebar>}
            SidebarRight={<Sidebar showState={[form.value.toggleRight, (v) => form.setValue('toggleRight', v)]}
                                   width={form.value.rightShrink ? 80 : 320}
                                   pushable={form.value.rightPushable}>
                Sidebar Right <Button onClick={() => form.setValue('toggleRight', false)} small>close</Button>
            </Sidebar>}>

            <div className="card" style={{minHeight: 2000}}>
                <div className="d-flex flex-column">
                    <Checkbox
                        required
                        formName="toggleLeft"
                        form={form}
                        label="Show Left Sidebar" isSwitch/>
                    <Checkbox
                        required
                        formName="toggleRight"
                        form={form}
                        label="Show Right Sidebar" isSwitch/>
                    <hr/>
                    <Checkbox
                        required
                        formName="leftPushable"
                        form={form}
                        label="Left Sidebar is Pushable" isSwitch/>
                    <Checkbox
                        required
                        formName="rightPushable"
                        form={form}
                        label="Right Sidebar is Pushable" isSwitch/>
                    <hr/>
                    <Checkbox
                        required
                        formName="leftShrink"
                        form={form}
                        label="Shrink Left Sidebar" isSwitch/>
                    <Checkbox
                        required
                        formName="rightShrink"
                        form={form}
                        label="Shrink Right Sidebar" isSwitch/>
                </div>
                <hr/>
                <h4>page content goes here</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consequatur expedita
                    illo inventore, officiis quae!</p>
            </div>
        </SidebarContainer>
    </>
}
```

<br/><hr/><br/>

### <a name="stepper"></a> 22. Stepper

**`<Stepper/>`** is a controlled and animated carousel component , that provide multiple **`<StepperPage/>`** components that represent pages of the carousel.

**Props**

| prop      | definition          | valid values |
|-----------|---------------------|--------------|
stepperHook | return value of the [useStepper()](#useStepper) hook | object
width | width of the `<Stepper/>` component | number
initialHeight | initial height of `<Stepper/>` component | number


**Usage Example:**

```jsx
import React from "react";
import {Stepper, StepperPage, useStepper,Button} from "react-facebook-ui";

export default function MyComponent() {
    const stepper = useStepper();

    return <div style={{width: 300}}>
        <div className="card" >
            <Button onClick={()=>stepper.previous()}>previous</Button> <Button onClick={()=>stepper.stepTo(stepper.page+1)}>next</Button>
        </div>
        <Stepper stepperHook={stepper}>
            <StepperPage>
                <div style={{height: 150}} className="card bg-primary text-white">0</div>
            </StepperPage>
            <StepperPage>
                <div style={{height: 250}} className="card bg-danger text-white">1</div>
            </StepperPage>
            <StepperPage>
                <div style={{minHeight: 80}} className="card bg-warning text-white">2</div>
            </StepperPage>
            <StepperPage>
                <div style={{height: 180}} className="card bg-success text-white">3</div>
            </StepperPage>
        </Stepper>
    </div>
}
```

<br/><hr/><br/>

### <a name="formStepper"></a> 23. FormStepper

Sometimes the user needs to break a form into multiple steps , that's why **`<FormStepper/>`** provides an intuitive user experience way of splitting forms into breakpoints using the [**Stepper**](#stepper) carousel animation.

**Props**

| prop      | definition          | valid values |
|-----------|---------------------|--------------|
stepperHook | return value of the [useStepper()](#useStepper) hook | object
pages | array of [form pages object](#PagesObject) |array
color | main color of the Page Numbers | any color name from [these values](#form-stepper-color)

#### **PagesObject**

| key       | definition          | valid values |
|-----------|---------------------|--------------|
title | Title of the form page | string
Component | form component | component
submit | **Next** / **Submit** [`<Button/>`](#button-and-link) props | object
back| **Back** [`<Button/>`](#button-and-link) props | object

**Usage Example:**

```jsx
import React, {useState, useEffect} from "react";
import {RadioGroup, Input, useStepper, useForm, Modal, Button, FormStepper} from "react-facebook-ui";
import {ReactComponent as ListIcon} from "./search.svg";

export default function MyComponent() {
    const mForm1 = useForm();
    const mForm2 = useForm();
    const mForm3 = useForm();

    const stepper = useStepper();
    const [isOpen, setOpen] = useState(false);

    const pages = [
        {
            title: 'Animal Form',
            Component: <Form1 mForm={mForm1}/>,
            submit: {
                // color:"amber",
                disabled: !mForm1.valid,
                onClick: () => {
                    stepper.stepTo(stepper.page + 1)
                }
            }
        },
        mForm1.value.radios === "yes" && {
            title: 'Animal Choice',
            Component: <Form2 mForm={mForm2}/>,
            submit: {
                disabled: !mForm2.valid,
                onClick: () => {
                    stepper.stepTo(stepper.page + 1);
                }
            }
        },
        {
            title: 'Tell us why',
            Component: <Form3 mForm={mForm3}/>,
            submit: {
                children: 'Done',
                disabled: !mForm3.valid,
                onClick: () => {
                    console.log({form1: mForm1.value, form2: mForm2.value, form3: mForm3.value});
                    setOpen(false);
                }
            }
        }
    ];
    return <div className="card">
        <Button onClick={() => setOpen(o => !o)}>Open Modal</Button>
        <Modal showState={[isOpen, setOpen]} large
               header={<h3>This is Form Stepper Example</h3>}>
            <FormStepper
                color={'primary'}
                stepperHook={stepper}
                pages={pages}
            />
        </Modal>
    </div>
}
const Form1 = ({mForm}) => {
    return <>
        <p>Do you love animals ?</p>
        <RadioGroup required
                    disabled={mForm.value.switch}
                    radios={[
                        {
                            id: 0,
                            value: 'yes',
                            label: 'Yes',
                        },
                        {
                            id: 1,
                            value: 'no',
                            label: 'No',
                        },
                    ]}
                    form={mForm}
                    formName='radios'
        />
    </>
}
const Form2 = ({mForm}) => {
    useEffect(() => {
        mForm.setValue('animals', 'horses');
    }, []);
    return <div className="d-flex flex-column">
        <RadioGroup required
                    disabled={mForm.value.switch}
                    radios={[
                        {
                            id: 0,
                            value: 'cats',
                            label: 'Cats',
                        },
                        {
                            id: 1,
                            value: 'dogs',
                            label: 'Dogs',
                        },
                        {
                            id: 2,
                            value: 'rabbits',
                            label: 'Rabbits',
                        },
                        {
                            id: 3,
                            value: 'horses',
                            label: 'Horses',
                        },
                    ]}
                    form={mForm}
                    formName='animals'
        />
    </div>
};
const Form3 = ({mForm}) => {
    return <div className="d-flex flex-column">
        <Input
            required
            type="text"
            form={mForm}
            formName='name'
            placeholder={'just like that...'}/>
    </div>
}
```

<br/><hr/><br/>

### <a name="tabs"></a> 24. Tabs

`react-facebook-ui` have 2 types of tabs **`<HorizontalTabs/>`** and **`<VerticalTabs/>`** and both consist of the `<Tab/>` child. 

**Props (Tab)**

| prop      | definition          | valid values |
|-----------|---------------------|--------------|
tab_id | the identifier of each tab | number or string
href | transforms Tab content into `<a/>` tag with same styles | string link

### <a name="horizontaltabs"></a> 24.1. HorizontalTabs

**Props**

| prop      | definition          | valid values |
|-----------|---------------------|--------------|
tabState |  state array to handle selected tab | array: [ state ,setState ]
color | main color of the tab | any color name from [these values](#tabs-color)
stretch | stretches tabs to occupy all available space | boolean
position | horizontal position of the tab group | "left" , "center" , "right" 
menuPosition | position of responsive tab menu | same as [`<Menu/>`](#menu) component
bottom | transforms tab styles to match a bottom position | boolean
prepend | adds a component at the start of tabs | component
append | adds a component at the end of tabs | component
noBorder| border separator between tabs and actual content | boolean

**Usage Example:**

```jsx
import React, {useState} from "react";
import {HorizontalTabs,Tab} from "react-facebook-ui";

export default function MyComponent() {
    const [selectedTab, setSelectedTab] = useState(0);

    return <div className={"card"}>
        <HorizontalTabs tabState={[selectedTab, setSelectedTab]}
                        position={"right"}
                        color={'primary'}
                        prepend={<h3>Hello world</h3>}>
            <Tab tab_id={0} href={'#home'}>Home</Tab>
            <Tab tab_id={1} href={'#profile'}>Profile</Tab>
            <Tab tab_id={2} href={'#calendar'}>Calendar</Tab>
            <Tab tab_id={3} href={'#about'}>About</Tab>
            <Tab tab_id={4} href={'#games'}>Games</Tab>
        </HorizontalTabs>
        <div className="mt-1 pt-1">Selected Tab: {selectedTab}</div>
    </div>
}
```

### <a name="verticaltabs"></a> 24.2. VerticalTabs

**Props**

| prop      | definition          | valid values |
|-----------|---------------------|--------------|
tabState |  state array to handle selected tab | array: [ state ,setState ]
color | main color of the tab | any color name from [these values](#tabs-color)
menuPosition | position of responsive tab menu | same as [`<Menu/>`](#menu) component
tabContent | actual tab content | component
prepend | adds a component at the start of tabs | component
append | adds a component at the end of tabs | component
noBorder| border separator between tabs and actual content | boolean

**Usage Example:**

```jsx
import React, {useState} from "react";
import {VerticalTabs,Tab} from "react-facebook-ui";

export default function MyComponent() {
    const [selectedTab, setSelectedTab] = useState(0);

    return <div className={"card"}>
        <VerticalTabs tabState={[selectedTab, setSelectedTab]}
                        prepend={<h3>Hello world</h3>}
                        tabContent={<div className="mt-1">Selected Tab: {selectedTab}</div>}>
            <Tab tab_id={0} href={'#home'}>Home</Tab>
            <Tab tab_id={1} href={'#profile'}>Profile</Tab>
            <Tab tab_id={2} href={'#calendar'}>Calendar</Tab>
            <Tab tab_id={3} href={'#about'}>About</Tab>
            <Tab tab_id={4} href={'#games'}>Games</Tab>
        </VerticalTabs>
    </div>
}
```

<br/><hr/><br/>

### <a name="toast-and-notification"></a> 25. Toast and Notification

`react-facebook-ui` provides two types of toast components: **`<SimpleToast/>`** and **`<NotificationToast/>`**, both of them are based on the `<Toast/>` Component. you can also create your own custom toast !

you can display a toast by calling the `ShowToast()` method: 

```jsx
ShowToast(<SimpleToast color={'primary'}>Hello World</SimpleToast>,{sticky:true});
```

**parameters of `ShowToast()`**

| param     | definition          | valid values |
|-----------|---------------------|--------------|
toast | a toast functional component | component
options | an object of toast options | object
options["duration"] | duration of the toast to be auto closed | number
options["sticky"] | ignores toast duration ,and can only be closed manually | boolean

you can change the default position of the toasts by providing the [`toastContainerProps`](#toast-container-props) prop on the [`<MainLayout/>`](#mainlayout) component on your `src/index.js` file , it should look something like this:

> In the example bellow , the toast will appear on the top right of the screen , with a `defaultDuration` of `4000ms`.

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {MainLayout} from "react-facebook-ui";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <MainLayout toastContainerProps={{position:"top-right", defaultDuration:4000}}>
          <App />
      </MainLayout>
  </React.StrictMode>
);
```

#### **Toast Container Props**

| prop      | definition          | valid values |
|-----------|---------------------|--------------|
position| the position of toasts| "top","bottom","top-left","top-right","bottom-left","bottom-right",
defaultDuration | default duration of a toast in milliseconds | number , (default 6000)  

**Props: (Toast)**

| prop      | definition          | valid values |
|-----------|---------------------|--------------|
color | main color of the toast | any color name from [these values](#toast-color)

**Props: (SimpleToast)**

| prop      | definition          | valid values |
|-----------|---------------------|--------------|
color | main color of the toast | any color name from [these values](#toast-color)
icon | an svg icon component to be displayed on the left of the Toast | svg component
close | function to close the toast (passed as a prop by default) | function

**Props: (NotificationToast)**

| prop      | definition          | valid values |
|-----------|---------------------|--------------|
color | main color of the toast | any color name from [these values](#toast-color)
icon | an svg icon component to be displayed on the left of the Toast | svg component
close | function to close the toast (passed as a prop by default) | function
title | title of the notification toast | string
onContentClick | `onClick ` event on the notification content | function

**Usage Example: (SimpleToast)**

```jsx
import React from "react";
import {SimpleToast, ShowToast, Button} from "react-facebook-ui";

export default function MyComponent() {
    const showToast = () => {
        ShowToast(<SimpleToast color={'primary'}>Hello World</SimpleToast>,{sticky:true});
    };

    return <div className="card">
        <Button onClick={showToast}>Show Toast</Button>
    </div>
}
```

**Usage Example: (NotificationToast)**

```jsx
import React from "react";
import {NotificationToast, ShowToast, Button} from "react-facebook-ui";

export default function MyComponent() {
    const showNotificationToast = () => {
        ShowToast(<NotificationToast
            onContentClick={(close) => close()}
            color={'dark'}
            title={'Notification Title'}>
            <div className="p-2">
                <p>
                    some dude just sent you a friend request
                </p>
                <div>
                    <Button color={'blue'}>Accept</Button>
                    <Button color={'dark'}>Cancel</Button>
                </div>
            </div>
        </NotificationToast>, {duration: 6000});
    };

    return <div className="card">
        <Button onClick={showNotificationToast}>Show Notification</Button>
    </div>
}
```

**Usage Example: (Custom Toast)**

```jsx
import React from "react";
import {Toast, ShowToast, Button} from "react-facebook-ui";

export default function MyComponent() {
    const showToast = () => {
        ShowToast(<MyCustomToast color="amber">My Custom Toast</MyCustomToast>,{sticky:true});
    };

    return <div className="card">
        <Button onClick={showToast}>Show Toast</Button>
    </div>
}
const MyCustomToast=({children,color,close,className})=> {
    return <Toast color={color} className={className} >
        <div className="d-flex">
            <h2>{children}</h2>
            <Button onClick={close} color="danger">Close</Button>
        </div>
    </Toast>
};
```

<br/><hr/><br/>

## Custom Hooks

### useHttpRequest

the `useHttpRequest` hook is used to make easy http requests using the [fetch Api](https://developer.mozilla.org/en-US/docs/Web/API/fetch).

**Parameters: useHttpRequest( options, fetchOptions)**

> the `fetchOptions` is an object contains the [fetch()](https://developer.mozilla.org/en-US/docs/Web/API/fetch) options.

**the options parameter: Object**
| key      | definition      | type |
|----------|-----------------|------|
apiUrl | the url of your api | string
fake | enables fake request if your back-end API is not ready yet | boolean
fakeResults|the fake result object | any
fakeResponsetDuration | fake response duration in milliseconds | number
fakeError | if defined, the request returns an error with the `fakeError` object | object 
respenseAfter | to make ur Loading UI smoother , you can a bit latency to the response time in miliseconds  | number


**Return Type: Object**

| key      | definition      | type |
|----------|-----------------|------|
get | function to perform a GET request | function([params](#Http-Method-params))
post | function to perform a POST request | function([params](#Http-Method-params))
patch | function to perform a PATCH request | function([params](#Http-Method-params))
put | function to perform a PUT request | function([params](#Http-Method-params))
delete | function to perform a DELETE request | function([params](#Http-Method-params))
getBrowserCookie |a helper function to get browser cookie by name | function(name)

<a name="Http-Method-params"></a>**HTTP Method params**

> the `data` param is unavailable on `get()` and `delete()` methods

| param index | params    | definition      | type |
|-------------|-----------|-----------------|------|
1|url | url of the request | string
2|data | the data payload to be sent with the request | object
3|onSuccess | a function with `data` payload called when the request is successfull| function(data)
4|onFail| a function with `error` object called when the request fails| function(error)
5|onLoadingChange | called both times when the request starts and finishes (either success or fail) | fuction(isLoading)

**Usage Example:**
```jsx
import React, {useState} from "react";
import {useHttpRequest, useFakeData, Button} from "react-facebook-ui";

export default function MyComponent() {
    const {data: fakeData} = useFakeData(10);
    const [getLoading, set_getLoading] = useState(false);
    const [postLoading, set_postLoading] = useState(false);
    const [patchLoading, set_patchLoading] = useState(false);
    const [deleteLoading, set_deleteLoading] = useState(false);
    const [fakeLoading, set_fakeLoading] = useState(false);
    const [fakeErrLoading, set_fakeErrLoading] = useState(false);


    const request = useHttpRequest({apiUrl: 'https://jsonplaceholder.typicode.com'});
    const fakeRequest = useHttpRequest({fake: true, fakeResults: fakeData});
    const fakeRequestWithError = useHttpRequest({
        fake: true,
        fakeResults: fakeData,
        fakeError: {message: 'this is a fake error'}
    });

    const get = () => {
        request.get('/posts/1', (data) => {
            console.log(data);
        }, (e) => {
            console.log(e);
        }, set_getLoading)
    };
    const post = () => {
        request.post('/posts', {
            title: 'Sami Khammar',
            body: 'Full stack developer',
            userId: 1,
        }, (data) => {
            console.log(data);
        }, (e) => {
            console.log(e);
        }, set_postLoading)
    };
    const patch = () => {
        request.patch('/posts/1', {
            title: 'Sami Khammar',
            body: 'Frontend developer',
            userId: 1,
        }, (data) => {
            console.log(data);
        }, (e) => {
            console.log(e);
        }, set_patchLoading)
    };
    const delete_ = () => {
        request.delete('/posts/1', (data) => {
            console.log(data);
        }, (e) => {
            console.log(e);
        }, set_deleteLoading)
    };
    const fake = (error = undefined) => {
        (error ? fakeRequestWithError : fakeRequest).get('/posts/1', (data) => {
            console.log(data);
        }, (e) => {
            console.log(e);
        }, error ? set_fakeErrLoading : set_fakeLoading)
    };

    return <div className="card">
        <Button onClick={get} color={"blue"} loading={getLoading}>GET</Button>
        <Button onClick={post} color={"green"} loading={postLoading}>POST</Button>
        <Button onClick={patch} color={"amber"} loading={patchLoading}>PATCH</Button>
        <Button onClick={delete_} color={"red"} loading={deleteLoading}>DELETE</Button>
        <br/>
        <Button onClick={() => fake()} color={"purple"} loading={fakeLoading}>Fake</Button>
        <Button onClick={() => fake(true)} color={"purple"} loading={fakeErrLoading}>Fake with error</Button>
    </div>
}
```
<br/><hr/><br/>

### useFakeData

the main usage of `useFakeData` hook is to generate an array of dummy data using [**randomData()**](#randomData) function , with the ability to add , update and delete elements from the array.

**Parameters**

| param index | params    | definition      | type |
|-------------|-----------|-----------------|------|
1|length | the initial length of the array of dummy data | number

**Return Type: Object**

| key      | definition      | type |
|----------|-----------------|------|
data | a stateful array of dummy data generated using the [**randomData()**](#randomData) function | array
setData |a function to update the **data** array | state setter function,
add | generates and adds a random item to the **data** array | function
remove | deletes an item by `id` from the **data** array | function(id)
update| updates an item by `id` from the **data** array | function(id, updatedValues)

**Usage Example:**

```jsx
import React from "react";
import {Button, useFakeData} from "react-facebook-ui";
export default function App() {
    const {data, add, remove} = useFakeData(5);

    return <div className="card">
        <Button onClick={()=>add()} color="primary">Add</Button>
        <hr/>
        {data.map(item=><div key={item.id}>
            {item.firstName} {item.lastName} 
            <Button onClick={()=>remove(item.id)} color="danger" small>Delete</Button>
        </div>)}
    </div>
}
```
<br/><hr/><br/>
### usePagination

the `usePagination` hook is mainly used to generate a **url** of pagination data like **`page`**, **`sort`** and **`az`**....

<a name="usePaginationParameters"></a>**Parameters: Object**

| key    | definition      | valid values |
|--------|-----------------|--------------|
page | initial page number | number
limit | count of items per page | string 
sort | sort key name | string
az | sort direction | boolean
filter | an object with custom filter params | object

<a name="usePaginationReturn"></a>**Return Type: Object**

| key      | definition      | type |
|----------|-----------------|------|
url | a url string with the pagination data | string
pageData | an object state (see [pageData object](#pageDataobject)) | object
set_pageData | state setter for **pageData** | function(pageData)
refreshPage | a function to refresh **pageData** and **url** | function
isLoading | boolean state when a new data is being loaded | boolean
setLoading | state setter for **isLoading** | function
pageState | state array for the current page number | array: [ state ,setState ]
sortState | state array for the sort key | array: [ state ,setState ]
sortDirectionState | state array for the sort direction | array: [ state ,setState ]
        
<a name="pageDataobject"></a>**pageData object**

| key    | definition      | type |
|-----------|-----------------|------|
items | list of data items on the current page | array
page | current page | number
limit | current count of items per page  | number,
hasNextPage | a config key to check if the current page is the last page | boolean,
totalPages | count of total pages | number
totalItems | count of total items in all pages | number 
       
**Usage Example:**

> in this example we simulate a pagination behavior using the page `data` coming from a pagination API, then we map the `data` response to our [pageData](#pageDataobject), you can easily integrate this Technic with [DataTable](#datatable)

```jsx
import React, {useEffect} from "react";
import {useHttpRequest, usePagination,Pagination} from "react-facebook-ui";

export default function MyComponent() {
    const request=useHttpRequest();
    const pagination = usePagination({page: 1, limit: 5, az: true, sort: 'name'});

    useEffect(() => {
        request.get(`http://localhost:3000/users${pagination.url}`, (data) => {
            pagination.set_pageData({
                items: data.items,
                page: data.currentPage,
                limit: data.itemsPerPage,
                hasNextPage: data.withNextPage,
                totalPages:data.pageCount,
                totalItems: data.itemsCount,
            })
        }, (e) => {
            console.log(e);
        }, pagination.setLoading)
    }, [pagination.url]);

    return <div className="card">
        <pre>
            {JSON.stringify(pagination.pageData,null,2)}
        </pre>
        <Pagination pageState={pagination.pageState} totalPages={pagination.pageData.totalPages} color={'primary'}/>
    </div>
}
```
       
<br/><hr/><br/>
### usePaginationOffline

the main usage of `usePaginationOffline` hook is to paginate an array of items based on **page, limit, sort, az parameters** with offline sorting feature

**Parameters**

| param index | params    | definition      | type |
|-------------|-----------|-----------------|------|
1| pagination | an object with same [**usePagination parameter keys**](#usePaginationParameters) (page,limit,sort,az,filter) | object
<a name="usePaginationOfflineDataParam"></a> 2 | data | array of items to be paginated | array

**Return Type: Object**

> the `usePaginationOffline` inherits the same [`usePagination return type`](#usePaginationReturn)

| key      | definition      | type |
|----------|-----------------|------|
set_pageData | state setter for **pageData** , with function parameter `from` as a starting index and `to` as an ending index of the [**data**](#usePaginationOfflineDataParam) array | function(from,to)

**Usage Example: (see [`<DataTable/>`](#datatable))**

<br/><hr/><br/>
### useRefFunc

The `useRefFunc` hook is a good alternative to `useRef` for functional components without using [React.forwardRef](https://reactjs.org/docs/forwarding-refs.html).


**Return Type: Object**

| key      | definition      | type |
|----------|-----------------|------|
setRef | function to set a reference to an element | function
current |the actual DOM element | DOM element

**Usage Example:**

```jsx
import React from "react";
import {Button, randomId, useRefFunc} from "react-facebook-ui";

export default function App() {
    const {setRef:ref,current}=useRefFunc(undefined);

    const clicked = () => {
        current.innerHTML=`Content changed using Ref: ${randomId(4)}`
    };

    return <div className="card">
        <Button onClick={clicked} >Change Content</Button>
        <MyCustomComponent _ref={ref}/>
    </div>
}
const MyCustomComponent = ({_ref}) => {
    return <div ref={_ref}>
        some content here
    </div>
};
```

<br/><hr/><br/>
### useForm

the `useForm` hook is mainly used when dealing with [Forms](#form)


**Return Type: Object**

| key      | definition      | type |
|----------|-----------------|------|
value | the `value` of the form contains all fields values | object
setValue | sets a `value` to the corresponding form `name`| function(name, value)
valid | returns true if all the fields of the form are valid | boolean
validFields | returns `valid` / `not valid` fields of the form | object
reset | function to reset the value of a specific field by `name` | function(name)
resetForm | function to reset all the form fields to initial value | function 

**Usage Example: (see [Forms](#form))**

<br/><hr/><br/>
### useStepper

this hook is mainly used along side the [**`<Stepper/>`**](#stepper) component, it allows you to navigate through stepper pages.

**Return Type: Object**

| key      | definition      | type |
|----------|-----------------|------|
stepTo | function to jump to a specific stepper page, if user sets param `pushHistory` to `true` this function will push the current index to visited pages history | function(pageIndex,pushHistory)
next | function to go to next index page , if user sets param `toHistory` to `true`, this function will push the current index to visited pages history | function(toHistory)
previous | function to go to previous index page page, if user sets param `fromHistory` to `true`, this function will pop the current index from visited pages history and the user will be back to the last visited page | function(fromHistory)
page | current page index | number

**Usage Example: (see [**`<Stepper/>`**](#stepper))**

<br/><hr/><br/>
### useAppContext

the `useAppContext` hook is used to set Global data for your application using the [React Context](#https://reactjs.org/docs/context.html) 


**Return Type: Object**

| key      | definition      | type |
|----------|-----------------|------|
appData | state for global application data | object
setAppData |state setter for global application data |function

**Usage Example:**

```jsx
import React from "react";
import {Button, randomId, useAppContext} from "react-facebook-ui";

export default function App() {
    const {appData, setAppData}=useAppContext();

    const setGlobalData = () => {
        setAppData({
            user:`Jhon Doe ${randomId()}`,
        });
    };
    return <div className="card">
        <Button onClick={setGlobalData} >set User</Button>
        <hr/>
       current user: <b>{appData.user}</b>
        <hr/>
        <code>{JSON.stringify(appData,null,2)}</code>
    </div>
}
```

<br/><hr/><br/>
### useAppTheme

with the `useAppTheme` hook , you can change your application theme with ease


**Return Type: Object**

| key      | definition      | type |
|----------|-----------------|------|
theme | the current theme name for the application | string
changeTheme | a function to change application theme. [more info](#change-theme) | function(themeName)

**Usage Example:**

```jsx
import React from "react";
import {Button, useAppTheme} from "react-facebook-ui";

export default function App() {
    const {theme, changeTheme}=useAppTheme();

    const toggleTheme = () => {
        changeTheme(theme==='dark'?'light':'dark');
    };

    return <div className="card">
        <Button onClick={toggleTheme} >Toggle Theme</Button>
    </div>
}
```

<br/><hr/><br/>
### useAppDirection

with the `useAppDirection` hook , you can change your application direction either `ltr` or `rtl` with ease


**Return Type: Object**

| key      | definition      | type |
|----------|-----------------|------|
dir | the current direction name for the application (`ltr` or `rtl`) | string
setDir | a function to change application direction. | function(dir)

**Usage Example:**

```jsx
import React from "react";
import {Button, useAppDirection} from "react-facebook-ui";

export default function App() {
    const {dir, setDir}=useAppDirection();

    const toggleDir = () => {
        setDir(dir==='rtl'?'ltr':'rtl');
    };

    return <div className="card">
        <Button onClick={toggleDir} >Toggle Application Direction</Button>
    </div>
}
```

<br/><hr/><br/>
### useDevice

the `useDevice` hook provides info about the current device where your application is currently running. 

**Return Type: Object**

| key      | definition      | type |
|----------|-----------------|------|
device|current device Type | string: "browser" , "mobile", "tablet"...
isSmallScreen| checks if the device has a small screen |boolean
isMobile| checks if the device is a mobile|boolean
isTablet| checks if the device is a tablet|boolean
isAndroid| checks if the device OS is Android |boolean
isIOS|  checks if the device OS is IOS |boolean
isElectron| checks if the application is an ElectronJs App |boolean
isWindows| checks if the device OS is Windows |boolean
isMacOs|checks if the device OS is MacOs |boolean

**Usage Example:**

```jsx
import React from "react";
import { useDevice} from "react-facebook-ui";

export default function App() {
    const device=useDevice();

    return <div className="card">
        <pre>
            {JSON.stringify(device,null,2)}
        </pre>
    </div>
}
```

<br/><hr/><br/>
### useOutsideAlerter

the `useOutsideAlerter` hook fires an event when user clicks outside the referenced element;

**Parameters**

| param index | params    | definition      | type |
|-------------|-----------|-----------------|------|
1|ref| return value from the [**useRef**](https://reactjs.org/docs/hooks-reference.html#useref) hook| object
2|onOutsideClick| on outside click event | function (currentRef, clickedElementRef, doesntContainChild(parentElement,childElement))

> the `doesntContainChild()` function is a helper function that returns `true` if the `childElement` is not inside `parentElement` in the DOM. 

**Usage Example:**

```jsx
import React, {useRef} from "react";
import {useOutsideAlerter} from "react-facebook-ui";

export default function App() {
    const ref = useRef(undefined);
    useOutsideAlerter(ref, (currentRef, clickedElementRef) => {
        console.log(`you clicked outside of ${currentRef.current.getAttribute('id')}
         \n on the element with id: ${clickedElementRef.current.getAttribute('id')}`)
    }, []);

    return <div className="card" id={"Card-Container"}>
        <div className="item-hover p-2 border-radius-default bg-blue text-white" style={{height: 80, width: 150}}
             ref={ref} id="Blue-Box">
            <b>Click outside me</b>
        </div>
        <div className="item-hover mt-1 p-2 border-radius-default bg-red text-white" style={{height: 80, width: 150}}
             id="Red-Box">
            <b>Click inside me</b>
        </div>
    </div>
}
```

<br/><hr/><br/>
### useResizeObserver

the `useResizeObserver` hook is used to monitor the real-time DOM Element size changes.

**Parameters**

| param index | params    | definition      | type |
|-------------|-----------|-----------------|------|
1|onSizeChange | called when Element size changes |function(v)
2|ref | ref object of an Element from [useRef](https://reactjs.org/docs/hooks-reference.html#useref) hook | object
3|condition | a condition to keep observing Element size changes | boolean

**Usage Example:**

```jsx
import React, {useState, useRef} from "react";
import {Button, randomInt, useResizeObserver} from "react-facebook-ui";

export default function App() {
    const [size, set_size] = useState({height: 200, width: 300});
    const ref = useRef();
    const changeSize = () => {
        set_size({
            height: randomInt(1, 4) * 100,
            width: randomInt(1.5, 4) * 100,
        })
    };
    useResizeObserver((value) => {
        const targetRect = value[0].target.getBoundingClientRect();
        console.log(`size changed ${targetRect.height}x${targetRect.width}`)
    }, ref);
    return <div className="card">
        <Button onClick={changeSize}>Change size</Button>
        <hr/>
        <div className="bg-blue border-radius-default text-white p-2" style={size} ref={ref}>
            {size.height} x {size.width}
        </div>
        <hr/>
    </div>
}
```

<br/><hr/><br/>
### useWindowResize

the `useWindowResize` hook returns the real-time dimensions of screen/window size.

**Return Type: Object**

| key      | definition      | type |
|----------|-----------------|------|
width | width of the screen in pixels | number
height | height of the screen in pixels | number

**Usage Example:**

```jsx
import React from "react";
import {useWindowSize} from "react-facebook-ui";

export default function App() {
    const {width, height} = useWindowSize();

    return <div className="card" >
        window size <b>{height}</b> x <b>{width}</b>
    </div>
}
```

<br/><hr/><br/>

## Helper Functions

`react-facebook-ui` provides a set of util and helper functions to make your life easier.

| Function Name | description | parameters | return type |
|---------------|-------------|------------|-------------|
classJoin |a function to generate valid `className atribute` | `classes`: an array of strings (class names) | string
randomId |returns a random string of alphanumeric characters|`length`: the length of the genrated id string | string
randomInt | return an integer number between two values | `min `: min integer value, `max`:max integer value | number
<a name="randomData"></a>randomData |generates an object that contains random Dummy Data | `index`: optional index parameter | see [Dummy Data Object](#dummy-data-object)
inRange | return `true` if a number is between two values | `val`: number to be clamped, `min `: min clamp value, `max`:max clamp value | number
clamp | clamps a number between two values | `val`: number to be clamped, `min `: min clamp value, `max`:max clamp value | number
replaceAll | replaces all occurances of a string by another string |`text`: the main text string , `char`: the string to be replaced , `rep`: the string to replace `char` | string
trimInside |trim extra whitespaces inside a string, example `"hello    world"`becomes `"hello world"`|`text` : the string to be trimed , `allSpace` : boolean, trims all whitespace | string
alphabeticalText | removes non alphabetical characters from a string |`text` : the string to be transformed |string


#### Dummy Data Object

this data object is used on the [randomData](#randomData) function and the [useFakeData](#useFakeData) hook.

| key      | definition      | type |
|----------|-----------------|------|
firstName | dummy person first name value| string
lastName | dummy person last name value | string
fullName | `fullName` based on `firstName` and `lastName` values|string
email | dummy email address | string
website | dummy website URL | string
job | dummy job name | string
company | dummy company name | string
country | dummy country name | string
city | dummy city name | string
age | random age value | number
percent | random percentage number | number
date | dummy date value | Date
salary | dummy salary value |number
image: | dummy image URL | string
id | a random id string | string
index | if not passed in params , generates a random int number | number
gender | a random `male` or `female` value | string

<br/><hr/><br/>

## <a name="change-theme"><a/> Change Theme and CSS

`react-facebook-ui` provides an easy way to change and add themes to your app with changing a set of **colors** and **css variables**.

`react-facebook-ui` comes with 2 default theme `light` and `dark`, those themes are the [**root themes**](#root-theme) for all custom themes that you can add to your app.

 <a name="root-theme"></a> **1- what is a Root Theme ?**
 
 a **root theme** is a `light` or `dark` theme where the successor **custom theme** inherits its style , variables and values.

#### <a name="change-theme-variable"></a>2- Theme Customization:

in order to change or create themes , you have to  feed the [**theme config object**](#theme-config-object) to the value of `changeTheme` prop in the [`<MainLayout/>`](#mainlayout) component. 

```jsx
import React from "react";  
import {MainLayout} from "react-facebook-ui";  
  
export default function AppWrapper({children}) {  
  // TODO :: configure your app here  
  const customThemeConfig ={  
  MyCustomTheme: {  
  dark: true,  
  // ...  
  }  
 }; 
 
 return <MainLayout 
		 customThemes={customThemeConfig} 
		 defaultAppdata={{theme:'MyCustomTheme'}}>  
			 {children}  
	    </MainLayout>  
}
```

<a name="theme-config-object"></a> **theme config object :**
 in the code snippet bellow , we created our custom theme called `"MyCustomTheme"` which inherits the `dark` theme style. 
 >	if you want your custom theme to inherits the `light` theme style , set `dark: false`
```jsx
const customThemeConfig = {   
  MyCustomTheme: {  
  dark: true,  
  ...  
    }  
}
```
#### 3- Changing a variable:

lets say you want to change the default `primary` color (which is `blue` by default) to a fancy pink color for `"MyCustomTheme"` we just created in the previous step :

>  we are overriding the default `primary ` color **css** variables with the available `pink` color ones.
```jsx
const customThemeConfig ={  
  MyCustomTheme: {  
  dark: true,  
  '--color-primary': '--color-pink',  
  '--color-primary-active-light': '--color-pink-active-light',  
  '--color-primary-active-dark': '--color-pink-active-dark',  
  '--color-primary-fg': '--color-pink-fg',
 }};
```
***or***
> with a **css** syntax.
```jsx
const customThemeConfig ={  
  MyCustomTheme: {  
  dark: true,  
  '--color-primary': '#e25382',  
  '--color-primary-active-light': 'rgba(252,172,201,0.2)',  
  '--color-primary-active-dark': 'rgba(238,78,131,0.2)',
  '--color-primary-fg': '#ffffff',  
 }};
```
 with the help of **Browser Inspection tools**  , you can change a value for any **css variable** by adding it to the object above

#### <a name="color-list"></a> Colors List
all the colors on this list have the [**CSS variables**](#color-list-variables)

| colors | 
|--------|
`primary`,  `success`,  `danger`,  `warning`,  `info`,  `red`,  `pink`,  `purple`,  `deep-purple`,  `indigo`,  `blue`,  `light-blue`,  `cyan`,  `teal`,  `green`,  `light-green`,  `lime`,  `yellow`,  `amber`,  `orange`,  `deep-orange`,  `brown`,  `blue-grey` , `light` , `dark` |
 
 #### <a name="color-list-variables"></a> CSS variables
|  variable | description |
|-------|-------------|
`--color-{color}` | color variable
`--color-{color}-active`| active color for the current [root theme](#root-theme) theme
`--color-{color}-active-light`| active color for `light` theme
`--color-{color}-active-dark`| active color for `dark` theme
`--color-{color}-fg`  |the foreground color ( example: text color )

---
 #### <a name="special-color-list"></a>Special Colors List:
 
| colors | description |
|--------|-------------|
`default` | is the neutral and main color for most components 
`card` | is the card color that changes depending on the current theme
`adaptive` | a special color that inverts the `light` themed components to `dark` ones 
`white` | the white color
`black`  | the black color
`transparent` | a transparent color
 
#### 7- Component Colors

| Component | available colors    |
|-----------|---------------------|
<a name="card-color"></a> [`<Card/>`](#card) ***color*** property | any color from  [**Color List**](#color-list) +  "default", "card", "transparent", "adaptive", "white", "black" 
<a name="alert-color"></a> [`<Alert/>`](#alert) ***color*** property  | any color from  [**Color List**](#color-list) +  "default", "card", "adaptive", "white", "black" 
<a name="badge-color"></a> [`<Badge/>`](#badge) ***color*** property  | any color from  [**Color List**](#color-list) +  "default", "card", "adaptive", "white", "black" 
<a name="button-color"></a> [`<Button/>`](#button-and-link) [`<ButtonIcon/>`](#Buttonicon) ***color*** property | any color from  [**Color List**](#color-list) +  "default", "card", "transparent", "adaptive", "white", "black" 
<a name="button-color-active"></a>  [`<Button/>`](#button-and-link) [`<ButtonIcon/>`](#Buttonicon) ***active*** property  | any color from  [**Color List**](#color-list) +    "adaptive", "white", "black" 
<a name="data-table-color"></a> [`<DataTable/>`](#datatable) ***color*** property | any color from  [**Color List**](#color-list) +  "default"
<a name="table-row-color"></a> [`<TableRow/>`](#tableRow ) ***color*** property | any color from  [**Color List**](#color-list)
<a name="radio-checkbox-color"></a> [`<CheckBox/>`](#checkbox-and-Switch) [`<RadioGroup/>`](#radio-button-and-radio-group) ***color*** property | any color from  [**Color List**](#color-list) +  "default", "card", "transparent", "adaptive", "white", "black" 
<a name="checkmark-color"></a> [`<Dropdown/>`](#dropdown) [`<MenuItem/>`](#menu) ***checkmarkColor*** property| any color from  [**Color List**](#color-list) + "white", "black" 
<a name="loading-bar-color"></a> [`<LoadingBar/>`](#loadingbar) ***color*** property | any color from  [**Color List**](#color-list) +  "default"
<a name="pagination-color"></a> [`<Pagination/>`](#pagination) ***color*** property | any color from  [**Color List**](#color-list) + "default"
<a name="form-stepper-color"></a> [`<FormStepper/>`](#formStepper) ***color*** property | any color from  [**Color List**](#color-list) +  "adaptive", "white", "black" 
<a name="tabs-color"></a> [`<HorizontalTab/>`](#horizontaltabs) [`<VerticalTabs/>`](#verticaltabs) ***color*** property | any color from  [**Color List**](#color-list) +  "default", "card", "adaptive", "white", "black" 
<a name="toast-color"></a> [`<Toast/>`](#toast-and-notification) [`<SimpleToast/>`](#toast-and-notification) [`<NotificationToast/>`](#toast-and-notification) ***color*** property | any color from  [**Color List**](#color-list) +  "default", "card", "adaptive", "white", "black" 

#### 8- Available CSS classes

> `react-facebook-ui` uses the [v5.2 - Bootstrap Grid System](https://getbootstrap.com/docs/5.2/layout/grid/), so all Bootstrap grid classes are available out of the box.

| class | description | replaceable values | 
|-------|-------------|--------------------|
`card`| styles an element as a `card` |-
`item-hover`| adds hover effect to an element |-
`glow-{color}-{size}`| adds glow effect to an element , example: `glow-primary` or `glow-primary-lg` |`size`: lg, `color`: [**Color List**](#color-list) + [**Special Color List**](#special-color-list)
`text-{color}` , `text-{color}-active` | changes text `color` , example: `text-primary` or `text-primary-active`| [**Color List**](#color-list) + [**Special Color List**](#special-color-list)
`fill-{color}`, `fill-{color}-active`  | changes svg `fill` color, example: `fill-primary` or `fill-primary-active` | [**Color List**](#color-list) + [**Special Color List**](#special-color-list)
`bg-{color}`| changes the `background-color` color, example: `bg-primary` | [**Color List**](#color-list) + [**Special Color List**](#special-color-list)
`bg-{color}-active` | changes the `background-color` color to a variant color, example: `bg-primary-active` | [**Color List**](#color-list) + [**Special Color List**](#special-color-list)
`border-color-{color}` | changes `border-color` color, example: `border-color-primary` | [**Color List**](#color-list) + [**Special Color List**](#special-color-list)
`border-{pixel}` | creates a solid border with `pixel` value , example: `border-2`, equivalent to : `border: 2px solid;` | 1,2,3,4
`border-radius-{size}` | sets border radius to a specific size , example: `border-radius-sm` | default , sm , lg , circle


<br/><hr/><br/>
	
## NextJs implimentation
	
After installing the `react-facebook-ui` package on a fresh NextJs project :
	
1. Open the layout wrapper file In your `src/pages/_app.js`
2. Wrap the `<Component {...pageProps}/>` component with the [`<MainLayout />`](#mainlayout) component, it should look something like this:

**`src/pages/_app.js`**

```jsx
import '../styles/globals.css'
import React from 'react';
import {MainLayout} from "react-facebook-ui";

function MyApp({ Component, pageProps }) {
  return  <MainLayout defaultAppdata={{theme:'dark'}}>
      <Component {...pageProps} />
    </MainLayout>
}
export default MyApp
```
	
3. Almost Done, as we know since some of `react-facebook-ui` components such as [`<ButtonIcon/>`](#Buttonicon) depends on `SVG` icons but **NextJs webpack** doesn’t have a loader set up to handle the `svg` file type (.svg files). to fix that we'll use the [@svgr/webpack](https://react-svgr.com/docs/next/):
	
- install: `npm install --save-dev @svgr/webpack`
- create/edit `next.config.js` file with the content bellow:

```jsx
module.exports = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        });
        return config
    },
};
```
- importing SVGs on NextJs like this:
	
```jsx	
import React from "react";
import {ButtonIcon} from "react-facebook-ui";
import SearchIcon from "../assets/icons/search.svg";

export default function App() {
    return <ButtonIcon icon={<SearchIcon/>}/>
}
```
4. Done.


**NOW you're ready to use the beauty of `react-facebook-ui` for NextJs**

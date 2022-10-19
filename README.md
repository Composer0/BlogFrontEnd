# Blog: Frontend Portion
### *React*, *JavaScript*, *CSS*

FrontEnd design for a blog that will be featured on my portfolio to document my journey as an early career web developer.
Splitting the components is the method I chose for this project. I could use a Sass folder, but the idea of grouping my jsx components and css seemed highly convenient in maintaining a good workflow. On the brightside, with it being broken into components at this stage it will be easier to transfer them into a Sass folder later and polish for additional cohesion. Stylized components were immediately ruled out as I didn't see the need to modify the look and appearance on screen considerably in the final product. I also just like writing CSS out in CSS.

## Day 1
- Focused on creating the frontend look of the blog. Completed Navbar, Header, and Sidebar.
- Learned about how to use flex values ... ex. Flex: 3;... This concept reminds me of using columns in Bootstrap. I'm sure this will make things easier when I begin to develop media queries towards the end of this project.

## Day 2
- Provided more flavor to the to the site to bring the feel of it more in line with what my portfolio looks like. Trying to establish a sense of branding.
- Created post and posts components. Focused on creating the presentation of posts and how they will be shown on the main page. Posts are currently placeholders.
- Learned how to cut off text with line-clamp and use text-overflow to create ellipsis.

## Day 3
- Added Write and Settings page components to the blog project.
- Learned how to incorporate htmlFor to add documents from local drive. Need to learn how to incorporate this feature to make changes server side.
- Also learned about autoFocus on page load. This is being implemented on the write page in the title bar.

## Day 4 & 5
- Added Login and Register pages.

## Day 6
- Added new folders for Contact and About Page
- Added react-router-dom throughout the project. Links can now successfully navigate between the pages while also checking to see if the user is logged in or not.
- Began incorporating a href links into the project for the social media icons.
- Created NavBar variation for user not being logged in.
- Learned about how Routes replaced switch and in fact makes it easier to write out the route. Used element inside of route to indicate the proper route and thus saving one line of code for each route when implemented.

## Day 7 & 8
- Connected Routes for Contact and About Page.
- Set up email message on Contact page through the use of FormSubmit. It has has a light authentication set up at the moment and only requires a click to verify if the user is a 'robot'.
- Styled the Contact page.
- Placeholder content for About page.

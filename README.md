# CS 601 Final Project

- Author: Chris V. Ayala
- This project is a Software as a Service (SaaS) application designed for small criminal defense law firms to manage their cases.

## Features

- **Home Page**: A hero section with a call to action, a slogan, and an image carousel.
- **New Case**: A form to create new case files with validation and submission feedback.
- **Active Cases**: A dynamic list of active cases with clickable details.
- **Case Details**: Detailed view of individual cases with PDF downloan option.
- **Kanban Board**: An interactive board for managing cases through different stages.
- **Attorneys**: A showcase of the firm's attorneys with images and details.

## Required Elements

### Design

- Each page uses the intentionally chosen high-contrast color values (greens and blues), ensuring a cohesive theme that supports universal design and consistent color themes. 

### Layout

- The layout is fully responsive, using flexbox to adjust content as the browser window or screen resolution changes. This ensures a seamless experience across devices. 
- The layout is minimal with a spacious visual layout to enhance the readability and presentation of the text and interactive content.

### Text

- The site is written with brevity and paired with React's pre-built OS-enabled fonts. The `NewCase` and `ActiveCases` components, for example, include thoughtfully-partioned text content.
- The text content uses informative and action-oreinted ctas.

### Navigation

- The navigational system uses modern design best-practices, responsive for both desktop and mobile users. 
- The program implements dynamic routing using React Router to handle navigation between the home page and other individual pages.

### Images

- Images are all sourced from FREE stock imagery. Credits to the following website for attorney, clients, and hero imagery to the following sites: [Unsplash](https://unsplash.com/), [Adobe FirefLy](https://firefly.adobe.com/). They include `alt`, `height`, and `width` attributes to ensure accessibility and responsive design. The `ImageCarousel` component and `.attorney-image` CSS class manage image presentation.

### Mechanics

- Everything on the site is functional. Aside from `NewCase` form submission which is not currently setup to handle back-end json updates which would have cascading effects on other pages, the site is fully functional.
  
- Using transition states, user interactions when hovering over components, like Kanban cards, will faciliate a compelling user experience. 

### HTML

- The HTML structures within the codebase have passed validation. It also features universal design principles by the use of accessibility labels, like ARIA labels. 

### CSS

- CSS is used for layout, styling, and responsiveness. Techniques like flexbox and grid are employed to create a modern and adaptive design.

### JavaScript

- JavaScript is used throughout for interactivity and dynamic content to the site. Form validation, dynamic content rendering, and interactive features are implemented using JavaScript. Key scripts are located within the `NewCase.js`, `ActiveCases.js`, and `CaseDetails.js` files.

### React

- The program uses React for a component-based architecture, ensuring modularity and reusability of code. Key components include `Header`, `Footer`, `NewCase`, `ActiveCases`, `CaseDetails`, `KanbanBoard`, and `Attorneys`.
- React is used for effective state management, ensuring dynamic and responsive user interfaces. State management is handled using React's `useState` and `useEffect` hooks.

### DOM

- The project leverages the use of DOM manipulation techniques. This is evident in components like `NewCase` and `KanbanBoard`.

### Accessibility + Validation

- Accessibility concerns are addressed. The design is mindful of accessibility, ensuring content is usable even if images, CSS, and JavaScript are disabled. ARIA labels and semantic HTML elements are used throughout the site.
- The program uses validation logic to ensure all required `NewCase` form fields are successfully entered.

## Extra Credit Elements
- The use of CSS Flexbox is clear throughout the site.

### Hosted Website

I have hosted this website on GitHub Pages. Please follow this link to visit: [https://chrisvayala90.github.io/cs601_finalproject_ayala/](https://chrisvayala90.github.io/cs601_finalproject_ayala/).

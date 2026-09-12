# Dev Stack Builder

## Description
Dev Stack is a modern, responsive web application built for developers to explore, compare, and assemble their ideal technology stack for software projects. Users can browse frontend, backend, database, language, and DevOps technologies, manage their customized stack in real time via an interactive sidebar, and receive instant feedback using toast notifications.

## Technologies Used
- **React.js** (Vite build tool)
- **TypeScript** (Type safety and data modeling)
- **Tailwind CSS** (Utility-first styling and custom gradients)
- **React-Toastify** (Interactive notification alerts)

## Key Features
1. **Interactive Technology Catalog:** Browse through a curated list of modern development technologies organized by category with difficulty ratings and badges.
2. **Dynamic Stack Manager:** Add or remove technologies to/from a live sidebar stack with built-in duplicate detection and clear-all capabilities.
3. **Responsive Design & Toast Alerts:** Fully responsive layout optimized for mobile, tablet, and desktop screens accompanied by smooth Toastify notifications.

---

## Assignment Questions & Answers

### 1. What is JSX, and why is it used in React?
JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like structures directly inside JavaScript files. It is used in React because it makes building components more intuitive, readable, and visually expressive while keeping the power of full JavaScript logic close to the UI.

### 2. What is the difference between props and state?
- **Props** (properties) are passed into a component from its parent component and are **read-only** (immutable) for the receiving component.
- **State** is managed **within** the component itself, can change over time based on user actions or events, and triggers a re-render when updated.

### 3. What does the useState hook do, and where did you use it in this project?
The `useState` hook is a React function that lets components track and update state variables. In this project, it was used in `App.tsx` via `const [selectedStack, setSelectedStack] = useState<Technology[]>([])` to keep track of the user's selected technology stack.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?
The `useEffect` hook lets you perform side effects (like data fetching, subscriptions, or manual DOM manipulation) in function components. It is used to load external or local JSON data when a component first mounts so that the data is fetched asynchronously without blocking the UI rendering cycle.

### 5. Why does every item in a .map() list need a unique key prop?
React uses `key` props internally to identify which items in a list have changed, been updated, or been removed. Unique keys ensure optimal DOM rendering performance and prevent state bugs or visual glitches when items are dynamically reordered or deleted.

### 6. What is conditional rendering? Show one place you used it (example: the empty stack message).
Conditional rendering is the practice of rendering different UI elements or components based on specific conditions (such as boolean flags or array lengths). In this project, it was used inside `StackManager.tsx` to display either the empty state placeholder message or the list of selected technologies:
```tsx
{selectedStack.length === 0 ? <EmptyMessage/> : <StackList/>}

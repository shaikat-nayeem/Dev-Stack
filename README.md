# Dev Stack

## Description
Dev Stack is a modern, responsive web application built for developers to explore, compare, and assemble their ideal technology stack. Users can browse categorized technologies, manage their custom stack in real time via a sidebar, and receive instant feedback through toast notifications.

## Technologies Used
- React.js (Vite)
- TypeScript
- Tailwind CSS
- React-Toastify

## 3 Features of the Project
1. **Interactive Technology Catalog:** Browse technologies complete with descriptions, ratings, difficulty levels, and category badges.
2. **Dynamic Stack Manager:** Add, remove, or clear technologies from a live sidebar stack with duplicate warning checks.
3. **Toast Notifications:** Instant feedback alerts for adding items, duplicate attempts, and removing technologies using React-Toastify.

---

## React Questions & Answers

### 1. What is JSX, and why is it used in React?
JSX stands for JavaScript XML. It lets us write HTML-like markup directly inside JavaScript files, making component UI code more readable, expressive, and easier to structure.

### 2. What is the difference between props and state?
- **Props** are read-only properties passed down from a parent component to a child component.
- **State** is internal data managed within the component itself that can change over time and cause the component to re-render.

### 3. What does the useState hook do, and where did you use it in this project?
The `useState` hook allows functional components to manage and update state. We used it in `App.tsx` to track and update the user's selected technology stack.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?
The `useEffect` hook lets you run side effects like data fetching after rendering. It is used to load external or local JSON data when the application mounts so data is available without blocking the initial UI paint.

### 5. Why does every item in a .map() list need a unique key prop?
React uses unique keys to track list items efficiently, identifying which specific items have changed, been added, or been removed to optimize performance and prevent rendering bugs.

### 6. What is conditional rendering? Show one place you used it (example: the empty stack message).
Conditional rendering means displaying different elements based on specific conditions. We used it in `StackManager.tsx` to display either an empty message or the list of selected items:
```tsx
{selectedStack.length === 0 ? <p>No technologies selected</p> : <StackList/>}

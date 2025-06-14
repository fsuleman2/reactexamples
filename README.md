# My React App

A modern React application bootstrapped with Vite, demonstrating key React concepts and patterns, including Redux Toolkit integration, custom hooks, debouncing/throttling, and more.

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or above recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation
1. **Clone the repository** (if not already):
   ```sh
   git clone <your-repo-url>
   cd my-react-app
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```

### Running the App
- **Development mode:**
  ```sh
  npm run dev
  ```
  The app will be available at [http://localhost:5173](http://localhost:5173) (default Vite port).

- **Production build:**
  ```sh
  npm run build
  npm run preview
  ```

---

## 🧑‍💻 React Concepts Covered

This project demonstrates the following React and Redux concepts:

### 1. **Functional Components & Hooks**
- Uses modern functional components throughout.
- Demonstrates built-in hooks: `useState`, `useEffect`, `useCallback`, `useMemo`.

### 2. **Redux Toolkit Integration**
- State management using Redux Toolkit (`@reduxjs/toolkit`).
- Store setup in `src/app/store.js`.
- Slice creation and actions in `src/slices/apiSlice.js`.
- State access with `useSelector` and dispatching actions with `useDispatch`.

### 3. **Custom Hooks**
- Example: `useGetDataHook` for encapsulating data-fetching logic and dispatching Redux actions.

### 4. **Debouncing & Throttling**
- `MyDebounce` component demonstrates both debouncing and throttling techniques for input events.
- Includes code comments explaining the difference and use-cases for each.

### 5. **Component Memoization**
- Usage of `React.memo` and `useMemo` in `ChildApp` to optimize rendering and avoid unnecessary computations.

### 6. **useCallback**
- Prevents unnecessary re-renders by memoizing callback functions, as seen in the `App` component.

### 7. **Data Fetching**
- Fetches data from a public API (`https://fakestoreapi.com/products/`) and displays it in a table.
- Demonstrates side effects with `useEffect`.

### 8. **Reusable Table Component**
- `Table` component displays fetched data in a styled table using props and Redux state.

### 9. **Project Structure**
- Organized into `components`, `hooks`, `slices`, and `app` folders for scalability and maintainability.

### 10. **Vite for Fast Development**
- Uses [Vite](https://vitejs.dev/) for instant hot reloading and fast builds.

---

## 📁 Folder Structure

```
my-react-app/
├── public/
├── src/
│   ├── app/           # Redux store setup
│   ├── assets/        # Static assets
│   ├── components/    # React components (Table, ChildApp, MyDebounce)
│   ├── hooks/         # Custom hooks (useGetDataHook)
│   ├── slices/        # Redux slices (apiSlice)
│   ├── App.jsx        # Main app component
│   └── main.jsx       # Entry point
├── package.json
├── vite.config.js
└── ...
```

---

## 📝 Notes
- To experiment with debouncing/throttling, edit `src/components/MyDebounce.jsx`.
- To see Redux in action, check `src/hooks/useGetDataHook.js` and `src/components/Table.jsx`.
- The `ChildApp` component is memoized and demonstrates heavy computation optimization.

---

## 📚 Further Reading
- [React Documentation](https://react.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Vite Documentation](https://vitejs.dev/)

---

Feel free to explore, modify, and extend this project to learn more about React and modern frontend development!


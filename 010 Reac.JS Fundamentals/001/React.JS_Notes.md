## React Native Basics

### **1. Components**
- React Native is based on **components**, which are reusable building blocks of the UI.
- Components can be **functional** or **class-based**.
- Common built-in components:
  - `<View>` (like `<div>` in HTML, used for layouts)
  - `<Text>` (renders text)
  - `<Image>` (displays images)
  - `<ScrollView>` (a scrollable container)
  - `<FlatList>` (optimized list rendering)
- Custom components can be created by composing these built-in components.

### **2. Re-rendering**
- A component **re-renders** when:
  - Its **state** or **props** change.
  - Its **parent component** re-renders.
- To optimize re-renders:
  - Use `useMemo` and `useCallback` (for memoizing values and functions).
  - Use `React.memo` (to prevent unnecessary functional component re-renders).

### **3. Virtual DOM**
- Unlike React.js, React Native does **not use the traditional DOM**, but it does use a **Virtual DOM**.
- The Virtual DOM is a lightweight JavaScript representation of the UI.
- When state or props change, React Native:
  1. Updates the Virtual DOM.
  2. Compares the new Virtual DOM with the old one (diffing process).
  3. Efficiently updates only the necessary parts of the actual UI.

### **4. State & Props**
#### **State (Managed inside a component)**
```jsx
const [count, setCount] = useState(0);
```
#### **Props (Passed from parent to child components)**
```jsx
<MyComponent title="Hello" />
```

### **5. Style & Layout**
- React Native uses **Flexbox** for layout (similar to CSS).
- Styles are applied using JavaScript objects:
```jsx
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
```

### **6. Navigation**
- React Native does not use traditional web navigation (like URLs).
- Navigation is handled using libraries like **React Navigation**.
```jsx
import { createStackNavigator } from "@react-navigation/stack";
```

### **7. Native Modules & APIs**
- React Native can access device features like:
  - Camera, GPS, Bluetooth, etc.
- Uses libraries such as:
  - `react-native-camera` (for camera access)
  - `react-native-maps` (for maps)

### **8. Performance Optimization**
- Use `FlatList` for rendering large lists efficiently.
- Avoid unnecessary re-renders using `useMemo`, `useCallback`, and `React.memo`.
- Use **native code** for performance-heavy tasks (bridging JavaScript and native code via Native Modules).
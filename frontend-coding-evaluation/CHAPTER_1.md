# Chapter 1: Core Functionality and UI Improvements

## Tasks

### 1. Cart Total Calculation
The cart total is incorrectly calculated due to an initialization error in the reduce function

- Category: Quick Win
- [ ] Fixed
- Notes:

### 2. Typography Hierarchy
The application lacks a clear typography system, affecting readability and visual hierarchy.

1. Establish clear typography scale
2. Improve readability of product descriptions
3. Add proper line height and letter spacing

- Category: Quick Win
- [ ] Fixed
- Notes:

### 3. Cart Counter UI/UX
The cart quantity controls need improvement for better user interaction and accessibility.

1. Add clear visual indicators for item quantities
2. Implement smooth animations for counter updates
3. Ensure counter buttons are accessible
4. Add keyboard support for quantity changes
5. Provide user feedback for quantity limits, limit it to 5 items

- Category: Medium
- [ ] Fixed
- Notes:

### 4. Missing Error Handling
The API calls lack proper error handling, potentially leading to poor user experience when network issues occur.
Convert the fetch calls from promises structure to async / await

- Category: Medium
- [ ] Fixed
- Notes:

### 5. Loading / Error State for the product list
There's no visual feedback during data loading, leaving users uncertain about the application state.
Implement a loading and an error state for the product list, the implementation of this should be generic and reusable on other views

- Category: Medium
- [ ] Fixed
- Notes:

### 6. Animation and Transitions
The application lacks smooth transitions and animations for user interactions.

1. Add smooth transitions for cart updates
2. Implement loading state animations
3. Add micro-interactions for better user feedback

- Category: High Value
- [ ] Fixed
- Notes:

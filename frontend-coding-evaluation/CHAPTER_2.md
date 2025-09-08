# Chapter 2: Search, Testing, and State Management

## Tasks

### 1. Search Input Debouncing
The search input updates on every keystroke, causing unnecessary re-renders. Implement debouncing to optimize performance.
Create a custom React hook for this feature

- Category: Medium
- [x] Fixed
- Notes:

### 2. Search Enter Key Functionality (skipped)
The search functionality doesn't respond to the Enter key press, requiring implementation of keyboard support.
Add a test to check the searchItem is being set when the Enter key is pressed

- Category: Medium
- [ ] Fixed
- Notes:

### 3. Search Filtering
The search functionality needs improvement for better filtering capabilities.

- Category: Medium
- [X] Fixed
- Notes:
I added filtration based on categories and pricing as these are the two most commonly used filters

### 4. Implement the missing product list tests
There are 2 test defined in the ProductList test suite that require implmentation

- Category: High Value
- [ ] Fixed
- Notes:

### 5. Cart State Management
Cart state management needs improvement for better performance and user experience.

1. Implement efficient state management for cart items, elaborate on the options you consider and why you choose a specific implementation
2. Handle duplicate items by updating quantity
3. Maintain cart state across page refreshes

- Category: High Value
- [ ] Fixed
- Notes:

### 6. Cart Persistence
Cart contents are lost on page refresh, requiring implementation of local storage or similar persistence.

- Category: Medium
- [ ] Fixed
- Notes:

### 7. Cart Item Quantity Management
Cart items need proper quantity management with validation and user feedback.

1. Handle edge cases (min/max quantities)
2. Add visual feedback for quantity changes

- Category: Medium
- [ ] Fixed
- Notes:

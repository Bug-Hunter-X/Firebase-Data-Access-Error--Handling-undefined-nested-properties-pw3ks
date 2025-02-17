```javascript
// This code attempts to access a nested property that might not exist.
const data = snapshot.val();
const value = data.nested.property;
```
```javascript
// This code uses optional chaining and nullish coalescing to safely access nested properties.
const data = snapshot.val();
const value = data?.nested?.property ?? 'default value';
```
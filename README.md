This repository demonstrates a common issue when accessing nested data in Firebase. The `bug.js` file shows the problematic code, while `bugSolution.js` provides a solution to gracefully handle potential undefined values.

**Problem:** When accessing nested objects from a Firebase snapshot, there's a risk of encountering an error if any of the parent properties are undefined.  Direct access, as in `data.nested.property`, throws an error if `data.nested` is undefined.

**Solution:** The provided solution utilizes optional chaining and nullish coalescing to safely access nested properties, preventing errors and providing a default value if a property is missing.
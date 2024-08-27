# JavaScript Cheatsheet for Python Developers

markdown_content = """

## 1. Basic Syntax

| Concept         | Python                         | JavaScript                        |
|-----------------|--------------------------------|-----------------------------------|
| **Variables**   | `x = 10`                       | `let x = 10;`                     |
| **Constants**   | `PI = 3.14`                    | `const PI = 3.14;`                |
| **Print**       | `print("Hello")`               | `console.log("Hello");`           |
| **Comments**    | `# Single line comment`        | `// Single line comment`          |
|                 | `''' Multi-line comment '''`   | `/* Multi-line comment */`        |
| **End of Line** | Newline                        | Semicolon (`;`) (optional but recommended) |

## 2. Data Types

| Concept         | Python                         | JavaScript                        |
|-----------------|--------------------------------|-----------------------------------|
| **Numbers**     | `int`, `float`                 | `Number` (no separate int/float)  |
| **Strings**     | `"Hello"`                      | `"Hello"` or `'Hello'` or `` `Hello` `` |
| **Booleans**    | `True`, `False`                | `true`, `false`                   |
| **Lists**       | `[1, 2, 3]`                    | `[1, 2, 3]`                       |
| **Dictionaries**| `{"key": "value"}`             | `{key: "value"}`                  |
| **None/Null**   | `None`                         | `null` or `undefined`             |

## 3. Functions

| Concept              | Python                                     | JavaScript                              |
|----------------------|--------------------------------------------|-----------------------------------------|
| **Function Def**     | `def add(a, b):`                           | `function add(a, b) {`                  |
| **Return**           | `return a + b`                             | `return a + b;`                         |
| **Lambda Functions** | `lambda x: x * 2`                          | `(x) => x * 2;`                         |

## 4. Control Structures

| Concept         | Python                         | JavaScript                        |
|-----------------|--------------------------------|-----------------------------------|
| **If-Else**     | `if x > 5:`                    | `if (x > 5) {`                    |
|                 | `elif x == 5:`                 | `} else if (x == 5) {`            |
|                 | `else:`                        | `} else {`                        |
| **Loops**       | `for i in range(5):`           | `for (let i = 0; i < 5; i++) {`   |
| **For-Each**    | `for item in list:`            | `list.forEach(item => {`          |
| **While**       | `while x < 5:`                 | `while (x < 5) {`                 |

## 5. Lists/Arrays

| Concept         | Python                         | JavaScript                        |
|-----------------|--------------------------------|-----------------------------------|
| **Length**      | `len(arr)`                     | `arr.length`                      |
| **Append**      | `arr.append(4)`                | `arr.push(4);`                    |
| **Access**      | `arr[0]`                       | `arr[0]`                          |
| **Slice**       | `arr[1:3]`                     | `arr.slice(1, 3);`                |
| **Map**         | `map(func, arr)`               | `arr.map(func);`                  |
| **Filter**      | `filter(func, arr)`            | `arr.filter(func);`               |

## 6. Objects/Dictionaries

| Concept         | Python                         | JavaScript                        |
|-----------------|--------------------------------|-----------------------------------|
| **Access**      | `dict['key']`                  | `obj.key` or `obj['key']`         |
| **Add/Update**  | `dict['key'] = value`          | `obj.key = value;`                |
| **Looping**     | `for key, value in dict.items():` | `for (let key in obj) {`        |

## 7. Classes

| Concept         | Python                                     | JavaScript                        |
|-----------------|--------------------------------------------|-----------------------------------|
| **Class Def**   | `class MyClass:`                           | `class MyClass {`                 |
| **Constructor** | `def __init__(self, x):`                   | `constructor(x) {`                |
| **Methods**     | `def method(self):`                        | `method() {`                      |
| **Inheritance** | `class SubClass(BaseClass):`               | `class SubClass extends BaseClass {` |

## 8. Importing Modules

| Concept         | Python                         | JavaScript                        |
|-----------------|--------------------------------|-----------------------------------|
| **Import**      | `import math`                  | `import * as math from './math.js';` |
| **Import Specific** | `from math import sqrt`    | `import { sqrt } from './math.js';` |

## 9. Error Handling

| Concept         | Python                         | JavaScript                        |
|-----------------|--------------------------------|-----------------------------------|
| **Try-Except**  | `try:`                         | `try {`                           |
|                 | `except Exception as e:`       | `} catch (e) {`                   |
| **Finally**     | `finally:`                     | `} finally {`                     |

## 10. Miscellaneous

| Concept         | Python                         | JavaScript                        |
|-----------------|--------------------------------|-----------------------------------|
| **Equality**    | `==`                           | `===` (strict equality)           |
| **Inequality**  | `!=`                           | `!==`                             |
| **Ternary**     | `x = a if condition else b`    | `let x = condition ? a : b;`      |
| **Nullish Coalescing** | `x = a if a is not None else b` | `let x = a ?? b;`           |

### Summary

- **Variable Declaration:** Use `let` or `const` instead of Python's plain `x = ...`.
- **Semicolons:** While optional, semicolons are recommended at the end of each statement in JavaScript.
- **Strict Equality:** JavaScript's `===` is similar to Python's `==`, but it checks for both value and type equality.
"""

By ChatGPT
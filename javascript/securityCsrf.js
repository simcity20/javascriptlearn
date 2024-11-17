**Cross-Site Request Forgery (CSRF)** is a type of attack that tricks a user into performing actions they did not intend to perform on a web application where they are authenticated. This can lead to unauthorized actions such as transferring funds, changing account details, or other actions that the attacker desires.

### **1. How CSRF Attacks Work**

In a CSRF attack, the attacker exploits the trust that a web application has in a user's browser. The attack usually involves the following steps:

1. **User Authentication**: The user logs into a web application (e.g., a banking site) and receives a session cookie that authenticates their requests.
2. **Crafted Request**: The attacker crafts a malicious request, often using an image tag, a hidden form, or a link, that automatically sends a request to the vulnerable application.
3. **User Interaction**: The user is tricked into clicking a link or visiting a page controlled by the attacker.
4. **Execution**: The crafted request is sent from the user's browser, including their session cookie, making it appear as a legitimate request from the user.

Because the request includes the user's valid session cookie, the web application executes the action as if it were requested by the user.

### **2. Example of a CSRF Attack**

Imagine a bank's website where a user can transfer funds to another account by visiting a URL like:

```
https://bank.com/transfer?amount=1000&toAccount=98765
```

If a user is logged in, visiting this URL transfers $1000 to the specified account. An attacker could create a malicious website with the following HTML:

```html
<img src="https://bank.com/transfer?amount=1000&toAccount=98765" style="display:none;">
```

If a user who is logged into their bank account visits the attacker's website, their browser sends the request to the bank, including the session cookie. The bank processes the request, transferring $1000 to the attacker's account without the user's consent.

### **3. Preventing CSRF Attacks**

To protect your web application from CSRF attacks, implement the following best practices:

#### **CSRF Tokens**

- **Use Anti-CSRF Tokens**: Generate a unique token for each session or request and include it in forms or AJAX requests. The server validates this token before processing the request. If the token is missing or incorrect, the request is rejected.

  Example in a form:
  ```html
  <form action="/transfer" method="POST">
    <input type="hidden" name="csrf_token" value="generated_csrf_token_value">
    Amount: <input type="text" name="amount">
    To Account: <input type="text" name="toAccount">
    <input type="submit" value="Transfer">
  </form>
  ```

  On the server side, verify the CSRF token before processing the request.

#### **SameSite Cookie Attribute**

- **Set SameSite Cookie Attribute**: The `SameSite` attribute on cookies restricts how cookies are sent with cross-site requests. By setting `SameSite=Lax` or `SameSite=Strict`, you can prevent cookies from being sent with requests initiated by third-party sites.

  Example:
  ```http
  Set-Cookie: sessionid=abc123; SameSite=Lax; Secure;
  ```

  - **Strict**: Cookies are sent only with requests from the same site.
  - **Lax**: Cookies are sent with top-level navigation and GET requests initiated by third-party sites.
  - **None**: Cookies are sent with all requests, but you must use `Secure` with this option.

#### **Double Submit Cookie**

- **Double Submit Cookie Technique**: Send a CSRF token both as a cookie and as a request parameter (or in a header). The server checks that the values match. This method is useful when you cannot store the CSRF token in session storage.

#### **Custom Headers**

- **Use Custom Headers for AJAX Requests**: Require that certain actions (like form submissions) use custom HTTP headers, which browsers do not automatically include in cross-origin requests. This way, only requests made by your application can succeed.

  Example in JavaScript:
  ```javascript
  fetch('/transfer', {
    method: 'POST',
    headers: {
      'X-CSRF-Token': 'generated_csrf_token_value'
    },
    body: JSON.stringify({ amount: 1000, toAccount: '98765' })
  });
  ```

  On the server side, verify the `X-CSRF-Token` header before processing the request.

#### **Referrer Validation**

- **Check the Referrer Header**: Validate the `Referrer` header to ensure that the request originates from your own site. However, this method is less reliable as some browsers may omit the `Referrer` header for privacy reasons.

### **4. Example Implementations**

#### **Node.js (Express) Example**

Using the `csurf` middleware:

1. Install the middleware:

   ```bash
   npm install csurf
   ```

2. Configure it in your Express app:

   ```javascript
   const express = require('express');
   const csrf = require('csurf');
   const cookieParser = require('cookie-parser');

   const app = express();

   // Set up cookie parser and csrf protection
   app.use(cookieParser());
   app.use(csrf({ cookie: true }));

   app.get('/form', (req, res) => {
     res.send(`<form action="/process" method="POST">
                 <input type="hidden" name="_csrf" value="${req.csrfToken()}">
                 <button type="submit">Submit</button>
               </form>`);
   });

   app.post('/process', (req, res) => {
     res.send('Form processed successfully');
   });

   app.listen(3000, () => {
     console.log('Server running on port 3000');
   });
   ```

In this example, the CSRF token is automatically generated and verified by the `csurf` middleware.

### **5. Summary**

CSRF is a critical security vulnerability that can allow attackers to perform actions on behalf of authenticated users without their knowledge. To protect your application:

- Implement CSRF tokens to validate requests.
- Use the `SameSite` attribute on cookies.
- Employ additional techniques like custom headers, referrer validation, and the double submit cookie method.

By integrating these protections, you can significantly reduce the risk of CSRF attacks on your web application.
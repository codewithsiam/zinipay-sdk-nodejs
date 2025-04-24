## ZiniPay SDK for Node.js
A lightweight Node.js SDK for integrating ZiniPay payment gateway APIs. Easily create and verify payments with minimal setup.
```markdown
## 📦 Installation

```bash
npm install zinipay
```

Requires **Node.js v18+** for native fetch support. For earlier versions, you can install **node-fetch**.

---

## 🚀 Usage

### Import & Initialize SDK

```javascript
import ZiniPay from 'zinipay'; // or use `require()` for CommonJS

const zinipay = new ZiniPay({
  apiKey: 'YOUR_API_KEY',
});
```

---

## 📘 API Reference

### 🔹 `createPayment(payload)`

Create a new payment request.

#### Example

```javascript
const payment = await zinipay.createPayment({
  cus_name: 'John Doe',
  cus_email: 'john@example.com',
  amount: '100',
  redirect_url: 'https://yourapp.com/success',
  cancel_url: 'https://yourapp.com/cancel',
  webhook_url: 'https://yourapp.com/webhook',
  metadata: {
    phone: '017XXXXXXXX'
  }
});
```

#### Returns:

```json
{
  "status": "success",
  "data": {
    "val_id": "abc321",
    "payment_url": "https://gateway.zinipay.com/..."
  }
}
```

---

### 🔹 `verifyPayment(invoiceId)`

Verify a payment using the invoice ID or val ID.

#### Example

```javascript
const result = await zinipay.verifyPayment('abc123');
```

#### Returns (on success):

```json
{
  "status": "success",
  "data": {
    "transactionId": "txn123",
    "amount": "100",
    ...
  }
}
```

---

## 💡 Example

```javascript
import ZiniPay from 'zinipay';

const zinipay = new ZiniPay({
  apiKey: 'your_api_key',
});

async function main() {
  const payment = await zinipay.createPayment({
    cus_name: 'Alice',
    cus_email: 'alice@example.com',
    amount: '50',
    redirect_url: 'https://yourapp.com/success',
    cancel_url: 'https://yourapp.com/cancel',
    webhook_url: 'https://yourapp.com/webhook',
    metadata: { phone: '018XXXXXXX' }
  });

  console.log(payment);

  const verification = await zinipay.verifyPayment(payment.data.invoiceId);
  console.log(verification);
}

main();
```

---

## 👨‍💻 Author

**Abu Sayed Al Siam**  
GitHub: [@codewithsiam](https://github.com/codewithsiam)

---

## 📄 License

MIT License

---

## 📬 Feedback

For suggestions, bug reports, or contributions, feel free to open an issue.

---
# zinipay-sdk-nodejs

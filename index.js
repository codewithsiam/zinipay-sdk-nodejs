class ZiniPay {
    constructor({ apiKey, secretKey, merchantId }) {
      this.apiKey = apiKey;
      this.secretKey = secretKey;
      this.merchantId = merchantId;
      this.baseURL = 'https://api.zinipay.com/v1/payment';
    }
  
    async createPayment({
      cus_name,
      cus_email,
      amount,
      redirect_url,
      cancel_url,
      webhook_url,
      metadata = {}
    }) {
      const res = await fetch(`${this.baseURL}/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'zini-api-key': this.apiKey
        },
        body: JSON.stringify({
          cus_name,
          cus_email,
          amount,
          redirect_url,
          cancel_url,
          webhook_url,
          metadata
        })
      });
  
      if (!res.ok) throw new Error(`Payment creation failed: ${res.statusText}`);
      return await res.json();
    }
  
    async verifyPayment(invoiceId) {
      const res = await fetch(`${this.baseURL}/verify`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.secretKey}`
        },
        body: JSON.stringify({
          invoiceId,
          merchantId: this.merchantId,
          apiKey: this.apiKey
        })
      });
  
      if (!res.ok) throw new Error(`Payment verification failed: ${res.statusText}`);
      return await res.json();
    }
  }
  
  export default ZiniPay;
  
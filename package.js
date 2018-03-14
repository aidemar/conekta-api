{
  "id": "ord_2fw8EWJusiRrxdPzT",
  "object": "order",
  "livemode": false,
  "amount": 35000,
  "amount_refunded": 0,
  "payment_status": "paid",
  "currency": "MXN",
  "customer_info": {
    "object": "customer_info",
    "customer_id": "cus_zzmjKsnM9oacyCwV3",
    "name": "Mario Perez",
    "email": "<a href="mailto:usuario@example.com">usuario@example.com</a>",
    "phone": "+5215555555555"
  },
  "created_at": 1485842107,
  "updated_at": 1485842112,
  "line_items": {
    "object": "list",
    "has_more": false,
    "total": 1,
    "data": [{
      "id": "line_item_2fw8EWJusiRrxdPzR",
      "object": "line_item",
      "name": "Box of Cohiba S1s",
      "unit_price": 35000,
      "quantity": 1,
      "parent_id": "ord_2fw8EWJusiRrxdPzT",
      "antifraud_info": {},
      "metadata": {}
    }]
  },
  "charges": {
    "object": "list",
    "has_more": false,
    "total": 1,
    "data": [{
      "id": "589026bbedbb6e56430016ad",
      "object": "charge",
      "livemode": false,
      "created_at": 1485842107,
      "status": "paid",
      "amount": 35000,
      "paid_at": 1485842112,
      "currency": "MXN",
      "fee": 1467,
      "customer_id": "",
      "order_id": "ord_2fw8EWJusiRrxdPzT",
      "payment_method": {
        "object": "card_payment",
        "type": "credit",
        "name": "Jorge Lopez",
        "exp_month": "12",
        "exp_year": "19",
        "auth_code": "490884",
        "last4": "4242",
        "brand": "visa",
        "issuer": "",
        "account_type": "",
        "country": "MX",
        "fraud_score": 29,
        "fraud_indicators": []
      }
    }]
  },
  "metadata": {}
}

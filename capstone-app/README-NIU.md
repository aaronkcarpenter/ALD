# Capstone Project

## Database Schema

## Inventory_items
* inv_item: integer
* price: integer
* created_at: Date
* photo_url: string

### Shopping Cart
* cart_number: integer
* active: Boolean
* expiration: Date

### User Session
* session_number: integer
* created_At: Date

### Order Item
* order_item_number: integer
* qty: integer

### Cart Detail
* state: integer
* timestamp: Date
* qty: Number 

### Order
* order_number: integer
* order_data: date
* total_amount: integer
* state: varchar

### Users
id: integer
first_name: string
last_name: string
email: string
password: string

### Shipping
* shipping_id: integer
* state: string
* ship_date: date

### Payment
* payment_id: integer
* amount: integer
* state: string
* created_at: date

### Address
* address_id: integer
* name: string
* address_name: string
* city: string
* state: string
* zip: number

### Credit Card
* credit_card_id: integer
* credit_card_num: string
* holder_name: string
* expire_date: Date




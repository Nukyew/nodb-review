UPDATE customer
set items_in_cart = $2
where cust_id = $1;

SELECT items_in_cart from CUSTOMER;
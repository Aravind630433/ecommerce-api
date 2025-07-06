let token = '';
const API = '/api'; // Change to full URL if deployed

// Register a new user
async function register() {
  const data = {
    username: document.getElementById('reg-username').value,
    email: document.getElementById('reg-email').value,
    password: document.getElementById('reg-password').value,
    role: document.getElementById('reg-role').value,
  };

  const res = await fetch(`${API}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (res.ok) {
    alert('✅ Registered Successfully');
  } else {
    alert('❌ Registration failed');
  }
}

// Login user and store JWT token
async function login() {
  const data = {
    email: document.getElementById('login-email').value,
    password: document.getElementById('login-password').value,
  };

  const res = await fetch(`${API}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  const json = await res.json();

  if (json.token) {
    token = json.token;
    alert('✅ Logged In');
  } else {
    alert('❌ Login Failed');
  }
}

// Fetch and display products
async function fetchProducts() {
  const res = await fetch(`${API}/products`);
  const products = await res.json();

  const list = document.getElementById('product-list');
  list.innerHTML = '';

  products.forEach((p) => {
    const li = document.createElement('li');
    li.textContent = `${p.name} - ₹${p.price}`;
    const btn = document.createElement('button');
    btn.textContent = 'Add to Cart';
    btn.onclick = () => addToCart(p._id);
    li.appendChild(btn);
    list.appendChild(li);
  });
}

// Add selected product to cart
async function addToCart(productId) {
  if (!token) {
    alert('⚠ Please login first');
    return;
  }

  const res = await fetch(`${API}/cart`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ productId, quantity: 1 }),
  });

  if (res.ok) {
    alert('✅ Added to cart');
  } else {
    alert('❌ Add to cart failed');
  }
}

// View items in user's cart
async function viewCart() {
  if (!token) {
    alert('⚠ Please login first');
    return;
  }

  const res = await fetch(`${API}/cart`, {
    headers: { Authorization: `Bearer ${token} `},
  });

  const json = await res.json();
  const list = document.getElementById('cart-list');
  list.innerHTML = '';

  if (json && json.items && json.items.length > 0) {
    json.items.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = `Product ID: ${item.productId}, Qty: ${item.quantity}`;
      list.appendChild(li);
    });
  } else {
    list.innerHTML = '<li>No items in cart</li>';
  }
}

// Place order from current cart
async function placeOrder() {
  if (!token) {
    alert('⚠ Please login first');
    return;
  }

  const res = await fetch(`${API}/orders`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token} `},
  });

  if (res.ok) {
    alert('✅ Order Placed!');
    viewCart(); // refresh cart view
  } else {
    alert('❌ Order Failed');
  }
}

// Get order history
async function getOrders() {
  if (!token) {
    alert('⚠ Please login first');
    return;
  }

  const res = await fetch(`${API}/orders`, {
    headers: { Authorization:` Bearer ${token} `},
  });

  const orders = await res.json();
  const list = document.getElementById('order-list');
  list.innerHTML = '';

  if (orders && orders.length > 0) {
    orders.forEach((order) => {
      const li = document.createElement('li');
      li.textContent = `Order ID: ${order._id}, Items: ${order.items.length}`;
      list.appendChild(li);
    });
  } else {
    list.innerHTML = '<li>No orders found</li>';
  }
}
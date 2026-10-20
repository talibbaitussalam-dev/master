/* ===== CONFIG: change these ===== */
const WHATSAPP_NUMBER = '923001234567'; // country code + number, no + or spaces
const FREE_DELIVERY_OVER = 5000;
const DELIVERY_FEE = 250;

/* ===== DATA ===== */
const SHAPES = {
  tee: 'M30 20 L42 14 Q50 22 58 14 L70 20 L84 34 L74 44 L68 38 L68 84 L32 84 L32 38 L26 44 L16 34 Z',
  hoodie: 'M30 22 L42 14 Q50 26 58 14 L70 22 L88 62 L76 66 L68 44 L68 86 L32 86 L32 44 L24 66 L12 62 Z',
  kurta: 'M32 16 L44 12 Q50 20 56 12 L68 16 L82 30 L74 40 L68 34 L68 90 L32 90 L32 34 L26 40 L18 30 Z',
  dress: 'M38 14 L46 14 Q50 22 54 14 L62 14 L64 40 L78 86 L22 86 L36 40 Z',
  pants: 'M32 14 L68 14 L72 88 L56 88 L50 40 L44 88 L28 88 Z',
  jacket: 'M30 18 L44 12 L50 20 L56 12 L70 18 L88 60 L78 64 L70 42 L70 86 L30 86 L30 42 L22 64 L12 60 Z'
};

const PRODUCTS = [
  { id: 1,  name: 'Everyday Cotton Tee',    cat: 'Men',   price: 1490, color: '#2f6fed', shape: 'tee',    colorName: 'Blue',      sizes: ['S','M','L','XL'], badge: 'New' },
  { id: 2,  name: 'Heavy Fleece Hoodie',    cat: 'Men',   price: 4290, old: 4990, color: '#1d2447', shape: 'hoodie', colorName: 'Navy', sizes: ['M','L','XL'], badge: 'Sale' },
  { id: 3,  name: 'Straight Chino Pants',   cat: 'Men',   price: 3190, color: '#b59a6b', shape: 'pants',  colorName: 'Sand',      sizes: ['30','32','34','36'] },
  { id: 4,  name: 'Plain Cotton Kurta',     cat: 'Men',   price: 2890, color: '#e9e6dc', shape: 'kurta',  colorName: 'Off-white', sizes: ['S','M','L','XL'] },
  { id: 5,  name: 'Lightweight Jacket',     cat: 'Men',   price: 4990, color: '#3f7d4e', shape: 'jacket', colorName: 'Green',     sizes: ['M','L','XL'] },
  { id: 6,  name: 'Classic Polo Shirt',     cat: 'Men',   price: 1990, color: '#d62839', shape: 'tee',    colorName: 'Red',       sizes: ['S','M','L','XL'], badge: 'New' },
  { id: 7,  name: 'Slim Fit Jeans',         cat: 'Men',   price: 3490, old: 3990, color: '#3b5b92', shape: 'pants', colorName: 'Denim', sizes: ['30','32','34','36'], badge: 'Sale' },
  { id: 8,  name: 'Shalwar Kameez Set',     cat: 'Men',   price: 5490, color: '#5c6b7a', shape: 'kurta',  colorName: 'Slate',     sizes: ['S','M','L','XL'] },
  { id: 9,  name: 'Winter Puffer Jacket',   cat: 'Men',   price: 6990, color: '#f77f00', shape: 'jacket', colorName: 'Orange',    sizes: ['M','L','XL'], badge: 'New' },
  { id: 10, name: 'Linen Summer Dress',     cat: 'Women', price: 3790, color: '#e0527a', shape: 'dress',  colorName: 'Rose',      sizes: ['S','M','L'] },
  { id: 11, name: 'Printed Lawn Kurta',     cat: 'Women', price: 2490, color: '#2a9d8f', shape: 'kurta',  colorName: 'Teal',      sizes: ['S','M','L','XL'] },
  { id: 12, name: 'Wide-Leg Trousers',      cat: 'Women', price: 2990, color: '#6b4fbb', shape: 'pants',  colorName: 'Violet',    sizes: ['S','M','L'] },
  { id: 13, name: 'Oversized Graphic Tee',  cat: 'Women', price: 1690, color: '#f3b52f', shape: 'tee',    colorName: 'Marigold',  sizes: ['S','M','L'], badge: 'New' },
  { id: 14, name: 'Floral Maxi Dress',      cat: 'Women', price: 4590, old: 5290, color: '#ff6b6b', shape: 'dress', colorName: 'Coral', sizes: ['S','M','L'], badge: 'Sale' },
  { id: 15, name: 'Cozy Pullover Hoodie',   cat: 'Women', price: 3990, color: '#b5838d', shape: 'hoodie', colorName: 'Mauve',     sizes: ['S','M','L'] },
  { id: 16, name: 'Embroidered Kurti',      cat: 'Women', price: 3290, color: '#118ab2', shape: 'kurta',  colorName: 'Ocean',     sizes: ['S','M','L','XL'], badge: 'New' },
  { id: 17, name: 'High-Rise Jeans',        cat: 'Women', price: 3590, color: '#4361ee', shape: 'pants',  colorName: 'Indigo',    sizes: ['S','M','L'] },
  { id: 18, name: 'Long Winter Coat',       cat: 'Women', price: 7490, color: '#8d5a97', shape: 'jacket', colorName: 'Plum',      sizes: ['S','M','L'] },
  { id: 19, name: 'Kids Play Tee',          cat: 'Kids',  price: 990,  color: '#ef6c3a', shape: 'tee',    colorName: 'Orange',    sizes: ['4Y','6Y','8Y','10Y'] },
  { id: 20, name: 'Kids Zip Hoodie',        cat: 'Kids',  price: 2390, color: '#3aa3d9', shape: 'hoodie', colorName: 'Sky',       sizes: ['4Y','6Y','8Y','10Y'] },
  { id: 21, name: 'Kids Party Dress',       cat: 'Kids',  price: 2190, color: '#9b5de5', shape: 'dress',  colorName: 'Lilac',     sizes: ['4Y','6Y','8Y'] },
  { id: 22, name: 'Kids Denim Pants',       cat: 'Kids',  price: 1790, color: '#4895ef', shape: 'pants',  colorName: 'Blue',      sizes: ['4Y','6Y','8Y','10Y'] },
  { id: 23, name: 'Kids Kurta Set',         cat: 'Kids',  price: 2590, color: '#43aa8b', shape: 'kurta',  colorName: 'Mint',      sizes: ['4Y','6Y','8Y','10Y'], badge: 'New' },
  { id: 24, name: 'Kids Winter Jacket',     cat: 'Kids',  price: 3290, old: 3790, color: '#f94144', shape: 'jacket', colorName: 'Red', sizes: ['4Y','6Y','8Y'], badge: 'Sale' },
  { id: 25, name: 'Kids Stripe Tee',        cat: 'Kids',  price: 1090, color: '#90be6d', shape: 'tee',    colorName: 'Lime',      sizes: ['4Y','6Y','8Y','10Y'] },
  { id: 26, name: 'Kids Pink Dress',        cat: 'Kids',  price: 1990, color: '#f78fb3', shape: 'dress',  colorName: 'Pink',      sizes: ['4Y','6Y','8Y'] }
];

const CATEGORIES = ['All', 'Men', 'Women', 'Kids'];

/* ===== STATE ===== */
let state = { cat: 'All', q: '', sort: 'featured' };
let cart = loadCart();

/* ===== HELPERS ===== */
const $ = (s, el = document) => el.querySelector(s);
const money = n => 'PKR ' + n.toLocaleString('en-PK');
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));

function garment(shape, color) {
  return `<svg viewBox="0 0 100 100" aria-hidden="true"><path d="${SHAPES[shape]}" fill="${color}" stroke="rgba(0,0,0,.25)" stroke-width="1.5" stroke-linejoin="round"/></svg>`;
}

function loadCart() {
  try { return JSON.parse(localStorage.getItem('libaas_cart')) || []; }
  catch { return []; }
}
function saveCart() {
  try { localStorage.setItem('libaas_cart', JSON.stringify(cart)); } catch {}
}

/* ===== HERO RAIL ===== */
function renderRail() {
  const picks = [PRODUCTS[4], PRODUCTS[0], PRODUCTS[1], PRODUCTS[5], PRODUCTS[7]];
  $('#rail').innerHTML = '<div class="rail-items">' + picks.map((p, i) =>
    `<button class="rail-item rail-intro" style="animation-delay:${i * 120}ms" data-cat="${p.cat}" aria-label="Show ${esc(p.cat)} clothes">
       ${garment(p.shape, p.color)}<span>${esc(p.colorName)}</span>
     </button>`).join('') + '</div>';
  $('#rail').addEventListener('click', e => {
    const b = e.target.closest('.rail-item');
    if (!b) return;
    state.cat = b.dataset.cat;
    renderFilters(); renderProducts();
    document.getElementById('shop').scrollIntoView();
  });
}

/* ===== FILTERS + PRODUCTS ===== */
function renderFilters() {
  $('#filters').innerHTML = CATEGORIES.map(c =>
    `<button type="button" class="filter-btn ${c === state.cat ? 'active' : ''}" data-cat="${c}" aria-pressed="${c === state.cat}">${c}</button>`).join('');
}

function visibleProducts() {
  let list = PRODUCTS.filter(p =>
    (state.cat === 'All' || p.cat === state.cat) &&
    (p.name + ' ' + p.colorName + ' ' + p.cat).toLowerCase().includes(state.q.toLowerCase()));
  if (state.sort === 'low') list.sort((a, b) => a.price - b.price);
  if (state.sort === 'high') list.sort((a, b) => b.price - a.price);
  if (state.sort === 'name') list.sort((a, b) => a.name.localeCompare(b.name));
  return list;
}

function renderProducts() {
  const list = visibleProducts();
  $('#empty').classList.toggle('d-none', list.length > 0);
  $('#products').innerHTML = list.map(p => `
    <div class="col-6 col-md-4 col-lg-3">
      <article class="product">
        <div class="product-tile" style="--tint:${p.color}">${p.badge ? `<span class="badge-tag ${p.badge === 'Sale' ? 'sale' : 'new'}">${p.badge}</span>` : ''}${garment(p.shape, p.color)}</div>
        <div class="product-body">
          <h3 class="product-name">${esc(p.name)}</h3>
          <span class="product-cat">${esc(p.cat)} · ${esc(p.colorName)}</span>
          <p class="price">${money(p.price)}${p.old ? ` <s class="old">${money(p.old)}</s>` : ''}</p>
          <div class="product-actions">
            <select class="form-select form-select-sm" id="size-${p.id}" aria-label="Size for ${esc(p.name)}">
              ${p.sizes.map(s => `<option>${s}</option>`).join('')}
            </select>
            <button class="btn btn-ink btn-sm add-btn" type="button" data-id="${p.id}">Add to bag</button>
          </div>
        </div>
      </article>
    </div>`).join('');
}

/* ===== CART ===== */
function addToCart(id, size) {
  const found = cart.find(i => i.id === id && i.size === size);
  if (found) found.qty++;
  else cart.push({ id, size, qty: 1 });
  saveCart(); renderCart();
  const p = PRODUCTS.find(x => x.id === id);
  showToast(`${p.name} (${size}) added to your bag.`);
}

function changeQty(id, size, delta) {
  const item = cart.find(i => i.id === id && i.size === size);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(i => i !== item);
  saveCart(); renderCart();
}

function removeItem(id, size) {
  cart = cart.filter(i => !(i.id === id && i.size === size));
  saveCart(); renderCart();
}

function totals() {
  const subtotal = cart.reduce((sum, i) => sum + PRODUCTS.find(p => p.id === i.id).price * i.qty, 0);
  const delivery = subtotal === 0 || subtotal >= FREE_DELIVERY_OVER ? 0 : DELIVERY_FEE;
  return { subtotal, delivery, total: subtotal + delivery };
}

function renderCart() {
  const count = cart.reduce((n, i) => n + i.qty, 0);
  $('#cartCount').textContent = count;

  if (!cart.length) {
    $('#cartItems').innerHTML = '<p class="cart-empty">Your bag is empty. Add a tee or kurta to start.</p>';
  } else {
    $('#cartItems').innerHTML = cart.map(i => {
      const p = PRODUCTS.find(x => x.id === i.id);
      return `
      <div class="cart-item">
        <div class="cart-thumb" style="--tint:${p.color}">${garment(p.shape, p.color)}</div>
        <div class="cart-info">
          <strong>${esc(p.name)}</strong>
          <small>Size ${esc(i.size)} · ${money(p.price)}</small>
          <div class="qty">
            <button type="button" data-act="dec" data-id="${i.id}" data-size="${esc(i.size)}" aria-label="Decrease quantity">−</button>
            <span>${i.qty}</span>
            <button type="button" data-act="inc" data-id="${i.id}" data-size="${esc(i.size)}" aria-label="Increase quantity">+</button>
          </div>
        </div>
        <button class="remove-btn" type="button" data-act="rm" data-id="${i.id}" data-size="${esc(i.size)}">Remove</button>
      </div>`;
    }).join('');
  }

  const t = totals();
  $('#subtotal').textContent = money(t.subtotal);
  $('#delivery').textContent = t.delivery === 0 && t.subtotal > 0 ? 'Free' : money(t.delivery);
  $('#total').textContent = money(t.total);
  $('#checkoutBtn').disabled = cart.length === 0;
}

function checkout() {
  if (!cart.length) return;
  const t = totals();
  const lines = cart.map(i => {
    const p = PRODUCTS.find(x => x.id === i.id);
    return `• ${p.name} | Size ${i.size} | Qty ${i.qty} | ${money(p.price * i.qty)}`;
  });
  const msg = `Hello Libaas, I want to order:\n${lines.join('\n')}\n\nSubtotal: ${money(t.subtotal)}\nDelivery: ${t.delivery ? money(t.delivery) : 'Free'}\nTotal: ${money(t.total)}\n\nMy name:\nAddress:\nCity:`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
}

/* ===== TOAST ===== */
function showToast(text) {
  $('#toastMsg').textContent = text;
  bootstrap.Toast.getOrCreateInstance($('#toast'), { delay: 2200 }).show();
}

/* ===== EVENTS ===== */
document.addEventListener('click', e => {
  const t = e.target.closest('.cat-tile');
  if (!t) return;
  e.preventDefault();
  state.cat = t.dataset.cat;
  renderFilters(); renderProducts();
  document.getElementById('shop').scrollIntoView();
});
$('#filters').addEventListener('click', e => {
  const b = e.target.closest('.filter-btn');
  if (!b) return;
  state.cat = b.dataset.cat;
  renderFilters(); renderProducts();
});
$('#search').addEventListener('input', e => { state.q = e.target.value; renderProducts(); });
$('#sort').addEventListener('change', e => { state.sort = e.target.value; renderProducts(); });

$('#products').addEventListener('click', e => {
  const b = e.target.closest('.add-btn');
  if (!b) return;
  const id = Number(b.dataset.id);
  addToCart(id, $('#size-' + id).value);
});

$('#cartItems').addEventListener('click', e => {
  const b = e.target.closest('button[data-act]');
  if (!b) return;
  const id = Number(b.dataset.id), size = b.dataset.size;
  if (b.dataset.act === 'inc') changeQty(id, size, 1);
  if (b.dataset.act === 'dec') changeQty(id, size, -1);
  if (b.dataset.act === 'rm') removeItem(id, size);
});

$('#checkoutBtn').addEventListener('click', checkout);
$('#clearBtn').addEventListener('click', () => { cart = []; saveCart(); renderCart(); });

$('#contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const form = e.target;
  if (!form.checkValidity()) { form.classList.add('was-validated'); return; }
  const msg = `Hello Libaas,\nName: ${$('#cName').value}\nPhone: ${$('#cPhone').value}\n\n${$('#cMsg').value}`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
  form.reset(); form.classList.remove('was-validated');
});

/* ===== INIT ===== */
$('#year').textContent = new Date().getFullYear();
renderRail();
renderFilters();
renderProducts();
renderCart();

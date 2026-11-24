# Experiment 12 – User Personas, User Journeys and Wireframes

**Application idea:** Food delivery application

## 1. Personas

### Persona 1
| | |
|---|---|
| **Name** | Ananya Sharma |
| **Age** | 27 |
| **Occupation** | Software Engineer |
| **Goals** | Order healthy food quickly during a busy workday |
| **Frustrations** | Long delivery times, apps with too many steps to checkout |
| **Behavior** | Orders lunch online 3–4 times a week, prefers mobile app over website |
| **Quote** | "I just want food that arrives on time without ten taps." |

### Persona 2
| | |
|---|---|
| **Name** | Rohan Mehta |
| **Age** | 20 |
| **Occupation** | College student |
| **Goals** | Get filling food cheaply when ordering late at night with friends |
| **Frustrations** | Delivery fees, hidden charges, difficulty splitting the bill |
| **Behavior** | Orders 2–3 times a week after 9 PM, hunts for coupons, shares the app with hostel friends |
| **Quote** | "Show me the best deal first and let us split the bill." |

## 2. User Journey Map (Ananya – "Order dinner after work")

| Stage | Action | Thoughts | Emotion | Pain Point | Opportunity |
|---|---|---|---|---|---|
| Awareness | Opens the app after work | "What should I eat today?" | Neutral | Too many categories shown at once | Show recent/favorite orders first |
| Consideration | Browses restaurants and menus | "Is this place fast and good?" | Curious | Delivery time not visible until checkout | Show estimated delivery time on listing |
| Decision | Adds items to cart, applies offer | "Is this the best deal?" | Slightly anxious | Coupon code entry is confusing | Auto-apply best available offer |
| Action | Completes checkout and payment | "I hope this goes through smoothly." | Relieved | Too many payment steps | One-tap saved payment method |
| Post-use | Tracks delivery and receives order | "Where is my order?" | Impatient/hopeful | No live tracking | Add real-time delivery tracking map |

## 3. Low-fidelity wireframes (annotated)

### Home
```
--------------------------------------
| [Logo]           [Search icon]     |   (1)
--------------------------------------
| [ Search bar................... ]  |   (2)
--------------------------------------
| Categories: [Pizza][Burgers][More] |   (3)
--------------------------------------
| [ Restaurant Card 1 ]              |   (4)
| [ Restaurant Card 2 ]              |
| [ Restaurant Card 3 ]              |
--------------------------------------
| [Home] [Orders] [Cart] [Profile]   |   (5)
--------------------------------------
```
1. Logo and search shortcut – brand identity, jumps to search.
2. Search bar – filters the restaurant list live as the user types.
3. Category chips – one-tap filtering by cuisine.
4. Restaurant cards – image, name, rating, **estimated delivery time**; tap opens Restaurant Detail.
5. Bottom navigation – main sections of the app.

### Restaurant Detail
```
--------------------------------------
| [< Back]   Restaurant Name   [♥]   |   (1)
--------------------------------------
| [ Banner image ................ ]  |
| Rating ★4.3  |  30 min  |  ₹40    |   (2)
--------------------------------------
| Menu                               |
| [Dish 1  ₹199        [ + Add ] ]   |   (3)
| [Dish 2  ₹149        [ + Add ] ]   |
--------------------------------------
| [        Add to Cart           ]   |   (4)
--------------------------------------
```
1. Back / favourite. 2. Key info at a glance. 3. Menu items with quick add. 4. Primary action.

### Cart / Checkout
```
--------------------------------------
| [< Back]        Checkout           |
--------------------------------------
| Items:  Dish 1 x1 ........ ₹199    |   (1)
| Offer:  [Best offer applied ✓]     |   (2)
| Total:  ₹219                       |
--------------------------------------
| Pay with: (•) Saved UPI  ( ) Card  |   (3)
--------------------------------------
| [        Place Order           ]   |   (4)
--------------------------------------
```
1. Order summary. 2. Auto-applied best offer (journey opportunity). 3. One-tap saved payment. 4. Primary action.

## 4. Peer review (Step 8)
Fill in after exchanging wireframes with a classmate:

| Reviewer | Clarity feedback | Missing elements | Usability concerns |
|---|---|---|---|
| _name_ | | | |

## Hand-drawn sketches
Add photos of your paper sketches to `sketches/` (optional).

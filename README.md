# FoodLoop

## Good food should keep moving.

FoodLoop is a community-powered surplus-food rescue platform that helps people discover, share, and reserve extra food available near them before it becomes waste.

FoodLoop connects surplus food from cafés, bakeries, restaurants, households, hostels, college events, community kitchens, and local organizations with nearby people and communities that can use it.

---

## The Problem

Every day, usable food is left over from restaurants, bakeries, events, hostels, cafés, households, and community gatherings.

That food is often wasted because:

* People nearby do not know it is available
* Providers do not have a quick redistribution system
* Food-sharing information is scattered across chats and social media
* Existing food platforms focus mainly on selling food
* Small businesses and student communities have limited ways to share surplus food

FoodLoop focuses on the missing connection between surplus food and nearby people.

---

## The Idea

```text
A provider shares extra food
          ↓
People discover it by city or community
          ↓
A user reserves a portion
          ↓
The available quantity updates
          ↓
The community impact increases
```

---

## What FoodLoop Offers

### City-Wise Food Discovery

Users can select a city and browse surplus food available in that city.

The current prototype supports cities including:

* Bhopal
* Indore
* Delhi
* Mumbai
* Bengaluru
* Hyderabad
* Chennai
* Kolkata
* Pune
* Jaipur
* Ahmedabad
* Lucknow
* Chandigarh
* Kochi
* Nagpur
* Surat
* Patna
* Bhubaneswar
* Visakhapatnam
* Vadodara
* Coimbatore
* Guwahati
* Dehradun
* Ranchi
* Amritsar

### Community-Based Discovery

Users can optionally filter food by community:

* Public
* Students
* Colleges
* Hostels or messes
* Office workers
* Apartment communities
* Neighborhoods
* Community events
* NGOs and food banks

For example:

```text
City: Bhopal
Community: Students
```

This allows students to discover food shared through student groups, college events, and hostel communities.

### Search

Users can search by:

* Food name
* City
* Locality
* Community
* College or event name

### Food Filters

Users can filter listings by:

* Vegetarian
* Non-vegetarian
* Bakery
* Community event
* All food

### Share Surplus Food

Providers can create a listing with:

* Food name
* Description
* Quantity
* Unit
* City
* Locality
* Source type
* Community
* Food type
* Pickup deadline

### Reserve Food

Users can reserve available food.

When a reservation is made:

* The available quantity decreases
* The rescued-meal count increases
* The listing updates immediately
* The user receives an in-app confirmation

### Impact Tracking

FoodLoop displays:

* Meals rescued
* Active listings
* Estimated food waste avoided
* Connected cities

---

## Main User Flow

```text
1. Choose a city
2. View available food in that city
3. Search or filter the listings
4. Optionally choose a community
5. View pickup details
6. Reserve available food
7. Share surplus food if you have extra
8. Track the community impact
```

---

## Technology Stack

### Frontend

* React
* Vite
* JavaScript
* CSS

### Backend

* Python
* FastAPI
* Uvicorn

### Current Data Layer

The current hackathon MVP uses temporary in-memory backend data.

This approach keeps the core product flow fast and easy to demonstrate. The architecture is designed to move to permanent cloud storage.

---

## Project Architecture

```text
React frontend
      │
      │ HTTP requests
      ▼
FastAPI backend
      │
      ├── Food listings
      ├── Search and filters
      ├── Community filtering
      ├── Reservations
      └── Impact statistics
```

---

## Planned AWS Architecture

FoodLoop is designed to move to the following AWS architecture:

```text
React frontend
      │
      ▼
AWS Amplify Hosting
      │
      ▼
Amazon API Gateway
      │
      ▼
AWS Lambda
      │
      ├── Amazon DynamoDB
      │      ├── Food listings
      │      ├── Reservations
      │      ├── Cities
      │      └── Communities
      │
      └── Amazon S3
             └── Food images
```

### Planned AWS Services

| AWS Service | Purpose                              |
| ----------- | ------------------------------------ |
| AWS Amplify | Host the React frontend              |
| AWS Lambda  | Run backend operations               |
| API Gateway | Connect the frontend to backend APIs |
| DynamoDB    | Store food listings and reservations |
| Amazon S3   | Store uploaded food images           |
| CloudWatch  | Monitor application activity         |

The local MVP was built first so that the main product flow could be tested before moving the data and backend operations to AWS infrastructure.

---

## Project Structure

```text
foodloop/
├── backend/
│   └── main.py
├── public/
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── FoodListings.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

---

## Run FoodLoop Locally

### Requirements

* Node.js
* npm
* Python 3.10 or newer
* Git

### Clone the Repository

```bash
git clone https://github.com/lavanyakarna/foodloop.git
cd foodloop
```

### Install Frontend Dependencies

```bash
npm install
```

### Start the Frontend

```bash
npm run dev
```

The frontend normally runs at:

```text
http://localhost:5173
```

### Start the Backend

Open a second terminal:

```powershell
cd backend
```

Activate the Python environment:

```powershell
..\venv\Scripts\Activate.ps1
```

Start the FastAPI server:

```powershell
uvicorn main:app --reload --port 8000
```

The backend runs at:

```text
http://127.0.0.1:8000
```

FastAPI documentation is available at:

```text
http://127.0.0.1:8000/docs
```

---

## API Endpoints

```text
GET  /api/health
GET  /api/listings
POST /api/listings
POST /api/listings/{listing_id}/reserve
GET  /api/impact
```

### Health Check

```http
GET /api/health
```

### Get Listings

```http
GET /api/listings
```

The listings endpoint supports filtering by:

* City
* Locality
* Source type
* Food type
* Community
* Search text

### Create a Listing

```http
POST /api/listings
```

### Reserve Food

```http
POST /api/listings/{listing_id}/reserve
```

### Get Impact Statistics

```http
GET /api/impact
```

---

## Food Safety Note

FoodLoop is a community coordination platform. It does not independently verify food safety.

Food providers are responsible for:

* Accurate food information
* Allergen information
* Safe food handling
* Pickup deadlines
* Safe distribution

Users should make their own decisions before consuming shared food.

---

## Future Improvements

* Verified college accounts
* College email verification
* Student and provider login
* Permanent DynamoDB storage
* Amazon S3 image uploads
* AWS Lambda deployment
* Real-time notifications
* NGO and food-bank accounts
* Volunteer coordination
* Pickup verification
* Food expiry reminders
* Location-based discovery
* Community leaderboards
* Nearby surplus-food alerts
* Food safety reporting
* Provider reputation scores

---

## Why FoodLoop Matters

Food waste is not always caused by a lack of food.

Sometimes food is wasted because the people who could use it do not know that it exists.

FoodLoop helps make surplus food visible, discoverable, and easier to share within cities and communities.

> **Extra food should not become invisible food.**

---

## AI Assistance

AI coding assistance was used during development for:

* Project planning
* User-flow design
* Code assistance
* Debugging
* Documentation
* Interface ideas

The final project structure, implementation, testing, and decisions were completed for this project.

---

## Project Status

FoodLoop is a working hackathon MVP focused on:

* City-wise food discovery
* Community-based filtering
* Surplus-food sharing
* Food reservations
* Impact tracking
* Local community participation

Built with the goal of helping good food keep moving.

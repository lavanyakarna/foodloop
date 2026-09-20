from datetime import datetime
from typing import Optional

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel


app = FastAPI(
    title="FoodLoop API",
    description="Community-powered surplus food rescue platform",
    version="1.0.0",
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ListingCreate(BaseModel):
    food_name: str
    description: str
    quantity: int
    unit: str
    city: str
    locality: str
    source_type: str
    community: str = "Public"
    food_type: str = "Vegetarian"
    pickup_deadline: str


listings = [
    {
        "id": 1,
        "food_name": "Fresh vegetable meals",
        "description": "Freshly prepared surplus meals from a local café.",
        "quantity": 12,
        "unit": "portions",
        "city": "Bhopal",
        "locality": "Arera Colony",
        "source_type": "Café",
        "community": "Public",
        "food_type": "Vegetarian",
        "pickup_deadline": "Today, 8:30 PM",
        "status": "available",
        "meals_rescued": 0,
    },
    {
        "id": 2,
        "food_name": "Bread and bakery items",
        "description": "Fresh bread and bakery items available before closing.",
        "quantity": 8,
        "unit": "packs",
        "city": "Bhopal",
        "locality": "MP Nagar",
        "source_type": "Bakery",
        "community": "Public",
        "food_type": "Vegetarian",
        "pickup_deadline": "Today, 7:00 PM",
        "status": "available",
        "meals_rescued": 0,
    },
    {
        "id": 3,
        "food_name": "Extra event meal boxes",
        "description": "Sealed meal boxes left over from a community event.",
        "quantity": 20,
        "unit": "boxes",
        "city": "Bhopal",
        "locality": "Shahpura",
        "source_type": "Community event",
        "community": "Students",
        "food_type": "Vegetarian",
        "pickup_deadline": "Today, 9:00 PM",
        "status": "available",
        "meals_rescued": 0,
    },
    {
        "id": 101,
        "food_name": "Fresh thali meals",
        "description": "Fresh vegetarian thalis available from a neighborhood kitchen.",
        "quantity": 15,
        "unit": "portions",
        "city": "Delhi",
        "locality": "Lajpat Nagar",
        "source_type": "Community kitchen",
        "community": "Public",
        "food_type": "Vegetarian",
        "pickup_deadline": "Today, 8:00 PM",
        "status": "available",
        "meals_rescued": 0,
    },
    {
        "id": 102,
        "food_name": "Extra bakery boxes",
        "description": "Fresh baked items available before the bakery closes.",
        "quantity": 10,
        "unit": "boxes",
        "city": "Mumbai",
        "locality": "Andheri",
        "source_type": "Bakery",
        "community": "Public",
        "food_type": "Vegetarian",
        "pickup_deadline": "Today, 9:00 PM",
        "status": "available",
        "meals_rescued": 0,
    },
    {
        "id": 103,
        "food_name": "Campus lunch boxes",
        "description": "Sealed extra lunch boxes from a student event.",
        "quantity": 18,
        "unit": "boxes",
        "city": "Bengaluru",
        "locality": "Koramangala",
        "source_type": "Community event",
        "community": "Students",
        "food_type": "Vegetarian",
        "pickup_deadline": "Today, 7:30 PM",
        "status": "available",
        "meals_rescued": 0,
    },
    {
        "id": 104,
        "food_name": "Poha and breakfast packs",
        "description": "Fresh breakfast packs prepared by a local café.",
        "quantity": 12,
        "unit": "packs",
        "city": "Indore",
        "locality": "Vijay Nagar",
        "source_type": "Café",
        "community": "Public",
        "food_type": "Vegetarian",
        "pickup_deadline": "Today, 10:00 AM",
        "status": "available",
        "meals_rescued": 0,
    },
    {
        "id": 105,
        "food_name": "Biryani meal boxes",
        "description": "Sealed surplus meal boxes available for quick pickup.",
        "quantity": 8,
        "unit": "boxes",
        "city": "Hyderabad",
        "locality": "Madhapur",
        "source_type": "Restaurant",
        "community": "Public",
        "food_type": "Non-vegetarian",
        "pickup_deadline": "Today, 9:30 PM",
        "status": "available",
        "meals_rescued": 0,
    },
    {
        "id": 106,
        "food_name": "Fresh sandwich packs",
        "description": "Extra sandwiches prepared for a local office event.",
        "quantity": 14,
        "unit": "packs",
        "city": "Pune",
        "locality": "Viman Nagar",
        "source_type": "Café",
        "community": "Office workers",
        "food_type": "Vegetarian",
        "pickup_deadline": "Today, 6:30 PM",
        "status": "available",
        "meals_rescued": 0,
    },
    {
        "id": 107,
        "food_name": "Dal and roti meals",
        "description": "Homemade-style meals packed and ready for pickup.",
        "quantity": 9,
        "unit": "portions",
        "city": "Jaipur",
        "locality": "Malviya Nagar",
        "source_type": "Household",
        "community": "Public",
        "food_type": "Vegetarian",
        "pickup_deadline": "Today, 8:30 PM",
        "status": "available",
        "meals_rescued": 0,
    },
    {
        "id": 108,
        "food_name": "Extra café meals",
        "description": "Warm prepared meals available before closing time.",
        "quantity": 11,
        "unit": "portions",
        "city": "Ahmedabad",
        "locality": "Navrangpura",
        "source_type": "Café",
        "community": "Students",
        "food_type": "Vegetarian",
        "pickup_deadline": "Today, 8:00 PM",
        "status": "available",
        "meals_rescued": 0,
    },
    {
        "id": 109,
        "food_name": "Community dinner boxes",
        "description": "Sealed dinner boxes from a local community gathering.",
        "quantity": 20,
        "unit": "boxes",
        "city": "Lucknow",
        "locality": "Gomti Nagar",
        "source_type": "Community event",
        "community": "Public",
        "food_type": "Vegetarian",
        "pickup_deadline": "Today, 9:00 PM",
        "status": "available",
        "meals_rescued": 0,
    },
    {
        "id": 110,
        "food_name": "Rice and curry portions",
        "description": "Extra portions prepared by a neighborhood restaurant.",
        "quantity": 7,
        "unit": "portions",
        "city": "Kolkata",
        "locality": "Salt Lake",
        "source_type": "Restaurant",
        "community": "Public",
        "food_type": "Non-vegetarian",
        "pickup_deadline": "Today, 8:45 PM",
        "status": "available",
        "meals_rescued": 0,
    },
    {
        "id": 111,
        "food_name": "Fresh paratha packs",
        "description": "Extra breakfast packs from a hostel mess.",
        "quantity": 16,
        "unit": "packs",
        "city": "Chandigarh",
        "locality": "Sector 17",
        "source_type": "Hostel or mess",
        "community": "Students",
        "food_type": "Vegetarian",
        "pickup_deadline": "Today, 11:00 AM",
        "status": "available",
        "meals_rescued": 0,
    },
    {
        "id": 112,
        "food_name": "Homemade meal portions",
        "description": "Nutritious homemade meals shared by a local household.",
        "quantity": 6,
        "unit": "portions",
        "city": "Kochi",
        "locality": "Kakkanad",
        "source_type": "Household",
        "community": "Public",
        "food_type": "Vegetarian",
        "pickup_deadline": "Today, 7:45 PM",
        "status": "available",
        "meals_rescued": 0,
    },
        {
        "id": 113,
        "food_name": "Student event meal boxes",
        "description": "Sealed surplus meal boxes from a student club event.",
        "quantity": 15,
        "unit": "boxes",
        "city": "Bhopal",
        "locality": "MANIT Campus",
        "source_type": "Community event",
        "community": "Students",
        "food_type": "Vegetarian",
        "pickup_deadline": "Today, 8:00 PM",
        "status": "available",
        "meals_rescued": 0,
    },
    {
        "id": 114,
        "food_name": "Hostel mess dinner",
        "description": "Extra homemade-style dinner portions from a hostel mess.",
        "quantity": 10,
        "unit": "portions",
        "city": "Bhopal",
        "locality": "Bhopal Hostel Area",
        "source_type": "Hostel or mess",
        "community": "Students",
        "food_type": "Vegetarian",
        "pickup_deadline": "Today, 9:00 PM",
        "status": "available",
        "meals_rescued": 0,
    },
    ]


@app.get("/")
def read_root():
    return {
        "message": "Welcome to the FoodLoop API",
        "status": "running",
    }


@app.get("/api/health")
def health_check():
    return {
        "status": "healthy",
        "service": "FoodLoop backend",
    }


@app.get("/api/listings")
def get_listings(
    city: Optional[str] = None,
    locality: Optional[str] = None,
    source_type: Optional[str] = None,
    food_type: Optional[str] = None,
    community: Optional[str] = None,
    search: Optional[str] = None,
):
    filtered = listings

    if city:
        filtered = [
            item for item in filtered
            if item["city"].lower() == city.lower()
        ]

    if locality:
        filtered = [
            item for item in filtered
            if locality.lower() in item["locality"].lower()
        ]

    if source_type:
        filtered = [
            item for item in filtered
            if item["source_type"].lower() == source_type.lower()
        ]

    if food_type:
        filtered = [
            item for item in filtered
            if item["food_type"].lower() == food_type.lower()
        ]

    if community:
        filtered = [
            item for item in filtered
            if community.lower() in item["community"].lower()
        ]

    if search:
        search_text = search.lower()

        filtered = [
            item for item in filtered
            if (
                search_text in item["food_name"].lower()
                or search_text in item["description"].lower()
                or search_text in item["city"].lower()
                or search_text in item["locality"].lower()
                or search_text in item["community"].lower()
            )
        ]

    return {
        "count": len(filtered),
        "listings": filtered,
    }


@app.post("/api/listings")
def create_listing(new_listing: ListingCreate):
    listing = new_listing.model_dump()

    listing["id"] = max([item["id"] for item in listings], default=0) + 1
    listing["status"] = "available"
    listing["meals_rescued"] = 0
    listing["created_at"] = datetime.now().isoformat()

    listings.append(listing)

    return {
        "success": True,
        "message": "Food listing created successfully.",
        "listing": listing,
    }


@app.post("/api/listings/{listing_id}/reserve")
def reserve_listing(listing_id: int):
    for listing in listings:
        if listing["id"] == listing_id:
            if listing["quantity"] <= 0:
                return {
                    "success": False,
                    "message": "This listing is no longer available.",
                }

            listing["quantity"] -= 1
            listing["meals_rescued"] += 1

            if listing["quantity"] == 0:
                listing["status"] = "claimed"

            return {
                "success": True,
                "message": f"You reserved 1 {listing['unit']} of {listing['food_name']}.",
                "listing": listing,
            }

    return {
        "success": False,
        "message": "Food listing not found.",
    }


@app.get("/api/impact")
def get_impact():
    total_meals_rescued = sum(
        item["meals_rescued"] for item in listings
    )

    active_listings = sum(
        1 for item in listings
        if item["status"] == "available" and item["quantity"] > 0
    )

    estimated_kg_saved = round(total_meals_rescued * 0.35, 1)

    cities = len(set(item["city"] for item in listings))

    return {
        "meals_rescued": total_meals_rescued,
        "active_listings": active_listings,
        "estimated_kg_saved": estimated_kg_saved,
        "cities_connected": cities,
    }
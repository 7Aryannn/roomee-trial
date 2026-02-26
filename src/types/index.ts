export type PropertyType = 'Apartment' | 'Independent House' | 'PG/Hostel' | 'Studio';
export type FurnishingStatus = 'Fully Furnished' | 'Semi-Furnished' | 'Unfurnished';

export interface Property {
    id: string;
    title: string;
    description: string;
    type: PropertyType;
    price: number;
    deposit: number;
    location: {
        city: string;
        area: string;
        address: string;
        coordinates: [number, number];
    };
    bedrooms: number;
    bathrooms: number;
    sqft: number;
    furnishing: FurnishingStatus;
    amenities: string[];
    images: string[];
    landlord: {
        name: string;
        rating: number;
        responseTime: string;
        memberSince: string;
        avatar: string;
    };
    tags: string[];
    availableFrom: string;
    isBachelorFriendly: boolean;
    nearMetro: boolean;
    minLeaseMonths: number;
}

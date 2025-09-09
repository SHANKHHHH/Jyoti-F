import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Star } from "lucide-react";
import { useCart } from "../contexts/CartContext";

// Product image imports
import AirOnTowerAC1 from "../assets/_AIRONTOWERAC(2).png";
import AirOnTowerAC2 from "../assets/_AIRONTOWERAC.png";
import AirOnTowerCooler from "../assets/_AIRONTOWERAIRCOOLER.png";
import AirCooler from "../assets/AIRCOOLER.png";
// import AironWater from "../assets/AIRONWATER.png";
import MISTFANS1 from "../assets/MISTFANS1.png";
import ductac from "../assets/ductac.png";
import Pedestal from "../assets/Pedestal Fan.png";

import MensUrinals from "../assets/3MENSURINELS.png";
import Hi from "../assets/Bio Loo - Hi Tech Wc With Health Faucet.png"

import BioLogo from "../assets/Bio Loo - Logo.png";
import AirLogo from "../assets/AIR ON Logo.png"

import BioLooMainsIWC1 from "../assets/biolooportabletoiletmainsconnectioniwc-1.png";
// import BioLooMainsIWC2 from "../assets/biolooportabletoiletmainsconnectioniwc-2.png";
// import BioLooMainsIWC3 from "../assets/biolooportabletoiletmainsconnectioniwc-3.png";
// import BioLooMainsWC1 from "../assets/biolooportabletoiletmainsconnectionwc-1.png";
// import BioLooMainsWC2 from "../assets/biolooportabletoiletmainsconnectionwc-2.png";

import Handicap from "../assets/BIO LOO handicap Toilet.png";
import Handicap1 from "../assets/Bio Loo - Handicap Toilet.png"

import BioLooPrimeFemale1 from "../assets/BIOLOOPRIMELUXURYFEMALECONTAINER(1).png";
import BioLooPrimeFemale2 from "../assets/BIOLOOPRIMELUXURYFEMALECONTAINER(2).png";
import BioLooPrimeFemale3 from "../assets/BIOLOOPRIMELUXURYFEMALECONTAINER(3).png";
import BioLooPrimeFemale4 from "../assets/BIOLOOPRIMELUXURYFEMALECONTAINER(4).png";
import BioLooPrimeFemale5 from "../assets/BIOLOOPRIMELUXURYFEMALECONTAINER(5).png";
import BioLooPrimeFemale6 from "../assets/BIOLOOPRIMELUXURYFEMALECONTAINER(6).png";
import BioLooPrimeFemale7 from "../assets/BIOLOOPRIMELUXURYFEMALECONTAINER(7).png";

import BioLooPrimeMale1 from "../assets/BIOLOOPRIMELUXURYMALECONTAINER+(1).png";
import BioLooPrimeMale2 from "../assets/BIOLOOPRIMELUXURYMALECONTAINER+(2).png";
import BioLooPrimeMale3 from "../assets/BIOLOOPRIMELUXURYMALECONTAINER+(3).png";
import BioLooPrimeMale4 from "../assets/BIOLOOPRIMELUXURYMALECONTAINER+(4).png";
import BioLooPrimeMale5 from "../assets/BIOLOOPRIMELUXURYMALECONTAINER+(5).png";
import BioLooPrimeMale6 from "../assets/BIOLOOPRIMELUXURYMALECONTAINER+(6).png";
import BioLooPrimeMale7 from "../assets/BIOLOOPRIMELUXURYMALECONTAINER+(7).png";
// import BioLooPrimeMalePlus from "../assets/BIOLOOPRIMELUXURYMALECONTAINER+.png";

// import BioLooShower1 from "../assets/BIOLOOSHOWERCABIN(1).png";
import BioLooShower2 from "../assets/BIOLOOSHOWERCABIN(2).png";
import BioLooShower3 from "../assets/BIOLOOSHOWERCABIN(3).png";
import BioLooShowerMain from "../assets/BIOLOOSHOWERCABIN.png";

import BioMensUrinal1 from "../assets/BIOMENSURINALS3IN1(1).png";
// import BioMensUrinal2 from "../assets/BIOMENSURINALS3IN1(2).png";
// import BioMensUrinal3 from "../assets/BIOMENSURINALS3IN1.png";

import PatioHeater1 from "../assets/PATIOHEATER1.png";
// import PatioHeater2 from "../assets/PATIOHEATER2.png";
// import PatioHeater3 from "../assets/PATIOHEATER3.png";

import PMC1 from "../assets/PMC-1.png";
import PMC2 from "../assets/PMC-2.png";
import PMC3 from "../assets/PMC-3.png";
import PMC4 from "../assets/PMC4.png";

import FireExt3 from "../assets/FIREEXTINGUISHER3.png";
import Fire from "../assets/Fire Extinguisher CO2 GAS.png";
// Product type
export type Product = {
  id: string;
  name: string;
  price: number;
  rating: number;
  reviews: number;
  category: string;
  description?: string;
  descriptions: string[];
  image: string[];
};

// Products array
export const products: Product[] = [
  {
    id: "0ac8526f-ed0c-4d09-80e8-99298713a09e",
    name: "Bio Loo Prime Luxury Male Container",
    price: 60000,
    rating: 5,
    reviews: 23,
    category: "Containers",
    description: "SPECIFICATIONS",
    descriptions: [
      "Ideal for events and gatherings of 250–300 people.",
      "Container size: 20L x 8W x 8H ft, approx. 5.5 tons in weight.",
      "Entrance door provided on the 8 ft width side.",
      "Fitted with 2 western commodes with flush tanks.",
      "Includes health faucet, tissue roll hanger, and cloth hanger.",
      "8 urinals with individual partitions for hygiene.",
      "2 sensor-based handwash basins with liquid soap, mirror, towel dispenser, dustbin, and dressing mirror.",
      "Equipped with 1.5-ton air conditioner for comfort.",
      "Transported using 20 ft flat-body truck and 15-ton Hydra crane.",
      "Power consumption of approx. 7.5 KVA per unit.",
      "Placement requires 3 ft ground digging for grey water drums; space needed per container: 30 x 15 ft.",
      "Water requirement: 200 litres fresh water with minimum 200-litre drum.",
      "Luxury interiors with good lighting and aromatic diffusers.",
      "Exclusively designed for premium user experience with modern facilities.",
    ],
    image: [BioLooPrimeMale1, BioLooPrimeMale2, BioLooPrimeMale3],
  },
  // {
  //   id: "10bf0722-cb7e-4919-939d-ca9eec02dbb3",
  //   name: "Portable AC",
  //   price: 4500,
  //   rating: 5,
  //   reviews: 23,
  //   category: "Containers",
  //   description: "SPECIFICATIONS",
  //   descriptions: [
  //     "Capacity: 1 Ton",
  //     "Coverage Area: Suitable for rooms up to 10 ft x 12 ft (120 sq. ft).",
  //     "Condenser Type: Copper condenser for efficient cooling.",
  //     "Power Consumption: 1404 W",
  //     "Cooling Technology: Hydrophilic golden fins for better performance and durability.",
  //     "Hygiene Features: Anti-bacterial silver coating for healthy air.",
  //     "Safety Feature: Anti-freeze thermostat for protection.",
  //     "Refrigerant: R410A eco-friendly refrigerant.",
  //   ],
  //   image: [AirOnTowerAC1, AirOnTowerAC2],
  // },
  {
    id: "153a5953-eac5-4b8a-b546-16337b37ba45",
    name: "Pedestal Fan",
    price: 750,
    rating: 4.5,
    reviews: 23,
    category: "Containers",
    description: "SPECIFICATIONS",
    descriptions: [
      "Motor: 3-speed full copper wiring motor for durability.",
      "Power Consumption: 165 W / 250 W.",
      "Blades: Heavy-duty aluminum blade for powerful airflow.",
      "Cooling Capacity: Effective cooling up to 500 sq. ft.",
      "Water Tank: 45-litre capacity for extended use.",
      "Oscillation: 70° oscillating fan for wide air coverage.",
      "Weight: Gross weight approximately 25 kgs.",
    ],
    image: [Pedestal],
  },
  {
    id: "18bccb6d-c31e-49d0-8d5d-91e959c2b403",
    name: "Airon Mist Fan",
    price: 2000,
    rating: 4.5,
    reviews: 23,
    category: "Containers",
    description: "SPECIFICATIONS",
    descriptions: [
      "Motor: 3-speed full copper wiring motor for durability.",
      "Power Consumption: 165 W / 250 W.",
      "Blades: Heavy-duty aluminum blade for powerful airflow.",
      "Cooling Capacity: Effective cooling up to 500 sq. ft.",
      "Water Tank: 45-litre capacity for extended use.",
      "Oscillation: 70° oscillating fan for wide air coverage.",
      "Weight: Gross weight approximately 25 kgs.",
    ],
    image: [MISTFANS1],
  },
  {
    id: "1959b7e4-20d4-4244-9f46-461f430e22f1",
    name: "Airon Tower Cooler",
    price: 3000,
    rating: 4.5,
    reviews: 23,
    category: "Containers",
    description: "SPECIFICATIONS",
    descriptions: [
      "Power Consumption: Low power usage of 217 watts x 2 only.",
      "Coverage Area: Designed to cover large spaces effectively.",
      "Air Throw: Powerful 20m / 20m* air throw for faster cooling.",
      "Tank Capacity: 125-litre water tank for long cooling duration.",
      "Build Quality: Robust weather-resistant body for extended life.",
      "Cooling Pads: 3-side high efficiency honeycomb pads for superior cooling.",
      "Mobility: Lockable heavy-duty wheels for easy movement and stability.",
    ],
    image: [AirOnTowerCooler],
  },
  {
    id: "38be951b-1653-4f26-a886-f48847e58589",
    name: "Ductable AC – 11 Ton",
    price: 33000,
    rating: 5,
    reviews: 23,
    category: "Containers",
    description: "SPECIFICATIONS",
    descriptions: [
      "Capacity: 11 Ton high static pressure duct type air conditioner.",
      "Control Operation: Newly wired LCD-based remote control.",
      "Performance: Works efficiently even at 48°C high ambient temperature without tripping.",
      "Air Flow: 4000 CFM for powerful air circulation.",
      "Rated Input Power: 9500 W.",
      "Running Current: 17 A.",
      "Power Source: 415 V / 3 phase / 50 Hz.",
      "Noise Level: Indoor Unit – 53 dB; Outdoor Unit – 64 dB.",
      "Indoor Unit Dimensions: 156 x 70 x 45 cm; Weight: 90 kg.",
      "Outdoor Unit Dimensions: 135 x 65 x 110 cm; Weight: 160 kg.",
      "Refrigerant: R-410 eco-friendly refrigerant.",
    ],
    image: [ductac],
  },
  {
    id: "40a0793a-8489-42a8-a296-4d93d2c9eadf",
    name: "Bio Loo Prime Luxury Female Container",
    price: 60000,
    rating: 5,
    reviews: 23,
    category: "Containers",
    description: "SPECIFICATIONS",
    descriptions: [
      "Capacity: Suitable for 200–250 people.",
      "Size & Weight: Container size 20L x 8W x 8H ft, approx. 5.5 tons.",
      "Entrance & Toilets: Entrance door on 8 ft width side with 4 western commodes, flush tanks, health faucet, tissue roll hanger, and cloth hanger.",
      "Handwash & Accessories: 2 sensor-based basins with liquid soap, mirror, towel dispenser, dustbin, and dressing mirror.",
      "Air Conditioning: Equipped with 1.5-ton air conditioner for comfort.",
      "Transportation: Requires 20 ft flat-body truck and 15-ton Hydra crane.",
      "Power Consumption: Approx. 7.5 KVA per container.",
      "Placement: Needs 3 ft ground digging for grey water drums; space required per container 30 x 15 ft.",
      "Water Requirement: 200 litres of fresh water with minimum 200-litre drum.",
      "Value Added: Luxury interiors, premium lighting, aromatic diffusers, and modern facilities.",
    ],
    image: [
      BioLooPrimeFemale1,
      BioLooPrimeFemale3,
      BioLooPrimeFemale4,
      BioLooPrimeFemale5,
      BioLooPrimeFemale6,
      BioLooPrimeFemale7,
    ],
  },
  {
    id: "4166e649-42ae-4506-9063-526b9122717a",
    name: "Bio Loo Hi-Tech WC with health faucet",
    price: 3500,
    rating: 4.5,
    reviews: 23,
    category: "Containers",
    description: "SPECIFICATIONS",
    descriptions: [
      "Product Type: Bio-Loo Hi-Tech WC.",
      "Design: Modern, eco-friendly toilet solution.",
      "Features: Equipped with health-faucet for convenience.",
      "Usage: Hygienic and user-friendly for various applications.",
      "Value Added: Low-maintenance, durable, and sustainable sanitation option.",
    ],
    image: [Hi],
  },
  {
    id: "43921a8e-c04c-4d62-acc5-e7ae94c38462",
    name: "Bio Loo Prime Luxury 2-in-1 Container",
    price: 60000,
    rating: 4.5,
    reviews: 23,
    category: "Containers",
    description: "SPECIFICATIONS",
    descriptions: [
      "Capacity: Suitable for 200–250 people.",
      "Size & Weight: Container size 20L x 8W x 8H ft, approx. 5.5 tons.",
      "Entrances: 2 separate entrance doors on 20 ft side for male and female sections.",
      "Male Section: 1 western commode with flush tank, health faucet, tissue roll hanger, cloth hanger, 3 urinals with partition, 1 sensor-based handwash basin with liquid soap, mirror, towel dispenser, dustbin, dressing mirror, and 1.5-ton air conditioner.",
      "Female Section: 2 western commodes with flush tanks, health faucet, tissue roll hanger, cloth hanger, 1 sensor-based handwash basin with liquid soap and mirror, plus 1.5-ton air conditioner.",
      "Transportation: Requires 20 ft flat-body truck and 15-ton Hydra crane.",
      "Power Consumption: Approx. 7.5 KVA per container.",
      "Placement: Needs 3 ft ground digging for grey water drums; space required per container 30 x 15 ft.",
      "Water Requirement: 200 litres of fresh water with minimum 200-litre drum.",
      "Value Added: Luxury interiors, premium lighting, aromatic diffusers, and modern facilities.",
    ],
    image: [BioLooPrimeFemale2],
  },
  {
    id: "44b109ea-e93d-4a63-a99c-35d1acf9d542",
    name: "Fire Extinguisher CO2 GAS",
    price: 250,
    rating: 4.5,
    reviews: 23,
    category: "Containers",
    description: "SPECIFICATIONS",
    descriptions: [
      "Product Type: Portable fire extinguisher.",
      "Safety Standard: Designed as per ISI/CE certified quality norms.",
      "Extinguishing Agent: Available in Dry Powder / CO₂ / Foam variants.",
      "Capacity: Multiple sizes (2kg, 4kg, 6kg, 9kg) for different requirements.",
      "Operation: Easy-to-use squeeze grip mechanism with pressure gauge indicator.",
      "Build Quality: Durable, corrosion-resistant body with long service life.",
      "Application: Suitable for homes, offices, factories, vehicles, and public spaces.",
      "Value Added: Provides quick response to fire hazards ensuring safety and protection.",
    ],
    image: [Fire],
  },
  {
    id: "5695b7b7-6cf4-4fb1-9405-92a11e4312e5",
    name: "Bio Loo Portable Toilet Mains Connection WC",
    price: 2000,
    rating: 4.5,
    reviews: 23,
    category: "Containers",
    description: "SPECIFICATIONS",
    descriptions: [
      "Ideal for site offices, storage, or housing staff.",
      "Heavy-duty steel construction for security.",
      "Weather resistant design for any climate.",
      "Easy to transport and install at your site.",
      "Spacious interior with customizable layout.",
      "Low maintenance, long service life.",
      "Lockable doors & windows for added safety.",
      "Perfect for construction, events, or remote locations.",
    ],
    image: [
      BioLooPrimeMale1,
      BioLooPrimeMale2,
      BioLooPrimeMale3,
      BioLooPrimeMale4,
      BioLooPrimeMale5,
      BioLooPrimeMale6,
      BioLooPrimeMale7,
    ],
  },
  {
    id: "5983234c-8de9-448b-a685-f98749ab2dff",
    name: "PM Container",
    price: 25000,
    rating: 5,
    reviews: 23,
    category: "Containers",
    description: "SPECIFICATIONS",
    descriptions: [
      "Use: High-traffic male public spaces",
      "Size: W x 08 L x 06x H 8ft. Weight: Approximately 600 kg",
      "Features: 1 Entrance Door at 8 Feet Side",
      "Urinal: 1 Western Commode with flush tank",
      "Accessories: 1 Health Tissue roll hanger, Cloth Hanger",
      "Handwash: 1 Sensor Handwash Basin, Liquid Handwash, Mirror, Towel Dispenser, Dustbin",
      "Climate Control: 1 ton Air conditioner",
      "Transportation: 20 Feet Flat body truck per unit and Hydra required",
      "Power: 5 KVA per container",
      "Placement: Minimum 1.5 feet high space required (12 x 10 feet area)",
      "Water Usage: 200 litres of fresh water with a minimum of 200 litres drum",
      "Services: Unique and exclusively made with luxury interiors, AC, good lightings, and aromatic diffuser",
    ],
    image: [PMC1, PMC2, PMC3, PMC4],
  },
  {
    id: "59ff7f01-89fa-4c40-a4a6-d4316b1d951a",
    name: "Bio Loo Handicap Toilet",
    price: 5000,
    rating: 4.5,
    reviews: 23,
    category: "Containers",
    description: "SPECIFICATIONS",
    descriptions: [
      "Product Type: Bio-Loo handicap-friendly restroom.",
      "Accessibility: Specially designed with wider entrance and easy access for wheelchairs.",
      "Features: Equipped with western commode, health faucet, tissue roll hanger, and support handrails for safety.",
      "Design: Spacious interior with slip-resistant flooring for user comfort.",
      "Hygiene: Includes proper ventilation, handwash facility, and dustbin.",
      "Value Added: Durable, low-maintenance, eco-friendly sanitation solution for differently-abled users.",
    ],
    image: [Handicap1, Handicap],
  },
  {
    id: "8ca418c7-c129-4d2e-a825-985b3b42edce",
    name: "Patio Heater",
    price: 4500,
    rating: 4.5,
    reviews: 23,
    category: "Containers",
    description: "SPECIFICATIONS",
    descriptions: [
      "Product Type: Outdoor patio heater for all-weather comfort.",
      "Heating Capacity: Powerful radiant heating suitable for open spaces.",
      "Fuel Type: Works with LPG/propane gas cylinder (optional electric variants available).",
      "Ignition: Easy push-button piezo ignition system for quick start.",
      "Adjustable Heat: Multiple heat settings with adjustable flame control.",
      "Safety Features: Equipped with tip-over protection and flame failure device.",
      "Coverage Area: Provides warmth across a wide outdoor area, ideal for patios, cafes, gardens, and events.",
      "Build Quality: Stainless steel / powder-coated body for durability and weather resistance.",
      "Mobility: Fitted with smooth-rolling wheels for easy relocation.",
    ],
    image: [PatioHeater1],
  },
  {
    id: "a3c056e3-fdec-44f4-bf13-b953c0605f64",
    name: "Airon Water-Air Cooler 110 Ltr",
    price: 2500,
    rating: 4.5,
    reviews: 23,
    category: "Containers",
    description: "SPECIFICATIONS",
    descriptions: [
      "Water Tank Capacity: 110 litres for extended cooling performance.",
      "Power Consumption: 750 watts efficient operation.",
      "Water Consumption: 8–10 litres per hour.",
      "Fan Type: Axial fan with 3 speeds and 4 blades for powerful airflow.",
      "Cooling Coverage: Effective cooling up to 170 sq. ft with 22,000 m³/h air flow.",
      "Performance: Reduces temperature by up to 10°C.",
      "Dimensions: 3.6 ft x 2.2 ft x 5.3 ft (height).",
      "Weight: Gross weight approximately 55 kg.",
    ],
    image: [AirCooler],
  },
  {
    id: "b1acc26b-678a-416f-95bd-4fa941d7d7e1",
    name: "Bio Mens Urinals 3-in-1",
    price: 4500,
    rating: 4.5,
    reviews: 23,
    category: "Containers",
    description: "SPECIFICATIONS",
    descriptions: [
      "Product Type: Bio-toilet based men’s urinal (3-in-1 design).",
      "Capacity: Accommodates 3 users simultaneously with separate urinal points.",
      "Design: Space-saving, hygienic structure with durable build quality.",
      "Features: Fitted with partitions for privacy, health faucet/flush system, and proper drainage.",
      "Eco-Friendly: Bio-digester technology ensures sustainable waste management.",
      "Application: Ideal for events, construction sites, public gatherings, and outdoor setups.",
      "Value Added: Low-maintenance, odor-free, and environmentally friendly sanitation solution.",
    ],
    image: [BioMensUrinal1],
  },
  {
    id: "b75c3119-dfc1-41da-ab1d-cc89866aa7c4",
    name: "Bio Loo Portable Chemical toilet wc Lexus",
    price: 2500,
    rating: 4.5,
    reviews: 23,
    category: "Containers",
    description: "SPECIFICATIONS.",
    descriptions: [
      "Product Type: Bio Loo portable chemical toilet – WC Lexus model.",
      "Design: Compact, lightweight, and easy to install at any location.",
      "Features: Equipped with western commode, health faucet, flush system, and ventilation.",
      "Tank System: Built-in chemical tank for effective waste management and odor control.",
      "Portability: Designed for easy relocation and quick setup.",
      "Application: Suitable for outdoor events, construction sites, highways, and remote areas.",
      "Build Quality: Durable, hygienic, and low-maintenance sanitation solution with modern comfort.",
    ],
    image: [BioLooMainsIWC1],
  },
  {
    id: "cbe9b5e9-87e5-49db-b208-f88a92385cfc",
    name: "Fire Extinguisher NITROGEN GAS",
    price: 350,
    rating: 4.5,
    reviews: 23,
    category: "Containers",
    description: "SPECIFICATIONS",
    descriptions: [
      "Product Type: Nitrogen gas fire extinguisher.",
      "Extinguishing Agent: Uses high-pressure nitrogen gas for rapid fire suppression.",
      "Design: Portable, durable cylinder with ergonomic discharge nozzle.",
      "Operation: Quick-release mechanism for immediate action during fire emergencies.",
      "Safety: Leaves no residue, non-corrosive, and safe for electrical equipment.",
      "Capacity: Available in multiple sizes as per requirement (2kg, 4kg, 6kg, 9kg).",
      "Applications: Ideal for laboratories, data centers, electrical rooms, and sensitive equipment areas.",
      "Value Added: Eco-friendly, efficient, and reliable firefighting solution.",
    ],
    image: [FireExt3],
  },
  {
    id: "e42cf554-56ad-4c3e-9052-24f69b3a97ae",
    name: "Tower AC (5 Ton)",
    price: 15000,
    rating: 4.5,
    reviews: 23,
    category: "Containers",
    description: "SPECIFICATIONS",
    descriptions: [
      "Capacity: 5.5 Ton air conditioning unit.",
      "Coverage Area: Effective cooling for spaces up to 60 ft x 50 ft.",
      "Control & Features: Touch control panel, easy-clean filler, and low noise operation.",
      "Swing Type: 4-way swing for uniform air distribution.",
      "Rated Input Power: 5490 W.",
      "Noise Level: Indoor Unit – 52 dB; Outdoor Unit – 64 dB.",
      "Airflow: Up to 2300 m³/h for powerful circulation.",
      "Indoor Unit Dimensions: 55 x 35 x 180 cm; Weight 51 kg.",
      "Outdoor Unit Dimensions: 94.6 x 41 x 81 cm; Weight 82 kg.",
      "Power Source: 3-phase operation.",
      "Rated Input Current: 9.02 A.",
      "Refrigerant: R-410A eco-friendly refrigerant.",
    ],
    image: [AirOnTowerAC1, AirOnTowerAC2],
  },
  {
    id: "ef4f9ee4-0f92-4700-99f7-f45e0f28d7bd",
    name: "Bio Loo Shower Cabin",
    price: 2500,
    rating: 4.5,
    reviews: 23,
    category: "Containers",
    description: "SPECIFICATIONS",
    descriptions: [
      "Product Type: Bio-Loo portable shower cabin.",
      "Design: Compact and user-friendly structure with modern interiors.",
      "Features: Equipped with shower fittings, water connection, drainage system, and ventilation.",
      "Comfort: Includes soap/shampoo holder, mirror, and hooks for convenience.",
      "Application: Suitable for events, construction sites, outdoor locations, and temporary setups.",
      "Build Quality: Durable, hygienic, and easy-to-clean body for long-term use.",
      "Value Added: Provides a private, comfortable, and eco-friendly bathing solution anywhere.",
    ],
    image: [BioLooShower2, BioLooShower3, BioLooShowerMain],
  },
  {
    id: "fa50d3bf-060e-4739-abc7-411ca43c5cd0",
    name: "Bio Loo Portable Chemical Toilet ECO",
    price: 2500,
    rating: 4.5,
    reviews: 23,
    category: "Containers",
    description: "SPECIFICATIONS",
    descriptions: [
      "Product Type: Bio-Loo portable chemical toilet – ECO model.",
      "Design: Compact, lightweight, and eco-friendly structure for easy installation.",
      "Features: Equipped with western commode, health faucet, flush system, and ventilation.",
      "Tank System: Chemical-based waste treatment tank for odor control and hygiene.",
      "Portability: Easy to transport, install, and relocate as needed.",
      "Application: Suitable for outdoor events, construction sites, highways, and remote areas.",
      "Build Quality: Durable, low-maintenance body designed for regular usage.",
      "Value Added: Cost-effective, hygienic, and environmentally sustainable sanitation solution.",
    ],
    image: [MensUrinals],
  },
];

const ProductsPage: React.FC = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  // Filter state: all | bio | airon
  const [filter, setFilter] = useState<"all" | "bio" | "airon">("all");
  const [imageIndexes, setImageIndexes] = useState<{ [id: string]: number }>({});
  // New state for sort order: "asc" | "desc" | null (null means no sort by price)
  const [priceSortOrder, setPriceSortOrder] = useState<"asc" | "desc" | null>(null);
  // State for image modal
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const handleFilterChange = (type: "all" | "bio" | "airon") => {
    setFilter(type);
    // Reset price sort order when filter changes
    setPriceSortOrder(null);
  };



  // Define sort order for "all" filter
  const sortOrder: { [key: string]: number } = {
    "Bio Loo Portable Chemical toilet wc Lexus": 1,
    "Bio Loo Hi-Tech WC with health faucet": 2,
    "Bio Loo Portable Chemical Toilet ECO": 3,
    "Bio Loo Handicap Toilet": 4,
  };

  // Filter products according to selected filter
  const filteredProducts = products.filter((product) => {
    if (filter === "bio") {
      return (
        product.name.toLowerCase().includes("bio loo") ||
        product.category.toLowerCase().includes("bio loo") ||
        product.name.toLowerCase().includes("bio")
      );
    } else if (filter === "airon") {
      return (
        product.name.toLowerCase().includes("airon") ||
        product.category.toLowerCase().includes("airon") ||
        product.name.toLowerCase().includes("ac") ||
        product.category.toLowerCase().includes("ac")
      );
    }
    return true; // all items
  }).sort((a, b) => {
    // First, apply price sorting if active
    if (priceSortOrder) {
      if (priceSortOrder === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    }
    // Otherwise, apply default sorting for "all" filter
    if (filter === "all") {
      const orderA = sortOrder[a.name] || 999;
      const orderB = sortOrder[b.name] || 999;
      return orderA - orderB;
    }
    return 0; // no sort for other filters
  });
  // Image slider handlers
  const handlePrevImage = (id: string, images: string[]) => {
    setImageIndexes((prev) => ({
      ...prev,
      [id]: prev[id] && prev[id] > 0 ? prev[id] - 1 : images.length - 1,
    }));
  };
  const handleNextImage = (id: string, images: string[]) => {
    setImageIndexes((prev) => ({
      ...prev,
      [id]: prev[id] !== undefined && prev[id] < images.length - 1 ? prev[id] + 1 : 0,
    }));
  };
  const handleRentClick = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image[imageIndexes[product.id] ?? 0],
      action: "rent",
      discount: "",
    });
    navigate("/cart");
  };

  // Hover handlers for image modal
  const handleImageHover = (imageSrc: string, event: React.MouseEvent) => {
    setSelectedImage(imageSrc);
  };

  const handleImageLeave = () => {
    setSelectedImage(null);
  };
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Filter UI replaced by logos */}
        <div className="mb-6 flex gap-6 justify-center items-center">
          {/* All filter: text */}
          <button
            onClick={() => handleFilterChange("all")}
            className={`rounded p-1 transition border-2 ${
              filter === "all" ? "border-green-600" : "border-transparent"
            } hover:border-green-400`}
            aria-label="All Products"
          >
            <span
              className={`font-semibold text-gray-700 ${
                filter === "all" ? "text-green-600" : ""
              }`}
            >
              All
            </span>
          </button>

          {/* Bio logo filter */}
          <button
            onClick={() => handleFilterChange("bio")}
            className={`rounded p-1 transition border-2 ${
              filter === "bio" ? "border-green-600" : "border-transparent"
            } hover:border-green-400`}
            aria-label="Bio Loos"
          >
            <img
              src={BioLogo}
              alt="Bio Loos Logo"
              className="h-10 w-auto object-contain"
              style={{ filter: filter === "bio" ? "none" : "grayscale(80%)" }}
            />
          </button>

          {/* Airon logo filter */}
          <button
            onClick={() => handleFilterChange("airon")}
            className={`rounded p-1 transition border-2 ${
              filter === "airon" ? "border-green-600" : "border-transparent"
            } hover:border-green-400`}
            aria-label="Airon"
          >
            <img
              src={AirLogo}
              alt="Airon Logo"
              className="h-10 w-auto object-contain"
              style={{ filter: filter === "airon" ? "none" : "grayscale(80%)" }}
            />
          </button>

          {/* Price sort dropdown */}
          <select
            value={priceSortOrder || ""}
            onChange={(e) => setPriceSortOrder(e.target.value === "" ? null : e.target.value as "asc" | "desc")}
            className={`rounded p-2 transition border-2 ${
              priceSortOrder ? "border-green-600 bg-green-50" : "border-gray-300"
            } hover:border-green-400 font-semibold text-sm ${
              priceSortOrder ? "text-green-600" : "text-gray-700"
            }`}
            aria-label="Sort by Price"
          >
            <option value="">Sort by Price</option>
            <option value="asc">Price: Low to High ↑</option>
            <option value="desc">Price: High to Low ↓</option>
          </select>
        </div>
        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="relative bg-white rounded-lg shadow-sm p-6 flex flex-col md:flex-row gap-6 overflow-hidden"
            >
              {/* Product Image Slider */}
              <div className="relative w-full md:w-[175px] h-[233px] bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden mx-auto">
                {/* Left Arrow */}
                {product.image.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handlePrevImage(product.id, product.image)}
                    className="absolute left-2 z-10 bg-white/80 rounded-full p-1"
                    style={{ top: "50%", transform: "translateY(-50%)" }}
                  >
                    ‹
                  </button>
                )}
                {/* Display current image */}
                <img
                  src={product.image[imageIndexes[product.id] ?? 0]}
                  alt={product.name}
                  className="w-[175.21px] h-[233.61px] object-cover rounded-lg cursor-pointer"
                  style={{
                    width: "100%",
                    height: "100%",
                    maxWidth: "175.21px",
                    maxHeight: "233.61px",
                    objectFit: "cover",
                  }}
                  onMouseEnter={(e) => handleImageHover(product.image[imageIndexes[product.id] ?? 0], e)}
                  onMouseLeave={handleImageLeave}
                />
                {/* Right Arrow */}
                {product.image.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleNextImage(product.id, product.image)}
                    className="absolute right-2 z-10 bg-white/80 rounded-full p-1"
                    style={{ top: "50%", transform: "translateY(-50%)" }}
                  >
                    ›
                  </button>
                )}
                {/* Dots */}
                {product.image.length > 1 && (
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                    {product.image.map((_, idx) => (
                      <div
                        key={idx}
                        className={`w-2 h-2 rounded-full ${
                          idx === (imageIndexes[product.id] ?? 0)
                            ? "bg-green-600"
                            : "bg-white/60"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
              {/* Product Details */}
              <div className="flex-1">
                <h3 className="font-bold text-xl mb-2">{product.name}</h3>
                {/* Rating */}
                <div className="flex items-center space-x-2 mb-1">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    ({product.reviews} reviews)
                  </span>
                </div>
                <div className="text-sm text-gray-700 mb-3">
                  {product.description}
                </div>
                {/* Bullet point details */}
                {Array.isArray(product.descriptions) &&
                  product.descriptions.length > 0 && (
                    <div className="mb-4">
                      <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
                        {product.descriptions.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                {/* Price */}
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-2xl font-bold text-green-600">
                    ₹{product.price.toLocaleString()}
                  </span>
                </div>
                {/* Action Buttons */}
                <div className="flex flex-col md:flex-row gap-3 w-full">
                  <button
                    onClick={() => handleRentClick(product)}
                    className="w-full md:w-auto bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center justify-center"
                  >
                    RENT
                  </button>
                </div>
              </div>
            </div>
          ))}
          {filteredProducts.length === 0 && (
            <p className="text-center text-gray-500 col-span-full">
              No products found for selected filter.
            </p>
          )}
        </div>
      </div>

      {/* Hover Image Modal */}
      {selectedImage && (
        <div
          className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-4 max-w-lg max-h-[80vh] overflow-auto">
            <img
              src={selectedImage}
              alt="Selected Product"
              className="w-full h-auto object-contain rounded"
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default ProductsPage;

"use client";

import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, Info } from 'lucide-react';

interface SubProduct {
    id: number;
    name: string;
    image: string;
    description: string;
    details: string[];
}

interface MainProduct {
    id: number;
    name: string;
    image: string;
    description: string;
    subProducts: SubProduct[];
}

const mainProducts: MainProduct[] = [
    {
        id: 1,
        name: 'DRAWER CHANNEL',
        image: 'https://www.habloindia.com/images/products/DRAWER%20CHANNEL.jpg',
        description: '',
        subProducts: [
            {
                id: 101,
                name: 'HABLO 35 kg Drawer Channel',
                image: 'https://www.habloindia.com/images/subproduct/DRAWER%20CHANNEL.jpg',
                description: 'Smooth. Silent. Strong.',
                details: [
                    'HABLO 35 kg Drawer Channel' +
                    '' +
                    'High Load Capacity (35 kg):Designed for medium-to-heavy drawers, ensuring smooth and stable operation even under full load.\n' +
                    'Precision Ball Bearing Mechanism:Equipped with high-grade steel ball bearings for effortless, noise-free sliding and long-lasting performance.\n' +
                    'Full Extension Design:Allows the drawer to open completely for maximum access and convenience, enhancing storage efficiency.\n' +
                    'Durable Steel Construction:Manufactured using premium cold-rolled steel with anti-corrosive zinc plating for superior strength and rust resistance.\n' +
                    'Easy Installation & Alignment:Engineered with universal mounting slots and a self-closing function for quick installation and perfect alignment.\n' +
                    'Ideal for Modern Interiors:Perfect for kitchen drawers, wardrobes, office furniture, and modular cabinets—combining functionality with sleek aesthetics.'
                ]
            },
            {
                id: 102,
                name: 'HABLO 45 kg Soft-Closing Drawer Channel',
                image: 'https://www.habloindia.com/images/subproduct/SOFT%20TELESCOPIC%20CHANNEL.jpg',
                description: 'Effortless Motion, Superior Strength',
                details: [
                    'High Load Capacity (45 kg):Built to handle heavy-duty drawers with exceptional stability and smooth performance even at maximum load.\n' +
                    'Premium Soft-Closing Mechanism:Features advanced damping technology that ensures a silent and gentle closure every time—preventing slamming and protecting your furniture.\n' +
                    'Full Extension Access:Allows drawers to glide out completely for full visibility and easy access to stored items.\n' +
                    'Precision Ball Bearing System:Engineered with high-quality steel ball bearings for consistent, friction-free movement and long-lasting reliability.\n' +
                    'Robust Build & Corrosion Resistance:Crafted from high-grade cold-rolled steel with a durable zinc coating, ensuring superior strength and protection against rust.\n' +
                    'Perfect for Modern Modular Designs:Ideal for kitchen drawers, wardrobes, and premium furniture systems—combining advanced functionality with elegant performance.'
                ]
            },
            {
                id: 103,
                name: 'HABLO 45 kg Pure Stainless Steel Drawer Channel',
                image: 'https://www.habloindia.com/images/subproduct/STAINLESS%20STEEL%20DRAWER%20CHANNEL.jpg',
                description: 'Strength That Lasts a Lifetime',
                details: [
                    'High Load Capacity (45 kg):Designed to deliver smooth, stable performance even under heavy loads, ensuring long-term durability and reliability.\n' +
                    '100% Pure Stainless Steel Construction:Made from premium-grade stainless steel that resists corrosion, tarnish, and wear — ideal for humid or coastal environments.\n' +
                    'Lifetime Warranty Against Rust:Backed by HABLO\'s trusted lifetime anti-rust warranty, ensuring your furniture hardware stays as strong and beautiful as day one.\n' +
                    'Smooth Ball Bearing Mechanism:Equipped with precision-engineered ball bearings for effortless, quiet, and friction-free drawer movement.\n' +
                    'Full Extension Functionality:Offers complete drawer access with a smooth, balanced glide for convenience and superior usability.\n' +
                    'Perfect for Premium Interiors:Ideal for modular kitchens, wardrobes, and luxury furniture — where strength, elegance, and lasting quality matter most.'
                ]
            },
            {
                id: 104,
                name: 'HABLO 45 kg 3D Undermount Quadro Channel',
                image: 'https://www.habloindia.com/images/subproduct/UNDERMOUNT%203D%20QUADRO%20CHANNEL.jpg',
                description: 'Precision in Every Motion',
                details: [
                    'High Load Capacity (45 kg):Designed for heavy-duty drawers, delivering unmatched strength and stability.\n' +
                    '3D Adjustment Feature:Enables precise alignment in height, side, and tilt for a perfect drawer fit.\n' +
                    'Soft-Closing Technology:Ensures smooth, silent, and controlled closure for enhanced user comfort.\n' +
                    'Full Extension Access:Provides complete visibility and easy reach to the entire drawer space.\n' +
                    'Concealed Undermount Design:Hidden installation for a clean, premium, and modern furniture finish.\n' +
                    'German-Engineered Quadro Mechanism:Offers long-lasting performance with superior gliding precision and durability.'
                ]
            }

        ]
    },
    {
        id: 2,
        name: 'CUPBOARD HINGES',
        image: 'https://www.habloindia.com/images/products/CUPBOARD%20HINGES.jpg',
        description: '',
        subProducts: [
            {
                id: 201,
                name: 'HABLO Normal Closing Cupboard Hinges',
                image: 'https://www.habloindia.com/images/subproduct/AUTO%20HINGES.jpg',
                description: 'Precision. Strength. Reliability',
                details: [
                    'Normal Closing Mechanism:Designed to close doors firmly and smoothly, ensuring consistent performance over time.\n' +
                    'Premium Steel Build:Crafted from high-grade cold-rolled steel for superior durability and load-bearing strength.\n' +
                    'Rust & Corrosion Resistant:Nickel-plated finish provides long-lasting protection and a refined metallic sheen.\n' +
                    'Smooth Motion Control:Engineered for friction-free movement, allowing doors to open and close effortlessly.\n' +
                    'Easy Alignment & Installation:Adjustable in three directions for precise fitting and perfect door positioning.\n' +
                    'Ideal for All Cabinet Types:Suitable for kitchen cupboards, wardrobes, and modular furniture systems.'
                ]
            },
            {
                id: 202,
                name: 'HABLO 3D Heavy Soft Closing Hinges',
                image: 'https://www.habloindia.com/images/subproduct/3D%20Heavy%20Soft%20Closing%20Hinges.jpg',
                description: 'Engineered for Perfection & Endurance',
                details: [
                    'Soft Closing Technology:Ensures smooth, silent, and gentle door closure, preventing slamming and extending cabinet life.\n' +
                    '3D Adjustable Design:Allows precise height, side, and depth adjustments for perfect door alignment and seamless fitting.\n' +
                    'High Durability Tested (60,000 Cycles):Rigorously tested for 60,000 open-close cycles to guarantee long-lasting performance and reliability.\n' +
                    'Heavy-Duty Construction:Made from premium cold-rolled steel with a nickel-plated finish for superior strength and corrosion resistance.\n' +
                    'Effortless Installation:Clip-on mechanism enables easy mounting and quick detachment during assembly or maintenance.\n' +
                    'Ideal for Premium Furniture:Perfect for modular kitchens, wardrobes, and luxury cabinets where precision and durability matter most.'
                ]
            },
            {
                id: 203,
                name: 'HABLO Pure Stainless Steel Soft Closing Hinges',
                image: 'https://www.habloindia.com/images/subproduct/PURE%20SS%20SOFT%20CLOSING%20HINGES.jpg',
                description: 'Crafted for Strength, Built for Life',
                details: [
                    '100% Pure Stainless Steel:Made from high-grade stainless steel for unmatched durability and corrosion resistance.\n' +
                    'Lifetime Anti-Rust Warranty:Guaranteed protection against rust — ensuring a flawless finish that lasts a lifetime.\n' +
                    'Soft Closing Technology:Smooth, silent closing mechanism prevents impact damage and enhances user comfort.\n' +
                    '50,000 Cycle Tested:Rigorously tested for long-term performance and consistent reliability in daily use.\n' +
                    'Precision Engineered Design:Provides perfect motion control and stable alignment for modern cabinetry.\n' +
                    'Ideal for Premium Interiors:Perfect for luxury kitchens, wardrobes, and high-end furniture where elegance meets endurance.'
                ]
            },
            {
                id: 204,
                name: 'HABLO 3D Heavy Black Coated Soft Closing Hinges',
                image: 'https://www.habloindia.com/images/subproduct/3D%20BLACK%20SOFT%20CLOSING%20HINGES.jpg',
                description: 'Bold Design, Lifetime Performance',
                details: [
                    'Heavy-Duty Performance:Built to support robust cabinet doors with superior strength and long-lasting stability.\n' +
                    'Elegant Black Coated Finish:Premium matte black coating adds a bold, modern aesthetic to any furniture design.\n' +
                    'Lifetime Warranty on Black Coating:Guaranteed against fading, peeling, or discoloration — ensuring a lasting premium look.\n' +
                    'Soft Closing Mechanism:Advanced damping technology ensures a smooth, silent, and controlled door closure every time.\n' +
                    '3D Adjustment System:Enables precise height, depth, and side adjustments for perfect door alignment.\n' +
                    '50,000 Cycle Tested:Rigorously tested to deliver consistent performance and durability through years of use.'
                ]
            },
            {
                id: 205,
                name: 'HABLO SLIP ON Soft Closing Hinges',
                image: 'https://www.habloindia.com/images/subproduct/SLIP%20ON%20SOFT%20CLOSING%20HINGES.jpg',
                description: 'Smart Value, Smooth Performance',
                details: [
                    'Soft Closing Mechanism:Ensures gentle, silent door closure, preventing slamming and improving cabinet life.\n' +
                    'Economical & Efficient Design:Offers premium functionality at a cost-effective price point without compromising quality.\n' +
                    'Durable Build Quality:Made from high-grade steel with a nickel-plated finish for strength and rust resistance.\n' +
                    '30,000 Cycle Tested:Performance-tested to withstand everyday use with long-lasting reliability.\n' +
                    'Easy Installation & Adjustment:Designed with user-friendly clips and screws for quick alignment and fitting.\n' +
                    '2-Year Replacement Warranty:Backed by HABLO’s assurance of quality and customer satisfaction.'
                ]
            }
        ]
    },
    {
        id: 3,
        name: 'MODULAR WARDROBE ACCESSORIES',
        image: 'https://www.habloindia.com/images/products/MODULAR%20KITCHEN%20ACCESSORIES.jpg',
        description: '',
        subProducts: [
            {
                id: 301,
                name: 'HABLO S-Corner Kitchen Unit',
                image: 'https://www.habloindia.com/images/subproduct/S-Corner%20Kitchen%20Unit.jpg',
                description: 'Smart Design for Smarter Kitchens',
                details: [
                    'Innovative Space-Saving Solution:Designed to efficiently utilize kitchen corner areas, providing maximum storage accessibility.\n' +
                    'Dual Basket Configuration:Comes with two durable, smoothly gliding baskets for easy organization and convenience.\n' +
                    'High Load Capacity:Each basket can hold up to 15 KG, ensuring strength and stability for everyday kitchen use.\n' +
                    'Soft Close Mechanism:Features a gentle, noise-free soft closing system for smooth and effortless operation.\n' +
                    'Premium Build Quality:Constructed from high-grade materials with a rust-resistant finish for lasting durability and elegance.\n' +
                    '4-Year Replacement Warranty:Supported by HABLO’s 4-year warranty, assuring quality, performance, and peace of mind.'
                ]
            },
            {
                id: 302,
                name: 'HABLO Universal Magic Corner',
                image: 'https://www.habloindia.com/images/subproduct/Universal%20Magic%20Corner.jpg',
                description: 'Transforming Corners into Convenience',
                details: [
                    'Smart Space-Saving Design:Expertly designed to utilize corner spaces efficiently, offering maximum storage accessibility.\n' +
                    'Four Spacious Baskets:Equipped with four sturdy wire baskets, ensuring organized and convenient storage.\n' +
                    'High Load Capacity:Each basket supports up to 15 KG, delivering strength and stability for daily use.\n' +
                    'Soft Closing Mechanism:Integrated soft-close system ensures smooth, silent, and controlled movement every time.\n' +
                    'Premium Build & Finish:Made from high-quality materials with a rust-resistant coating for lasting durability and elegance.\n' +
                    '4-Year Replacement Warranty:Backed by HABLO’s 4-year warranty, ensuring reliability and customer satisfaction.'
                ]
            },
            {
                id: 303,
                name: 'HABLO Slim Tandem Box',
                image: 'https://www.habloindia.com/images/subproduct/Slim%20Tandem%20Box.jpg',
                description: 'Sleek Storage, Superior Strength',
                details: [
                    'Modern Space-Saving Design:Slim and elegant design that enhances storage efficiency while maintaining a clean, minimalist look.\n' +
                    'High Load Capacity (40Kg):Built to hold up to 40 KG, offering strong and stable support for all types of kitchen and wardrobe storage.\n' +
                    'Smooth Soft-Closing Mechanism:Ensures effortless, quiet, and controlled drawer movement for everyday convenience.\n' +
                    'Multiple Size Options:Available in sizes ranging from 14 inch to 22 inch, suitable for diverse cabinet designs.\n' +
                    'Premium Build & Finish:Crafted from high-quality materials for durability, corrosion resistance, and long-lasting performance.\n' +
                    '4-Year Replacement Warranty:Covered by HABLO’s 4-year warranty, assuring reliability, quality, and peace of mind.'
                ]
            },
            {
                id: 304,
                name: 'HABLO Glass Slim Tandem Box',
                image: 'https://www.habloindia.com/images/subproduct/Glass%20Slim%20Tandem%20Box.jpg',
                description: 'Elegance in Every Motion',
                details: [
                    'Premium Toughened Glass Design:Crafted with pure toughened glass sides for a modern, transparent, and elegant storage solution.\n' +
                    'High Load Capacity (40Kg):Engineered to handle heavy loads effortlessly while maintaining smooth and stable performance.\n' +
                    'Soft Close Mechanism:Features a silent and gentle soft-closing system that ensures smooth, controlled drawer movement.\n' +
                    'Sleek & Space-Saving Structure:The slim profile maximizes storage efficiency while adding a refined, premium aesthetic.\n' +
                    'Durable & Long-Lasting Build:Designed with high-grade components and reinforced glass for strength, safety, and durability.\n' +
                    '4-Year Replacement Warranty:Backed by HABLO’s 4-year warranty, ensuring quality assurance and complete peace of mind.'
                ]
            },
            {
                id: 305,
                name: 'HABLO Tall Pantry Unit',
                image: 'https://www.habloindia.com/images/subproduct/Tall%20Pantry%20Unit.jpg',
                description: 'Organized Luxury for Modern Kitchens',
                details: [
                    'Available in Two Heights:Comes in 6 feet (12 baskets) and 4 feet (8 baskets) options to suit different kitchen layouts.\n' +
                    'Optimized Storage Capacity:Each basket supports up to 7 KG, providing ample strength for groceries, containers, and kitchen essentials.\n' +
                    'Soft Close Mechanism:Ensures smooth, silent, and effortless movement while maintaining stability and convenience.\n' +
                    'Versatile Door Width Options:Designed for doors of 450 MM and 600 MM, ensuring perfect compatibility with modular kitchens.\n' +
                    'Premium Build & Finish:Crafted from high-quality materials for durability, rust resistance, and long-lasting performance.\n' +
                    '4-Year Replacement Warranty:Supported by HABLO’s 4-year warranty, guaranteeing reliability, quality, and customer confidence.'
                ]
            },
            {
                id: 306,
                name: 'HABLO Glass Tall Pantry Unit',
                image: 'https://www.habloindia.com/images/subproduct/Glass%20Tall%20Pantry%20Unit.jpg',
                description: 'Elegance Meets Functionality',
                details: [
                    'Premium Glass Design:Features a sleek glass frame structure for a luxurious and modern kitchen aesthetic.\n' +
                    'Two Width Options:Available in 600 MM and 450 MM widths with a 6-foot door height, fitting a range of cabinet spaces.\n' +
                    'Soft Close Mechanism:Equipped with a smooth, silent soft-closing system for effortless and controlled operation.\n' +
                    'Spacious & Organized Storage:Designed to maximize storage capacity while keeping contents visible and neatly arranged.\n' +
                    'Durable & Long-Lasting Build:Made with premium materials and toughened glass for superior strength and longevity.\n' +
                    '4-Year Replacement Warranty:Covered by HABLO’s 4-year warranty on the mechanism, ensuring reliability and peace of mind.'
                ]
            },
            {
                id: 307,
                name: 'HABLO PVC Rolling Shutter',
                image: 'https://www.habloindia.com/images/subproduct/PVC%20Rolling%20Shutter.jpg',
                description: 'Sleek, Smart & Space-Saving',
                details: [
                    'Modern Kitchen Utility:Designed for smooth and compact storage, ideal for modular kitchen cabinets and overhead units.\n' +
                    'Multiple Size Options:Available in 450 MM, 600 MM, and 900 MM widths to fit a variety of cabinet dimensions.\n' +
                    'Premium Colour Choices:Offered in elegant shades of Black, Silver, and Iron Grey for a refined contemporary look.\n' +
                    'Smooth Rolling Mechanism:Features a seamless and silent glide system, ensuring effortless operation every time.\n' +
                    'Durable PVC Construction:Made from high-quality PVC material for strength, durability, and long-lasting performance.\n' +
                    '4-Year Replacement Warranty:Backed by HABLO’s 4-year warranty, ensuring peace of mind and trusted reliability.'
                ]
            },
            {
                id: 308,
                name: 'HABLO Tandem Bottle Pull Out',
                image: 'https://www.habloindia.com/images/subproduct/Tandem%20Bottle%20Pull%20Out.jpg',
                description: 'Smart, Sleek & Functional',
                details: [
                    'Compact Space-Saving Design:Perfect for efficient bottle and jar storage, utilizing narrow kitchen spaces smartly.\n' +
                    'Multiple Size Options:Available in 150 MM, 200 MM, 250 MM, and 300 MM widths to suit various cabinet needs.\n' +
                    'Dual Basket Setup:Comes with two sturdy baskets, ideal for organizing bottles, condiments, and daily essentials.\n' +
                    'High Load Capacity:Each basket supports up to 15 kgs, ensuring durability and smooth performance.\n' +
                    'Soft-Close Mechanism:Features a silent and smooth closing system for a premium kitchen experience.\n' +
                    '4-Year Replacement Warranty:Backed by HABLO’s trusted 4-year warranty, ensuring long-lasting reliability and peace of mind.'
                ]
            },
            {
                id: 309,
                name: 'HABLO Glass Elevator Pull Down Unit',
                image: 'https://www.habloindia.com/images/subproduct/Glass%20Elevator%20Pull%20Down%20Unit.jpg',
                description: 'Smart. Stylish. Functional',
                details: [
                    'Elegant Glass Design:Made with premium toughened glass for durability and a sleek, modern appearance.\n' +
                    'Size Versatility:Available in 600 MM and 900 MM width options to fit diverse cabinet spaces.\n' +
                    'Dual-Basket Functionality:Features two sturdy baskets, perfect for organized and efficient kitchen storage.\n' +
                    'High Load Capacity:Each basket supports up to 12 kgs, offering strength and stability for daily use.\n' +
                    'Smooth Soft Open & Close:Equipped with soft open and soft close mechanism for effortless, silent operation.\n' +
                    '4-Year Replacement Warranty:Backed by HABLO’s trusted 4-year warranty ensuring lasting performance and peace of mind.'
                ]
            },
            {
                id: 310,
                name: 'HABLO Wooden Wicker Basket',
                image: 'https://www.habloindia.com/images/subproduct/Wooden%20Wicker%20Basket.jpg',
                description: 'Natural Elegance with Functional Design',
                details: [
                    'Ideal Storage Solution:Perfect for storing vegetables and fruits, keeping them fresh and well-ventilated at all times.\n' +
                    'Premium Wooden Finish:Crafted with a durable wooden frame and woven wicker design for a natural, stylish look.\n' +
                    'Multiple Size Options:Available in 450 MM and 600 MM widths with 4”, 6” and 8” height variants to fit all cabinet types.\n' +
                    'Strong Load Capacity:Each basket supports up to 10 kgs, ensuring sturdy and long-lasting performance.\n' +
                    'Easy Glide Functionality:Smooth sliding mechanism for convenient access and effortless handling.\n' +
                    '4-Year Replacement Warranty:Backed by HABLO’s 4-year replacement warranty on functionality for complete peace of mind.'
                ]
            },
            {
                id: 311,
                name: 'HABLO PVC Wicker Basket',
                image: 'https://www.habloindia.com/images/subproduct/PVC%20Wicker%20Basket.jpg',
                description: 'Smart, Hygienic & Functional Kitchen Storage',
                details: [
                    'Multipurpose Storage:Ideal for storing fruits and vegetables, keeping your kitchen space organized and accessible.\n' +
                    'Durable PVC Construction:Made from premium PVC wicker, ensuring long-lasting performance with a natural woven finish.\n' +
                    'Easy to Clean & Maintain:Washable and sun-dry safe, allowing you to maintain hygiene and freshness effortlessly.\n' +
                    'Flexible Size Options:Available in 450 MM and 600 MM widths, with height choices of 4”, 6” and 8” to fit all kitchen designs.\n' +
                    'Strong Load Capacity:Each basket supports up to 10 kgs, perfect for daily kitchen storage needs.\n' +
                    '4-Year Replacement Warranty:Backed by HABLO’s 4-year replacement warranty, ensuring lasting performance and peace of mind.'
                ]
            },
            {
                id: 312,
                name: 'HABLO Stainless Steel Cup & Vessel Drying Rack',
                image: 'https://www.habloindia.com/images/subproduct/Stainless%20Steel%20Cup.jpg',
                description: 'Smart, Hygienic & Functional Kitchen Storage',
                details: [
                    'Efficient Storage Solution:Designed to store cups, plates, and vessels neatly while allowing them to dry quickly and hygienically.\n' +
                    '100% Stainless Steel Construction:Made with premium-grade stainless steel for strength, durability, and rust-free performance.\n' +
                    'Modern & Functional Design:Sleek, space-saving design that enhances kitchen organization while maintaining a clean, polished look.\n' +
                    'Available in Multiple Sizes:Comes in 600 MM, 700 MM, 800 MM, and 900 MM sizes to fit various cabinet dimensions.\n' +
                    'Easy to Clean & Maintain:Smooth finish ensures easy cleaning and long-lasting shine, ideal for daily kitchen use.\n' +
                    '2-Year Functional Warranty:Backed by HABLO’s 2-year replacement warranty, guaranteeing dependable quality and performance.'
                ]
            },
            {
                id: 313,
                name: 'HABLO Double Dustbin Unit (Soft Close Mechanism)',
                image: 'https://www.habloindia.com/images/subproduct/Double%20Dustbin%20Unit.jpg',
                description: 'Smart & Hygienic',
                details: [
                    'Dual Compartment Design:Comes with two durable bins, each having a 20L capacity, ideal for separating dry and wet waste.\n' +
                    'Smooth Soft-Close Mechanism:Equipped with a soft-close channel system for a noise-free, smooth sliding experience.\n' +
                    '3D Clip-On Front Installation:Features a front 3D clip design for easy and precise installation onto the shutter front.\n' +
                    'Space-Saving Design:Designed to fit seamlessly inside kitchen cabinets, keeping your space clean, hygienic, and organized.\n' +
                    'High-Quality Construction:Made from premium materials ensuring long life, easy maintenance, and smooth operation.\n' +
                    '4-Year Replacement Warranty:Backed by HABLO’s 4-year replacement warranty, assuring lasting performance and quality.'
                ]
            },
            {
                id: 314,
                name: 'HABLO 14 Litre Auto Dustbin',
                image: 'https://www.habloindia.com/images/subproduct/14%20Litre%20Auto%20Dustbin.jpg',
                description: 'Smart & Hygienic',
                details: [
                    'Smart Auto-Open Mechanism:The bin is designed to open automatically when the cabinet shutter is opened and close smoothly when it’s shut — for effortless hygiene.\n' +
                    'Durable Stainless Steel Exterior:Made from premium-grade stainless steel for a modern look, corrosion resistance, and long-lasting durability.\n' +
                    'PVC Detachable Inner Basket:Features a removable inner PVC bin that can be easily taken out, washed, and refitted, ensuring cleanliness and convenience.\n' +
                    'Space-Saving Under-Sink Design:Ideal for installation below the kitchen sink, optimizing space while maintaining easy accessibility.\n' +
                    'Compact 14L Capacity:Offers a 14-litre waste capacity, perfect for daily kitchen waste disposal with a clean and organized appearance.\n' +
                    '2-Year Functional Replacement Warranty:Backed by HABLO’s 2-year replacement warranty, ensuring reliable performance and lasting functionality.'
                ]
            },
            {
                id: 315,
                name: 'HABLO Glass Rolling Shutter',
                image: 'https://www.habloindia.com/images/subproduct/Glass%20Rolling%20Shutter.jpg',
                description: 'Sleek Storage, Superior Strength',
                details: [
                    'Premium Glass Construction:Made from 100% toughened glass, ensuring durability, safety, and a luxurious aesthetic finish.\n' +
                    'Elegant Design Options:Available in two stunning colours — Black and Milk White, complementing both modern and classic kitchen interiors.\n' +
                    'Perfect Size Fit:Designed in a standard width of 600MM with a maximum height of 4 feet, ideal for compact and modular kitchens.\n' +
                    'Smooth Rolling Mechanism:Features a precision-engineered rolling system for effortless opening and closing with long-lasting performance.\n' +
                    'Stylish & Functional:Combines transparency and elegance to showcase stored items while maintaining an organized, sleek look.\n' +
                    '4-Year Replacement Warranty:Backed by HABLO’s 4-year functional replacement warranty, ensuring reliability and peace of mind.'
                ]
            },
            {
                id: 316,
                name: 'HABLO PVC Cutlery Tray',
                image: 'https://www.habloindia.com/images/subproduct/PVC%20Cutlery%20Tray.jpg',
                description: '',
                details: [
                    'Smart Organization:Perfectly designed to store all your cutlery and utensils in one neat and organized manner.\n' +
                    'Versatile Compatibility:Can be easily fitted inside wooden drawer boxes, SS wire drawers, or Tandem boxes for maximum flexibility.\n' +
                    'Multiple Size Options:Available in 450MM, 500MM, 600MM, 700MM, 800MM, and 900MM to suit various drawer dimensions.\n' +
                    'Durable & Long-Lasting:Made from 3MM thick high-quality PVC, offering superior strength and long-term durability.\n' +
                    'Scratch & Stain Resistant:The scratch-proof and easy-to-clean surface ensures lasting shine and hygiene in your kitchen.\n' +
                    '2-Year Functional Warranty:Comes with a 2-year replacement warranty for hassle-free performance and reliability.'
                ]
            },
            {
                id: 317,
                name: 'HABLO Thali Partition / Plate Partition',
                image: 'https://www.habloindia.com/images/subproduct/Thali%20Partition.jpg',
                description: 'Sleek Storage, Superior Strength',
                details: [
                    'Made from 100% pure stainless steel, ensuring superior durability and long-lasting shine.\n' +
                    'Features a rubber grip base that provides better stability and prevents sliding inside drawers.\n' +
                    'Designed for use inside wooden drawers and tandem boxes for organized plate storage.\n' +
                    'Available in two sizes, suitable for holding both small and large plates.\n' +
                    'Keeps plates neatly arranged and protected, maintaining order and cleanliness.\n' +
                    'Comes with a 2-year replacement warranty, guaranteeing reliability and performance.'
                ]
            },
            {
                id: 318,
                name: 'HABLO WOODEN ADJUSTABLE CUTLERY TRAY',
                image: 'https://www.habloindia.com/images/subproduct/WOODEN%20ADJUSTABLE%20CUTLERY%20TRAY.jpg',
                description: 'Sleek Storage, Superior Strength',
                details: [
                    'Made from 100% premium cane wood, ensuring strength, durability, and a natural finish.\n' +
                    'Adjustable design allows width customization from 500 MM to 900 MM for a perfect drawer fit.\n' +
                    'Ideal for organizing spoons, forks, knives, and kitchen tools in a neat and accessible manner.\n' +
                    'Adds a touch of elegance and warmth to any modern or traditional kitchen setup.\n' +
                    'Easy to clean and maintain, providing a long-lasting storage solution for daily use.\n' +
                    'Comes with a 4-year functional replacement warranty, ensuring lasting reliability and performance.'
                ]
            },
            {
                id: 319,
                name: 'HABLO ANTI-SKID MAT',
                image: 'https://www.habloindia.com/images/subproduct/ANTI-SKID%20MAT.jpg',
                description: '',
                details: [
                    'Designed for kitchen cupboards and drawers to prevent items from slipping or scratching surfaces.\n' +
                    'Features a dotted anti-skid pattern that ensures stability and grip for stored utensils and containers.\n' +
                    'Made from 1MM thick, heavy-duty, non-tearable material for long-lasting durability.\n' +
                    'Scratch-proof surface helps protect shelves and enhances the overall look of the kitchen.\n' +
                    'Available in a 5-meter roll, allowing easy customization and cutting to desired sizes.\n' +
                    'Backed by a 2-year replacement warranty for assured performance and reliability.'
                ]
            },
            {
                id: 320,
                name: 'HABLO GAS SPRING',
                image: 'https://www.habloindia.com/images/subproduct/GAS%20SPRING.jpg',
                description: '',
                details: [
                    'Designed for smooth and effortless lifting of kitchen cupboard shutters.\n' +
                    'Available in four weight capacities - 5 kg, 10 kg, 15 kg, and 20 kg - to suit various cabinet sizes.\n' +
                    'Ensures controlled and silent opening and closing for enhanced functionality.\n' +
                    'Made from durable, high-quality materials for long-lasting performance and stability.\n' +
                    'Ideal for modern modular kitchens, providing convenience and ease of use.\n' +
                    'Backed by a 2-year functional replacement warranty for assured reliability.'
                ]
            },
            {
                id: 321,
                name: 'HABLO BUFFERING SUPPORT',
                image: 'https://www.habloindia.com/images/subproduct/BUFFERING%20SUPPORT.jpg',
                description: '',
                details: [
                    'Designed for smooth and effortless lifting of kitchen cupboard shutters.\n' +
                    'Universal type mechanism suitable for installation on both left and right sides.\n' +
                    'Provides soft and controlled motion, preventing sudden slams or jerks.\n' +
                    'Built from durable, high-quality materials ensuring long-term functionality.\n' +
                    'Ideal for modern modular kitchens, enhancing comfort and convenience.\n' +
                    'Backed by a 2-year functional replacement warranty for complete reliability.'
                ]
            },
            {
                id: 322,
                name: 'HABLO TICTAC MAGNET CATCHER',
                image: 'https://www.habloindia.com/images/subproduct/TICTAC%20MAGNET%20CATCHER.jpg',
                description: '',
                details: [
                    'Designed for handleless cupboards, enabling a sleek and modern push-to-open system.\n' +
                    'Simply press the shutter to release and open — effortless functionality.\n' +
                    'Constructed from high-grade steel for superior strength and durability.\n' +
                    'Equipped with a powerful magnet ensuring secure closure and smooth popping action.\n' +
                    'Ideal for kitchen cabinets, wardrobes, and storage units for a minimalist look.\n' +
                    'Backed by a 4-year functional replacement warranty for long-lasting reliability.'
                ]
            },
            {
                id: 323,
                name: 'HABLO Straight Pantry Pullout',
                image: 'https://www.habloindia.com/images/subproduct/Straight%20Pantry%20Pullout.jpg',
                description: '',
                details: [
                    'Designed with a sleek and modern pullout system that comes straight outward for easy access.\n' +
                    'Ideal for 6 feet tall kitchen doors, offering a perfect space-saving storage solution.\n' +
                    'Equipped with 6 sturdy baskets, each having a weight capacity of 10 kgs for efficient organization.\n' +
                    'Features a soft closing mechanism for smooth and noiseless operation.\n' +
                    'Constructed with premium materials ensuring strength, durability, and long-term performance.\n' +
                    'Backed by a 4-year replacement warranty for assured quality and reliability.'
                ]
            }
        ]
    },
    {
        id: 4,
        name: 'MODULAR WARDROBE ACCESSORIES',
        image: 'https://www.habloindia.com/images/products/MODULAR%20WARDROBE%20ACCESSORIES.jpg',
        description: '',
        subProducts: [
            {
                id: 401,
                name: 'HABLO Modular Ironing Board',
                image: 'https://www.habloindia.com/images/subproduct/Modular%20Ironing%20Board.jpg',
                description: '',
                details: [
                    'Space-saving modular ironing board designed to fit neatly inside wardrobes.\n' +
                    'Effortless fold-in and pull-out mechanism for convenient use and compact storage.\n' +
                    'Comes with a soft cushioned top to protect garments while ironing.\n' +
                    'Built with durable materials ensuring smooth performance and long life.\n' +
                    'Equipped with a Soft-Close mechanism for silent and controlled closing.\n' +
                    'Backed by a 4-year functional replacement warranty for complete peace of mind.'
                ]
            },
            {
                id: 402,
                name: 'HABLO Leather Storage Basket',
                image: 'https://www.habloindia.com/images/subproduct/Leather%20Storage%20Basket.jpg',
                description: '',
                details: [
                    'Elegant storage basket crafted in full premium grey leather finish for a luxurious look.\n' +
                    'Designed to enhance wardrobe aesthetics while offering practical storage space.\n' +
                    'Available in two convenient sizes — 600 MM and 900 MM.\n' +
                    'Equipped with a Soft-Close mechanism for smooth and silent operation.\n' +
                    'Strong and durable structure suitable for organizing clothes and accessories.\n' +
                    'Comes with a 4-year functional replacement warranty for assured quality.'
                ]
            },
            {
                id: 403,
                name: 'HABLO Top Mounted Single Trouser Rack',
                image: 'https://www.habloindia.com/images/subproduct/Top%20Mounted%20Single%20Trouser%20Rack.jpg',
                description: '',
                details: [
                    'Sleek top-mounted trouser rack designed for modular wardrobes to maximize space.\n' +
                    'Ideal for hanging trousers, pants, and towels in a neat and organized manner.\n' +
                    'Each spoke is covered with premium sponge to prevent folds and maintain garment shape.\n' +
                    'Features a smooth Soft-Close mechanism for effortless and silent operation.\n' +
                    'Durable and elegant design that adds sophistication to modern wardrobes.\n' +
                    'Backed by a 4-year functional replacement warranty for long-lasting reliability.'
                ]
            },
            {
                id: 404,
                name: 'HABLO Top Mounted Tie Holder',
                image: 'https://www.habloindia.com/images/subproduct/Top%20Mounted%20Tie%20Holder.jpg',
                description: '',
                details: [
                    'Designed for modular wardrobes to maximize space and enhance functionality.\n' +
                    'Ideal for hanging clothes using hangers, keeping garments organized and accessible.\n' +
                    'Features a sleek, elegant design that complements modern wardrobe interiors.\n' +
                    'Comes in a luxurious grey finish for a premium and sophisticated look.\n' +
                    'Equipped with a Soft-Close mechanism for smooth and silent operation.\n' +
                    'Supported by a 4-year functional replacement warranty, ensuring lasting performance and reliability.'
                ]
            },
            {
                id: 405,
                name: 'HABLO Top Mounted Double Trouser Rack',
                image: 'https://www.habloindia.com/images/subproduct/Top%20Mounted%20Double%20Trouser%20Rack.jpg',
                description: '',
                details: [
                    'Premium top-mounted double trouser rack designed for modular wardrobes to optimize space.\n' +
                    'Features dual-sided hanging rods, allowing more storage for trousers, pants, and garments.\n' +
                    'Each rod is lined with a soft sponge coating to prevent creases and maintain fabric shape.\n' +
                    'Finished in a luxurious grey tone, adding elegance and style to wardrobe interiors.\n' +
                    'Equipped with a Soft-Close mechanism for smooth, silent, and effortless operation.\n' +
                    'Backed by a 4-year functional replacement warranty, ensuring durability and long-term reliability.'
                ]
            },
            {
                id: 406,
                name: 'HABLO Cloth Lift-Up Mechanism',
                image: 'https://www.habloindia.com/images/subproduct/Cloth%20Lift-Up%20Mechanism.jpg',
                description: '',
                details: [
                    'Innovative lift-up wardrobe mechanism designed for easy access to hanging clothes.\n' +
                    'Pulls down smoothly to bring hangers forward and returns automatically when released.\n' +
                    'Equipped with a Soft-Close mechanism for gentle, noise-free operation.\n' +
                    'Adjustable width from 700 MM to 900 MM, suitable for various wardrobe sizes.\n' +
                    'Finished in a luxurious grey tone, adding elegance to modern wardrobe interiors.\n' +
                    'Comes with a 4-year functional replacement warranty, ensuring long-lasting durability and performance.'
                ]
            },
            {
                id: 407,
                name: 'HABLO Leather Jewellery Storage System',
                image: 'https://www.habloindia.com/images/subproduct/Leather%20Jewellery%20Storage%20System.jpg',
                description: '',
                details: [
                    'Crafted from premium full leather with a luxurious grey finish for an elegant and refined look.\n' +
                    'Designed for storing jewellery, watches, and other luxury accessories inside modular wardrobes.\n' +
                    'Offers a neat, organized, and secure storage solution for valuable personal items.\n' +
                    'Available in two sizes - 600 MM and 900 MM, suitable for various wardrobe layouts.\n' +
                    'Equipped with a Soft-Close mechanism for smooth, silent, and effortless operation.\n' +
                    'Backed by a 4-year functional replacement warranty, ensuring durability and long-lasting performance.'
                ]
            },
            {
                id: 408,
                name: 'HABLO Pull-Out Trouser Rack',
                image: 'https://www.habloindia.com/images/subproduct/Pull-Out%20Trouser%20Rack.jpg',
                description: '',
                details: [
                    'Designed for modular wardrobes to organize trousers neatly and access them with ease.\n' +
                    'Features a smooth pull-out mechanism for convenient use and maximum accessibility.\n' +
                    'Each spoke comes with a luxurious sponge coating to prevent folds and maintain garment shape.\n' +
                    'Available in two size options - 600 MM and 900 MM, suitable for different wardrobe sizes.\n' +
                    'Equipped with a Soft-Close mechanism for gentle, noise-free operation.\n' +
                    'Supported by a 4-year functional replacement warranty, ensuring durability and premium performance.'
                ]
            },
            {
                id: 409,
                name: 'HABLO Side Installation Trouser Rack',
                image: 'https://www.habloindia.com/images/subproduct/Side%20Installation%20Trouser%20Rack.jpg',
                description: '',
                details: [
                    'Designed for side-mounted installation inside modular wardrobes for efficient space utilization.\n' +
                    'Features a pull-out mechanism, allowing easy access to neatly arranged trousers and garments.\n' +
                    'Equipped with sponge-coated spokes that prevent folds and keep clothes wrinkle-free.\n' +
                    'Offers a sleek and elegant design, enhancing the aesthetic appeal of modern wardrobes.\n' +
                    'Integrated with a Soft-Close mechanism for smooth and silent operation.\n' +
                    'Backed by a 4-year functional replacement warranty, ensuring durability and long-lasting performance.'
                ]
            }
        ]
    },
    {
        id: 5,
        name: 'DOOR CLOSER',
        image: 'https://www.habloindia.com/images/products/DOOR%20CLOSER.jpg',
        description: '',
        subProducts: [
            {
                id: 501,
                name: 'HABLO 60 KG Door Closer',
                image: 'https://www.habloindia.com/images/subproduct/DOOR%20CLOSER.jpg',
                description: 'Reliable Strength. Smooth Control.',
                details: [
                    'High Load Capacity (60 KG):Designed to handle medium to heavy doors with consistent, stable performance.\n' +
                    'Precision Hydraulic Mechanism:Ensures smooth, controlled, and silent door closing for enhanced comfort and safety.\n' +
                    'Durable Construction:Made from premium-grade aluminum alloy with corrosion-resistant coating for long-lasting use.\n' +
                    'One Lakh Cycle Tested:Rigorously tested for over 100,000 open-close cycles to guarantee long-term reliability.\n' +
                    'Adjustable Speed Control:Dual-speed regulation allows customized closing and latching speed as per door requirements.\n' +
                    '2-Year Replacement Warranty:Backed by HABLO’s trusted warranty for quality assurance and complete peace of mind.'
                ]
            },
            {
                id: 502,
                name: 'HABLO Concealed Door Closer',
                image: 'https://www.habloindia.com/images/subproduct/CONCEALED%20DOOR%20CLOSER.jpg',
                description: 'Power in Silence. Precision in Motion.',
                details: [
                    'High Load Capacity (Up to 80 KG):Designed to handle heavy doors effortlessly while maintaining smooth, consistent motion.\n' +
                    'Concealed Installation:Hidden within the door frame for a seamless, modern, and elegant architectural appearance.\n' +
                    'Compatible with 42mm Thickness Onwards:Perfectly engineered to fit doors from 42mm thickness and above for a secure installation.\n' +
                    'Hydraulic Soft Closing Mechanism:Ensures quiet, controlled, and safe door operation—ideal for premium interiors.\n' +
                    'Durable & Long-Lasting Performance:Made from high-strength materials to deliver stability and reliability under daily use.\n' +
                    '4-Year Replacement Warranty:Supported by HABLO’s trusted warranty, guaranteeing quality and peace of mind.'
                ]
            },
            {
                id: 503,
                name: 'HABLO Pelmet Arm Door Closer',
                image: 'https://www.habloindia.com/images/subproduct/PELMET%20ARM%20DOOR%20CLOSER.jpg',
                description: 'Sleek Design. Powerful Performance.',
                details: [
                    'Elegant & Compact Design:Features a slim pelmet arm structure that enhances the door’s aesthetic appeal with a modern, refined look.\n' +
                    'High Load Capacity (80 KG):Engineered to handle heavy doors smoothly and efficiently with consistent performance.\n' +
                    'Hold-Open Function:Convenient option to keep the door open at a desired angle for flexibility and ease of use.\n' +
                    'Tested for One Lakh Cycles:Endurance-tested for 100,000 open-close operations, ensuring unmatched durability and reliability.\n' +
                    'Hydraulic Soft Closing Control:Delivers smooth, quiet, and controlled door movement, ideal for premium interiors.\n' +
                    '4-Year Replacement Warranty:Backed by HABLO’s quality assurance, guaranteeing long-lasting performance and peace of mind.'
                ]
            }
        ]
    },
    {
        id: 6,
        name: 'GLASS DOOR FITTINGS',
        image: 'https://www.habloindia.com/images/products/GLASS%20DOOR%20FITTINGS.jpg',
        description: '',
        subProducts: [
            {
                id: 601,
                name: 'HABLO 90KG Floor Spring',
                image: 'https://www.habloindia.com/images/subproduct/90%20KG%20FLOOR%20SPRING.jpg',
                description: 'Precision. Performance. Perfection',
                details: [
                    'High Load Capacity (90 KG):Designed to handle glass doors up to 90 KG, ensuring smooth and stable door movement.\n' +
                    'Durable Mechanism:Built with premium-grade internal components for long-lasting performance under frequent use.\n' +
                    'Cycle Tested Reliability:Rigorously tested for 5,00,000 cycles, ensuring consistent functionality over years of operation.\n' +
                    'Smooth Operation:Provides controlled closing speed and quiet door movement, enhancing user comfort.\n' +
                    'Universal Application:Suitable for single and double action glass doors, ideal for commercial and residential use.\n' +
                    'Warranty Assurance:Comes with a 4-year replacement warranty, guaranteeing trusted HABLO quality and durability.'
                ]
            },
            {
                id: 602,
                name: 'HABLO 150KG Floor Spring',
                image: 'https://www.habloindia.com/images/subproduct/150%20KG%20Floor%20Spring.jpg',
                description: 'Strength Meets Precision',
                details: [
                    'High Load Capacity (150 KG):Designed to support glass doors up to 150 KG, ensuring powerful and stable door movement.\n' +
                    'Premium Build Quality:Made with heavy-duty components for long-lasting strength and reliability.\n' +
                    'Cycle Tested Performance:Tested for 5,00,000 cycles, guaranteeing consistent and smooth operation over years of use.\n' +
                    'Smooth & Silent Closing:Engineered for controlled speed adjustment and noise-free door closure.\n' +
                    'Versatile Application:Ideal for toughened glass doors in commercial and residential spaces.\n' +
                    'Warranty Protection:Backed by a 4-year replacement warranty, offering complete peace of mind and HABLO assurance.'
                ]
            },
            {
                id: 603,
                name: 'HABLO SS304 Patch Fitting Set',
                image: 'https://www.habloindia.com/images/subproduct/PATCH%20FITTING%20SS%20304.jpg',
                description: 'Precision in Every Detail',
                details: [
                    'Complete Glass Door Solution:Includes Top Patch, Bottom Patch, Bottom Lock with Computer Brass Key, and Standard Patch for full installation.\n' +
                    'Premium SS304 Construction:Crafted from high-grade stainless steel (SS304) for superior strength, durability, and corrosion resistance.\n' +
                    'Lifetime Anti-Rust Warranty:Guaranteed lifetime protection against rust, ensuring long-lasting shine and performance.\n' +
                    '4-Year Product Replacement Warranty:Backed by HABLO’s 4-year warranty for unmatched reliability and customer confidence.\n' +
                    'Elegant & Functional Design:Sleek finish with precision-engineered fittings to ensure smooth alignment and secure glass mounting.\n' +
                    'Ideal for Modern Glass Installations:Perfect for frameless glass doors in offices, showrooms, and luxury interiors.'
                ]
            }
        ]
    },
    {
        id: 7,
        name: 'ALUMINIUM PROFILE HANDLES',
        image: 'https://www.habloindia.com/images/products/ALUMINIUM%20PROFILE%20HANDLES.jpg',
        description: '',
        subProducts: [
            {
                id: 701,
                name: 'HABLO Full Aluminium G Handle Profile',
                image: 'https://www.habloindia.com/images/subproduct/G%20HANDLE%20PROFILE.jpg',
                description: 'Style Meets Strength',
                details: [
                    'Premium Aluminium Build:Crafted from heavy-grade aluminium for exceptional strength, rigidity, and long-lasting performance.\n' +
                    'Elegant G Profile Design:Offers a seamless and modern edge grip for a sleek, handle-less look in contemporary interiors.\n' +
                    'Multiple Colour Finishes:Available in Black, Rose Gold, Gold, SS Brush, CP, Silver, and Iron Grey to match any design aesthetic.\n' +
                    'High-Quality Surface Coating:Each finish is applied using advanced coating technology for superior shine, durability, and scratch resistance.\n' +
                    'Perfect for Modern Kitchens & Wardrobes:Designed for easy integration into modular furniture, adding elegance with ergonomic functionality.\n' +
                    '4-Year Replacement Warranty:Guaranteed four years of protection on colour coating — a mark of HABLO\'s trusted quality.'
                ]
            },
            {
                id: 702,
                name: 'HABLO Aluminium J Gola Profile Handle',
                image: 'https://www.habloindia.com/images/subproduct/J%20GOLA%20PROFILE%20HANDLE.jpg',
                description: 'Minimal Design. Maximum Durability.',
                details: [
                    'Premium Heavy-Thickness Aluminium:Crafted from high-grade, thick aluminium for superior strength, rigidity, and long-lasting use.\n' +
                    'Elegant J-Shape Profile:Designed for a sleek, handle-less finish that enhances the clean and modern aesthetics of any space.\n' +
                    'Smooth Edge Grip Design:Offers easy and comfortable handling with a refined edge grip profile.\n' +
                    'Available in Three Luxurious Colours:Comes in Black, Rose Gold, and Silver — perfect for matching modern kitchen and wardrobe finishes.\n' +
                    'High-Quality Surface Coating:Advanced coating ensures long-lasting colour brilliance and resistance to wear and corrosion.\n' +
                    '4-Year Replacement Warranty:Backed by HABLO’s four-year colour coating warranty — a promise of enduring beauty and reliability.'
                ]
            },
            {
                id: 703,
                name: 'HABLO Aluminium C Gola Profile Handle',
                image: 'https://www.habloindia.com/images/subproduct/C%20GOLA%20PROFILE%20HANDLE.jpg',
                description: 'Elegant Strength with Lasting Finish',
                details: [
                    'Heavy-Thickness Aluminium Build:Manufactured from robust, thick aluminium for superior durability and long-lasting performance.\n' +
                    'Sleek C-Shape Design:Offers a modern, handle-less look with a smooth and ergonomic grip for effortless functionality.\n' +
                    'Refined Aesthetic Appeal:Perfectly complements contemporary kitchens, wardrobes, and modular furniture designs.\n' +
                    'Available in Three Premium Colours:Comes in Black, Rose Gold, and Silver, adding a touch of sophistication to any interior.\n' +
                    'Advanced Coating Technology:Ensures a rich, durable surface finish resistant to fading, corrosion, and daily wear.\n' +
                    '4-Year Replacement Warranty:Backed by HABLO’s four-year colour coating warranty, guaranteeing both quality and confidence.'
                ]
            }
        ]
    },
    {
        id: 8,
        name: 'PVD DECORATIVE PROFILES',
        image: 'https://www.habloindia.com/images/products/PVD%20DECORATIVE%20PROFILES.jpg',
        description: '',
        subProducts: [
            {
                id: 801,
                name: 'HABLO SS304 Decorative T Profile',
                image: 'https://www.habloindia.com/images/subproduct/SS304%20Decorative%20T%20Profile.jpg',
                description: '',
                details: [
                    'Crafted from premium SS304 grade stainless steel, ensuring long-lasting durability and rust resistance.\n' +
                    'Ideal for use on wall, floor, ceiling, and door tile joints to provide a clean and elegant finish.\n' +
                    'Features a PVD mirror finish that enhances the space with a reflective, luxurious glow.\n' +
                    'Available in four rich colours – Gold Mirror, Rose Gold Mirror, CP Mirror, and Black Mirror.\n' +
                    'Offered in five size options: 6MM, 9MM, 12MM, 20MM, and 25MM to suit varied design needs.\n' +
                    'Designed for both aesthetic enhancement and protection, adding a sleek modern touch to any interior.'
                ]
            },
            {
                id: 802,
                name: 'HABLO SS304 L Profile',
                image: 'https://www.habloindia.com/images/subproduct/SS304%20L%20Profile.jpg',
                description: '',
                details: [
                    'Manufactured from premium stainless steel 304 grade ensuring strength, durability, and corrosion resistance.\n' +
                    'Designed in a mirror-finish PVD coating that adds a sleek and luxurious appeal to interiors.\n' +
                    'Available in four elegant colours - Gold Mirror, CP Mirror, Rose Gold Mirror, and Black Mirror.\n' +
                    'Offered in three size options - 12MM, 20MM, and 25MM to meet varied design applications.\n' +
                    'Perfect for use on edges, corners, and tile junctions, providing both protection and decorative enhancement.\n' +
                    'Comes with a lifetime warranty on colour coating, ensuring long-lasting brilliance and finish retention.'
                ]
            },
            {
                id: 803,
                name: 'HABLO Decorative PVD Sticker Profile',
                image: 'https://www.habloindia.com/images/subproduct/Decorative%20PVD%20Sticker%20Profile.jpg',
                description: '',
                details: [
                    'Made from high-quality stainless steel with PVD mirror coating for a premium decorative finish.\n' +
                    'Supplied in a 5-meter roll length for flexible and convenient application across multiple surfaces.\n' +
                    'Features a self-adhesive backing that allows easy installation without the need for professional help.\n' +
                    'Available in four size options - 12MM, 20MM, 25MM, and 50MM to suit various design requirements.\n' +
                    'Comes in three luxurious colours - Gold Mirror, CP Mirror, and Rose Gold Mirror for elegant interiors.\n' +
                    'Backed by a lifetime colour warranty, ensuring long-lasting shine and superior finish quality.'
                ]
            },
            {
                id: 804,
                name: 'HABLO SS304 U Profile',
                image: 'https://www.habloindia.com/images/subproduct/SS304%20U%20Profile.jpg',
                description: '',
                details: [
                    'Manufactured from high-grade stainless steel 304, ensuring superior strength and corrosion resistance.\n' +
                    'Designed for decorative use across tiles, marbles, and stones, enhancing the overall aesthetic appeal.\n' +
                    'Perfect for creating elegant joints and edges, adding a refined and grand visual effect.\n' +
                    'Available in five size options - 5MM, 10MM, 15MM, 20MM, and 25MM for versatile applications.\n' +
                    'Offered in four luxurious PVD mirror finishes – Gold Mirror, Rose Gold Mirror, CP Mirror, and Black Mirror.\n' +
                    'Comes with a lifetime warranty on colour, ensuring long-lasting brilliance and premium finish.'
                ]
            }
        ]
    }
];

export default function ProductsSection() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [selectedSubProduct, setSelectedSubProduct] = useState<SubProduct | null>(null);
    const [expandedProduct, setExpandedProduct] = useState<number | null>(null);
    const [scrollIndex, setScrollIndex] = useState(0);

    function handleScroll(direction: 'left' | 'right') {
        if (!scrollContainerRef.current) return;
        const card = scrollContainerRef.current.querySelector('div[data-productcard]');
        if (!card) return;
        const cardWidth = card.clientWidth;
        let newIndex = scrollIndex + (direction === 'right' ? 1 : -1);
        newIndex = Math.max(0, Math.min(mainProducts.length - 1, newIndex));
        setScrollIndex(newIndex);
        scrollContainerRef.current.scrollTo({ left: cardWidth * newIndex, behavior: 'smooth' });
    }
    // Keep padding correct & update index on manual scroll
    const handleManualScroll = () => {
        if (!scrollContainerRef.current) return;
        const scrollLeft = scrollContainerRef.current.scrollLeft;
        const card = scrollContainerRef.current.querySelector('div[data-productcard]');
        if (!card) return;
        const cardWidth = card.clientWidth;
        const idx = Math.round(scrollLeft / cardWidth);
        setScrollIndex(idx);
    };

    return (
        <div id="products" className="scroll-mt-24">
            <div className="relative overflow-hidden py-8 md:py-16 lg:py-20 px-4 md:px-8 lg:px-12 bg-slate-50 min-h-screen">
                <div
                    aria-hidden
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        backgroundImage: "radial-gradient(rgba(255,93,36,0.22) 1px, transparent 1px)",
                        backgroundSize: "16px 16px",
                        backgroundPosition: "0 0"
                    }}
                />
                {/* Header Section */}
                <div className="relative max-w-7xl mx-auto mb-8 md:mb-12">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-3 md:mb-4">
                        Our Products
                    </h1>
                    <p className="text-base md:text-lg lg:text-xl text-slate-600 max-w-2xl">
                        Explore our comprehensive range of premium kitchen accessories and hardware
                    </p>
                </div>

                {/* Scrollable Products Container */}
                <div className="relative max-w-7xl mx-auto">
                    {/* Left Arrow */}
                    <button
                        onClick={() => handleScroll('left')}
                        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 bg-white rounded-full p-3 shadow-xl hover:shadow-2xl transition-all hover:scale-110 border border-slate-200"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft className="w-6 h-6 text-slate-700" />
                    </button>

                    {/* Right Arrow */}
                    <button
                        onClick={() => handleScroll('right')}
                        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 bg-white rounded-full p-3 shadow-xl hover:shadow-2xl transition-all hover:scale-110 border border-slate-200"
                        aria-label="Scroll right"
                    >
                        <ChevronRight className="w-6 h-6 text-slate-700" />
                    </button>

                    {/* Products Scroll Container */}
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-0 md:gap-6 overflow-x-auto scroll-smooth pb-4 scrollbar-hide snap-x snap-mandatory -mx-4 md:mx-0"
                        onScroll={handleManualScroll}
                    >
                        {mainProducts.map((product) => (
                            <div
                                key={product.id}
                                data-productcard
                                className="flex-shrink-0 w-[100vw] px-4 md:px-0 md:w-[400px] lg:w-[450px] snap-center"
                            >
                                {/* Main Product Card */}
                                <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100">
                                    {/* Main Product Image */}
                                    <div className="relative h-[240px] md:h-[280px] overflow-hidden bg-slate-100">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                                {product.name}
                                            </h3>
                                            <p className="text-slate-200 text-sm">
                                                {product.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Sub Products Section */}
                                    <div className="p-5 md:p-6">
                                        <h4 className="text-lg font-semibold text-slate-900 mb-4">
                                            Available Products ({product.subProducts.length})
                                        </h4>

                                        <div className="space-y-3 max-h-[42vh] overflow-y-auto pr-2">
                                            {product.subProducts.map((subProduct) => (
                                                <button
                                                    key={subProduct.id}
                                                    onClick={() => setSelectedSubProduct(subProduct)}
                                                    className="w-full flex items-center gap-4 p-3 bg-slate-50 hover:bg-blue-50 rounded-lg transition-all border border-slate-200 hover:border-blue-300 group"
                                                >
                                                    <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-slate-200">
                                                        <img
                                                            src={subProduct.image}
                                                            alt={subProduct.name}
                                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                                                        />
                                                    </div>
                                                    <div className="flex-1 text-left">
                                                        <h5 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                                                            {subProduct.name}
                                                        </h5>
                                                        <p className="text-xs text-slate-600 line-clamp-1">
                                                            {subProduct.description}
                                                        </p>
                                                    </div>
                                                    <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile left/right arrow controls */}
                    {scrollIndex > 0 && (
                        <button
                            onClick={() => handleScroll('left')}
                            type="button"
                            className="md:hidden absolute top-[31%] left-2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-2 border border-orange-100 hover:bg-amber-100 hover:shadow-xl transition-all"
                            aria-label="Scroll left"
                        >
                            <ChevronLeft size={32} className="text-[#ff5d24]" />
                        </button>
                    )}
                    {scrollIndex < mainProducts.length - 1 && (
                        <button
                            onClick={() => handleScroll('right')}
                            type="button"
                            className="md:hidden absolute top-[31%] right-2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-2 border border-orange-100 hover:bg-amber-100 hover:shadow-xl transition-all"
                            aria-label="Scroll right"
                        >
                            <ChevronRight size={32} className="text-[#ff5d24]" />
                        </button>
                    )}
                    {/* Mobile scroll hint */}
                    <div className="md:hidden text-center mt-6">
                        <p className="text-sm text-slate-500">
                            ← Swipe to see more categories →
                        </p>
                    </div>
                </div>
            </div>

            {/* Sub Product Modal */}
            {selectedSubProduct && (
                <div
                    className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm z-50 flex items-center justify-center p-0 md:p-6 animate-fadeIn"
                    onClick={() => setSelectedSubProduct(null)}
                >
                    <div
                        className="bg-white md:rounded-3xl shadow-2xl w-screen h-screen max-w-none max-h-none md:max-w-4xl md:h-auto md:max-h-[90vh] overflow-y-auto animate-slideUp"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="sticky top-0 bg-white border-b border-slate-200 px-4 md:px-6 py-4 flex items-center justify-between z-10 rounded-t-3xl pt-8">
                            <div className="flex items-center gap-2">
                                <Info className="w-5 h-5 text-blue-600" />
                                <span className="text-lg font-semibold text-slate-900">Product Details</span>
                            </div>
                            <button
                                onClick={() => setSelectedSubProduct(null)}
                                className="rounded-full p-2 hover:bg-slate-100 transition-colors"
                                aria-label="Close modal"
                            >
                                <X className="w-6 h-6 text-slate-600" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="grid md:grid-cols-2 gap-6 md:gap-8 p-4 md:p-8">
                            {/* Image Section */}
                            <div className="relative">
                                <div className="rounded-2xl overflow-hidden bg-slate-100 aspect-square shadow-lg">
                                    <img
                                        src={selectedSubProduct.image}
                                        alt={selectedSubProduct.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Details Section */}
                            {/* Details List */}
                            <div className="mb-6">
                                <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
                                    <span className="w-1 h-6 bg-blue-600 rounded-full"></span>
                                    Key Features & Specifications
                                </h3>

                                <div className="space-y-4">
                                    {selectedSubProduct.details[0]
                                        .split('\n')
                                        .map((line, idx) => {
                                            const [title, description] = line.split(':');
                                            return (
                                                <div
                                                    key={idx}
                                                    className="bg-slate-50 p-4 rounded-xl border border-slate-200 hover:bg-slate-100 transition"
                                                >
                                                    <h4 className="font-semibold text-slate-900 mb-1">
                                                        {title.trim()}:
                                                    </h4>
                                                    <p className="text-slate-700 text-sm md:text-base leading-relaxed">
                                                        {description?.trim()}
                                                    </p>
                                                </div>
                                            );
                                        })}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            )}

            <style>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px) scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }

                .animate-fadeIn {
                    animation: fadeIn 0.2s ease-out;
                }

                .animate-slideUp {
                    animation: slideUp 0.3s ease-out;
                }
            `}</style>
        </div>
    );
}
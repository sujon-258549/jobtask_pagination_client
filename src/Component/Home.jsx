import axios from 'axios';
import React, { useEffect, useState } from 'react';

const products = [
    {
        "productName": "Wireless Mouse",
        "productImage": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9zdGF0aWMtMDEuZGFyYXouY29tLmJkL3AvMzI3ZDlkZTY0ZjU0M2JjZjMwYTdkNTRkNmRmNDFjYzUuanBn_400x400q75.png_.webp",
        "description": "Ergonomic wireless mouse with smooth scrolling.",
        "price": "29.99",
        "category": "Electronics",
        "ratings": "4.7",
        "createdAt": "2024-08-01T10:00:00Z"
    },
    {
        "productName": "Bluetooth Headphones",
        "productImage": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9iZC1saXZlLTIxLnNsYXRpYy5uZXQva2YvUzYwNWI0NmM5Mzg0NjQ5NWZiODQxNzdkYTlhYTZiZWE0Ni5qcGc=_400x400q75.png_.webp",
        "description": "Noise-cancelling Bluetooth headphones with built-in mic.",
        "price": "89.99",
        "category": "Electronics",
        "ratings": "4.5",
        "createdAt": "2024-08-02T11:00:00Z"
    },
    {
        "productName": "Gaming Keyboard",
        "productImage": "https://www.startech.com.bd/image/cache/catalog/keyboard/aula/f2088/f2088-04-228x228.webp",
        "description": "RGB backlit gaming keyboard with mechanical switches.",
        "price": "69.99",
        "category": "Electronics",
        "ratings": "4.8",
        "createdAt": "2024-08-03T12:00:00Z"
    },
    {
        "productName": "4K Monitor",
        "productImage": "https://www.startech.com.bd/image/cache/catalog/monitor/philips/221v8lb/221v8lb-01-228x228.webp",
        "description": "Ultra HD 4K monitor with high color accuracy.",
        "price": "299.99",
        "category": "Electronics",
        "ratings": "4.6",
        "createdAt": "2024-08-04T13:00:00Z"
    },
    {
        "productName": "USB-C Charger",
        "productImage": "https://www.startech.com.bd/image/cache/catalog/charger/voltme/revo-45-duo-type-c/revo-45-duo-type-c-01-228x228.webp",
        "description": "Fast-charging USB-C power adapter.",
        "price": "19.99",
        "category": "Accessories",
        "ratings": "4.6",
        "createdAt": "2024-08-05T14:00:00Z"
    },
    {
        "productName": "Smartphone Stand",
        "productImage": "https://www.startech.com.bd/image/cache/catalog/gimbal/zhiyun/smooth-5s-combo/smooth-5s-combo-01-228x228.webp",
        "description": "Adjustable stand for smartphones and tablets.",
        "price": "15.99",
        "category": "Accessories",
        "ratings": "4.4",
        "createdAt": "2024-08-06T15:00:00Z"
    },
    {
        "productName": "Fitness Tracker",
        "productImage": "https://www.startech.com.bd/image/cache/catalog/smart-band/Huawei%20/band-9/band-9-starry-black-01-228x228.webp",
        "description": "Wearable fitness tracker with heart rate monitor.",
        "price": "59.99",
        "category": "Health",
        "ratings": "4.7",
        "createdAt": "2024-08-07T16:00:00Z"
    },
    {
        "productName": "Electric Toothbrush",
        "productImage": "https://www.startech.com.bd/image/cache/catalog/gadget/daily-lifestyle/enchen/aurora-t-plus/aurora-t-plus-03-228x228.webp",
        "description": "Rechargeable electric toothbrush with multiple modes.",
        "price": "39.99",
        "category": "Health",
        "ratings": "4.6",
        "createdAt": "2024-08-08T17:00:00Z"
    },
    {
        "productName": "Portable Speaker",
        "productImage": "https://www.startech.com.bd/image/cache/catalog/speaker/havit/sk835bt/sk835bt-01-228x228.webp",
        "description": "Bluetooth portable speaker with high bass output.",
        "price": "49.99",
        "category": "Electronics",
        "ratings": "4.8",
        "createdAt": "2024-08-09T18:00:00Z"
    },
    {
        "productName": "Smartwatch",
        "productImage": "https://www.startech.com.bd/image/cache/catalog/smart-watch/havit/m9016-pro/m9016-pro-01-228x228.jpg",
        "description": "Smartwatch with fitness tracking and notifications.",
        "price": "199.99",
        "category": "Electronics",
        "ratings": "4.5",
        "createdAt": "2024-08-10T19:00:00Z"
    },
    {
        "productName": "Backpack",
        "productImage": "https://www.startech.com.bd/image/cache/catalog/bag/wiwu/ishield-ultra-thin/ishield-ultra-thin-01-228x228.webp",
        "description": "Durable backpack with multiple compartments.",
        "price": "34.99",
        "category": "Accessories",
        "ratings": "4.3",
        "createdAt": "2024-08-11T20:00:00Z"
    },
    {
        "productName": "Bluetooth Speaker",
        "productImage": "https://www.startech.com.bd/image/cache/catalog/speaker/joyroom/jr-ml03/jr-ml03-01-228x228.jpg",
        "description": "Compact Bluetooth speaker with clear sound.",
        "price": "29.99",
        "category": "Electronics",
        "ratings": "4.6",
        "createdAt": "2024-08-12T21:00:00Z"
    },
    {
        "productName": "LED Desk Lamp",
        "productImage": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9iZC1saXZlLTIxLnNsYXRpYy5uZXQva2YvU2YxOGY0ZjkwNmJkMjRmNzdhNGQ4YmQyNDE0MDhhNzA4Vi5qcGc=_400x400q75.png_.webp",
        "description": "Adjustable LED desk lamp with touch controls.",
        "price": "25.99",
        "category": "Home",
        "ratings": "4.7",
        "createdAt": "2024-08-13T22:00:00Z"
    },
    {
        "productName": "Wireless Charger",
        "productImage": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9zdGF0aWMtMDEuZGFyYXouY29tLmJkL3AvMTgyOGI1OTMxOThmMmM2NTllMTEwYmUzNDM5Yjc0MzYuanBn_400x400q75.png_.webp",
        "description": "Fast wireless charger compatible with all Qi-enabled devices.",
        "price": "24.99",
        "category": "Accessories",
        "ratings": "4.6",
        "createdAt": "2024-08-14T23:00:00Z"
    },
    {
        "productName": "Laptop Stand",
        "productImage": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9zdGF0aWMtMDEuZGFyYXouY29tLmJkL3AvOTA3ZDA0YTg0YmQwMzg2MjVkYmRkMGQ5Mjg0MzI2NTkuanBn_400x400q75.png_.webp",
        "description": "Adjustable laptop stand with cooling features.",
        "price": "44.99",
        "category": "Accessories",
        "ratings": "4.5",
        "createdAt": "2024-08-15T12:00:00Z"
    },
    {
        "productName": "Portable SSD",
        "productImage": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9iZC1saXZlLTIxLnNsYXRpYy5uZXQva2YvUzk4NDIxMGI3MDc4ZTQ1NTliZjJmYzZlY2QwMDUzMGJlbi5qcGc=_400x400q75.png_.webp",
        "description": "High-speed portable SSD with 1TB storage.",
        "price": "129.99",
        "category": "Electronics",
        "ratings": "4.8",
        "createdAt": "2024-08-16T13:00:00Z"
    },
    {
        "productName": "Mouse Pad",
        "productImage": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9zdGF0aWMtMDEuZGFyYXouY29tLmJkL3AvNmE0ZGI5MTQ2NWE2OTNhOTRiMzE3MmNmOWQ5YWRiOWIuanBn_400x400q75.png_.webp",
        "description": "Comfortable mouse pad with wrist support.",
        "price": "12.99",
        "category": "Accessories",
        "ratings": "4.4",
        "createdAt": "2024-08-17T14:00:00Z"
    },
    {
        "productName": "Gaming Chair",
        "productImage": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9iZC1saXZlLTIxLnNsYXRpYy5uZXQva2YvU2Y3ZWRmN2U0MDZhMzRiZDM4Y2E0N2EwYWJkNmEyMWQ5Yy5qcGc=_400x400q75.png_.webp",
        "description": "Ergonomic gaming chair with adjustable features.",
        "price": "199.99",
        "category": "Furniture",
        "ratings": "4.7",
        "createdAt": "2024-08-18T15:00:00Z"
    },
    {
        "productName": "Camera Tripod",
        "productImage": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9zdGF0aWMtMDEuZGFyYXouY29tLmJkL3AvZTZmNjc1ZTRmYjlmNmUzZGEzODQ3M2ZjYTE2Y2JmZmQuanBn_400x400q75.png_.webp",
        "description": "Adjustable camera tripod with quick-release plate.",
        "price": "49.99",
        "category": "Accessories",
        "ratings": "4.6",
        "createdAt": "2024-08-19T16:00:00Z"
    },
    {
        "productName": "USB Flash Drive",
        "productImage": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9zdGF0aWMtMDEuZGFyYXouY29tLmJkL3AvNzc2MGRjMDIxMGE5MzE2ZTQ3NjYzYjA3OWY1MzA4ZjIuanBn_400x400q75.png_.webp",
        "description": "16GB USB flash drive for data storage.",
        "price": "8.99",
        "category": "Electronics",
        "ratings": "4.5",
        "createdAt": "2024-08-20T17:00:00Z"
    },
    {
        "productName": "Electric Kettle",
        "productImage": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9zdGF0aWMtMDEuZGFyYXouY29tLmJkL3AvNzkwNmZmMjY5YTg0OGE2MDFkN2ViZGJiMGNmODkwNzQuanBn_400x400q75.png_.webp",
        "description": "Stainless steel electric kettle with automatic shut-off.",
        "price": "39.99",
        "category": "Home",
        "ratings": "4.6",
        "createdAt": "2024-08-21T18:00:00Z"
    },
    {
        "productName": "Yoga Mat",
        "productImage": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9zdGF0aWMtMDEuZGFyYXouY29tLmJkL3AvYzU5MzA0MjZlNGMwOGMzNTA1OTFhYzdlNDAxOGI5ZjcuanBn_400x400q75.png_.webp",
        "description": "Non-slip yoga mat with extra cushioning.",
        "price": "29.99",
        "category": "Fitness",
        "ratings": "4.8",
        "createdAt": "2024-08-22T19:00:00Z"
    },
    {
        "productName": "Coffee Maker",
        "productImage": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9zdGF0aWMtMDEuZGFyYXouY29tLmJkL3AvNTBiMTYzNGI3YzA2MDkyZmIxMjlkMTc3NDUzMTYyYWIuanBn_400x400q75.png_.webp",
        "description": "Programmable coffee maker with brew-strength control.",
        "price": "59.99",
        "category": "Home",
        "ratings": "4.7",
        "createdAt": "2024-08-23T20:00:00Z"
    },
    {
        "productName": "Desk Organizer",
        "productImage": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9zdGF0aWMtMDEuZGFyYXouY29tLmJkL3AvNGM5ODRiNWUxOThmMmMzNTk5ZGQ3ZjlkNDdkMGEyMDAuanBn_400x400q75.png_.webp",
        "description": "Wooden desk organizer with multiple compartments.",
        "price": "22.99",
        "category": "Home",
        "ratings": "4.5",
        "createdAt": "2024-08-24T21:00:00Z"
    },
    {
        "productName": "Air Purifier",
        "productImage": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9iZC1saXZlLTIxLnNsYXRpYy5uZXQva2YvUzkyNWU4MDRkNWIzNDRmYTRhNjAwMTUwYWUzMTQyMDNhbS5qcGc=_400x400q75.png_.webp",
        "description": "Air purifier with HEPA filter for improved air quality.",
        "price": "149.99",
        "category": "Home",
        "ratings": "4.8",
        "createdAt": "2024-08-25T22:00:00Z"
    },
    {
        "productName": "Gaming Mouse",
        "productImage": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9zdGF0aWMtMDEuZGFyYXouY29tLmJkL3AvYTc4NmVmZWViNDY0YWI3MzAxNGQ1MDA4ZGZjNGY2ZTIuanBn_400x400q75.png_.webp",
        "description": "High-precision gaming mouse with customizable buttons.",
        "price": "39.99",
        "category": "Electronics",
        "ratings": "4.7",
        "createdAt": "2024-08-26T23:00:00Z"
    },
    {
        "productName": "Wired Earphones",
        "productImage": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9iZC1saXZlLTIxLnNsYXRpYy5uZXQva2YvUzVmZWJjNjgyMjcwYTRhYzZhODNmNmUyM2EzNTQxOGExaC5qcGc=_400x400q75.png_.webp",
        "description": "In-ear wired earphones with noise isolation.",
        "price": "14.99",
        "category": "Electronics",
        "ratings": "4.4",
        "createdAt": "2024-08-27T12:00:00Z"
    },
    {
        "productName": "Digital Thermometer",
        "productImage": "https://fixit.com.bd/wp-content/uploads/2023/09/ingco-hit015501-digital-infrared-thermometer-scanner-500x500-1-400x400.webp",
        "description": "Digital thermometer with quick reading and fever alert.",
        "price": "12.99",
        "category": "Health",
        "ratings": "4.6",
        "createdAt": "2024-08-28T13:00:00Z"
    },
    {
        "productName": "Cordless Drill",
        "productImage": "https://fixit.com.bd/wp-content/uploads/2023/09/41NlmW5kYPL-400x400.webp",
        "description": "Powerful cordless drill with multiple speed settings.",
        "price": "89.99",
        "category": "Tools",
        "ratings": "4.7",
        "createdAt": "2024-08-29T14:00:00Z"
    },
    {
        "productName": "Smart Light Bulb",
        "productImage": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9zdGF0aWMtMDEuZGFyYXouY29tLmJkL3AvZWE4NTk5NmVhNzMwOTdlMDQ2ZjgzNWQ4ZjgyNzUyODQuanBn_400x400q75.png_.webp",
        "description": "Wi-Fi enabled smart light bulb with color control.",
        "price": "19.99",
        "category": "Home",
        "ratings": "4.5",
        "createdAt": "2024-08-30T15:00:00Z"
    },
    {
        "productName": "Pressure Cooker",
        "productImage": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9zdGF0aWMtMDEuZGFyYXouY29tLmJkL3AvMmMzYWE0YzVlODgwZTcyMzVlYWNiMjA5Yzk2NGY4NWMuanBn_400x400q75.png_.webp",
        "description": "Stainless steel pressure cooker with safety features.",
        "price": "39.99",
        "category": "Home",
        "ratings": "4.6",
        "createdAt": "2024-08-31T16:00:00Z"
    },
    {
        "productName": "Wine Opener",
        "productImage": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9iZC1saXZlLTIxLnNsYXRpYy5uZXQva2YvUzRhOGU2ZTNhNzRlNTRjMTc4MDVjMjQxZDZjZjdlNWVkSC5wbmc=_400x400q75.png_.webp",
        "description": "Electric wine opener with foil cutter.",
        "price": "25.99",
        "category": "Home",
        "ratings": "4.4",
        "createdAt": "2024-09-01T17:00:00Z"
    },
    {
        "productName": "Photo Frame",
        "productImage": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9zdGF0aWMtMDEuZGFyYXouY29tLmJkL3AvZTVhNDRmOGM4MmU4NDY3MmRmNzUxOGFlNmYwNDY5NzcuanBn_400x400q75.png_.webp",
        "description": "Elegant photo frame with a glass cover.",
        "price": "14.99",
        "category": "Home",
        "ratings": "4.5",
        "createdAt": "2024-09-02T18:00:00Z"
    },
    {
        "productName": "Cookbook",
        "productImage": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9iZC1saXZlLTIxLnNsYXRpYy5uZXQva2YvUzc4NjUwMzkwNjZkMTQyMTg5YjdhMTdlYTIzYzQ4YjBjay5qcGc=_400x400q75.png_.webp",
        "description": "Cookbook with easy-to-follow recipes for home cooks.",
        "price": "19.99",
        "category": "Books",
        "ratings": "4.6",
        "createdAt": "2024-09-03T19:00:00Z"
    },
    {
        "productName": "Sunglasses",
        "productImage": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9zdGF0aWMtMDEuZGFyYXouY29tLmJkL3AvMzEwMDE5ZWM5OWMwZGYxNTUxY2Y2YzA4NTdjMDgxODUuanBn_400x400q75.png_.webp",
        "description": "Stylish sunglasses with UV protection.",
        "price": "34.99",
        "category": "Accessories",
        "ratings": "4.7",
        "createdAt": "2024-09-04T20:00:00Z"
    },
    {
        "productName": "Wall Clock",
        "productImage": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9iZC1saXZlLTIxLnNsYXRpYy5uZXQva2YvUzIwOTNkZDU5YWRlOTQxMzQ5YWU0NTg1ZGRiYjdmM2RmRi5qcGc=_400x400q75.png_.webp",
        "description": "Classic wall clock with easy-to-read numbers.",
        "price": "29.99",
        "category": "Home",
        "ratings": "4.5",
        "createdAt": "2024-09-05T21:00:00Z"
    },
    {
        "productName": "Electric Blanket",
        "productImage": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9iZC1saXZlLTIxLnNsYXRpYy5uZXQva2YvUzk1ZDE5YjQ1ZTJhMTRlMDRiMDZjMzQ4ZjliNmIxYWY1Si5qcGc=_400x400q75.png_.webp",
        "description": "Heated electric blanket with adjustable settings.",
        "price": "79.99",
        "category": "Home",
        "ratings": "4.8",
        "createdAt": "2024-09-06T22:00:00Z"
    },
    {
        "productName": "Bedside Lamp",
        "productImage": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9iZC1saXZlLTIxLnNsYXRpYy5uZXQva2YvUzM4ZmNkYmU5OTEzZDRmYzNiOGZmZDJhNDhlMmNiMzI0bS5qcGc=_400x400q75.png_.webp",
        "description": "Compact bedside lamp with adjustable brightness.",
        "price": "22.99",
        "category": "Home",
        "ratings": "4.6",
        "createdAt": "2024-09-07T23:00:00Z"
    },
    {
        "productName": "Tool Set",
        "productImage": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9zdGF0aWMtMDEuZGFyYXouY29tLmJkL3AvNjRjMjI0MzQ3NjEyYzQzMTlmZTg5MjE3MmUyYWM3Y2EuanBn_400x400q75.png_.webp",
        "description": "Comprehensive tool set with various hand tools.",
        "price": "119.99",
        "category": "Tools",
        "ratings": "4.7",
        "createdAt": "2024-09-08T12:00:00Z"
    },
    {
        "productName": "Pet Bed",
        "productImage": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9iZC1saXZlLTIxLnNsYXRpYy5uZXQva2YvUzE5NzMxYTYwNjEzODQ4ZTNiNjVjNDExYWNkNzliZGQydC5qcGc=_400x400q75.png_.webp",
        "description": "Comfortable pet bed for small to medium-sized pets.",
        "price": "49.99",
        "category": "Pets",
        "ratings": "4.6",
        "createdAt": "2024-09-09T13:00:00Z"
    },
    {
        "productName": "Guitar",
        "productImage": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9zdGF0aWMtMDEuZGFyYXouY29tLmJkL3AvZGMxYTcyMWFlMDEzZGU2NmZhYmZmYmVjZjk0OTUxZGMuanBn_400x400q75.png_.webp",
        "description": "Acoustic guitar with a rich sound and smooth neck.",
        "price": "149.99",
        "category": "Music",
        "ratings": "4.8",
        "createdAt": "2024-09-10T14:00:00Z"
    },
    {
        "productName": "Table Lamp",
        "productImage": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9zdGF0aWMtMDEuZGFyYXouY29tLmJkL3AvOGNiOTUwZmQ5NmMxNGYwY2JlMmViZDM4MzUzYzNjNjQuanBn_400x400q75.png_.webp",
        "description": "Modern table lamp with dimmable feature.",
        "price": "34.99",
        "category": "Home",
        "ratings": "4.5",
        "createdAt": "2024-09-11T15:00:00Z"
    },
    {
        "productName": "Blender",
        "productImage": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9zdGF0aWMtMDEuZGFyYXouY29tLmJkL3AvMjY1OGExMGI4Njc4ZWE1YjQyMWZlZTZmNmUyZmFmYmUuanBn_400x400q75.png_.webp",
        "description": "High-speed blender with multiple blending modes.",
        "price": "79.99",
        "category": "Home",
        "ratings": "4.7",
        "createdAt": "2024-09-12T16:00:00Z"
    },
    {
        "productName": "Electric Fan",
        "productImage": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9zdGF0aWMtMDEuZGFyYXouY29tLmJkL3AvOTRkODE3MTI3MzEwYTE2M2QzM2IyODczNWM2MTc3NGMuanBn_400x400q75.png_.webp",
        "description": "Portable electric fan with oscillation feature.",
        "price": "29.99",
        "category": "Home",
        "ratings": "4.4",
        "createdAt": "2024-09-13T17:00:00Z"
    },
    {
        "productName": "Smart Thermostat",
        "productImage": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9iZC1saXZlLTIxLnNsYXRpYy5uZXQva2YvUzY0MDVjMDk1ZmNmNjQyNTRiN2ZiODRiYTc3MjYwMDMwUi5qcGc=_400x400q75.png_.webp",
        "description": "Wi-Fi enabled smart thermostat with energy-saving features.",
        "price": "129.99",
        "category": "Home",
        "ratings": "4.6",
        "createdAt": "2024-09-14T18:00:00Z"
    },
    {
        "productName": "Digital Camera",
        "productImage": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9iZC1saXZlLTIxLnNsYXRpYy5uZXQva2YvUzVlZWY1ZDM5NTNmMTRiNzU5YzFkMjUyYTc3MTVlNmMydC5qcGc=_400x400q75.png_.webp",
        "description": "High-resolution digital camera with 24MP sensor.",
        "price": "499.99",
        "category": "Electronics",
        "ratings": "4.8",
        "createdAt": "2024-09-15T19:00:00Z"
    },
    {
        "productName": "Outdoor Grill",
        "productImage": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9iZC1saXZlLTIxLnNsYXRpYy5uZXQva2YvUzJmYTViN2U1NDgxNTQ4Y2RhY2E2MjdmNWMwMTc0M2Y0bC5qcGc=_400x400q75.png_.webp",
        "description": "Gas-powered outdoor grill with multiple burners.",
        "price": "299.99",
        "category": "Home",
        "ratings": "4.7",
        "createdAt": "2024-09-16T20:00:00Z"
    },
    {
        "productName": "Smart Light Strip",
        "productImage": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9iZC1saXZlLTIxLnNsYXRpYy5uZXQva2YvUzM1ODI3ODQ4ZjIyYzRhNTNiMThmOTkwZjQyN2NjYmZjTi5qcGc=_400x400q75.png_.webp",
        "description": "Color-changing smart light strip for ambiance.",
        "price": "39.99",
        "category": "Home",
        "ratings": "4.6",
        "createdAt": "2024-09-17T21:00:00Z"
    },
    {
        "productName": "Gaming Console",
        "productImage": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9iZC1saXZlLTIxLnNsYXRpYy5uZXQva2YvUzcwZWJiNWY0MTBkYTQ1ZjVhNWI3NzM0NDdjMzkyM2Ixdi5qcGc=_400x400q75.png_.webp",
        "description": "Latest gaming console with high-definition graphics.",
        "price": "399.99",
        "category": "Electronics",
        "ratings": "4.9",
        "createdAt": "2024-09-18T22:00:00Z"
    },
    {
        "productName": "Electric Drill",
        "productImage": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9zdGF0aWMtMDEuZGFyYXouY29tLmJkL3AvYzljZTFlMDYzNzBjM2ZkMGE0NmEzM2YwZTU4ODc5OTcuanBn_400x400q75.png_.webp",
        "description": "Cordless electric drill with high torque and precision.",
        "price": "89.99",
        "category": "Tools",
        "ratings": "4.6",
        "createdAt": "2024-09-19T23:00:00Z"
    },
    {
        "productName": "Fitness Bands",
        "productImage": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9iZC1saXZlLTIxLnNsYXRpYy5uZXQva2YvUzA3NjgwN2IwOGVkMzRlNWI5YTZlZWM3N2JhNGI1Y2I4VS5qcGc=_400x400q75.png_.webp",
        "description": "Set of resistance bands for fitness training.",
        "price": "22.99",
        "category": "Fitness",
        "ratings": "4.5",
        "createdAt": "2024-09-20T12:00:00Z"
    },
    {
        "productName": "Electric Shaver",
        "productImage": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9zdGF0aWMtMDEuZGFyYXouY29tLmJkL3AvNTBiMDM1ZTNiNzIyMDVmOWQwZjE2Y2MyN2M5M2YwNGIuanBn_400x400q75.png_.webp",
        "description": "Rechargeable electric shaver with multiple trimming settings.",
        "price": "54.99",
        "category": "Health",
        "ratings": "4.7",
        "createdAt": "2024-09-21T13:00:00Z"
    },
    {
        "productName": "Camera Lens",
        "productImage": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9zdGF0aWMtMDEuZGFyYXouY29tLmJkL3AvNTQ3NzYxMDVjMzA3ODNkNWQ3NDAxYTM4NDAzZWY3Y2UuanBn_400x400q75.png_.webp",
        "description": "High-quality camera lens with zoom capabilities.",
        "price": "299.99",
        "category": "Electronics",
        "ratings": "4.8",
        "createdAt": "2024-09-22T14:00:00Z"
    },
    {
        "productName": "Camping Tent",
        "productImage": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9zdGF0aWMtMDEuZGFyYXouY29tLmJkL3AvYjM3YzNlMDIzMTdiZTBjY2FlYWQ0MTJlNDkwODJmZDYuanBn_400x400q75.png_.webp",
        "description": "Spacious camping tent with water-resistant fabric.",
        "price": "129.99",
        "category": "Outdoor",
        "ratings": "4.7",
        "createdAt": "2024-09-23T15:00:00Z"
    },
    {
        "productName": "Digital Scale",
        "productImage": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9zdGF0aWMtMDEuZGFyYXouY29tLmJkL3AvOWEwNjU2ZTI3NDcxYjk1YjNjNzNlMGNhZWExMGMyMDQuanBn_400x400q75.png_.webp",
        "description": "Digital scale with high accuracy for home use.",
        "price": "29.99",
        "category": "Health",
        "ratings": "4.5",
        "createdAt": "2024-09-24T16:00:00Z"
    },
    {
        "productName": "Electric Grill",
        "productImage": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9zdGF0aWMtMDEuZGFyYXouY29tLmJkL3AvZjcyNWVkN2ViYzliMzVmMDYxOTJmN2ZiMDk2OGI0MmQuanBn_400x400q75.png_.webp",
        "description": "Indoor electric grill with adjustable temperature.",
        "price": "79.99",
        "category": "Home",
        "ratings": "4.6",
        "createdAt": "2024-09-25T17:00:00Z"
    },
    {
        "productName": "Water Bottle",
        "productImage": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9iZC1saXZlLTIxLnNsYXRpYy5uZXQva2YvU2ExZjJiNmJkMWFiYjQxNzE5MGQ5NmVmMzI5ODkyNzE3cC5qcGc=_400x400q75.png_.webp",
        "description": "Stainless steel water bottle with insulation.",
        "price": "19.99",
        "category": "Accessories",
        "ratings": "4.4",
        "createdAt": "2024-09-26T18:00:00Z"
    },
    {
        "productName": "Office Chair",
        "productImage": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9iZC1saXZlLTIxLnNsYXRpYy5uZXQva2YvUzc2NDZlM2Y5OWEzNTQ1MjJhYjBlYzgxNDE0NzhmNjg2bS5qcGc=_400x400q75.png_.webp",
        "description": "Ergonomic office chair with adjustable height.",
        "price": "159.99",
        "category": "Furniture",
        "ratings": "4.7",
        "createdAt": "2024-09-27T19:00:00Z"
    },
    {
        "productName": "Hand Blender",
        "productImage": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9zdGF0aWMtMDEuZGFyYXouY29tLmJkL3AvNjgxNTQxNDQyZDBlMjhhMjE2Nzg2NTUyYjIzODA5ZDQuanBn_400x400q75.png_.webp",
        "description": "Multi-speed hand blender with whisk attachment.",
        "price": "34.99",
        "category": "Home",
        "ratings": "4.6",
        "createdAt": "2024-09-28T20:00:00Z"
    },
    {
        "productName": "Electric Air Pump",
        "productImage": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9zdGF0aWMtMDEuZGFyYXouY29tLmJkL3AvZDAxYzMyMDBmNGMzZjhjMDU1MjU4ODJhYjk2MmJlOGYuanBn_400x400q75.png_.webp",
        "description": "Electric air pump for inflating various items.",
        "price": "22.99",
        "category": "Outdoor",
        "ratings": "4.5",
        "createdAt": "2024-09-29T21:00:00Z"
    },
    {
        "productName": "Coffee Grinder",
        "productImage": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9zdGF0aWMtMDEuZGFyYXouY29tLmJkL3AvZDAxYzMyMDBmNGMzZjhjMDU1MjU4ODJhYjk2MmJlOGYuanBn_400x400q75.png_.webp",
        "description": "Electric coffee grinder with adjustable coarseness.",
        "price": "39.99",
        "category": "Home",
        "ratings": "4.6",
        "createdAt": "2024-09-30T22:00:00Z"
    },
    {
        "productName": "Air Fryer",
        "productImage": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9zdGF0aWMtMDEuZGFyYXouY29tLmJkL3AvZDEwNTAxNjQ3ZTg1MzdhZGE5NmE0ZmM1NWFmNTk2NTEucG5n_400x400q75.png_.webp",
        "description": "Air fryer with digital controls and multiple cooking presets.",
        "price": "99.99",
        "category": "Home",
        "ratings": "4.7",
        "createdAt": "2024-10-01T23:00:00Z"
    },
    {
        "productName": "Laptop Bag",
        "productImage": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9zdGF0aWMtMDEuZGFyYXouY29tLmJkL3AvMWM1ZDljYmNhNWZlZDhjNzU3YTE5OTlhYjhjOTk1YmEuanBn_400x400q75.png_.webp",
        "description": "Protective laptop bag with padded compartments.",
        "price": "34.99",
        "category": "Accessories",
        "ratings": "4.4",
        "createdAt": "2024-10-02T12:00:00Z"
    },
    {
        "productName": "Thermal Mug",
        "productImage": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9iZC1saXZlLTIxLnNsYXRpYy5uZXQva2YvU2E1MGUyMzE3MGIzYzQ4YWY5NDZkZWFhNmZiNzgzNGJhTC5qcGc=_400x400q75.png_.webp",
        "description": "Insulated thermal mug for hot and cold beverages.",
        "price": "19.99",
        "category": "Accessories",
        "ratings": "4.5",
        "createdAt": "2024-10-03T13:00:00Z"
    },
    {
        "productName": "Smart Lock",
        "productImage": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9iZC1saXZlLTIxLnNsYXRpYy5uZXQva2YvU2ZmNDA1ZjEwNWI2NDQ1YjA5OWE1ZTYzYjE4YTA5MzE4VC5qcGc=_400x400q75.png_.webp",
        "description": "Smart lock with remote access and security features.",
        "price": "149.99",
        "category": "Home",
        "ratings": "4.6",
        "createdAt": "2024-10-04T14:00:00Z"
    },
    {
        "productName": "Camera Bag",
        "productImage": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9iZC1saXZlLTIxLnNsYXRpYy5uZXQva2YvU2RkZjZkNWU4NmI5NDQ2YmNhNWZjYzk1MTg0OWZmMjhmZy5qcGc=_400x400q75.png_.webp",
        "description": "Camera bag with padded compartments for gear protection.",
        "price": "59.99",
        "category": "Accessories",
        "ratings": "4.7",
        "createdAt": "2024-10-05T15:00:00Z"
    }
]

const Home = () => {

  const [allproducts , setAllproduct] = useState();

    useEffect(() => {
        axios.get("http://localhost:3000/productes")
            // .then(res => res.json())
            .then(data => {
                // const sortedData = [...data].sort((a, b) => new Date(b.userData.timeAndDate) - new Date(a.userData.timeAndDate));
                console.log(data);
                setAllproduct(data?.data);
            })
    }, [])


    return (
        <section className='w-[90%] mx-auto px-5 py-10 md:py-20'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {products.map((product, index) => (
                    <div key={index} className="product-item border hover:shadow-2xl duration-300 p-5 rounded-md hover:shadow-">
                        <div className='bg-[#e6dddd] py-10'>
                            <img src={product.productImage} alt={product.productName} className="product-image w-48 object-cover mx-auto" />
                        </div>
                        <h2 className="product-name  text-xl mt-5 font-semibold">Name : {product.productName}</h2>
                        <p className="product-description"><span className='text-xl font-medium'> Description  : </span> {product.description}</p>
                        <p className="product-price"> <span className='text-xl font-medium'>Price : </span> ${product.price}</p>
                        <p className="product-category"> <span className='text-xl font-medium'>Category : </span> {product.category}</p>
                        <p className="product-ratings"> <span className='text-xl font-medium'>Ratings : </span>  {product.ratings}</p>
                        {/* <p className="product-createdAt">Created At: {new Date(product.createdAt).toLocaleDateString()}</p> */}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Home;

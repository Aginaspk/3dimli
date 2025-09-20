import { IconType } from "react-icons";
import {
  TbBox,
  TbShoppingCart,
  TbTag,
  TbUsers,
  TbSearch,
  TbDownload,
  TbUpload,
  TbHeart,
  TbLayoutGrid,
  TbMusic,
  TbStar,
} from "react-icons/tb";

export interface BoxItem {
  id: number;
  name: string;
  image?: string;
  icon: IconType;
  description: string;
  position: {
    x: number;
    y: number;
  };
  animationClass: string;
  color: string;
}

export const boxItems: BoxItem[] = [
  {
    id: 1,
    name: "3D Models",
    icon: TbBox,
    image: "https://www.3dimli.com/_next/static/media/car-model.40128753.avif",
    description:
      "Browse thousands of high-quality 3D models for your projects. Filter by category, style, format, and more.",
    position: { x: -580, y: -200 },
    color: "#4F46E5",
    animationClass: "b1",
  },
  {
    id: 2,
    name: "Checkout",
    icon: TbShoppingCart,
    description: "Fast and secure payments for your 3D model purchases.",
    position: { x: 630, y: -200 },
    color: "#059669",
    animationClass: "b2",
  },
  {
    id: 3,
    name: "Pricing",
    icon: TbTag,
    description: "Flexible pricing options for creators and businesses.",
    position: { x: -430, y: -80 },
    color: "#D97706",
    animationClass: "b3",
  },
  {
    id: 4,
    name: "Search",
    icon: TbSearch,
    description: "Find exactly what you need with our powerful search tools.",
    position: { x: 450, y: -10 },
    color: "#2561E6",
    animationClass: "b4",
  },
  {
    id: 5,
    name: "Community",
    icon: TbUsers,
    description: "Join thousands of 3D artists and designers.",
    position: { x: -650, y: 20 },
    color: "#9537EA",
    animationClass: "b5",
  },
  {
    id: 6,
    name: "Upload Models",
    icon: TbUpload,
    image: "https://www.3dimli.com/_next/static/media/car-model.40128753.avif",
    description:
      "Share your creations with our community. Upload your 3D models and reach thousands of potential buyers.",
    position: { x: 670, y: 170 },
    color: "#0D9488",
    animationClass: "b6",
  },
  {
    id: 7,
    name: "Downloads",
    icon: TbDownload,
    description: "Access your purchased models anywhere, anytime.",
    position: { x: -430, y: 130 },
    color: "#0891B2",
    animationClass: "b7",
  },
  {
    id: 8,
    name: "Categories",
    icon: TbLayoutGrid,
    description: "Explore our organized collection by categories.",
    position: { x: 400, y: 300 },
    color: "#EA580C",
    animationClass: "b8",
  },
  {
    id: 9,
    name: "Featured Models",
    icon: TbStar,
    description:
      "Discover our handpicked selection of premium 3D models and assets from top creators.",
    position: { x: -300, y: 330 },
    color: "#D97706",
    animationClass: "b9",
  },
  {
    id: 10,
    name: "Favorites",
    icon: TbHeart,
    description: "Save models you love for quick access later.",
    position: { x: -600, y: 280 },
    color: "#DC3636",
    animationClass: "b10",
  },
  {
    id: 11,
    name: "Support",
    icon: TbMusic,
    description: "Get help when you need it from",
    position: { x: -80, y: 330 },
    color: "#3D3D3D",
    animationClass: "b11",
  },
];

import { GalleryItem } from '../types';
import heroAfricanSpaImg from '../assets/images/hero_african_spa_1788112077485.jpg';
import holiGlowSetupImg from '../assets/images/holi_glow_setup_1788251444638.jpg';
import diverseSpaRelaxationImg from '../assets/images/diverse_spa_relaxation_1788112110008.jpg';
import africanManFacialImg from '../assets/images/african_man_facial_treatment_1788253243235.jpg';
import sanitizedLinenImg from '../assets/images/sanitized_linen_candle_vertical_1788019703723.jpg';
import bodyScrubImg from '../assets/images/body_scrub_massage_closeup_1788020929938.jpg';
import precisionWaxingImg from '../assets/images/waxing_underarm_smooth_1788020111736.jpg';

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Restorative In-Home Massage',
    category: 'treatments',
    image: heroAfricanSpaImg,
    aspect: 'wide',
    caption: 'Bespoke full-body massage therapy delivered in the tranquil comfort and privacy of your home or hotel suite.',
  },
  {
    id: 'gal-2',
    title: 'Holi-Glow Mobile Setup',
    category: 'atmosphere',
    image: holiGlowSetupImg,
    aspect: 'tall',
    caption: 'Certified mobile therapist bringing luxury massage tables, sanitized plush linens, and warm botanical oils directly to your residence.',
  },
  {
    id: 'gal-3',
    title: 'Hot Stone & Thermal Harmony',
    category: 'treatments',
    image: diverseSpaRelaxationImg,
    aspect: 'square',
    caption: 'Warmed therapeutic stones and gentle botanical aromatherapy providing soothing tension release for our diverse clientele.',
  },
  {
    id: 'gal-4',
    title: 'Hydrating Facial Therapy & Glow',
    category: 'treatments',
    image: africanManFacialImg,
    aspect: 'wide',
    caption: 'Customized botanical cleansers, soothing mask application, and gentle facial therapy for deep hydration and a refreshed complexion.',
  },
  {
    id: 'gal-5',
    title: 'Exfoliating Body Polish & Scrubs',
    category: 'treatments',
    image: bodyScrubImg,
    aspect: 'tall',
    caption: 'Rich botanical sugar and coffee scrubs applied to gently buff away dead cells and reveal radiant, glowing skin.',
  },
  {
    id: 'gal-6',
    title: 'Flawless Precision Waxing',
    category: 'treatments',
    image: precisionWaxingImg,
    aspect: 'tall',
    caption: 'Hygienic, gentle hair removal with premium sensitive wax delivering silky-smooth, spotless results.',
  },
  {
    id: 'gal-7',
    title: 'Sanitized Luxury Linen & Ambiance',
    category: 'atmosphere',
    image: sanitizedLinenImg,
    aspect: 'tall',
    caption: 'Pristinely laundered plush cotton towels, sanitized accessories, and warm candlelit atmosphere.',
  },
];



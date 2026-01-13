import 'dotenv/config';
import { db } from './index';
import { products } from './schema';

const sampleProducts = [
  {
    name: 'Nike Air Max 270',
    description: "Nike's first lifestyle Air Max brings you style, comfort and big attitude.",
    price: '150.00',
    imageUrl:
      'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/awj6knkej6t174542454/air-max-270-mens-shoes-KkLcGR.png',
    category: 'Shoes',
  },
  {
    name: "Nike Air Force 1 '07",
    description:
      "The radiance lives on in the Nike Air Force 1 '07, the b-ball icon that puts a fresh spin on what you know best.",
    price: '110.00',
    imageUrl:
      'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-mens-shoes-jBrhbr.png',
    category: 'Shoes',
  },
  {
    name: 'Nike Dunk Low',
    description: "Created for the hardwood but taken to the streets, the '80s b-ball icon returns.",
    price: '115.00',
    imageUrl:
      'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/91391523-3765-4f65-832f-7634891176b6/dunk-low-retro-mens-shoes-5FQWGR.png',
    category: 'Shoes',
  },
  {
    name: 'Nike Sportswear Club Fleece',
    description: 'Club Fleece sweatshirts, universally loved for their coziness and consistency.',
    price: '60.00',
    imageUrl:
      'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6bd6869e-d30d-4566-9b16-562db4934823/sportswear-club-fleece-mens-pullover-hoodie-Gw4N6h.png',
    category: 'Clothing',
  },
];

async function main() {
  console.log('Seeding database...');
  try {
    await db.insert(products).values(sampleProducts);
    console.log('Seeding complete!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    process.exit(0);
  }
}

main();

import Card from '@/components/Card';

const products = [
  {
    id: '1',
    title: 'Air Max Pulse',
    price: 80,
    imageSrc: '/shoes/shoe-1.jpg',
    badge: { label: 'New', tone: 'orange' as const },
  },
  {
    id: '2',
    title: 'Air Zoom',
    price: 80,
    imageSrc: '/shoes/shoe-2.webp',
    badge: { label: 'Hot', tone: 'red' as const },
  },
  {
    id: '3',
    title: 'Air Infinity',
    price: 80,
    imageSrc: '/shoes/shoe-3.webp',
    badge: { label: 'Trending', tone: 'green' as const },
  },
  {
    id: '4',
    title: 'Air Black',
    price: 80,
    imageSrc: '/shoes/shoe-4.webp',
    badge: { label: 'Trending', tone: 'black' as const },
  },
];

export default async function Home() {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <section className="pb-12">
        <h2 className="text-heading-3 mb-6">Latest Shoes</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map(({ id, title, imageSrc, price, badge }) => (
            <Card key={id} title={title} imageSrc={imageSrc} price={price} />
          ))}
        </div>
      </section>
    </main>
  );
}

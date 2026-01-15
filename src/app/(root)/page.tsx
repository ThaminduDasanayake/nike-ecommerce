import Card from '@/components/Card';
import { getAllProducts } from '@/lib/actions/product';

export default async function Home() {
  const { products } = await getAllProducts({ limit: 6 });

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <section className="pb-12">
        <h2 className="text-heading-3 mb-6">Latest Shoes</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map(({ id, name, subtitle, imageUrl, maxPrice, minPrice }) => {
            const price =
              minPrice !== null && maxPrice !== null && minPrice !== maxPrice
                ? `$${minPrice.toFixed(2)} - $${maxPrice.toFixed(2)}`
                : minPrice !== null
                  ? minPrice
                  : undefined;
            return (
              <Card
                key={id}
                title={name}
                subtitle={subtitle ?? undefined}
                imageSrc={imageUrl ?? '/shoes/shoe-1.jpg'}
                price={price}
                href={`/products/${id}`}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}

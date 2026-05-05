import { useEffect, useState } from 'react';
import { ProductCard } from '../cards/Product';
import { Button } from '../button';
import { useFilterContext } from '../../contexts/filters';
import { ChevronDown } from 'react-feather';

export const Products = () => {
  const { filters, query } = useFilterContext();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const params = new URLSearchParams();

        if (query) {
          params.append('search', query);
        }

        if (filters.capacity) {
          params.append('capacity', String(filters.capacity));
        }

        if (filters.energyClass) {
          params.append('energyClass', filters.energyClass);
        }

        if (filters.feature) {
          params.append('feature', filters.feature);
        }

        if (filters.sort) {
          params.append('sort', filters.sort);
        }

        const response = await fetch(`http://localhost:4000/products?${params.toString()}`);

        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }

        const data = await response.json();

        setProducts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [filters, query]);

  if (loading) {
    return <p className="text-center mt-4">Loading...</p>;
  }

  if (products.length === 0) {
    return (
      <div>
        <p className="text-center text-gray-500 text-xl mt-4">
          Brak produktów spełniających kryteria wyszukiwania
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-3 gap-x-4 gap-y-5">
        {products.map((product: any) => (
          <ProductCard key={product.code} {...product} />
        ))}
      </div>

      <div className="flex justify-center mt-4">
        <Button
          variant={'tertiary'}
          value={'Pokaż więcej'}
          icon={<ChevronDown />}
          onClick={() => console.log('some action')}
        />
      </div>
    </>
  );
};

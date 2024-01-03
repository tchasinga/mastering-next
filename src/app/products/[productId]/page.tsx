import React from 'react';
import { Metadata } from 'next';

interface Props {
  params: { productId: string };
}

export const generateMetadata = ({ params }: Props): Metadata => ({
  title: `Product ${params.productId}`,
});

const ProductID: React.FC<Props> = ({ params }: Props) => {
  const metadata = generateMetadata({ params });

  return (
    <div className='max-w-6xl mx-auto'>
      <h1>Details pages {params.productId}</h1>
    </div>
  );
};

export default ProductID;

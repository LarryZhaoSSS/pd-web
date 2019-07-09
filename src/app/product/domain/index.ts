import { Product } from 'src/app/shared/domain';
import { ImageSlider } from 'src/app/shared/components';

export interface ProductVariant {
  id:number;
  product: Product;
  price:number;
  listPrice:number;
  productVariantImages: ImageSlider[]
}
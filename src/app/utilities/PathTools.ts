import {environment} from '../../environments/environment';

export const DomainName = environment.production ? 'https://library.com' : 'https://localhost:44336/';
export const ImagePath = DomainName + '/images/products/origin/';
export const ImageGalleryPath = DomainName + '/images/product-galleries/';

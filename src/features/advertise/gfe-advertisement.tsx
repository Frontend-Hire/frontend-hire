import { AdvertisementIdType, PageAdvertisementType } from '@/advertisements';
import PageAdvertisement from './page-advertisement';

const GFE_AD = {
  id: 'affiliate-great-frontend' as AdvertisementIdType,
  title: 'GreatFrontEnd has better questions!',
  content:
    "We don't create questions because GreatFrontEnd already has the best possible library of questions and we recommend the same to our community.",
  cta: {
    url: 'https://www.greatfrontend.com/prepare/coding?fpr=hruthik-reddy22',
    text: 'Checkout the questions!',
  },
  type: 'CONTENT_OVERVIEW_PAGE' as PageAdvertisementType['type'],
};

export default function GFEAdvertisement() {
  return <PageAdvertisement advertisement={GFE_AD} />;
}

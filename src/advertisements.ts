export type PageAdvertisementType = {
  id: string;
  title: string;
  content: string;
  cta: {
    url: string;
    text: string;
  };
  type: 'HOME_PAGE' | 'CONTENT_OVERVIEW_PAGE';
};

export type AdvertisementType = {
  TOP_BANNER: {
    id: string;
    content: string;
    url: string;
  };
  HOME_PAGE: PageAdvertisementType;
  CONTENT_OVERVIEW_PAGES: {
    [key in ContentOverviewKeyType]?: PageAdvertisementType;
  };
};

export type ContentOverviewKeyType =
  | 'frontend-courses-todo-app-react-overview'
  | 'frontend-courses-todo-app-svelte-overview'
  | 'frontend-courses-stackpack-overview'
  | 'frontend-courses-login-register-flow-overview'
  | 'frontend-courses-dynamic-pricing-page-overview'
  | 'frontend-system-design-dynamic-pricing-page-overview'
  | 'frontend-refactoring-profile-page-overview';

export const ADVERTISEMENTS: AdvertisementType = {
  TOP_BANNER: {
    id: 'FH_SHADCN_UI',
    content: 'We made a video new video on Shadcn UI. Check it out!',
    url: 'https://youtu.be/9-Gci8_6Dss',
  },
  HOME_PAGE: {
    id: 'FH_RESUME_KIT',
    title: 'Resume Kit for Frontend Developers',
    content: `We have a resume kit that is built on top of the courses here on the
        platform. It includes 7 resume templates and instructions on how to best
        share the resume with others. Do note that you have to pay a small fee
        for the access.`,
    cta: {
      url: 'https://topmate.io/iamyhr/1336239',
      text: 'Get the resume kit!',
    },
    type: 'HOME_PAGE',
  },
  CONTENT_OVERVIEW_PAGES: {
    'frontend-courses-todo-app-react-overview': {
      id: 'FH_RESUME_KIT',
      title: 'Resume Kit for Frontend Developers',
      content: `We have a resume kit that is built on top of the courses here on the
        platform. It includes 7 resume templates and instructions on how to best
        share the resume with others. Do note that you have to pay a small fee
        for the access.`,
      cta: {
        url: 'https://topmate.io/iamyhr/1336239',
        text: 'Get the resume kit!',
      },
      type: 'CONTENT_OVERVIEW_PAGE',
    },
  },
};

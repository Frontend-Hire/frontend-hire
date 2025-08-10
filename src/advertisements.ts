export type AdvertisementSourceType = 'fh' | 'advertisement' | 'affiliate';

export type AdvertisementIdType = `${AdvertisementSourceType}-${string}`;

export type PageAdvertisementType = {
  id: AdvertisementIdType;
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
    id: AdvertisementIdType;
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
  | 'frontend-refactoring-profile-page-overview'
  | 'frontend-refactoring-feature-flags-overview';

export const ADVERTISEMENTS: AdvertisementType = {
  TOP_BANNER: {
    id: 'fh-stackpack',
    content: 'Our Feature Flags course is now live!',
    url: 'https://youtu.be/uA63G1pRchE',
  },
  HOME_PAGE: {
    id: 'affiliate-interview-ready-ai-engineering',
    title: 'AI Engineering for Developers',
    content:
      "This is the best time to learn about AI. Good AI fundamentals make you a better developer and a product builder. We recommend you to checkout InterviewReady's AI Engineering course. It is a high-quality resource!",
    cta: {
      url: 'https://interviewready.io/checkout/?_aff=kkhqugif87496',
      text: 'Checkout the course!',
    },
    type: 'HOME_PAGE',
  },
  CONTENT_OVERVIEW_PAGES: {
    'frontend-courses-todo-app-react-overview': {
      id: 'affiliate-interview-ready-ai-engineering',
      title: 'AI Engineering for Developers',
      content:
        "This is the best time to learn about AI. Good AI fundamentals make you a better developer and a product builder. We recommend you to checkout InterviewReady's AI Engineering course. It is a high-quality resource!",
      cta: {
        url: 'https://interviewready.io/checkout/?_aff=kkhqugif87496',
        text: 'Checkout the course!',
      },
      type: 'CONTENT_OVERVIEW_PAGE',
    },
    'frontend-courses-todo-app-svelte-overview': {
      id: 'affiliate-interview-ready-ai-engineering',
      title: 'AI Engineering for Developers',
      content:
        "This is the best time to learn about AI. Good AI fundamentals make you a better developer and a product builder. We recommend you to checkout InterviewReady's AI Engineering course. It is a high-quality resource!",
      cta: {
        url: 'https://interviewready.io/checkout/?_aff=kkhqugif87496',
        text: 'Checkout the course!',
      },
      type: 'CONTENT_OVERVIEW_PAGE',
    },
    'frontend-courses-stackpack-overview': {
      id: 'affiliate-interview-ready-ai-engineering',
      title: 'AI Engineering for Developers',
      content:
        "This is the best time to learn about AI. Good AI fundamentals make you a better developer and a product builder. We recommend you to checkout InterviewReady's AI Engineering course. It is a high-quality resource!",
      cta: {
        url: 'https://interviewready.io/checkout/?_aff=kkhqugif87496',
        text: 'Checkout the course!',
      },
      type: 'CONTENT_OVERVIEW_PAGE',
    },
    'frontend-courses-login-register-flow-overview': {
      id: 'affiliate-interview-ready-ai-engineering',
      title: 'AI Engineering for Developers',
      content:
        "This is the best time to learn about AI. Good AI fundamentals make you a better developer and a product builder. We recommend you to checkout InterviewReady's AI Engineering course. It is a high-quality resource!",
      cta: {
        url: 'https://interviewready.io/checkout/?_aff=kkhqugif87496',
        text: 'Checkout the course!',
      },
      type: 'CONTENT_OVERVIEW_PAGE',
    },
    'frontend-refactoring-profile-page-overview': {
      id: 'affiliate-interview-ready-ai-engineering',
      title: 'AI Engineering for Developers',
      content:
        "This is the best time to learn about AI. Good AI fundamentals make you a better developer and a product builder. We recommend you to checkout InterviewReady's AI Engineering course. It is a high-quality resource!",
      cta: {
        url: 'https://interviewready.io/checkout/?_aff=kkhqugif87496',
        text: 'Checkout the course!',
      },
      type: 'CONTENT_OVERVIEW_PAGE',
    },
    'frontend-system-design-dynamic-pricing-page-overview': {
      id: 'affiliate-interview-ready-ai-engineering',
      title: 'AI Engineering for Developers',
      content:
        "This is the best time to learn about AI. Good AI fundamentals make you a better developer and a product builder. We recommend you to checkout InterviewReady's AI Engineering course. It is a high-quality resource!",
      cta: {
        url: 'https://interviewready.io/checkout/?_aff=kkhqugif87496',
        text: 'Checkout the course!',
      },
      type: 'CONTENT_OVERVIEW_PAGE',
    },
    'frontend-courses-dynamic-pricing-page-overview': {
      id: 'affiliate-interview-ready-ai-engineering',
      title: 'AI Engineering for Developers',
      content:
        "This is the best time to learn about AI. Good AI fundamentals make you a better developer and a product builder. We recommend you to checkout InterviewReady's AI Engineering course. It is a high-quality resource!",
      cta: {
        url: 'https://interviewready.io/checkout/?_aff=kkhqugif87496',
        text: 'Checkout the course!',
      },
      type: 'CONTENT_OVERVIEW_PAGE',
    },
    'frontend-refactoring-feature-flags-overview': {
      id: 'affiliate-interview-ready-ai-engineering',
      title: 'AI Engineering for Developers',
      content:
        "This is the best time to learn about AI. Good AI fundamentals make you a better developer and a product builder. We recommend you to checkout InterviewReady's AI Engineering course. It is a high-quality resource!",
      cta: {
        url: 'https://interviewready.io/checkout/?_aff=kkhqugif87496',
        text: 'Checkout the course!',
      },
      type: 'CONTENT_OVERVIEW_PAGE',
    },
  },
};

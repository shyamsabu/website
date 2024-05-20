import type { Schema, Attribute } from '@strapi/strapi';

export interface MenuLink extends Schema.Component {
  collectionName: 'components_menu_links';
  info: {
    displayName: 'Link';
    icon: 'attachment';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'menu.link': MenuLink;
    }
  }
}

import type { Schema, Attribute } from '@strapi/strapi';

export interface ElementsActivity extends Schema.Component {
  collectionName: 'components_elements_activities';
  info: {
    displayName: 'activity';
    description: '';
  };
  attributes: {
    time: Attribute.String;
    description: Attribute.String;
    activities_heading: Attribute.String;
  };
}

export interface ElementsBelief extends Schema.Component {
  collectionName: 'components_elements_beliefs';
  info: {
    displayName: 'belief';
    icon: 'bold';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
  };
}

export interface ElementsDetails extends Schema.Component {
  collectionName: 'components_elements_details';
  info: {
    displayName: 'details';
    description: '';
  };
  attributes: {
    media: Attribute.Media;
  };
}

export interface ElementsDonate extends Schema.Component {
  collectionName: 'components_slices_donates';
  info: {
    name: 'Donate';
    displayName: 'donate';
    description: '';
  };
  attributes: {
    logo: Attribute.Media;
    instructions: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbarBalloon';
        }
      >;
    url: Attribute.String;
  };
}

export interface ElementsFeatureColumn extends Schema.Component {
  collectionName: 'components_slices_feature_columns';
  info: {
    name: 'FeatureColumn';
    displayName: 'Feature column';
    icon: 'align-center';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    icon: Attribute.Media & Attribute.Required;
  };
}

export interface ElementsFeatureRow extends Schema.Component {
  collectionName: 'components_slices_feature_rows';
  info: {
    name: 'FeatureRow';
    displayName: 'Feature row';
    icon: 'arrows-alt-h';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    media: Attribute.Media & Attribute.Required;
    link: Attribute.Component<'links.link'>;
  };
}

export interface ElementsFeature extends Schema.Component {
  collectionName: 'components_elements_features';
  info: {
    displayName: 'Feature';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    media: Attribute.Media;
    showLink: Attribute.Boolean & Attribute.DefaultTo<false>;
    newTab: Attribute.Boolean & Attribute.DefaultTo<false>;
    url: Attribute.String;
    text: Attribute.String;
  };
}

export interface ElementsFooterSection extends Schema.Component {
  collectionName: 'components_links_footer_sections';
  info: {
    name: 'FooterSection';
    displayName: 'Footer section';
    icon: 'chevron-circle-down';
  };
  attributes: {
    title: Attribute.String;
    links: Attribute.Component<'links.link', true>;
  };
}

export interface ElementsGiving extends Schema.Component {
  collectionName: 'components_slices_givings';
  info: {
    name: 'Giving';
    displayName: 'Giving';
    icon: 'user-check';
    description: '';
  };
  attributes: {
    picture: Attribute.Media & Attribute.Required;
    text: Attribute.Text & Attribute.Required;
    authorName: Attribute.String & Attribute.Required;
    url: Attribute.String;
    showLink: Attribute.Boolean;
    firstname: Attribute.String;
    lastname: Attribute.String;
    email: Attribute.String;
  };
}

export interface ElementsItinerary extends Schema.Component {
  collectionName: 'components_elements_itineraries';
  info: {
    displayName: 'itinerary';
  };
  attributes: {
    arrival_date: Attribute.Date;
    departure_date: Attribute.Date;
    heading: Attribute.String;
    activity: Attribute.Component<'elements.activity', true>;
  };
}

export interface ElementsLeader extends Schema.Component {
  collectionName: 'components_elements_leaders';
  info: {
    displayName: 'Leader';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.Text;
    media: Attribute.Media;
  };
}

export interface ElementsLodgingContinued extends Schema.Component {
  collectionName: 'components_elements_lodging_continueds';
  info: {
    displayName: 'lodging_continued';
  };
  attributes: {
    text: Attribute.String;
  };
}

export interface ElementsLodging extends Schema.Component {
  collectionName: 'components_elements_lodgings';
  info: {
    displayName: 'lodging';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    basic_info: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbarBalloon';
        }
      >;
    lodging_details: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbarBalloon';
        }
      >;
    media: Attribute.Media;
  };
}

export interface ElementsLogos extends Schema.Component {
  collectionName: 'components_elements_logos';
  info: {
    name: 'logos';
    displayName: 'Logos';
    icon: 'apple-alt';
  };
  attributes: {
    title: Attribute.String;
    logo: Attribute.Media;
  };
}

export interface ElementsNotificationBanner extends Schema.Component {
  collectionName: 'components_elements_notification_banners';
  info: {
    name: 'NotificationBanner';
    displayName: 'Notification banner';
    icon: 'exclamation';
    description: '';
  };
  attributes: {
    type: Attribute.Enumeration<['alert', 'info', 'warning']> &
      Attribute.Required;
    heading: Attribute.String & Attribute.Required;
    text: Attribute.Text & Attribute.Required;
    show: Attribute.Boolean & Attribute.DefaultTo<false>;
    link: Attribute.Component<'links.link'>;
  };
}

export interface ElementsPlan extends Schema.Component {
  collectionName: 'components_elements_plans';
  info: {
    name: 'plan';
    displayName: 'Pricing plan';
    icon: 'search-dollar';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.Text;
    isRecommended: Attribute.Boolean;
    price: Attribute.Decimal;
    pricePeriod: Attribute.String;
    product_features: Attribute.Relation<
      'elements.plan',
      'oneToMany',
      'api::product-feature.product-feature'
    >;
  };
}

export interface ElementsPreview extends Schema.Component {
  collectionName: 'components_elements_previews';
  info: {
    displayName: 'preview';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    start_date: Attribute.Date;
    end_date: Attribute.Date;
    registration_deadline: Attribute.String;
    location_name: Attribute.String;
    location_address: Attribute.String;
    location_city: Attribute.String;
    location_state: Attribute.String;
    location_zip: Attribute.String;
    button_text: Attribute.String;
  };
}

export interface ElementsRegisterButton extends Schema.Component {
  collectionName: 'components_elements_register_buttons';
  info: {
    displayName: 'Register Button';
  };
  attributes: {
    registration_warning: Attribute.String;
    registration_button_text: Attribute.String;
    media: Attribute.Media;
  };
}

export interface ElementsRegistration extends Schema.Component {
  collectionName: 'components_elements_registrations';
  info: {
    displayName: 'Registration';
  };
  attributes: {
    text: Attribute.String;
  };
}

export interface ElementsResource extends Schema.Component {
  collectionName: 'components_elements_resources';
  info: {
    displayName: 'resource';
  };
  attributes: {
    title: Attribute.String;
    list: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbarBalloon';
        }
      >;
  };
}

export interface ElementsSocial extends Schema.Component {
  collectionName: 'components_elements_socials';
  info: {
    displayName: 'social';
    description: '';
  };
  attributes: {
    url: Attribute.String;
    media: Attribute.Media;
  };
}

export interface ElementsTestimonial extends Schema.Component {
  collectionName: 'components_slices_testimonials';
  info: {
    name: 'Testimonial';
    displayName: 'Testimonial';
    icon: 'user-check';
    description: '';
  };
  attributes: {
    picture: Attribute.Media & Attribute.Required;
    text: Attribute.Text & Attribute.Required;
    authorName: Attribute.String & Attribute.Required;
    url: Attribute.String;
    showLink: Attribute.Boolean;
    firstname: Attribute.String;
    lastname: Attribute.String;
    email: Attribute.String;
  };
}

export interface ElementsThingsNeededHeader extends Schema.Component {
  collectionName: 'components_elements_things_needed_headers';
  info: {
    displayName: 'things_needed_header';
  };
  attributes: {
    text: Attribute.String;
    media: Attribute.Media;
  };
}

export interface ElementsThingsNeeded extends Schema.Component {
  collectionName: 'components_elements_things_neededs';
  info: {
    displayName: 'things_needed';
  };
  attributes: {
    item: Attribute.String;
    notes: Attribute.Text;
  };
}

export interface LayoutFooter extends Schema.Component {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
    description: '';
  };
  attributes: {
    footerLogo: Attribute.Component<'layout.logo'>;
    menuLinks: Attribute.Component<'links.link', true>;
    legalLinks: Attribute.Component<'links.link', true>;
    socialLinks: Attribute.Component<'links.social-link', true>;
    categories: Attribute.Relation<
      'layout.footer',
      'oneToMany',
      'api::category.category'
    >;
  };
}

export interface LayoutLogo extends Schema.Component {
  collectionName: 'components_layout_logos';
  info: {
    displayName: 'Logo';
    description: '';
  };
  attributes: {
    logoImg: Attribute.Media & Attribute.Required;
    logoText: Attribute.String;
  };
}

export interface LayoutNavbar extends Schema.Component {
  collectionName: 'components_layout_navbars';
  info: {
    name: 'Navbar';
    displayName: 'Navbar';
    icon: 'map-signs';
    description: '';
  };
  attributes: {
    links: Attribute.Component<'links.link', true>;
    button: Attribute.Component<'links.button-link'>;
    navbarLogo: Attribute.Component<'layout.logo'>;
  };
}

export interface LinksButtonLink extends Schema.Component {
  collectionName: 'components_links_buttons';
  info: {
    name: 'Button-link';
    displayName: 'Button link';
    icon: 'fingerprint';
    description: '';
  };
  attributes: {
    url: Attribute.String;
    newTab: Attribute.Boolean & Attribute.DefaultTo<false>;
    text: Attribute.String;
    type: Attribute.Enumeration<['primary', 'secondary']>;
  };
}

export interface LinksButton extends Schema.Component {
  collectionName: 'components_links_simple_buttons';
  info: {
    name: 'Button';
    displayName: 'Button';
    icon: 'fingerprint';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    type: Attribute.Enumeration<['primary', 'secondary']>;
  };
}

export interface LinksLink extends Schema.Component {
  collectionName: 'components_links_links';
  info: {
    name: 'Link';
    displayName: 'Link';
    icon: 'link';
    description: '';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
    newTab: Attribute.Boolean & Attribute.DefaultTo<false>;
    text: Attribute.String & Attribute.Required;
  };
}

export interface LinksSocialLink extends Schema.Component {
  collectionName: 'components_links_social_links';
  info: {
    displayName: 'Social Link';
    description: '';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
    newTab: Attribute.Boolean & Attribute.DefaultTo<false>;
    text: Attribute.String & Attribute.Required;
    social: Attribute.Enumeration<['YOUTUBE', 'TWITTER', 'DISCORD', 'WEBSITE']>;
  };
}

export interface MetaMetadata extends Schema.Component {
  collectionName: 'components_meta_metadata';
  info: {
    name: 'Metadata';
    displayName: 'Metadata';
    icon: 'robot';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
  };
}

export interface SectionsBeliefs extends Schema.Component {
  collectionName: 'components_sections_beliefs';
  info: {
    displayName: 'beliefs';
    icon: 'bold';
    description: '';
  };
  attributes: {
    belief: Attribute.Component<'elements.belief', true>;
  };
}

export interface SectionsBottomActions extends Schema.Component {
  collectionName: 'components_slices_bottom_actions';
  info: {
    name: 'BottomActions';
    displayName: 'Bottom actions';
    icon: 'angle-double-right';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    buttons: Attribute.Component<'links.button-link', true>;
    description: Attribute.Text;
  };
}

export interface SectionsCarousel extends Schema.Component {
  collectionName: 'components_sections_carousels';
  info: {
    displayName: 'Carousel';
    description: '';
  };
  attributes: {
    images: Attribute.Media;
  };
}

export interface SectionsCustomRichText extends Schema.Component {
  collectionName: 'components_sections_custom_rich_texts';
  info: {
    displayName: 'Custom Rich Text';
  };
  attributes: {
    rich_text: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbarBalloon';
        }
      >;
  };
}

export interface SectionsDonationsGroup extends Schema.Component {
  collectionName: 'components_sections_donations_groups';
  info: {
    displayName: 'Donations group';
    description: '';
  };
  attributes: {
    donations: Attribute.Component<'elements.donate', true>;
    heading: Attribute.String;
    subheading: Attribute.String;
  };
}

export interface SectionsEmail extends Schema.Component {
  collectionName: 'components_sections_emails';
  info: {
    displayName: 'email';
    icon: 'envelop';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    name: Attribute.String;
    namePlaceHolder: Attribute.String;
    email: Attribute.String;
    emailPlaceHolder: Attribute.String;
    message: Attribute.Text;
    messagePlaceHolder: Attribute.String;
    buttonText: Attribute.String;
  };
}

export interface SectionsFeatureColumnsGroup extends Schema.Component {
  collectionName: 'components_slices_feature_columns_groups';
  info: {
    name: 'FeatureColumnsGroup';
    displayName: 'Feature columns group';
    icon: 'star-of-life';
  };
  attributes: {
    features: Attribute.Component<'elements.feature-column', true>;
  };
}

export interface SectionsFeatureRowsGroup extends Schema.Component {
  collectionName: 'components_slices_feature_rows_groups';
  info: {
    name: 'FeatureRowsGroup';
    displayName: 'Feaures row group';
    icon: 'bars';
  };
  attributes: {
    features: Attribute.Component<'elements.feature-row', true>;
  };
}

export interface SectionsFeatures extends Schema.Component {
  collectionName: 'components_layout_features';
  info: {
    displayName: 'Features';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    description: Attribute.Text;
    feature: Attribute.Component<'elements.feature', true>;
    video: Attribute.Component<'shared.video-embed'>;
  };
}

export interface SectionsGatherings extends Schema.Component {
  collectionName: 'components_sections_gatherings';
  info: {
    displayName: 'Gatherings';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    start_date: Attribute.Date;
    location_name: Attribute.String;
    registration_deadline: Attribute.String;
    preview_btn_text: Attribute.String;
    end_date: Attribute.Date;
    location_city: Attribute.String;
    location_state: Attribute.String;
    location_zip: Attribute.String;
    location_address: Attribute.String;
    media: Attribute.Media;
    check_in: Attribute.Date;
    check_out: Attribute.Date;
    registration: Attribute.Component<'sections.registration'>;
    details: Attribute.Component<'elements.details'>;
    things_needed: Attribute.Component<'elements.things-needed', true>;
    things_needed_header: Attribute.Component<'elements.things-needed-header'>;
    lodging: Attribute.Component<'elements.lodging'>;
    register_button: Attribute.Component<'elements.register-button'>;
    lodging_continued: Attribute.Component<'elements.lodging-continued', true>;
    campgrounds1: Attribute.Media;
    campgrounds1_caption: Attribute.Text;
    campgrounds2: Attribute.Media;
    campgrounds2_caption: Attribute.Text;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'blockBalloon';
        }
      >;
    subtitle: Attribute.String;
  };
}

export interface SectionsGivingsGroup extends Schema.Component {
  collectionName: 'components_slices_givings_group';
  info: {
    name: 'GivingsGroup';
    displayName: 'Givings group';
    icon: 'user-friends';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    givings: Attribute.Component<'elements.giving', true>;
    video: Attribute.JSON & Attribute.CustomField<'plugin::video-field.video'>;
  };
}

export interface SectionsHeading extends Schema.Component {
  collectionName: 'components_sections_headings';
  info: {
    displayName: 'Heading';
  };
  attributes: {
    heading: Attribute.String & Attribute.Required;
    description: Attribute.String;
  };
}

export interface SectionsHero extends Schema.Component {
  collectionName: 'components_slices_heroes';
  info: {
    name: 'Hero';
    displayName: 'Hero';
    icon: 'heading';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.String & Attribute.Required;
    picture: Attribute.Media & Attribute.Required;
    buttons: Attribute.Component<'links.button-link', true>;
  };
}

export interface SectionsLargeVideo extends Schema.Component {
  collectionName: 'components_slices_large_videos';
  info: {
    name: 'LargeVideo';
    displayName: 'Large video';
    icon: 'play-circle';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    video: Attribute.Media & Attribute.Required;
    poster: Attribute.Media;
  };
}

export interface SectionsLeadForm extends Schema.Component {
  collectionName: 'components_sections_lead_forms';
  info: {
    name: 'Lead form';
    displayName: 'Lead form';
    icon: 'at';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    emailPlaceholder: Attribute.String;
    submitButton: Attribute.Component<'links.button'>;
    location: Attribute.String;
    description: Attribute.Text;
  };
}

export interface SectionsLeadership extends Schema.Component {
  collectionName: 'components_sections_leaderships';
  info: {
    displayName: 'Leadership';
    icon: 'arrowUp';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    leader: Attribute.Component<'elements.leader', true>;
    media: Attribute.Media;
  };
}

export interface SectionsLiveStream extends Schema.Component {
  collectionName: 'components_sections_live_streams';
  info: {
    displayName: 'Live stream';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    media: Attribute.Media;
    slug: Attribute.String;
    schedule: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbarBalloon';
        }
      >;
    onair: Attribute.String;
    liveToggle: Attribute.Boolean;
    live_image: Attribute.Media;
  };
}

export interface SectionsMedia extends Schema.Component {
  collectionName: 'components_sections_media';
  info: {
    displayName: 'media';
  };
  attributes: {
    store: Attribute.Media;
  };
}

export interface SectionsPricing extends Schema.Component {
  collectionName: 'components_sections_pricings';
  info: {
    name: 'Pricing';
    displayName: 'Pricing';
    icon: 'dollar-sign';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    plans: Attribute.Component<'elements.plan', true>;
    media: Attribute.Media;
  };
}

export interface SectionsRegistration extends Schema.Component {
  collectionName: 'components_sections_registration';
  info: {
    displayName: 'Registration';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    adults: Attribute.String;
    children: Attribute.String;
    babies: Attribute.String;
    seniors: Attribute.String;
    arrival_date: Attribute.String;
    departure_date: Attribute.String;
    button_text: Attribute.String;
    email: Attribute.String;
  };
}

export interface SectionsResources extends Schema.Component {
  collectionName: 'components_sections_resources';
  info: {
    displayName: 'Resources';
  };
  attributes: {
    heading: Attribute.String;
    resource: Attribute.Component<'elements.resource', true>;
  };
}

export interface SectionsRichText extends Schema.Component {
  collectionName: 'components_sections_rich_texts';
  info: {
    name: 'RichText';
    displayName: 'Rich text';
    icon: 'text-height';
  };
  attributes: {
    content: Attribute.RichText;
  };
}

export interface SectionsSocialMedia extends Schema.Component {
  collectionName: 'components_sections_social_medias';
  info: {
    displayName: 'Social Media';
    description: '';
  };
  attributes: {
    social: Attribute.Component<'elements.social', true>;
    text: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbarBalloon';
        }
      >;
  };
}

export interface SectionsSocial extends Schema.Component {
  collectionName: 'components_sections_socials';
  info: {
    displayName: 'Social';
  };
  attributes: {
    delete: Attribute.String;
  };
}

export interface SectionsStore extends Schema.Component {
  collectionName: 'components_sections_stores';
  info: {
    displayName: 'store';
  };
  attributes: {
    store: Attribute.Media;
  };
}

export interface SectionsTestimonialsGroup extends Schema.Component {
  collectionName: 'components_slices_testimonials_group';
  info: {
    name: 'TestimonialsGroup';
    displayName: 'Testimonials group';
    icon: 'user-friends';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    testimonials: Attribute.Component<'elements.testimonial', true>;
    video: Attribute.JSON & Attribute.CustomField<'plugin::video-field.video'>;
  };
}

export interface SectionsThanks extends Schema.Component {
  collectionName: 'components_sections_thanks';
  info: {
    displayName: 'thanks';
  };
  attributes: {
    media: Attribute.Media;
    confirmation: Attribute.Text;
    redirect: Attribute.Text;
  };
}

export interface SharedMedia extends Schema.Component {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
    description: '';
  };
  attributes: {
    file: Attribute.Media;
  };
}

export interface SharedQuote extends Schema.Component {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    body: Attribute.Text & Attribute.Required;
    author: Attribute.String;
  };
}

export interface SharedRichText extends Schema.Component {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Attribute.RichText;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
    shareImage: Attribute.Media;
  };
}

export interface SharedSlider extends Schema.Component {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    files: Attribute.Media;
  };
}

export interface SharedVideoEmbed extends Schema.Component {
  collectionName: 'components_sections_video_embeds';
  info: {
    displayName: 'Video Embed';
    description: '';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'elements.activity': ElementsActivity;
      'elements.belief': ElementsBelief;
      'elements.details': ElementsDetails;
      'elements.donate': ElementsDonate;
      'elements.feature-column': ElementsFeatureColumn;
      'elements.feature-row': ElementsFeatureRow;
      'elements.feature': ElementsFeature;
      'elements.footer-section': ElementsFooterSection;
      'elements.giving': ElementsGiving;
      'elements.itinerary': ElementsItinerary;
      'elements.leader': ElementsLeader;
      'elements.lodging-continued': ElementsLodgingContinued;
      'elements.lodging': ElementsLodging;
      'elements.logos': ElementsLogos;
      'elements.notification-banner': ElementsNotificationBanner;
      'elements.plan': ElementsPlan;
      'elements.preview': ElementsPreview;
      'elements.register-button': ElementsRegisterButton;
      'elements.registration': ElementsRegistration;
      'elements.resource': ElementsResource;
      'elements.social': ElementsSocial;
      'elements.testimonial': ElementsTestimonial;
      'elements.things-needed-header': ElementsThingsNeededHeader;
      'elements.things-needed': ElementsThingsNeeded;
      'layout.footer': LayoutFooter;
      'layout.logo': LayoutLogo;
      'layout.navbar': LayoutNavbar;
      'links.button-link': LinksButtonLink;
      'links.button': LinksButton;
      'links.link': LinksLink;
      'links.social-link': LinksSocialLink;
      'meta.metadata': MetaMetadata;
      'sections.beliefs': SectionsBeliefs;
      'sections.bottom-actions': SectionsBottomActions;
      'sections.carousel': SectionsCarousel;
      'sections.custom-rich-text': SectionsCustomRichText;
      'sections.donations-group': SectionsDonationsGroup;
      'sections.email': SectionsEmail;
      'sections.feature-columns-group': SectionsFeatureColumnsGroup;
      'sections.feature-rows-group': SectionsFeatureRowsGroup;
      'sections.features': SectionsFeatures;
      'sections.gatherings': SectionsGatherings;
      'sections.givings-group': SectionsGivingsGroup;
      'sections.heading': SectionsHeading;
      'sections.hero': SectionsHero;
      'sections.large-video': SectionsLargeVideo;
      'sections.lead-form': SectionsLeadForm;
      'sections.leadership': SectionsLeadership;
      'sections.live-stream': SectionsLiveStream;
      'sections.media': SectionsMedia;
      'sections.pricing': SectionsPricing;
      'sections.registration': SectionsRegistration;
      'sections.resources': SectionsResources;
      'sections.rich-text': SectionsRichText;
      'sections.social-media': SectionsSocialMedia;
      'sections.social': SectionsSocial;
      'sections.store': SectionsStore;
      'sections.testimonials-group': SectionsTestimonialsGroup;
      'sections.thanks': SectionsThanks;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.video-embed': SharedVideoEmbed;
    }
  }
}

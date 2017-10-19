export const OIL_COOKIE = {
  NAME: 'oil_data',
  ATTR_POI: 'power_opt_in',
  ATTR_TIMESTAMP: 'timestamp'
};

export const OIL_CONFIG = {
  ATTR_ACTIVATE_POI: 'poi_activate_poi',
  ATTR_HUB_ORIGIN: 'poi_hub_origin',
  ATTR_HUB_PATH: 'poi_hub_path',
  ATTR_HUB_LOCATION: 'poi_hub_location', // complete hub location, gets generated
  ATTR_SUB_SET_COOKIE: 'poi_subscriber_set_cookie',
  ATTR_OPT_IN_EVENT_NAME: 'opt_in_event_name',
  ATTR_OPT_OUT_EVENT_NAME: 'opt_out_event_name',
  ATTR_OPT_LATER_EVENT_NAME: 'opt_later_event_name',
  ATTR_OPT_IGNORE_EVENT_NAME: 'opt_ignore_event_name',
  ATTR_HAS_OPTED_IN_EVENT_NAME: 'has_opted_in_event_name',
  ATTR_HAS_OPTED_LATER_EVENT_NAME: 'has_opted_later_event_name',
  ATTR_HAS_OPTED_IGNORE_EVENT_NAME: 'has_opted_ignore_event_name',
  ATTR_PREVIEW_MODE: 'preview_mode',
  ATTR_COOKIE_EXPIRES_IN_DAYS: 'cookie_expires_in_days',
  ATTR_TIMESTAMP: 'timestamp',
  ATTR_PRIVACY_PAGE_URL: 'privacy_page_url',
  ATTR_GA_TRACKER_NAME: 'ga_tracker_name',
  ATTR_GA_TRACKING: 'ga_tracking',
  ATTR_OIL_IGNORE: 'oil_ignore',
  ATTR_OIL_POI_GROUP_NAME: 'poi_group_name',
  ATTR_ADVANCED_SETTINGS: 'advanced_settings'
};

export const POI_FALLBACK_NAME = 'fallback';
export const POI_FALLBACK_GROUP_NAME = 'group_name';

// Identify privacy page link, eg. for tracking
export const DATAQA_PRIVACY_PAGE = 'oil-PrivacyPage';

// context attributes for action items, used for ga tracking
export const DATA_CONTEXT_YES = 'YES';
export const DATA_CONTEXT_YES_POI = 'YESPOI';
export const DATA_CONTEXT_LATER = 'LATER';
export const DATA_CONTEXT_ADVANCED_SETTINGS = 'ADVANCEDSETTINGS'
export const DATA_CONTEXT_YES_WHILE_LATER = 'YESWHILELATER';
export const DATA_CONTEXT_YES_POI_WHILE_LATER = 'YESPOIWHILELATER';
export const DATA_CONTEXT_IGNORE_WHILE_LATER = 'IGNOREWHILELATER';


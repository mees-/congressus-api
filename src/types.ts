type Image = {
  id: number
  name: string
  url: string
  url_sm: string
  url_md: string
  url_lg: string
  is_image: boolean
}

type Address = {
  address: string
  zip: string
  city: string
  country: string
}

export type Blog = {
  id: number
  title: string
  content: string
  media: Image[]
  published_from: string
  created: string
  modified: string
}

export type Event = {
  id: number
  name: string
  description: string
  start: string
  end: string
  whole_day: boolean
  location: string
  num_participations: number
  num_introducees: number
  category_id: number
  category: string
  ticket_types: EventTicket[]
  media: Image[]
  website_url: string
  website_subscribe_url: string
  subscription_active: boolean
  subscribe: boolean
  subscribe_from: string
  subscribe_to: string
  unsubscribe_to: string
  API_subscribable: boolean
  created: string
  modified: string
}

export type EventTicket = {
  id: number
  name: string
  price_member: string
  price_introducee: string
  price_external: string
  available_from: string
  available_to: string
  cancel_to: string
  filter: {
    id: number
    name: string
    member_status_after: string
    member_status_before: string
    member_statuses: [
      {
        id: number
        name: string
      },
    ]
    groups: [
      {
        id: number
        name: string
      },
    ]
  }
}

enum EventPresenceStatus {
  Unknown = "unknown",
  Present = "present",
  NotPresent = "not present",
}

enum EventParticipationStatus {
  Approved = "approved",
  PaymentPending = "payment pending",
  Unsibscribed = "unsubscribed",
  ReserveList = "reserve list",
  Declined = "declined",
  Empty = "",
}

export type EventParticipation = {
  id: number
  event_id: number
  member_id: number
  ticket_type_id: number
  tickets: [
    {
      id: number
      event_participation_id: number
      name: string
      email: string
      status_presence: EventPresenceStatus
      ticket_qrcode: string
    },
  ]
  status: EventParticipationStatus
  status_presence: EventPresenceStatus
  created: string
  modified: string
}

export type Group = {
  id: number
  folder_id: number
  folder: string
  name: string
  description: string
  email: string
  address: Address
  start: string
  end: string
  order_type: string
  created: string
  modified: string
}

export type GroupFolder = {
  id: number
  parent_id?: number
  name: string
}

export type GroupMembership = {
  group_id: number
  member_id: number
  member_name: string
  member_name_membership: string
  function: string
  start: string
  end: string
  order_type: string
  order: number
  sort_attribute: string
  created: string
  modified: string
}

/**
 * This type is used for the return type and post type for members
 */
export type Member = {
  id: number
  username: string
  status_id: number
  status: string
  email: string
  gender: string
  initials: string
  given_name: string
  first_name: string
  primary_last_name_prefix: string
  primary_last_name_main: string
  secondary_last_name_prefix: string
  secondary_last_name_main: string
  date_of_birth: string
  address: Address
  phone_mobile: {
    number_full: string
    number_full_MSISDN: string
  }
  phone_home: {
    number_full: string
    number_full_MSISDN: string
  }
  bank_account: {
    iban: string
    bic: string
    has_sdd_mandate: boolean
  }
  profile_picture: Image
  formal_picture: Image
  has_sdd_mandate: boolean
  saldo: number
  show_almanac: boolean
  show_almanac_addresses: boolean
  show_almanac_phonenumbers: boolean
  show_almanac_email: boolean
  show_almanac_date_of_birth: boolean
  show_almanac_custom_fields: boolean
  custom_fields: {}
  privacy_policy_accepted: boolean
  send_confirmation_mail: boolean
  payment_required: boolean
  payment_success_uri: string
  payment_start_uri: string
}

export type MemberStatus = {
  id: number
  name: string
  description: string
  archived: boolean
  hidden: boolean
  order: number
  is_available_for_online_sign_up: boolean
}

export type News = {
  id: number
  title: string
  content: string
  actual: boolean
  published_from: string
  actual_to: string
  media: Image[]
  created: string
  modified: string
}

export type Product = {
  id: number
  folder_id: number
  name: string
  description: string
  folder: string
  folder_breadcrumbs: string
  price: number
  published: boolean
  variation_1: string
  variation_2: string
  url: string
  offers: [
    {
      id: number
      name: string
      variation_1: string
      variation_2: string
      filter: {
        id: number
        name: string
        member_status_after: string
        member_status_before: string
        member_statuses: [
          {
            id: number
            name: string
          },
        ]
        groups: [
          {
            id: number
            name: string
          },
        ]
      }
      price: number
      published: boolean
      url: string
    },
  ]
  media: Image[]
  created: string
  modified: string
}

enum SaleStatus {
  Processing = "processing",
  Overpaid = "overpaid",
  Cancelled = "cancelled",
  Paid = "paid",
  Unpaid = "unpaid",
}

type SaleItem = {
  product_id: number
  offer_id: number
  product: string
  quantity: number
  price: number
  total_price: number
  vat: number
}

enum SalePaymentType {
  DirectDebit = "direct_debit",
  Bank = "bank",
  Cash = "cash",
  External = "external",
}

enum SalePaymentStatus {
  Open = "open",
  Processing = "processing",
  Reversed = "reversed",
  Cancelled = "cancelled",
  Completed = "completed",
}

type SalePayment = {
  type: SalePaymentType
  status: SalePaymentStatus
  paid_date: string
  amount: number
}

export type Sale = {
  id: number
  reference: string
  status: SaleStatus
  cancelled: boolean
  user_id: number
  items: SaleItem[]
  payments: SalePayment[]
  created: string
  modified: string
}

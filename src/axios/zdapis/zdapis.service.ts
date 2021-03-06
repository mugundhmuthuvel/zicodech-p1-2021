import axios, { AxiosResponse } from "axios";

export interface ITicketsResponse {
  tickets: ITicket[];
  next_page?: string;
  previous_page?: string;
  count: number;
}

export interface ITicket {
  url: string;
  id: number;
  external_id?: any;
  via: IVia;
  created_at: string;
  updated_at: string;
  type: string;
  subject: string;
  raw_subject: string;
  description: string;
  priority: string;
  status: string;
  recipient?: any;
  requester_id: number;
  submitter_id: number;
  assignee_id: number;
  organization_id?: any;
  group_id: number;
  collaborator_ids: any[];
  follower_ids: any[];
  email_cc_ids: any[];
  forum_topic_id?: any;
  problem_id?: any;
  has_incidents: boolean;
  is_public: boolean;
  due_at?: any;
  tags: string[];
  custom_fields: any[];
  satisfaction_rating?: any;
  sharing_agreement_ids: any[];
  fields: any[];
  followup_ids: any[];
  ticket_form_id: number;
  brand_id: number;
  allow_channelback: boolean;
  allow_attachments: boolean;
}

export interface IVia {
  channel: string;
  source: Source;
}

export interface Source {
  from: IEmptyObject;
  to: IEmptyObject;
  rel?: any;
}

export interface IUserResponse {
  user: IUser;
}

export interface IUser {
  id: number;
  url: string;
  name: string;
  email: string;
  created_at: string;
  updated_at: string;
  time_zone: string;
  iana_time_zone: string;
  phone?: any;
  shared_phone_number?: any;
  photo?: any;
  locale_id: number;
  locale: string;
  organization_id: number;
  role: string;
  verified: boolean;
  external_id?: any;
  tags: any[];
  alias?: any;
  active: boolean;
  shared: boolean;
  shared_agent: boolean;
  last_login_at: string;
  two_factor_auth_enabled?: any;
  signature?: any;
  details?: any;
  notes?: any;
  role_type?: any;
  custom_role_id?: any;
  moderator: boolean;
  ticket_restriction?: any;
  only_private_comments: boolean;
  restricted_agent: boolean;
  suspended: boolean;
  default_group_id: number;
  report_csv: boolean;
  user_fields: IEmptyObject;
}

export interface ISingleTicketResponse {
  ticket: ITicketDetail;
}

export interface ITicketDetail {
  url: string;
  id: number;
  external_id?: any;
  via: IVia;
  created_at: string;
  updated_at: string;
  type: string;
  subject: string;
  raw_subject: string;
  description: string;
  priority: string;
  status: string;
  recipient?: any;
  requester_id: number;
  submitter_id: number;
  assignee_id: number;
  organization_id?: any;
  group_id: number;
  collaborator_ids: any[];
  follower_ids: any[];
  email_cc_ids: any[];
  forum_topic_id?: any;
  problem_id?: any;
  has_incidents: boolean;
  is_public: boolean;
  due_at?: any;
  tags: string[];
  custom_fields: any[];
  satisfaction_rating?: any;
  sharing_agreement_ids: any[];
  fields: any[];
  followup_ids: any[];
  ticket_form_id: number;
  brand_id: number;
  allow_channelback: boolean;
  allow_attachments: boolean;
}

export interface IEmptyObject {}

export interface IATokenResponse {
  access_token: string;
  token_type: string;
  scope: string;
}

const AuthorizationValue = `Bearer ${localStorage.getItem("accessToken")}`;
const BASEURL = "https://zendeskcodingchallenge2920.zendesk.com";
const headerConfig = {
  Accept: "application/json",
  Authorization: AuthorizationValue,
};

export const getTickets = (page: number): Promise<AxiosResponse<ITicketsResponse>> => {
  const URL = `${BASEURL}/api/v2/tickets.json?page=${page}&per_page=25`;
  return axios.get(URL, { headers: headerConfig });
};

export const getUserById = (userId: string): Promise<AxiosResponse<IUserResponse>> => {
  const URL = `${BASEURL}/api/v2/users/${userId}`;
  return axios.get(URL, { headers: headerConfig })
};

export const getTicketById = (id: string): Promise<AxiosResponse<ISingleTicketResponse>> => {
  const URL = `${BASEURL}/api/v2/tickets/${id}`;
  return axios.get(URL, { headers: headerConfig });
};

export const getGroupById = (groupId: string): Promise<AxiosResponse<any>> => {
  const URL = `${BASEURL}/api/v2/groups/${groupId}`;
  return axios.get(URL, { headers: headerConfig })
};

/** OAuth Clients */
export const formAuthorizationLink = (): string => {
  const REDIRECT_URI=process.env.REACT_APP_REDIRECT_URI;
  const CLIENT_ID=process.env.REACT_APP_CLIENT_ID;
  const URL = `${BASEURL}/oauth/authorizations/new?response_type=token&redirect_uri=${REDIRECT_URI}&client_id=${CLIENT_ID}&scope=read`;
  return URL;
}

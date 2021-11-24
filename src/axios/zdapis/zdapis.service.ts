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

export interface IEmptyObject {}

const AuthorizationValue = "Basic ";
const BASEURL = "https://zendeskcodingchallenge2920.zendesk.com";
const headerConfig = {
  Accept: "application/json",
  Authorization: AuthorizationValue,
};

export const getTickets = (page: number): Promise<AxiosResponse<ITicketsResponse>> => {
  const URL = `${BASEURL}/api/v2/tickets.json?page=${page}&per_page=25`;
  return axios.get(URL, { headers: headerConfig });
};

export const getUserById = (userId: string): Promise<AxiosResponse<any>> => {
  const URL = `${BASEURL}/api/v2/users/${userId}`;
  return axios.get(URL, { headers: headerConfig })
};

export const getGroupById = (groupId: string): Promise<AxiosResponse<any>> => {
  const URL = `${BASEURL}/api/v2/groups/${groupId}`;
  return axios.get(URL, { headers: headerConfig })
};

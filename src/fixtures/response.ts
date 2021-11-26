const ticketResponse = {
    url: "https://zendeskcodingchallenge2920.zendesk.com/api/v2/tickets/1.json",
    id: 1,
    external_id: null,
    via: {
        channel: "sample_ticket",
        source: {
            from: {},
            to: {},
            rel: null
        }
    },
    created_at: "2021-11-21T22:59:05Z",
    updated_at: "2021-11-21T22:59:05Z",
    type: "incident",
    subject: "Sample ticket: Meet the ticket",
    raw_subject: "Sample ticket: Meet the ticket",
    description: "Hi there,\n\nI’m sending an email because I’m having a problem setting up your new product. Can you help me troubleshoot?\n\nThanks,\n The Customer\n\n",
    priority: "normal",
    status: "open",
    recipient: null,
    requester_id: 1903993788153,
    submitter_id: 388705899837,
    assignee_id: 388705899837,
    organization_id: null,
    group_id: 1900001464313,
    collaborator_ids: [],
    follower_ids: [],
    email_cc_ids: [],
    forum_topic_id: null,
    problem_id: null,
    has_incidents: false,
    is_public: true,
    due_at: null,
    tags: [
        "sample",
        "support",
        "zendesk"
    ],
    custom_fields: [],
    satisfaction_rating: null,
    sharing_agreement_ids: [],
    fields: [],
    followup_ids: [],
    ticket_form_id: 1900000839473,
    brand_id: 1900000654133,
    allow_channelback: false,
    allow_attachments: true
};

const dataResp = {
    data: {
        ticket: ticketResponse,
    }
}

export default dataResp;
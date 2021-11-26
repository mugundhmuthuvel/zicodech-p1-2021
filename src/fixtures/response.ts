export const ticketResponse = {
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

const userResp = {
    user: {
        id: 1903993788153,
        url: "https://zendeskcodingchallenge2920.zendesk.com/api/v2/users/1903993788153.json",
        name: "The Customer",
        email: "customer@example.com",
        created_at: "2021-11-21T22:59:05Z",
        updated_at: "2021-11-21T22:59:08Z",
        time_zone: "Europe/Dublin",
        iana_time_zone: "Europe/Dublin",
        phone: null,
        shared_phone_number: null,
        photo: {
            url: "https://zendeskcodingchallenge2920.zendesk.com/api/v2/attachments/360686499237.json",
            id: 360686499237,
            file_name: "profile_image_1903993788153_11717291.png",
            content_url: "https://zendeskcodingchallenge2920.zendesk.com/system/photos/360686499237/profile_image_1903993788153_11717291.png",
            mapped_content_url: "https://zendeskcodingchallenge2920.zendesk.com/system/photos/360686499237/profile_image_1903993788153_11717291.png",
            content_type: "image/png",
            size: 10254,
            width: 80,
            height: 80,
            inline: false,
            deleted: false,
            thumbnails: [
                {
                    url: "https://zendeskcodingchallenge2920.zendesk.com/api/v2/attachments/360686499257.json",
                    id: 360686499257,
                    file_name: "profile_image_1903993788153_11717291_thumb.png",
                    content_url: "https://zendeskcodingchallenge2920.zendesk.com/system/photos/360686499237/profile_image_1903993788153_11717291_thumb.png",
                    mapped_content_url: "https://zendeskcodingchallenge2920.zendesk.com/system/photos/360686499237/profile_image_1903993788153_11717291_thumb.png",
                    content_type: "image/png",
                    size: 2402,
                    width: 32,
                    height: 32,
                    inline: false,
                    deleted: false
                }
            ]
        },
        locale_id: 1,
        locale: "en-US",
        organization_id: null,
        role: "end-user",
        verified: false,
        external_id: null,
        tags: [],
        alias: null,
        active: true,
        shared: false,
        shared_agent: false,
        last_login_at: null,
        two_factor_auth_enabled: false,
        signature: null,
        details: null,
        notes: null,
        role_type: null,
        custom_role_id: null,
        moderator: false,
        ticket_restriction: "requested",
        only_private_comments: false,
        restricted_agent: true,
        suspended: false,
        default_group_id: null,
        report_csv: false,
        user_fields: {}
    }
}

export const dataResp = {
    data: {
        ticket: ticketResponse,
    }
}

export const userDataResp = {
    data: userResp,
}

export default dataResp;
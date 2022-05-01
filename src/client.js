import * as contentful from 'contentful';

export const client = contentful.createClient({
    space: process.env.REACT_APP_SPACE_ID,
    accessToken: 'v5XbDNvyrw3ieQk1lfDSMjteq0tHdj7UqFvsf8BpTkY'
})
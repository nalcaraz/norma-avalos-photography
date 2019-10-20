const fetch = require('node-fetch').default
const dotenv = require('dotenv')
dotenv.config()

exports.handler = function(event, context, callback) {
    return fetch(
        'https://api.airtable.com/v0/appxq7iTOEHVbUIdg/Gallery?maxRecords=3&view=Grid%20view',
        {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${process.env.AIRTABLE_API}`,
                'Content-Type': 'application/json',
            },
        }
    )
        .then(res => {
            return res.json()
        })
        .then(data => ({
            statusCode: 200,
            body: JSON.stringify(data),
        }))
        .catch(err => {
            return { statusCode: 422, body: String(err) }
        })
}

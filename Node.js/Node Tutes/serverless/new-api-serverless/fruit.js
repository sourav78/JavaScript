module.exports.handler = (event) => {
    return{
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({message: "This is custom serverless function called friuts",
            "1": "apple",
            "2": "Banana",
            "3": "Orange"
        })
    }
}
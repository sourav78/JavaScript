valid_auth_tokens = ["ah37j2ha483u", "safh34ywb0p5", "ba34wyi8t902"]

requests = [["GET", "https://example.com/?token=347sd6yk8iu2&name=alex"],
    ["GET", "https://example.com/?token=safh34ywb0p5&name=sam&value=julu"],
    ["POST", "https://example.com/?name=alex&id=undi&token=safh34ywb0p5"],
    ["POST", "https://example.com/?token=safh34ywb0p5&csrf=ak2sh32dy&name=chris"]
]

let outputs = []

requests.forEach(http => {
    // console.log(http);\
    let token = new URL(http[1])
    let params = new URLSearchParams(token.search)
    if(http[0] === 'GET'){
        // let token = http[1].split("?")[1].split("&")[0].split("=")[1]

    }
    // console.log(token.searchParams.token);
    console.log(token.searchParams.get('token'));
});

// URL {
//     href: 'https://example.com/?token=347sd6yk8iu2&name=alex',
//     origin: 'https://example.com',
//     protocol: 'https:',
//     username: '',
//     password: '',
//     host: 'example.com',
//     hostname: 'example.com',
//     port: '',
//     pathname: '/',
//   URL {
//     href: 'https://example.com/?token=safh34ywb0p5&name=sam&value=julu',
//     origin: 'https://example.com',
//     protocol: 'https:',
//     username: '',
//     password: '',
//     host: 'example.com',
//     hostname: 'example.com',
//     port: '',
//     pathname: '/',
//     search: '?token=safh34ywb0p5&name=sam&value=julu',
//     searchParams: URLSearchParams { 'token' => 'safh34ywb0p5', 'name' => 'sam', 'value' => 'julu' },
//     hash: ''
//   }
//   URL {
//     href: 'https://example.com/?name=alex&id=undi&token=safh34ywb0p5',
//     origin: 'https://example.com',
//     protocol: 'https:',
//     username: '',
//     password: '',
//     host: 'example.com',
//     hostname: 'example.com',
//     port: '',
//     pathname: '/',
//     search: '?name=alex&id=undi&token=safh34ywb0p5',
//     searchParams: URLSearchParams { 'name' => 'alex', 'id' => 'undi', 'token' => 'safh34ywb0p5' },
//     hash: ''
//   }
//   URL {
//     href: 'https://example.com/?token=safh34ywb0p5&csrf=ak2sh32dy&name=chris',
//     origin: 'https://example.com',
//     protocol: 'https:',
//     username: '',
//     password: '',
//     host: 'example.com',
//     hostname: 'example.com',
//     port: '',
//     pathname: '/',
//     search: '?token=safh34ywb0p5&csrf=ak2sh32dy&name=chris',
//     searchParams: URLSearchParams { 'token' => 'safh34ywb0p5', 'csrf' => 'ak2sh32dy', 'name' => 'chris' },
//     hash: ''
//   }
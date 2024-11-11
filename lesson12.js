const axios = require('axios');

async function fetchData() {
  const res = await axios.put('https://httpbin.org/put', { hello: 'world1' });

res.data.json;
    
    console.log(res.data);
}

fetchData();
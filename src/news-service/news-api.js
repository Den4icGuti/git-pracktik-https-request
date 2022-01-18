export default class NewApiService { 
  constructor() { 
    this.searchQery = '';
   
  }

  fetchApi() { 
     console.log(this)
    const options = {
      headers: {
        Authorization: '8e47c669d5114f4a8a08b83a4431d50d',
      },
    };
  const URL = `https://newsapi.org/v2/everything?q=${this.searchQery}&pageSize=4&page=1`;

  fetch(URL, options)
    .then(r => r.json())
    .then(console.log)
  }

  getQuery() { 
    return this.searchQery
  }

  setQuery(newQuery) { 
    this.searchQery = newQuery;
  }
}


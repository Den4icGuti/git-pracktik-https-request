const BASE_URL = 'https://newsapi.org/v2';
const API_KEY = '8e47c669d5114f4a8a08b83a4431d50d';

const options = {
      headers: {
        Authorization: API_KEY,
      },
};
    
export default class NewApiService { 
  constructor() { 
    this.searchQery = '';
    this.page = 1;
  }

  fetchApi() { 
    const url = `${BASE_URL}/everything?q=${this.searchQery}&pageSize=8&page=${this.page}`;
     return fetch(url, options)
      .then(response => response.json())
      .then(({ articles })=> {
        this.incrementPage();
        return articles;
      });
    }

   incrementPage() { 
     this.page += 1;
  }

  resetPage() { 
    this.page = 1;
  }

  get query() { 
    return this.searchQery
  }

  set query(newQuery) { 
    this.searchQery = newQuery;
  }

}


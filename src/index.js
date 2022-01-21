import getRefs from './refs-parameters/refs';
import renderCard from './temlates/handle-card.hbs';
import LoadBtnMore from './load-more/load-more-btn';
import Notiflix from 'notiflix';
import './css/style.css';
import NewsApiService from './news-service/news-api';


const refs = getRefs();

const newsApiService = new NewsApiService()

const loadMoreBtn = new LoadBtnMore({
  selector: '[data-action="show"]',
  hidden: true,
});

console.log(loadMoreBtn);

refs.form.addEventListener('submit',onSearch)

loadMoreBtn.refs.button.addEventListener('click',fetchArticle)


function onSearch(e) { 
  e.preventDefault();
 
  newsApiService.query = e.currentTarget.elements.query.value;
   
  if (newsApiService.query === '') { 
    Notiflix.Notify.info('Field must be filled');
    return;
  }
 
  loadMoreBtn.show();
  newsApiService.resetPage();
  onClearContent();
  onRenderContent();
  fetchArticle();
}

function fetchArticle() { 
    loadMoreBtn.disable();
     newsApiService.fetchApi().then(articles => { 
    onRenderContent(articles);
    loadMoreBtn.enable();
  });
}

function onRenderContent(articles) { 
   refs.ulList.insertAdjacentHTML('beforeend', renderCard(articles));
}

function onClearContent() { 
  refs.ulList.innerHTML = '';
}


import API from '../request-parameters/parameters';
import getRefs from '../refs-parameters/refs';
import renderCard  from '../render/render';
import Notiflix from 'notiflix';


const refs = getRefs();

refs.form.addEventListener('submit',onSearch)



function onSearch(e) { 
  e.preventDefault();
  
  const formEl = e.currentTarget;
  const search = formEl.elements.search.value;
  if (search === '') { 
    Notiflix.Notify.warning('Поле должно быть заполнено');
    return;
  }

  API.onFetch(search)
    .then(render)
}

function render(cat) { 
 const marcup = renderCard(cat)
 refs.ulList.insertAdjacentHTML('beforeend',marcup);
}
export default function renderCard(userImageURL) { 
  return ` 
  <div class ="cards">
  <li class="item">
   <img src="${userImageURL}" width="100" height="200" alt="">
  <p>Comments:</p>
  </li>`
}
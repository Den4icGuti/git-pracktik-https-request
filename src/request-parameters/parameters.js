function onFetch() { 
  const URL = `https://pixabay.com/api/?key=25225743-62355b18deaf2a31912b18441&q=cat&photo&orientation=horizontal&image_type=photo`;

  return fetch(URL).then(response => {
    if (!response.ok) {
      throw new Error(response.status)
    }
    response.json()
  });
}

export default {onFetch}
const API_KEY = "19206966-979935191003b7da2f180a9ff";
const BASE_URL =
  "https://pixabay.com/api/?image_type=photo&orientation=horizontal&";

const fetchImages = (searchQuery, page) => {
  const searchParams = new URLSearchParams({
    q: searchQuery,
    page,
    per_page: 12,
    key: API_KEY,
  });

  return fetch(`${BASE_URL}${searchParams}`).then((response) => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Image ${searchQuery} not found.`));
  });
};

export default fetchImages;

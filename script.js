const hamburger = document.getElementById('hamburger')
const sidebar = document.getElementById('sidebar_nav')
const search = document.getElementById('search_bar')
const searchMobile = document.getElementById('search_bar_mobile')
const searchButton = document.getElementById('search_button')
const searchButtonMobile = document.getElementById('search_button_mobile')

hamburger.onclick = () => {
  if (sidebar.style.display === 'block') {
    sidebar.style.opacity = '0'
    setTimeout(() => {
      sidebar.style.display = 'none'
    }, 200)
  } else {
    sidebar.style.display = 'block'
    setTimeout(() => {
      sidebar.style.opacity = '1'
    }, 1)
  }
}

function searchHandler() {
  window.location.href = '/search.html'
}

function searchKeyHandler(e) {
  if (e.key === 'Enter') {
    searchHandler();
  }
}

search.onkeydown = searchKeyHandler
searchMobile.onkeydown = searchHandler
searchButton.onclick = searchHandler
searchButtonMobile.onclick = searchHandler
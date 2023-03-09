const hamburger = document.getElementById('hamburger')
const sidebar = document.getElementById('sidebar_nav')
const search = document.getElementById('search_wrapper')
const logo = document.getElementById('logo_text_header')

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
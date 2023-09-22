export default function () {
  function scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const visibility = ref(false)

  onMounted(() => {
    // scroll top button
    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visibility.value = entry.target.dataset.scrollTop === 'true'
            console.log('n', visibility.value)
          }
        }
      },
      {
        rootMargin: '-50% 0px',
      }
    )
    const target = document.querySelectorAll('[data-scroll-top]')

    for (let i = 0; i < target.length; i++) observer.observe(target[i])
  })

  return {
    scrollTop,
    visibility,
  }
}

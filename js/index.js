const title = document.querySelector('.title')
const text = `I Have Something`.split('')

// Create container for better responsive layout
title.style.display = 'flex'
title.style.flexWrap = 'wrap'
title.style.justifyContent = 'center'
title.style.gap = '0.5rem'
title.style.position = 'absolute' 
title.style.top = '0vh' // Atau coba '5vh' atau '8vh' sesuai selera


for (let index = 0; index < text.length; index++) {
  const span = document.createElement('span')

  if (text[index] !== ' ') {
    span.textContent = text[index]
  } else {
    span.style.width = '1rem'
  }

  // Set ukuran font responsif pakai JS (gunakan vw)
  span.style.fontSize = '6vw'

  // Tambah animasi
  const randomDelay = Math.random() * 3
  span.style.animation = 'fadeIn 1s ease forwards'
  span.style.opacity = '0'
  span.style.animationDelay = `${randomDelay}s`

  title.appendChild(span)
}

// Tambahkan animasi via CSS (bisa pakai JS juga)
const style = document.createElement('style')
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`
document.head.appendChild(style)

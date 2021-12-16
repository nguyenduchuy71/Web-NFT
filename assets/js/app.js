const menuBtn = document.getElementById('menu')
const sidebarbrand = document.querySelector('.sidebar__brand')
const sidebarmenu = document.querySelector('.sidebar__menu')
menuBtn.addEventListener('click', () => {
  if (menuBtn.classList.contains('fa-bars')) {
    menuBtn.className = 'fas fa-times menu'
    sidebarbrand.style.display = 'block'
    sidebarmenu.style.display = 'block'
  } else {
    menuBtn.className = 'fas fa-bars menu'
    sidebarbrand.style.display = 'none'
    sidebarmenu.style.display = 'none'
  }
})
new Chart(document.getElementById('mixed-chart'), {
  type: 'bar',
  data: {
    labels: ['2010', '2015', '2020', '2025'],
    datasets: [
      {
        label: 'Europe',
        type: 'line',
        borderColor: '#e0563a',
        data: [408, 547, 675, 734],
        fill: false
      },
      {
        label: 'Africa',
        type: 'line',
        borderColor: '#3ae069',
        data: [133, 221, 783, 2478],
        fill: false
      },
      {
        label: 'Europe',
        type: 'bar',
        backgroundColor: 'rgba(96, 182, 219,0.8)',
        data: [408, 547, 675, 734]
      },
      {
        label: 'Africa',
        type: 'bar',
        backgroundColor: 'rgba(96, 182, 219,0.8)',
        backgroundColorHover: '#3e95cd',
        data: [133, 221, 783, 2478]
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Customer growth (millions): Europe & Africa'
    },
    legend: { display: false }
  }
})

new Chart(document.getElementById("bar-chart-horizontal"), {
  type: 'horizontalBar',
  data: {
    labels: ["Africa", "Asia", "Europe"],
    datasets: [
      {
        label: "Orders (millions)",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f"],
        data: [2478,5267,734]
      }
    ]
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: 'Predicted orders (millions) in 2022'
    }
  }
});
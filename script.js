let person = [
   {
      name: 'Ivan',
      photo: 'https://st2.depositphotos.com/4431055/7495/i/600/depositphotos_74950191-stock-photo-men-latin-american-and-hispanic.jpg',
      free: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus placeat et aut asperiores amet unde veniam obcaecati, eius dignissimos sed, esse facere! Numquam quia laudantium deleniti ex tempora asperiores debitis.',
      profesion: 'IT-speciolist'
   },
   {
      name: 'Clara',
      photo: 'https://bigpicture.ru/wp-content/uploads/2018/12/100faces00.jpg',
      free: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus placeat et aut asperiores amet unde veniam obcaecati, eius dignissimos sed, esse facere! Numquam quia laudantium deleniti ex tempora asperiores debitis.',
      profesion: 'Front-End speciolist',
   },
   {
      name: 'Idai',
      photo: 'https://www.komarov.design/content/images/2020/11/image-4.jpeg',
      free: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus placeat et aut asperiores amet unde veniam obcaecati, eius dignissimos sed, esse facere! Numquam quia laudantium deleniti ex tempora asperiores debitis.',
      profesion: 'IT-speciolist'
   }
]

let body = document.querySelector('body')
let CommonDiv = document.createElement('div')
body.append(CommonDiv)
CommonDiv.style.display = 'flex'
CommonDiv.style.gap = '15px'
CommonDiv.style.alignItems = 'center'

person.forEach(e => {
   let div = document.createElement('div')
   let img = document.createElement('img')
   img.src = e.photo
   img.style.width = '100%'
   img.style.height = '250px'
   img.style.borderRadius = '10px'
   div.append(img)

   let h2 = document.createElement('h2')
   h2.append(e.name)
   h2.style.textAlign = 'center'
   div.append(h2)
   let p = document.createElement('p')
   p.append(e.free)
   div.append(p)
   let prof = document.createElement('q')
   prof.append(e.profesion)
   div.append(prof)
   CommonDiv.append(div)
   div.style.width = '30%'
   div.style.border = '1.5px solid black'
   div.style.borderRadius = '1px'
   div.style.padding = '20px'
   div.style.boxShadow = '2px 3px 6px black'
})
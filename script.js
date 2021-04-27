const prevBtn= document.querySelector('.left_arrow');
const nextBtn= document.querySelector('.right_arrow');
const image= document.querySelector('.customer_picx');
const mtitle= document.querySelector('.mtitle');
const feedback= document.querySelector('.feedback');
const testname=document.querySelector('.name')
const slideLength = document.getElementsByClassName("slider")

const users =[
    {
        id:1,
        title: "Awesome Experience",
        testname:'Jeff Yemi',
        feedback:'"I had some electrical issues that needed to be sorted out urgently at my company then I remembered I saw a GOOFAR advertisement on Instagram. I called the number on the post, they sent an electrician to my location immediately and he did a fantastic job."',
        image:'./assets/Mask Group 3/state 1(default).jpg'
    },
    {
        id:2,
        title: "Smart and Hardworking",
        testname:"Mirabel Julius",
        feedback:'"My car broke down on my way to an event on Friday evening, I was so worried but I remembered I came across GOOFAR on Facebook. I decided to call them and they sent a mechanic down to my location, he arrived a bit late but was able to resolve the issue."',
        image:'./assets/Mask Group 3/state 2.jpg'
    },
    {   id:3,
        title: "Very Efficient",
        testname:"Moses Adebola",
        feedback:"I just rented a shop and I need to change the color urgently so I called GOOFAR and they sent a painter to me. He did an excellent work, I'm so excited. Thank you.",
        image:'./assets/Mask Group 3/state 3.jpg'
    },
    {   id:4,
        title: "Very Efficient",
        testname:"Moses Adebola",
        feedback:"I just rented a shop and I need to change the color urgently so I called GOOFAR and they sent a painter to me. He did an excellent work, I'm so excited. Thank you.",
        image:'./assets/Mask Group 3/state 4.jpg'
    },
    {   id:5,
        title: "Very Efficient",
        testname:"Moses Adebola",
        feedback:"I just rented a shop and I need to change the color urgently so I called GOOFAR and they sent a painter to me. He did an excellent work, I'm so excited. Thank you.",
        image:'./assets/Mask Group 3/state 5.jpg'
    }
]

let slide=0;
let arr = slideLength
let id = users.id 
// arr.push(slideLength)
let imge ='./assets/Mask Group 3/3.png'
image.src = `${users[slide].image}`
const navigation = () => {
    if(slide > users.length-1){
        slide =0;
    }
    mtitle.innerHTML = `${users[slide].title}`;
   image.src = `${users[slide].image}`
    // image.innerHTML=`<img src="${users[slide].image}"alt="">`;
    feedback.innerHTML=`<span>${users[slide].feedback}</span>`;
    testname.innerHTML=`<h5 >${users[slide].testname}</h5>`;

   
        // slideLength[id].style.backgroundColor = '#3E38BACC;' 
   
    slide++; 
}

navigation();

prevBtn.addEventListener('click',navigation())
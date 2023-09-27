const buttons = document.querySelectorAll('button');
const header = document.querySelector('header');
const main = document.querySelector('main');
const body = document.querySelector('body');
const nav = document.querySelector('nav');
const crscr = document.querySelector('.cursor')
const blurCrscr = document.querySelector('.blur-cursor');
const navLinks  = document.querySelectorAll('nav a');
const mainLinks = document.querySelectorAll('main a')
const cards = document.querySelectorAll('.card')
const coffeeShopButton = document.querySelector('.fd-content button');
const imgDivImgs = document.querySelectorAll('.food-n-drink .img-div img');
const hzCardin = document.querySelectorAll('.page3 .hz-cardin')
const smallCards = document.querySelectorAll('.page3 #smallCards')
const fth1 = document.querySelectorAll('footer h1')
const ftI = document.querySelectorAll('footer i')

// Header Buttons Animation Code
function btnAnimation(button){
  const text = button.querySelector('.text');
  const span1 = button.querySelector('.one');
  const span2 = button.querySelector('.two');
  const span3 = button.querySelector('.three');

  button.addEventListener('mouseenter', () => {
    const tl = gsap.timeline(); 
    gsap.to(button, {
      scale: 1.04,
    });

    gsap.to(text, {
      color: 'black',
      top: '27%',
      duration: 0.3,
      ease: 'Expo.ease',
    });

    tl.to(span1, {
      top: '-100%',
      duration: 0.2,
      ease: 'Expo.ease',
    });

    tl.to(span2, {
      top: '-100%',
      duration: 0.2,
      ease: 'Expo.ease',
    });

    tl.to(span3, {
      top: '-50%',
      duration: 0.2,
      ease: 'Expo.ease',
    });
  });

  button.addEventListener('mouseleave', () => {
    gsap.to(button, {
      scale: 1,
    });

    gsap.to(text, {
      top: '100%',
      duration: 0.01,
    });

    gsap.to([span1, span2, span3], {
      top: '100%',
      duration: 0.01,
    });
  });
}
buttons.forEach(button => {
  btnAnimation(button);
});

// Header Animation Code 
gsap.to([header,nav], {
  backgroundColor: 'black',
  height: '18vh',
  duration: 0.5,
  scrollTrigger: {
    trigger: header,
    scroller: body,
    // markers: true,
    start: 'top -10%',
    end: 'top -11%',
    scrub: 1,
  }
});

// Main page Blur Code 
gsap.to(main, {
  backgroundColor: 'black',
  scrollTrigger: {
    trigger: main,
    scroller: body,
    // markers: true,
    start: 'top -30%',
    end: 'top -70%',
    scrub: 1,
  }
});

// Custom Cursor Movement Code
let mouseX = 0, mouseY = 0;
document.addEventListener('mousemove', (event) => {
  mouseX = event.clientX;
  mouseY = event.clientY;
});

function updateCursorPositions() {
  // Calculate the position for the cursor to remain centered
  const cursorWidth = crscr.offsetWidth;
  const cursorHeight = crscr.offsetHeight;
  const cursorX = mouseX - cursorWidth / 2;
  const cursorY = mouseY - cursorHeight / 2;

  crscr.style.delay = `0.8s`
  crscr.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
  blurCrscr.style.transform = `translate(${mouseX - 150}px, ${mouseY - 150}px)`;
  requestAnimationFrame(updateCursorPositions);
}

  updateCursorPositions();

// Crscr enlarge function code & styling
function crscrEnlarge(a,color){
  // Calculate the new cursor position to keep it centered
  const cursorWidth = crscr.offsetWidth;
  const cursorHeight = crscr.offsetHeight;
  const cursorX = mouseX - cursorWidth / 2;
  const cursorY = mouseY - cursorHeight / 2;

  
  a.style.color = color;
  crscr.style.width = '80px'; // Adjust the width as needed
  crscr.style.height = '80px'; // Adjust the height as needed
  crscr.style.transition = 'width 0.3s, height 0.3s';
  crscr.style.transform = `translate(${cursorX}px, ${cursorY}px)`; // Set the new position
  crscr.style.backgroundColor = 'transparent';
  crscr.style.border = '1px solid #fff';
}
// Crscr normal function code & styling
function crscrNormal(a,color){
    a.style.color = color;
    crscr.style.width = '20px'; // Reset the width
    crscr.style.height = '20px'; // Reset the height
    crscr.style.transition = 'width 0.3s, height 0.3s';
    crscr.style.transform = `translate(${mouseX - 10}px, ${mouseY - 10}px)`; // Reset the position
    crscr.style.backgroundColor = '#96bd2cc0';
    crscr.style.border = '0px solid #96bd2cc0';
}

// Navbar Links Code 
navLinks.forEach((a) => {
  a.addEventListener('mouseenter', (event) => {
    if (header.style.backgroundColor === `black`) {
      crscrEnlarge(a,`#96bd2cc0`);
    } else {
      crscrEnlarge(a,`#000`);
    }
  });
  a.addEventListener('mouseleave', (event) => {
    crscrNormal(a,`#fff`);
  });
});

// Main Links Code 
mainLinks.forEach((a) => {
  a.addEventListener('mouseenter', (event) => {
      crscrEnlarge(a,`none`);
  });
  a.addEventListener('mouseleave', (event) => {
    crscrNormal(a,`none`);
  });
});

// Card Hover Animation
cards.forEach((card) => {
  card.addEventListener('mousemove',(e) => {
     crscrEnlarge(card,`none`);
     const cardRect = card.getBoundingClientRect();
    
    // Calculate the card's center coordinates
    const cardCenterX = cardRect.left + cardRect.width / 2;
    const cardCenterY = cardRect.top + cardRect.height / 2;
    
    // Calculate the tilt angles based on cursor position
    const angleX = (e.clientY - cardCenterY) / 10; // Adjust the divisor for sensitivity
    const angleY = -(e.clientX - cardCenterX) / 10; // Adjust the divisor for sensitivity
    
    // Apply the tilt transformation
    card.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
  });
  card.addEventListener('mouseleave', (e) => {
    crscrNormal(card,`none`);
    card.style.transform = 'rotateX(0deg) rotateY(0deg)';
  });
})

// CoffeeShopButton Animation
coffeeShopButton.addEventListener('mouseenter',(e) => {
  crscrEnlarge(coffeeShopButton,`none`);
})
coffeeShopButton.addEventListener('mouseleave',(e) => {
  crscrNormal(coffeeShopButton,`none`);
})

// Horizontal card Animation
hzCardin.forEach((card) => {
  card.addEventListener('mouseenter',(e) => {
    crscrEnlarge(card,`none`);
  })
  card.addEventListener('mouseleave',(e) => {
    crscrNormal(card,`none`);
  })
})

// smallCards Animation
smallCards.forEach((card) => {
  card.addEventListener('mouseenter',(e) => {
    crscrEnlarge(card,`none`);
  })
  card.addEventListener('mouseleave',(e) => {
    crscrNormal(card,`none`);
  })
})

gsap.to('.reviewp1',{
  x:`70%`,
  y:`70%`,
  scrollTrigger:{
  trigger:'.review',
  scroller:'body',
  start:'10% 25%',
  end:'10% 25%',
  // markers:true,
  scrub:2,
  }
})
gsap.to('.reviewp3',{
  x:`-70%`,
  y:`-70%`,
  scrollTrigger:{
  trigger:'.review',
  scroller:'body',
  start:'10% 25%',
  end:'10% 25%',
  // markers:true,
  scrub:2,
  }
})

gsap.to('.lastdiv > h1',{
  y:`-105%`,
  scrollTrigger:{
  trigger:'.lastdiv',
  scroller:'body',
  start:'30% 80%',
  end:'45% 80%',
  // markers:true,
  scrub:1,
  }
})

fth1.forEach((h1) => {
  h1.addEventListener('mouseenter',(e) => {
    crscrEnlarge(h1,`white`);
  })
  h1.addEventListener('mouseleave',(e) => {
    crscrNormal(h1,`black`);
  })
})
ftI.forEach((i) => {
  i.addEventListener('mouseenter',(e) => {
    crscrEnlarge(i,`white`);
  })
  i.addEventListener('mouseleave',(e) => {
    crscrNormal(i,`black`);
  })
})





// ------ Following Comment-in Code is for image-div Animation -------------------⏬

// imgDivImgs.forEach(() => {
  
// })

// gsap.to('.food-n-drink .img-div img', {
//   opacity: 0,
//   ease: 'ease',
//   duration: 1,
//   repeat: -1, // Repeat the animation infinitely
//   stagger: {
//     each: 1, // Delay between each image animation
//   },
// });


// function imgDivAnimation(){
//   const tl = gsap.timeline();
//   imgDiv.forEach((img,index) => {

    
//     setTimeout(() => {
//       tl.to(img,{
//         opacity:0,
//         ease:`ease`,
//         duration:`0.3`,
//         stagger:`1`
//       })
//     }, 1000 * index);
//   });
// }

// function imgDivAnimationLoop(){
//   imgDivAnimation()
//   setTimeout(imgDivAnimationLoop,3000)
// }
// imgDivAnimationLoop()

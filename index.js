setTimeout(function () {
  let projectVideos = Array.from(document.querySelectorAll(".projectVideo"));
  let stateOfSlideShow = Array(projectVideos.length).fill(0);
  projectVideos.forEach((projectVideo, i) => {
    let projectImage = projectVideo.querySelector(".projectImage");
    let images = projectImage.querySelectorAll("img");
    setInterval(() => {
      changeImages(images, stateOfSlideShow, i);
    }, 5000 + (i % 3) * 1000);
  });
}, 5000);

// window.onload = function () {
//   let projectVideos = Array.from(document.querySelectorAll(".projectVideo"));
//   let stateOfSlideShow = Array(projectVideos.length).fill(0);
//   console.log(projectVideos);
//   projectVideos.slice(0, 2).forEach((projectVideo, i) => {
//     let projectImage = projectVideo.querySelector(".projectImage");
//     let images = projectImage.querySelectorAll("img");
//     console.log(images);
//     setInterval(() => {
//       changeImages(images, stateOfSlideShow, i);
//     }, 3000 + (i % 5) * 1000);
//   });
// };

function changeImages(imagesS, soss, i) {
  if (soss[i] === 0) {
    imagesS[0].classList.add("hideIt");
    imagesS[1].classList.remove("hideIt");
    imagesS[2].classList.add("hideIt");
    imagesS[3].classList.add("hideIt");
    imagesS[4].classList.add("hideIt");

    if (imagesS[4].classList.contains("fadeIn")) {
      imagesS[4].classList.add("fadeOut");
      imagesS[4].classList.remove("fadeIn");
    }

    imagesS[3].classList.remove("fadeOut");

    imagesS[0].classList.add("fadeIn");
    // imagesS[1].classList.add("fadeIn");
    // imagesS[2].classList.add("fadeOut");
    // imagesS[3].classList.add("fadeOut");

    soss[i] = 1;
  } else if (soss[i] === 1) {
    imagesS[0].classList.add("hideIt");
    imagesS[1].classList.add("hideIt");
    imagesS[2].classList.remove("hideIt");
    imagesS[3].classList.add("hideIt");
    imagesS[4].classList.add("hideIt");

    // imagesS[0].classList.add("fadeOut");
    imagesS[4].classList.remove("fadeOut");
    imagesS[0].classList.remove("fadeIn");

    imagesS[0].classList.add("fadeOut");
    imagesS[1].classList.add("fadeIn");
    // imagesS[3].classList.add("fadeOut");
    // imagesS[4].classList.add("fadeOut");

    soss[i] = 2;
  } else if (soss[i] === 2) {
    imagesS[0].classList.add("hideIt");
    imagesS[1].classList.add("hideIt");

    imagesS[2].classList.add("hideIt");
    imagesS[3].classList.remove("hideIt");
    imagesS[4].classList.add("hideIt");

    // imagesS[0].classList.add("fadeOut");
    // imagesS[1].classList.add("fadeOut");
    // imagesS[2].classList.add("fadeOut");
    imagesS[0].classList.remove("fadeOut");
    imagesS[1].classList.remove("fadeIn");

    imagesS[1].classList.add("fadeOut");
    imagesS[2].classList.add("fadeIn");

    soss[i] = 3;
  } else if (soss[i] === 3) {
    imagesS[0].classList.add("hideIt");
    imagesS[1].classList.add("hideIt");
    imagesS[2].classList.add("hideIt");
    imagesS[3].classList.add("hideIt");
    imagesS[4].classList.remove("hideIt");

    // imagesS[0].classList.add("fadeOut");
    // imagesS[1].classList.add("fadeOut");
    // imagesS[2].classList.add("fadeOut");
    imagesS[1].classList.remove("fadeOut");
    imagesS[2].classList.remove("fadeIn");

    imagesS[2].classList.add("fadeOut");
    imagesS[3].classList.add("fadeIn");

    soss[i] = 4;
  } else if (soss[i] === 4) {
    imagesS[1].classList.add("hideIt");
    imagesS[2].classList.add("hideIt");
    imagesS[3].classList.add("hideIt");
    imagesS[4].classList.add("hideIt");
    imagesS[0].classList.remove("hideIt");

    imagesS[2].classList.remove("fadeOut");
    imagesS[3].classList.remove("fadeIn");

    imagesS[3].classList.add("fadeOut");
    imagesS[4].classList.add("fadeIn");
    // imagesS[2].classList.add("fadeOut");
    // imagesS[3].classList.add("fadeOut");
    // imagesS[4].classList.add("fadeOut");

    soss[i] = 0;
  }
}

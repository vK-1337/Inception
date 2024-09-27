progressBarCompletion = document.getElementById("progressBarCompletion");
schoolLogo = document.getElementById("logo");
counter = document.getElementById("counter");

async function wait(time) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

async function showLogo_completeBar() {
  while (progress <= 33)
  {
    opacity += 0.005;
    schoolLogo.style.opacity = `${opacity}`;
    random = Math.random() * 0.3;
    progress += random;
    progressBarCompletion.style.width = `${progress}%`;
    percent = Math.floor(progress / 33 * 100);
    counter.innerText = `${percent} %`;
    await wait(25);
  }
  await wait(500);
  window.location.href = "/index";
}

progress = 0;
opacity = 0;
progressBarCompletion.style.width = `${progress}px`;
schoolLogo.style.opacity = `${opacity}`;
showLogo_completeBar();

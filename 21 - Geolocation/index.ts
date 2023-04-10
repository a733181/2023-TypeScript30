const arrow = document.querySelector<SVGAElement>('.arrow')!;
const speed = document.querySelector<HTMLElement>('.speed-value')!;

navigator.geolocation.watchPosition(
  (data) => {
    if (data.coords.speed != null) {
      speed.textContent = data.coords.speed.toString();
    }
    if (data.coords.heading != null) {
      arrow.style.transform = `rotate(${data.coords.heading}deg)`;
    }
  },
  (err) => {
    console.error(err);
  }
);

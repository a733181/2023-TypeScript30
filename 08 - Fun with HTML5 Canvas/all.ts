const canvas = document.querySelector<HTMLCanvasElement>('#draw')!;
const ctx: CanvasRenderingContext2D = canvas.getContext(
  '2d'
) as CanvasRenderingContext2D;
canvas.width = window.innerWidth as number;
canvas.height = window.innerHeight as number;
ctx.strokeStyle = '#BADA55' as string;
ctx.lineJoin = 'round' as CanvasLineJoin;
ctx.lineCap = 'round' as CanvasLineCap;
ctx.lineWidth = 100 as number;

let isDrawing: boolean = false;
let lastX: number = 0;
let lastY: number = 0;
let hue: number = 0;
let direction: boolean = true;

function draw(event: MouseEvent): void {
  if (!isDrawing) return; // stop the fn from running when they are not moused down
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  // start from
  ctx.moveTo(lastX, lastY);
  // go to
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();
  [lastX, lastY] = [event.offsetX, event.offsetY];

  hue++;
  if (hue >= 360) {
    hue = 0;
  }
  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction;
  }

  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => (isDrawing = false));
canvas.addEventListener('mouseout', () => (isDrawing = false));

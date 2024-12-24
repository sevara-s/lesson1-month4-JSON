// GET MA'LUMOT OLIB KELISH
// PUT MA'LUMOT O'ZGARTIRISH
// POST MA'LUMOT QOSHISH
// DELETE MA'LUMOT O'CHIRISH

const request = new XMLHttpRequest();
request.open(
  "GET",
  "https://67172d90b910c6a6e026d725.mockapi.io/mesage/telgram"
);
request.send();
request.addEventListener("readystatechange", () => {
  if (request.readyState === 4) {
    console.log(JSON.parse(request.responseText));
  }
});

const myPromise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("Vazifaqiyatli bajariladi");
  } else {
    reject("Xatolik yuz berdi");
  }
});

myPromise


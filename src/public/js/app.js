const socket = new WebSocket(`ws://${window.location.host}`);

function handleOpen() {
  console.log("Connected to Sever ✅");
}

socket.addEventListener("open", handleOpen);

socket.addEventListener("message", (message) => {
  console.log("New message: ", message.data);
});

socket.addEventListener("close", () => {
  console.log("Disconnected from Server ❌");
});

setTimeout(() => {
  socket.send("Hello from the browser!");
}, 10000);

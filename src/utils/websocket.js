import Socket from 'simple-websocket';

const URL = 'ws://localhost:8081';

export default class WebSocket {
  constructor(token) {
    this.socket = null;
    this.token = token;
  }

  connect() {
    const socket = new Socket(`${URL}?token=${this.token}`);

    socket.on('connect', this.onConnect.bind(socket));
    socket.on('data', this.onData.bind(socket));
    socket.on('close', this.onClose.bind(socket));
    socket.on('error', this.onError.bind(socket));

    this.socket = socket;
  }

  onConnect() {
    console.log('onconnect');
  }

  onData(data) {
    data = JSON.parse(data);
    switch (data.type) {
    case 'jwt':
      localStorage.setItem('behappy', data.payload);
      break;
    default:
    }
    console.log(data);
  }

  onClose() {}

  onError(error) {}
}

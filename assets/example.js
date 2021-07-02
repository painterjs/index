export default {
  width: '308px',
  height: '500px',
  background: '#fff',
  views: [
    {
      id: 'id_qrcode',
      type: 'qrcode',
      content: 'https://painterjs.github.io/',
      css: {
        top: '50%',
        left: '50%',
        align: 'center',
        verticalAlign: 'center',
        width: '150px',
        height: '150px',
      },
    },
    {
      type: 'image',
      url: 'https://qhstaticssl.kujiale.com/newt/165/image/png/1625213333692/0C89272CDC80D5D824A250C2BD1A4A2E.png',
      css: {
        width: '30px',
        height: '30px',
        top: 'calc(id_qrcode.top + id_qrcode.height / 2)',
        left: 'calc(id_qrcode.left + id_qrcode.width / 2)',
        align: 'center',
        verticalAlign: 'center',
        borderWidth: '6px',
        borderColor: 'white',
      },
    },
    {
      type: 'text',
      text: 'https://painterjs.github.io/',
      css: {
        left: '50%',
        top: 'calc(id_qrcode.bottom + 10px)',
        fontSize: '20px',
        align: 'center',
      },
    },
  ],
};

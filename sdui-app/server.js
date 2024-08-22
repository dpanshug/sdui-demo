const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const http = require('http');

const app = express();
const server = http.createServer(app);

app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true,
  }),
);
app.use(bodyParser.json());

const schema = {
  type: 'page',
  components: [
    {
      type: 'header',
      props: {
        title: `Flash sale`,
        subtitle: 'Hurry up! Limited time offer!',
        titleColor: 'red',
      },
    },
    {
      type: 'product-list',
      props: {
        products: [
          { id: 1, name: 'Product A', price: 80 }, // Updated price
          { id: 2, name: 'Product B', price: 150 }, // Updated price
          { id: 3, name: 'Product C', price: 50 }, // New product
        ],
      },
    },
    {
      type: 'banner',
      props: {
        text: 'Buy 1 Get 1 Free on selected items!',
        backgroundColor: '#ff0000',
        textColor: '#ffffff',
      },
    },
    {
      type: 'footer',
      props: {
        text: 'Thank you for shopping with us!',
      },
    },
  ],
};

app.post('/api/ui-config', (req, res) => {
  res.json(schema);
});

server.listen(5000, () => {
  console.log('Backend running on port 5000');
});

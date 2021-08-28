module.exports = (booking) => {
    booking.get('/cb', (req, res) => {
    res.send('Hello it get from contact booking');
  });

    booking.post('/', (req, res) => {
    res.send({
        fulfillmentText: 'testpath: connecteddd'
      });
  });
};
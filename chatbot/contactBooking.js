module.exports = (booking) => {
  //HTTP Methods
  booking.get('/cb', (req, res) => {
    res.send('Hello it get from contact booking');
  });

  booking.post('/cbreq', (req, res) => {
    res.send({
        fulfillmentText: 'testpath: connecteddd'
      });
  });
};
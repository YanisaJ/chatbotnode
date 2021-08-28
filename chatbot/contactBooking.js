module.exports = (booking) => {
  //HTTP Methods
  booking.get('/CB', (req, res) => {
    //res.send('Hello it get from contact booking');
    res.send({
        fulfillmentText: 'testpath: connecteddd'
      });
  });
};
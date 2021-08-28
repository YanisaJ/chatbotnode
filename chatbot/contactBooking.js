module.exports = (booking) => {
    booking.get('/cb', (req, res) => {
    res.send('Hello testpath from contactbooking');
  });

    booking.post('/', (req, res) => {
    res.send({
        fulfillmentText: 'testpath: connecteddd'
      });
  });
};
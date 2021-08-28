const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());//middleware
//import routes
    require('./routes/dialogFlowRoutes')(app);

//Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`);
});


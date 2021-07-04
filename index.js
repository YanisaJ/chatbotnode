//-----------------------------------------------------------------
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
//-----------------------------------------------------------------

//middleware-------------------------------------------------------
app.use(bodyParser.json());

//import routes เขียนได้ 2 แบบ---------------------------------------
    //1
    // const routes = require('./routes/dialogFlowRoutes');
    // routes(app);
    //2
    require('./routes/dialogFlowRoutes')(app)
//-----------------------------------------------------------------

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`);
});

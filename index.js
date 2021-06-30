//-----------------------------------------------------------------
const express = require('express');
const app = express();



//HTTP Methods-----------------------------------------------------
app.get('/',(req,res)=> {
res.send('Hello new project again');
});

// app.post();
// app.put();
// app.delete();
//HTTP Methods-----------------------------------------------------

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`);
});

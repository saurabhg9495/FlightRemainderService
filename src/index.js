const express=require('express');
const bodyParser=require('body-parser');

const {PORT}=require('./config/server-config');

//const {sendBasicEmail}=require('./services/email-service');
const TicketController=require('./controllers/ticket-controller');

const jobs = require('./utils/job');

const setUpAndStartServer=()=>{
    const app=express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.post('/api/v1/tickets',TicketController.create);

    app.listen(PORT,()=>{
         console.log(`SERVER STARTED AT PORT ${PORT}`);
         jobs();
        //  sendBasicEmail(
        //     'support@admin.com',
        //     'guptasaurabh9495@gmail.com',
        //     'This is a testing Emmail for the flight remainder service',
        //     'hey,your flight is scheduled for the date 18.01.2023.Have a safe journey'
        //  );
    });
}

setUpAndStartServer();
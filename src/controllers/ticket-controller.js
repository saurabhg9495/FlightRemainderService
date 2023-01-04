const TicketService=require('../services/email-service');

const create=async(req,res)=>{
    try {
        const response=await TicketService.createTicket(req.body);
        return res.status(201).json({
            success:true,
            message:'Successfully registered an email remainder',
            err:{},
            data:response
        });
    } catch (error) {
        return res.status(500).json({
        success:true,
        message:'FAILED TO REGISTER',
        err:error,
        data:response
    });
    }
}

module.exports={
    create
}
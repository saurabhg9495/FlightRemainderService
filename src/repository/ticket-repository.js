const {NotificationTicket}=require('../models/index');
const {Op}=require("sequelize");

class TicketRepository{
    
    async getAll(){
        try {
            const tickets=await NotificationTicket.findAll();
            return tickets;
        } catch (error) {
            console.log(error);
        }
    }

    async create(data){
        try {
            const tickets=await NotificationTicket.create(data);
            return tickets;
        } catch (error) {
            console.log(error);
        }
    }

    async get(filter){
        try {
            const tickets=await NotificationTicket.findAll({
                where:{
                    status: filter.status,
                    notificationTime:{
                        [Op.lte]:new Date()
                    }
                }
            });
            return tickets;
        } catch (error) {
            console.log(error);
        }
    }

    async update(ticketId,data){
        try {
            const tickets=await NotificationTicket.findByPk(ticketId);
            if(data.status)
            ticket.status=data.status;
            await ticket.save();
            return ticket;
            return tickets;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports=TicketRepository;
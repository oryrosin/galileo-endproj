
class WageModel {
    constructor(fields, id){
            this.fName= fields.fName;
            this.lName= fields.lName;
            this.month= fields.month;
            this.precentage= fields.precentage;
            this.idNum= fields.idNum;
            this.socialSecutrity= fields.socialSecutrity;
            this.hitagdut= fields.hitagdut;
            this.year= fields.year;
            this.bruto= fields.bruto;
            this.neto= fields.neto;
            this.employerCost= fields.employerCost;
            this.pension= fields.pension;
            this.gamish= fields.gamish;
            this.membersTax= fields.membersTax;
            this.maagalHaim= fields.maagalHaim;
            this.id=id;
            this.date= new Date(this.year+"-"+this.month) 
        }   
    }
export default WageModel
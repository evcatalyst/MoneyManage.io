export class RecommendedData {
    constructor() {
        this.totalExpense = 0;
        this.totalHomeExpense = 0;
        this.totalCarExpense = 0;
        this.totalHealthExpense = 0;
        this.totalDiscretionaryExpense = 0;
        this.advancedAmounts = [];
        this.adjustedSavingsTotal = 0;

        this.message =  "";
        this.messageStyle = "";
        this.savingsChange = 0;
        this.expensesChange = 0;

        //HOME
        this.mortgage = 0;
        this.propertyTax = 0;
        this.homeownerInsurance = 0;
        this.phone = 0;
        this.internet = 0;
        this.cable = 0;
        this.streaming = 0;
        this.groceries = 0;
        this.utilities = 0;
        this.homeMaintenance = 0;
        this.clothes = 0;

        this.mortgagecheck = true;
        this.propertyTaxcheck = true;
        this.homeownerInsurancecheck = true;
        this.phonecheck = true;
        this.internetcheck = true;
        this.cablecheck = true;
        this.streamingcheck = true;
        this.groceriescheck = true;
        this.utilitiescheck = true;
        this.homeMaintenancecheck = true;
        this.clothescheck = true;

        this.mortgagelock = true;
        this.propertyTaxlock = true;
        this.homeownerInsurancelock = true;
        this.phonelock = true;
        this.internetlock = true;
        this.cablelock = true;
        this.streaminglock = true;
        this.grocerieslock = true;
        this.utilitieslock = true;
        this.homeMaintenancelock = true;
        this.clotheslock = true;

        this.homeChanges = {
            "mortgage" : 0,
            "propertyTax" : 0,
            "homeownerInsurance" : 0,
            "phone" : 0,
            "internet" : 0,
            "cable" : 0,
            "streaming" : 0,
            "groceries" : 0,
            "utilities" : 0,
            "homeMaintenance" : 0,
            "clothes" : 0
        }

        //CAR
        this.carPayment = 0;
        this.carInsurance = 0;
        this.publicTransport = 0;
        this.gas = 0;
        this.carMaintenance = 0;

        this.carPaymentcheck = true;
        this.carInsurancecheck = true;
        this.publicTransportcheck = true;
        this.gascheck = true;
        this.carMaintenancecheck = true;

        this.carPaymentlock = true;
        this.carInsurancelock = true;
        this.publicTransportlock = true;
        this.gaslock = true;
        this.carMaintenancelock = true;

        this.carChanges = {
            "carPayment" : 0,
            "carInsurance" : 0,
            "publicTransport" : 0,
            "gas" : 0,
            "carMaintenance" : 0
        }

        //HEALTH
        this.healthInsurance = 0;
        this.medication = 0;
        this.unexpectedMedicalProblems = 0;
        this.visualInsurance = 0;
        this.eyeCare = 0;
        this.dentalInsurance = 0;
        this.cavities = 0;
        this.braces = 0;

        this.healthInsurancecheck = true;
        this.medicationcheck = true;
        this.unexpectedMedicalProblemscheck = true;
        this.visualInsurancecheck = true;
        this.eyeCarecheck = true;
        this.dentalInsurancecheck = true;
        this.cavitiescheck = true;
        this.bracescheck = true;

        this.healthInsurancelock = true;
        this.medicationlock = true;
        this.unexpectedMedicalProblemslock = true;
        this.visualInsurancelock = true;
        this.eyeCarelock = true;
        this.dentalInsurancelock = true;
        this.cavitieslock = true;
        this.braceslock = true;

        this.healthChanges = {
            "healthInsurance" : 0,
            "medication" : 0,
            "unexpectedMedicalProblems" : 0,
            "visualInsurance" : 0,
            "eyeCare" : 0,
            "dentalInsurance" : 0,
            "cavities" : 0,
            "braces" : 0
        }

        //DISCRETIONARY
        this.eatingOut = 0;
        this.bars = 0;
        this.funMoney = 0;
        this.other = 0;

        this.eatingOutcheck = true;
        this.barscheck = true;
        this.funMoneycheck = true;
        this.othercheck = true;

        this.eatingOutlock = true;
        this.barslock = true;
        this.funMoneylock = true;
        this.otherlock = true;
        
        this.discretionaryChanges = {
            "eatingOut" : 0,
            "bars" : 0,
            "funMoney" : 0,
            "other" : 0
        }
        
        //HOME PERCENTAGES
        this.homePercentage = 0;
        this.mortgagePercentage = 0;
        this.propertyTaxPercentage = 0;
        this.phonePercentage = 0;
        this.internetPercentage = 0;
        this.cablePercentage = 0;
        this.streamingPercentage = 0;
        this.groceriesPercentage = 0;
        this.utilitiesPercentage = 0;
        this.homeMaintenancePercentage = 0;
        this.clothesPercentage = 0;
        this.homePercentageArray = [];
        this.advancedHomeAmounts = [];

        //CAR PERCENTAGES
        this.carPercentage = 0;
        this.carPaymentPercentage = 0;
        this.carInsurancePercentage = 0;
        this.publicTransportPercentage = 0;
        this.gasPercentage = 0;
        this.carMaintenancePercentage = 0;
        this.carPercentageArray = [];
        this.advancedCarAmounts = [];

        //HEALTH PERCENTAGES
        this.healthPercentage = 0;
        this.healthInsurancePercentage = 0;
        this.medicationPercentage = 0;
        this.unexpectedMedicalProblemsPercentage = 0;
        this.visualInsurancePercentage = 0;
        this.eyeCarePercentage = 0;
        this.dentalInsurancePercentage = 0;
        this.cavitiesPercentage = 0;
        this.bracesPercentage = 0;
        this.healthPercentageArray = [];
        this.advancedHealthAmounts = [];

        //DISCRETIONARY PERCENTAGES
        this.discretionaryPercentage = 0;
        this.eatingOutPercentage = 0;
        this.barsPercentage = 0; 
        this.funMoneyPercentage = 0;
        this.otherPercentage = 0;
        this.discretionaryPercentageArray = [];
        this.advancedDiscretionaryAmounts = [];
    }
}
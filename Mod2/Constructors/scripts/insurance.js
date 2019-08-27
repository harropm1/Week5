"use strict";

function InsurancePolicy(policyNumber, policyHolder, policyType, issueDate, renewalDate, policyPremium)
{
    this.polNum = policyNumber;
    this.polHold = policyHolder;
    this.polType = policyType;
    this.issDate = issueDate;
    this.renewDate = renewalDate;
    this.polPremium = policyPremium;

    /* this.display = function ()
    {
        console.log(`
        Policy Number: ${this.polNum}
        Policy Holder: ${this.polHold}
        Policy Type: ${this.polType}
        Issued Date: ${this.issDate}
        Renewal Date: ${this.renewDate}
        Policy Premium: $${this.polPremium}
        `);
    };

    this.renew = function (premiumChangePct)
    {
        let year = this.renewDate.getFullYear() + 1;
        this.renewDate.setFullYear(year);

        let increase = this.polPremium * premiumChangePct;
        this.polPremium = this.polPremium + increase;
    } */
}
InsurancePolicy.prototype.display = function ()
{
    console.log(`
        Policy Number: ${this.polNum}
        Policy Holder: ${this.polHold}
        Policy Type: ${this.polType}
        Issued Date: ${this.issDate}
        Renewal Date: ${this.renewDate}
        Policy Premium: $${this.polPremium}
        `);
};

InsurancePolicy.prototype.renew = function (premiumChangePct)
{
    let year = this.renewDate.getFullYear() + 1;
    this.renewDate.setFullYear(year);

    let increase = this.polPremium * premiumChangePct;
    this.polPremium = this.polPremium + increase;
};

let policies = [
    new InsurancePolicy("10MH11", "Michelle H", "Home", new Date(2007, 7, 27), new Date(2019, 7, 27), 500),
    new InsurancePolicy("05MH18", "Megan H", "Auto", new Date(2011, 5, 25), new Date(2019, 5, 25), 600),
    new InsurancePolicy("05RH24", "Robert H", "Home", new Date(2018, 8, 27), new Date(2019, 8, 27), 1000),
    new InsurancePolicy("12S22", "Zach S", "Auto", new Date(2008, 11, 22), new Date(2019, 11, 22), 550),
    new InsurancePolicy("03PH03", "Peggy H", "Auto", new Date(1993, 6, 15), new Date(2019, 7, 27), 300),
    new InsurancePolicy("02JB24", "Jenny B", "Auto", new Date(2017, 6, 27), new Date(2019, 7, 27), 500)
];
for (let i = 0; i < policies.length; i++)
{
    let today = new Date();
    let renew = policies[i].renewDate;
    if (renew.getFullYear() == today.getFullYear() && renew.getMonth() == today.getMonth() && renew.getDate() == today.getDate())
    {
        if (policies[i].polType == "Home")
        {
            policies[i].renew(.03);
        }
        else if (policies[i].polType == "Auto" && (today.getFullYear() - 3) <= policies[i].issDate.getFullYear())
        {
            policies[i].renew(.05);
        }
        else
        {
            policies[i].renew(0);
        }
    }
    policies[i].display();
}


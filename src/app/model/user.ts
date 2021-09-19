export class User {
    public customerId: string;
    public userName: string;
    public firstName: string;
    public lastName: string;
    public emailAddress: string;
    public countryCode: string;
    public contactNumber: string;
    public password: string;
    public role: string;
    public authorities: [];
    public profilePic: string;
    public jwtToken: string;
    // public authorities: [];
  
    constructor() {
      this.customerId = '';
      this.userName = '';
      this.firstName = '';
      this.lastName = '';
      this.emailAddress = '';
      this.countryCode = '';
      this.contactNumber = '';
      this.password = '';
      this.role = '';
      this.authorities = [];
      this.profilePic = '';
      this.jwtToken = '';
    //   this.authorities = [];
    }
  
  }
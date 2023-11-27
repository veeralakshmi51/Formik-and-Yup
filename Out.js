import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.
//const gs02applicationsendercodeRules=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
//const gs02applicationreceivercodeRules=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
export const outSchema = yup.object().shape({
  name:yup.string().min(5,'It should contain minimum 5 characters').required("Name  is Required"),
  edicontactname:yup.string().min(10,'It must contains 10 letters' ).required("This Filed is Required"),
  edicontactphone:yup.number().min(5).max(10).required("Required Field"),
  edicontacttax:yup.number().min(5).max(15).required("This Field is Required"),
   isa:yup.string().required("Please Select Field"),
  // userid:yup.number().max(10).required("Field is Required"),
  // password: yup
  //   .string()
  //   .min(5)
  //   .matches(passwordRules, { message: "Please create a stronger password" })
  //   .required("This field is Required"),
  //   submitterid:yup.string().max(10,'It contains maximum 10 characters').required("Field is Required"),
  //   receiverid:yup.string().max(10,'It contains maximum 10 characters').required("Field is Required"),
  //   ackrequest:yup.string().required("Please Select Field"),
  usageindicator:yup.string().required("Please Select Field"),
  //   gs02applicationsendercode:yup.string().min(10).matches(gs02applicationsendercodeRules,{message:"Please provide correct GS02 application Sender Code"}).required("Field is Required"),
  //   gs02applicationreceivercode:yup.string().min(10).matches(gs02applicationreceivercodeRules,{message:'Please give a correct GS02Application Reciever code'}).required("This Field is Required"),
    userid:yup.string().min(8).required("Please Type your UserID"),
    submitterid:yup.string().max(10,'It contains maximum 10 characters').required("Please Enter Your SumbitterID"),
    receiverid:yup.string().max(10,'It contains maximum 10 characters').required("Please Enter Your ReceiverID"),
    password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please Create a Strong Password" })
    .required("Type Your Password here"),
    ackrequest: yup.string().required('Please select an option from the dropdown'),
    webserviceuserid:yup.string().required("Please Enter Webservice UserID"),
    webservicepassword:yup.string().required("Enter The Service Password"),
    gs02applicationsendercode:yup.number().required("Please Provide Correct Code"),
    gs02applicationreceivercode:yup.number().required("Please Provide Correct Code"),
    loopsubmitter:yup.number().min(10).required('Loopsubmitter ID is Required'),
    calltype: yup.string().required('Please select an option from the dropdown'),
    useridweb:yup.string().required("Please ReType your UserID"),
    submitteridweb:yup.string().oneOf([yup.ref('submitterid'),null],'Must match with Submitter ID').required("Please ReEnter Your SumbitterId"),
    receiveridweb:yup.string().max(10,'It contains maximum 10 characters').required("Please ReEnter Your ReceiverId"),
    passwordweb: yup
    .string().oneOf([yup.ref('password'),null],'password must match').required("Type Your Password carefully!!!"),
    providernpi:yup.string().required("Required Field"),
    webserviceurl:yup.string()
    .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        'Enter Correct URL!'
    )
    .required('Please Enter Website'),
    gs02applicationsendercodebatch:yup.number().required("Please Provide Correct Zip Code"),
    gs02applicationreceivercodebatch:yup.number().required("Please Provide Correct Zip Code"),
    ftpaddress:yup.string().required("Please Give Correct FTP Address"),
    useridbatch:yup.string().required("Enter Your UserID"),
    passwordbatch:yup
    .string().oneOf([yup.ref('password'),null],'password must match').required("Type Your Password Correctly!!!"),
    type:yup.string().required("Please Enter the type FTP or SFTP"),
    ftpport:yup.string().required("Please Provide this Field"),
    submitteridbatch:yup.string().required("This Field is Required"),
    receiveridbatch:yup.string().required("This Field is Required"),
    providerapi:yup.string().required("Field is Required"),
    folderup:yup.string().required('Please Upload Your File'),
    folderdown:yup.string().required('Click to Download Your File')
  
});
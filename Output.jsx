import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavbarBrand, Container, NavItem, NavLink,Nav, Col, Form, Row, Label, FormGroup, Input, Button} from 'reactstrap';
import bellImage from './bell.png'; 
import settingsImage from './settings.png'
import profileImage from './pro.png'
import menuimage from './menu.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faUndo, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import {  useFormik } from 'formik';
import { outSchema } from '../schemas/Out';
const onSubmitting= async (values,actions)=>{
  await new Promise((resolve)=>setTimeout(resolve,1000));
  actions.resetForm();
  console.log(values);
  alert('Form Submitted')
  }


const Output = ({onSubmit}) => {
    const formik=useFormik({
        initialValues:{
            name:'',
            edicontactname:'',
            edicontactphone:'',
            edicontacttax:'',
            isa:'',
            userid:'',
            submitterid:'',
            
            receiverid:'',
            ackrequest:'',
            usageindicator:'',
            gs02applicationsendercode:'',
            gs02applicationreceivercode:'',
            loopsubmitter:'',
            useridweb:'',
            passwordweb:'',
            submitteridweb:'',
            receiveridweb:'',
            providernpi:'',
            webserviceurl:'',
            webserviceuserid:'',
            webservicepassword:'',
            calltype:'',
            gs02applicationsendercodebatch:'',
            gs02applicationreceivercodebatch:'',
            ftpaddress:'',
            useridbatch:'',
            passwordbatch:'',
            type:'',
            ftpport:'',
            submitteridbatch:'',
            receiveridbatch:'',
            providerapi:'',
            folderup:'',
            folderdown:''
        },
        validationSchema:outSchema,
        onSubmit:(values, actions) => onSubmitting(values, actions),
    })
  // const [isCollapsed, setIsCollapsed] = useState(true);
  const [dropDownOpen,setDropDownOpen]=useState(false)
  // const [isAcknowledge,setIsAcknowledge]=useState(false)
  // const [isProduct,setIsProduct]=useState(false)
  const toggle=()=>{
    setDropDownOpen(!dropDownOpen)
  }
// const toopen=()=>{
//   setIsAcknowledge(!isAcknowledge)
// }
// const toproduct=()=>{
//   setIsProduct(!isProduct)
// }
  return (
    <div>
      <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Website</title>
          <link rel="stylesheet" type="text/css" href="style.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
          <Navbar className="my-1" color="light">
        <Container className="d-flex justify-content-between" >
       <div >
       <img src={menuimage} alt="menuimage" />
          </div>
          <div className="d-flex p-2 align-items-center">
            <NavLink className="me-2" href='#notifications'>
              <img src={bellImage} alt="bellimage" />
            </NavLink>
            <NavLink className="me-2" href='#profile'>
              <img src={profileImage} alt="profile" />
            </NavLink>
            <NavLink className='me-2' href='#settings'>
              <img src={settingsImage} alt="settings" />
            </NavLink>
          </div>
          
        </Container>
      </Navbar>
      <Navbar color='dark rounded'>
     <NavbarBrand href='#' style={{color:'white'}}>Clearing House Setup</NavbarBrand>
<Nav>
  <NavItem>
    <NavLink href='#notifications'>
      <FontAwesomeIcon icon={faFile} style={{color:'aliceblue'}} type='submit' />
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink href='#notifications'>
      <FontAwesomeIcon icon={faUndo} style={{color:'aliceblue'}}/>
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink href='#notifications'>
      <FontAwesomeIcon icon={faCircleXmark} style={{color:'aliceblue'}}/>
    </NavLink>
  </NavItem>
</Nav>
</Navbar>
<Navbar style={{backgroundColor:'rgb(241, 237, 237)'}}>
  <Container fluid>
  <NavbarBrand href='/' style={{fontWeight:'bolder'}} >Clearning House Name</NavbarBrand>
  </Container>
</Navbar>
<Form className='m-3' onSubmit={formik.handleSubmit}>
  <Row>
    <Col md={3}>
      <FormGroup>
      <Label for='name'>Name <span style={{color:'red'}}>*</span></Label>
      <Input type='text' placeholder='Username' id='name' name='name' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} ></Input>
      </FormGroup>
      {formik.touched.name && formik.errors.name ? (
                <p style={{ color: 'red' }}>{formik.errors.name}</p>
              ) : null}
    </Col>
    <Col md={3}>
      <FormGroup>
      <Label for='name'>EDI Contact Name </Label>
      <Input type='text' placeholder='xxxxxxxxxx' id='edicontactname' name='edicontactname' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.edicontactname}></Input>
      </FormGroup>
      {formik.touched.edicontactname && formik.errors.edicontactname ? (<p style={{color:'red'}}>{formik.errors.edicontactname}:</p>):null}
    </Col>
    <Col md={3}>
      <FormGroup>
      <Label for='name'>EDI Contact Phone</Label>
      <Input type='text' placeholder='(708) 632- 5656' id='EDI Contact Phone' name='edicontactphone' readOnly></Input>
      </FormGroup>
      {/* {formik.touched.edicontactphone && formik.errors.edicontactphone ?(<p style={{color:'red'}}>{formik.errors.edicontactphone}</p>):null} */}
    </Col>
    <Col md={3}>
      <FormGroup>
      <Label for='name'>EDI Contact Fax</Label>
      <Input type='text' placeholder='(111) 111- 1101' id='EDI Contact Fax' name='edicontacttax'readOnly></Input>
      </FormGroup>
      {/* {formik.errors.edicontacttax && formik.touched.edicontacttax ?<p style={{color:'red'}}>{formik.errors.edicontacttax}</p>:null} */}
    </Col>
  </Row>

<Navbar style={{backgroundColor:'rgb(241, 237, 237)'}}>
  <Container fluid>
  <NavbarBrand href='/' style={{fontWeight:'bolder'}} >ISA Settings</NavbarBrand>
  </Container>
</Navbar>
  <Row>
  <Col>
      <FormGroup>
      <Label for='isa'>ISA 01</Label>
          <Input type="select" name="isa" id="isa" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.isa} toggle={toggle}>
            <option>00 - 00 No Authentication</option>
            <option>00 - 00 No Authentication 1</option>
            <option>00 - 00 No Authentication 2</option>
            <option>00 - 00 No Authentication 3</option>
            <option>00 - 00 No Authentication 4</option>
          </Input>
        </FormGroup>
        {formik.touched.isa && formik.errors.isa ?(<p style={{color:'red'}}>{formik.errors.isa}</p>):null}
    </Col>
    <Col>
      <FormGroup>
      <Label for='name'>User ID - ISA02</Label>
      <Input type='text' placeholder='xxxxxxxxx' id='userid' name='userid' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.userid}></Input>
      </FormGroup>
      {formik.touched.userid && formik.errors.userid ? (<p style={{color:'red'}}>{formik.errors.userid}</p>):null}
    </Col>
    <Col>
      <FormGroup>
      <Label for='name'>Password - ISA04</Label>
      <Input type='password' placeholder='xxxxxxxxxx' id='Password - ISA04' name='password' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password}></Input>
      </FormGroup>
      {formik.touched.password && formik.errors.password ? (<p style={{color:'red'}}>{formik.errors.password}</p>):null}
    </Col>
    <Col>
      <FormGroup>
      <Label for='name'>Submitter ID - ISA06</Label>
      <Input type='text' placeholder='xxxxxxxxx' id='Submitter ID - ISA06' name='submitterid' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.submitterid}></Input>
      </FormGroup>
      {formik.touched.submitterid && formik.errors.submitterid ? (<p style={{color:'red'}}>{formik.errors.submitterid}</p>):null}

    </Col>
    <Col>
      <FormGroup>
      <Label for='name'>Receiver ID - ISA08</Label>
      <Input type='text' placeholder='xxxxxxxxx' id='Receiver ID - ISA08' name='receiverid' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.receiverid}></Input>
      </FormGroup>
      {formik.touched.receiverid && formik.errors.receiverid ? (<p style={{color:'red'}}>{formik.errors.receiverid}</p>):null}

    </Col>
    <Col>
      <FormGroup>
      <Label for='name'>Ack Request ISA14</Label>
      <Input type='select' name='ackrequest' id='ackrequest' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.ackrequest} toggle={toggle}>
      <option> 0 - No Acknowledgement</option>
      <option> 0 - No Acknowledgement1</option>
      <option> 0 - No Acknowledgement2</option>
      <option> 0 - No Acknowledgement3</option>
 </Input>
      </FormGroup>
      {formik.touched.ackrequest && formik.errors.ackrequest ?(<p style={{color:'red'}}>{formik.errors.ackrequest}</p>):null}
    </Col>
    <Col>
      <FormGroup>
      <Label for='name'>Usage Indicator</Label>
      <Input type='select' name='usageindicator' id='usageindicator' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.usageindicator} toggle={toggle}>
<option>P - Production Data 1</option>
<option>P - Production Data 2</option>
<option>P - Production Data 3</option>
<option>P - Production Data 4</option>
</Input>
</FormGroup>
{formik.touched.usageindicator && formik.errors.usageindicator ? (<p style={{color:'red'}}>{formik.errors.usageindicator}</p>):null}
    </Col>
  </Row>
  <Row>
    <Col md={5}>
    <FormGroup>
    <Label>GS02 Application Sender's Code (In Most of the cases it is same as IS06)</Label>
    <Input type='text' placeholder='xxxxxxxxxx' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.gs02applicationsendercode} name='gs02applicationsendercode'></Input>
    </FormGroup>    
    {formik.touched.gs02applicationsendercode && formik.errors.gs02applicationsendercode ? (<p style={{color:'red'}}>{formik.errors.gs02applicationsendercode}</p>):null}
   </Col>
    <Col md={5}>
    <FormGroup>
    <Label>GS02 Application Receiver's Code (In Most of the cases it is same as IS06)</Label>
    <Input type='text' placeholder='xxxxxxxx' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.gs02applicationreceivercode} name='gs02applicationreceivercode'></Input>
    </FormGroup>
    {formik.touched.gs02applicationreceivercode && formik.errors.gs02applicationreceivercode ?(<p style={{color:'red'}}>{formik.errors.gs02applicationreceivercode}</p>):null}


    </Col>
    <Col>
    <FormGroup>
    <Label >Loop 1000A Submitter ID</Label>
    <Input type='text' placeholder='xxxxxxxxx' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.loopsubmitter} name='loopsubmitter'></Input>
    </FormGroup>
    {formik.touched.loopsubmitter && formik.errors.loopsubmitter ? (<p style={{color:'red'}}>{formik.errors.loopsubmitter}</p>):null}
    </Col>
  </Row>

<Navbar style={{backgroundColor:'rgb(241, 237, 237)'}}>
  <Container fluid>
    <NavbarBrand href='#services' style={{fontWeight:'bold'}}>Eligibility Web Services</NavbarBrand>
  </Container>
</Navbar>
  <Row>
    <Col>
    <FormGroup>
<Label for=''>User ID - ISA02</Label>
<Input type='text' placeholder='xxxxxxxx' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.useridweb} name='useridweb'></Input>
    </FormGroup>
    {formik.touched.useridweb && formik.errors.useridweb ? (<p style={{color:'red'}}>{formik.errors.useridweb}</p>):null}
    </Col>
    <Col>
    <FormGroup>
<Label for=''>Password - ISA04</Label>
<Input type='password' placeholder='xxxxxxxx' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.passwordweb} name='passwordweb'></Input>
    </FormGroup>
    {formik.touched.passwordweb && formik.errors.passwordweb ? (<p style={{color:'red'}}>{formik.errors.passwordweb}</p>):null}
    </Col>
    <Col>
    <FormGroup>
<Label for=''>Submitter ID - ISA06</Label>
<Input type='text' placeholder='xxxxxxxx' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.submitteridweb} name='submitteridweb'></Input>
    </FormGroup>
    {formik.touched.submitteridweb && formik.errors.submitteridweb ? (<p style={{color:'red'}}>{formik.errors.submitteridweb}</p>):null}
    </Col>
    <Col>
    <FormGroup>
<Label for=''>Receiver ID - ISA08</Label>
<Input type='text' placeholder='xxxxxxxx' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.receiveridweb} name='receiveridweb'></Input>
    </FormGroup>
    {formik.touched.receiveridweb && formik.errors.receiveridweb? (<p style={{color:'red'}}>{formik.errors.receiveridweb}</p>):null}
    </Col>
    <Col>
    <FormGroup>
<Label for='Provider NPI'>Provider NPI</Label>
<Input type='text' placeholder='100000200' name='providernpi'readOnly></Input>
    </FormGroup>
    {/* {formik.touched.providernpi && formik.errors.providernpi ? (<p style={{color:'red'}}>{formik.errors.providernpi}</p>):null} */}
    </Col>
  </Row>
  <Row>
    <Col md={5}>
    <FormGroup>
      <Label for='name'>Web Service URL</Label>
      <Input type='text' placeholder='xxxxxxxxx' id='webserviceurl' name='webserviceurl' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.webserviceurl}></Input>
      </FormGroup>
      {formik.touched.webserviceurl && formik.errors.webserviceurl ? (<p style={{color:'red'}}>{formik.errors.webserviceurl}</p>):null}
    </Col>
    <Col>
    <FormGroup>
    <Label for='Web Service User ID'>Web Service User ID
</Label>
    <Input type='text' placeholder='xxxxxxxxxxx' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.webserviceuserid} name='webserviceuserid'></Input>
    </FormGroup>
    {formik.touched.webserviceuserid && formik.errors.webserviceuserid ?(<p style={{color:'red'}}>{formik.errors.webserviceuserid}</p>):null}

    </Col>
    <Col>
    <FormGroup>
    <Label for='Web Service Password'>Web Service Password</Label>
    <Input type='password' placeholder='xxxxxxxxxxx' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.webservicepassword} name='webservicepassword'></Input>
    </FormGroup>
    {formik.touched.webservicepassword && formik.errors.webservicepassword ?(<p style={{color:'red'}}>{formik.errors.webservicepassword}</p>):null}

    </Col>
    <Col md={1}>
      <FormGroup>
    <Label for='Call Type'>Call Type</Label>
    <Input type='select' name='calltype' id='calltype' onChange={formik.handleChange} onBlur={formik.handleBlur} toggle={toggle}>
      <option>Rest</option>
      <option>Rest type 1</option>
      <option>Rest type 2</option>
      <option>Rest type 3</option>
      </Input>
    </FormGroup>
    {formik.touched.calltype && formik.errors.calltype ?(<p style={{color:'red'}}>{formik.errors.calltype}</p>):null}
    </Col>
  </Row>
  <Row>
    <Col md={5}>
      <FormGroup>
    <Label>GS02 Application Sender's Code (In Most of the cases it is same as IS06)</Label>
    <Input type='text' placeholder='Enter Zipcode' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.gs02applicationsendercodebatch} name='gs02applicationsendercodebatch'></Input>
    </FormGroup>    
    {formik.touched.gs02applicationsendercodebatch && formik.errors.gs02applicationsendercodebatch ? (<p style={{color:'red'}}>{formik.errors.gs02applicationsendercodebatch}</p>):null}

    </Col>
    <Col md={5}>
      <FormGroup>
    <Label>GS02 Application Receiver's Code (In Most of the cases it is same as IS06)</Label>
    <Input type='text' placeholder='Enter Zipcode' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.gs02applicationreceivercodebatch} name='gs02applicationreceivercodebatch'></Input>
    </FormGroup>
    {formik.touched.gs02applicationreceivercodebatch && formik.errors.gs02applicationreceivercodebatch ?(<p style={{color:'red'}}>{formik.errors.gs02applicationreceivercodebatch}</p>):null}

    </Col>
  </Row>

<Navbar style={{backgroundColor:'rgb(241, 237, 237)'}}>
  <NavbarBrand style={{fontWeight:'bold'}}>Batch Eligibility 270 Upload FTP</NavbarBrand>
</Navbar>
  <Row>
    <Col>
    <FormGroup>
    <Label>FTP Address</Label>
    <Input type='text' placeholder='xxxxxxxxx' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.ftpaddress} name='ftpaddress'></Input>
    </FormGroup>
    {formik.touched.ftpaddress && formik.errors.ftpaddress ?(<p style={{color:'red'}}>{formik.errors.ftpaddress}</p>):null}

    </Col>
    <Col>
    <FormGroup>
    <Label>User ID</Label>
    <Input type='text' placeholder='xxxxxxxxx' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.useridbatch} name='useridbatch'></Input>
    </FormGroup>
    {formik.touched.useridbatch && formik.errors.useridbatch ? (<p style={{color:'red'}}>{formik.errors.useridbatch}</p>):null}
    </Col>
    <Col>
    <FormGroup>
    <Label>Password</Label>
    <Input type='password' placeholder='xxxxxxxxx' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.passwordbatch} name='passwordbatch'></Input>
    </FormGroup>
    {formik.touched.passwordbatch && formik.errors.passwordbatch ? (<p style={{color:'red'}}>{formik.errors.passwordbatch}</p>):null}
</Col>
    <Col>
    <FormGroup>
    <Label>Type (FTP or SFTP)
</Label>
    <Input type='text' placeholder='xxxxxxxxx' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.type} name='type'></Input>
    </FormGroup>
    {formik.touched.type && formik.errors.type ? (<p style={{color:'red'}}>{formik.errors.type}</p>):null}

    </Col>
    <Col>
    <FormGroup>
    <Label>FTP Port</Label>
    <Input type='text' placeholder='100000200' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.ftpport} name='ftpport' readOnly></Input>
    </FormGroup>
    {/* {formik.touched.ftpport && formik.errors.ftpport ? (<p style={{color:'red'}}>{formik.errors.ftpport}</p>):null} */}

    </Col>
    <Col>
    <FormGroup>
    <Label>Submitter ID</Label>
    <Input type='text' placeholder='xxxxxxxxx' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.submitteridbatch} name='submitteridbatch'></Input>
    </FormGroup>
    {formik.touched.submitteridbatch && formik.errors.submitteridbatch ? (<p style={{color:'red'}}>{formik.errors.submitteridbatch}</p>):null}

    </Col>
    <Col>
    <FormGroup>
    <Label>Receiver ID</Label>
    <Input type='text' placeholder='xxxxxxxxx' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.receiveridbatch} name='receiveridbatch'></Input>
    </FormGroup>
    {formik.touched.receiveridbatch && formik.errors.receiveridbatch ? (<p style={{color:'red'}}>{formik.errors.receiveridbatch}</p>):null}

    </Col>
    <Col>
    <FormGroup>
    <Label>Provider API</Label>
    <Input type='text' placeholder='xxxxxxxxx' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.providerapi} name='providerapi'></Input>
    </FormGroup>
    {formik.touched.providerapi && formik.errors.providerapi ? (<p style={{color:'red'}}>{formik.errors.providerapi}</p>):null}

    </Col>
  </Row>
  <Row>
    <Col>
    <FormGroup>
    <Label>Folder Upload</Label>
    <Input type='file' placeholder='xxxxxxxx' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.folderup} name='folderup'></Input>
    </FormGroup>
    {formik.touched.folderup && formik.errors.folderup ? (<p style={{color:'red'}}>{formik.errors.folderup}</p>):null}

    </Col>
    <Col>
    <FormGroup>
    <Label>Folder Download</Label>
    <Input type='text' placeholder='Enter Zipcode' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.folderdown} name='folderdown'></Input>
    </FormGroup>
    {formik.touched.folderdown && formik.errors.folderdown ? (<p style={{color:'red'}}>{formik.errors.folderdown}</p>):null}

    </Col>
  </Row>
  <Button type='submit' disabled={formik.isSubmitting} style={{backgroundColor:'blueviolet'}} >Save</Button>
</Form>
    </div>
    
  );
};

export default Output;

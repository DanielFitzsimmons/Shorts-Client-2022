import React from 'react';
import Joi from 'joi';
import { joiResolver } from '@hookform/resolvers/joi'; //https://www.npmjs.com/package/@hookform/resolvers
import { useForm, Controller } from 'react-hook-form'; //https://react-hook-form.com/get-started#SchemaValidation

//Bootstrap
import * as Icon from 'react-bootstrap-icons';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//Services
import usersService from '../../services/usersService';
import authService from '../../services/authService';

//https://github.com/react-hook-form/react-hook-form/issues/127

function Register() {
  //Joi Validation
  const schema = Joi.object({
    firstName: Joi.string().alphanum().min(3).max(30),
    lastName: Joi.string().alphanum().min(3).max(30),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{5,30}$')),
    upload: Joi.custom(imageValidation, 'custom image validation')
  });

  //Custom Joi Validation - Profile image
  function imageValidation(file, helpers) {
    //Checks the file file type
    if (!(file.type === 'image/png' || file.type === 'image/jpeg')) {
      throw new Error('Wrong File Type! Please Upload JPEG or PNG');
    }
    //Checks the file size
    if (file.size > 1048576 * 10) {
      throw new Error('The file is to large');
    }
    // Return the value unchanged
    return file;
  }

  //control = allows us to us a UI library(React Bootstrap) with react-hook-form - https://react-hook-form.com/get-started#IntegratingControlledInputs
  //handleSubmit = This function has access to the form data and allows you to submit the form
  //setValue = allows you to change form element values. We used this to make sure we access the file. See handleChange
  //formState: { errors } = gives us access to the errors from the joi validation
  //resolver: joiResolver(schema) = allows us to set the validation module and schema - //https://www.npmjs.com/package/@hookform/resolvers
  //defaultValues = allows you to set default values for the form
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm({
    resolver: joiResolver(schema),
    defaultValues: {
      firstName: 'Marilou',
      lastName: 'Fisher',
      email: 'Marilou@Fisher.com',
      password: 'Marilou1234',
      upload: ''
    }
  });

  //Upload File
  //By default react-hook-form only returns the file path.
  //This allows us to make a custom handleChange to get the file and set the file as the value for upload
  const handleChange = (e) => {
    console.log(e.currentTarget.files[0]);
    setValue('upload', e.currentTarget.files[0]); // you get all the files object here
  };

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const { data: user } = await usersService.post(data);
      console.log(user);
      await authService.loginSaveToken(user.token);

      //This will redirect and refresh the home page
      window.location = '/';
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="mb-5">
      {/* Header*/}
      <Row className="pt-3 px-4">
        <Col xs={12}>
          <h2 className="mb-0">Register</h2>
        </Col>
        <Col xs={12}>
          <p className="text-muted">Please register to become a shorts member</p>
        </Col>
      </Row>
      {/* Header */}

      {/* Form Grid*/}
      <Row className="gx-0 mb-4 mx-3">
        <Col xs={12}>
          <form noValidate="noValidate" onSubmit={handleSubmit(onSubmit)}>
            <Row>
              {/* First Name */}
              <Col lg={4}>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">First Name</InputGroup.Text>
                  {/* The Controller allows you to use UI libraries like react bootstrap */}
                  {/* ...field passes a ref to all the data the input element needs from react-hook-form */}
                  <Controller
                    name="firstName"
                    control={control}
                    render={({ field }) => (
                      <FormControl
                        {...field}
                        placeholder="first name"
                        aria-label="first name"
                        aria-describedby="first name"
                      />
                    )}
                  />
                </InputGroup>
                {/* errors.firstName?.message = Allows us to access the error messages */}
                <p className="text-danger">{errors.firstName?.message}</p>
              </Col>
              {/* First Name */}

              {/* Last Name */}
              <Col lg={4}>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">Last Name</InputGroup.Text>
                  <Controller
                    name="lastName"
                    control={control}
                    render={({ field }) => (
                      <FormControl
                        {...field}
                        placeholder="last name"
                        aria-label="last name"
                        aria-describedby="last name"
                      />
                    )}
                  />
                </InputGroup>
                <p className="text-danger">{errors.lastName?.message}</p>
              </Col>
              {/* Last Name */}

              {/* Email */}
              <Col lg={4}>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <FormControl
                        {...field}
                        placeholder="email"
                        aria-label="email"
                        aria-describedby="email"
                      />
                    )}
                  />
                </InputGroup>
                <p className="text-danger">{errors.email?.message}</p>
              </Col>
              {/* Email */}

              {/* Password */}
              <Col lg={4}>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">Password</InputGroup.Text>
                  <Controller
                    name="password"
                    control={control}
                    render={({ field }) => (
                      <FormControl
                        {...field}
                        placeholder="password"
                        type="password"
                        aria-label="password"
                        aria-describedby="password"
                      />
                    )}
                  />
                </InputGroup>
                <p className="text-danger">{errors.password?.message}</p>
              </Col>
              {/* Password */}

              {/* Upload */}
              <Col lg={4}>
                <Form.Group controlId="formFile" className="mb-3">
                  <Controller
                    name="upload"
                    control={control}
                    render={({ field }) => <Form.Control type="file" onChange={handleChange} />}
                  />
                </Form.Group>
                <p className="text-danger">{errors.upload?.message}</p>
              </Col>
              {/* Upload */}

              <Button type="submit" variant="primary" className="w-100 m-0">
                Submit <Icon.ArrowRightCircle className="icon sm-icon-l1 mx-2" />
              </Button>
            </Row>
          </form>
        </Col>
        {/* Card */}
        {/* /Card */}
      </Row>
      {/* /Form Grid*/}
    </Container>
  );
}

export default Register;

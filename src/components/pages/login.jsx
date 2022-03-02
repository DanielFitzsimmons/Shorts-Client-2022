import React from 'react';
import Joi from 'joi'
import { joiResolver } from '@hookform/resolvers/joi'
import { useForm, Controller } from 'react-hook-form'

//Services
import authService from '../../services/authService'

//Bootstrap
import * as Icon from 'react-bootstrap-icons';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

const Login = () => {

    const schema = Joi.object({
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
    })

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: joiResolver(schema),
        defaultValues: {
            email: 'Marilou@Fisher.com',
            password: 'Marilou1234'
        }
    })

    const onSubmit = async (data) => {
        console.log(data);
        try {
            await authService.login(data);
            window.location = '/';
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Container className="mb-5">
            {/* Page Header */}
            <Row className="pt-3 px-4">
                <h2 className="col-12 mb-0">Login</h2>
                <p className="col-12 text-muted">Please login to add and edit shortcuts</p>
            </Row>
            {/* /Page Header */}

            <form onSubmit={handleSubmit(onSubmit)} id="loginForm" noValidate>
                <Row className="row gx-0 mx-3">
                    {/* Email */}
                    <Col lg={6}>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
                            <Controller
                                name="email"
                                control={control}
                                render={({ field }) => <FormControl {...field} placeholder="email" aria-label="email" aria-describedby="email" />}
                            />
                        </InputGroup>
                        <p className="text-danger">{errors.email?.message}</p>
                    </Col>
                    {/* Email */}

                    {/* Password */}
                    <Col lg={6}>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">Password</InputGroup.Text>
                            <Controller
                                name="password"
                                control={control}
                                render={({ field }) => <FormControl {...field} placeholder="password" type="password" aria-label="password" aria-describedby="password" />}
                            />
                        </InputGroup>
                        <p className="text-danger">{errors.password?.message}</p>
                    </Col>
                    {/* Password */}
                </Row>
                {/* Submit */}
                <Button type="submit" variant="primary" className="w-100">Submit <Icon.ArrowRightCircle className="icon sm-icon-l1 mx-2" /></Button>
                {/* /Submit */}
            </form>

        </Container >

    );
};
export default Login;

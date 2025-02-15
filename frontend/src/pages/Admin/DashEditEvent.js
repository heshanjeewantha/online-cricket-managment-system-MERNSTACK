import { Box, MenuItem, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux'
import { eventTypeLoadAction } from '../../redux/actions/eventTypeAction';
import { editSingleEventAction, eventLoadSingleAction } from '../../redux/actions/eventAction';
import { useNavigate, useParams } from 'react-router-dom';
import { EDIT_EVENT_RESET } from '../../redux/constant/eventconstant';



const validationSchema = yup.object({
    title: yup
        .string('Enter a event title')
        .required('title is required'),
    description: yup
        .string('Enter a description')
        .min(6, 'Description should be of minimum 6 characters length')
        .required('Description is required'),
   
    location: yup
        .string('Enter a location')
        .required('Location is required'),
    available: yup
        .boolean('Add availability')
        .required('availability is required'),
    eventType: yup
        .string('Enter a Category')
        .required('Category is required'),
});


const DashEditEvent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();

    //Event type
    useEffect(() => {
        dispatch(eventTypeLoadAction());
        if (id) {
            dispatch(eventLoadSingleAction(id));
        }
    }, [id]);


    const { eventType } = useSelector(state => state.eventTypeAll);
    const { singleEvent, loading } = useSelector(state => state.singleEvent);
    const { success } = useSelector(state => state.updateEvent);

    const formik = useFormik({
        initialValues: {
            _id: singleEvent?._id,
            title: singleEvent?.title,
            description: singleEvent?.description,
           
            location: singleEvent?.location,
            available: singleEvent?.available,
            eventType: singleEvent?.eventType?._id,
        },
        validationSchema: validationSchema,
        enableReinitialize: true,
        onSubmit: (values, actions) => {
            dispatch(editSingleEventAction(values))
            // alert(JSON.stringify(values, null, 2));
            actions.resetForm();
        },
    });


    //redirect after successfull update
    useEffect(() => {
        if (success && success === true) {
            setTimeout(() => {
                dispatch({ type: EDIT_EVENT_RESET })
                navigate('/admin/events');
            }, 800)
        }
    }, [success && success]);



    return (
        <>

            <Box sx={{ height: '100%', display: "flex", alignItems: "center", justifyContent: "center", pt: 4 }}>


                <Box onSubmit={formik.handleSubmit} component="form" className='form_style border-style' >
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
                        <Typography variant="h5" component="h2" sx={{ pb: 3 }}>
                            Edit Event
                        </Typography>
                        <TextField sx={{ mb: 3 }}
                            fullWidth
                            id="title"
                            label="Title"
                            name='title'
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="Title"
                            value={formik.values.title}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.title && Boolean(formik.errors.title)}
                            helperText={formik.touched.title && formik.errors.title}
                        />
                        <TextField sx={{ mb: 3 }}
                            fullWidth
                            id="description"
                            name="description"
                            label="Description"
                            type="text"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="Description"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.description && Boolean(formik.errors.description)}
                            helperText={formik.touched.description && formik.errors.description}
                        />
                       
                        <TextField sx={{ mb: 3 }}
                            fullWidth
                            id="location"
                            name="location"
                            label="Location"
                            type="text"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="Location"
                            value={formik.values.location}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.location && Boolean(formik.errors.location)}
                            helperText={formik.touched.location && formik.errors.location}
                        />

                        <TextField sx={{ mb: 3 }}
                            fullWidth
                            id="available"
                            name="available"
                            label="Available"
                            type="text"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="Location"
                            value={formik.values.available}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.available && Boolean(formik.errors.available)}
                            helperText={formik.touched.available && formik.errors.available}
                        />

                        <TextField sx={{ mb: 3 }}
                            fullWidth
                            className="px-2 my-2"
                            variant="outlined"
                            name="eventType"
                            id="eventType"
                            select
                            label="Category"
                            value={formik.values.eventType}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.eventType && Boolean(formik.errors.eventType)}
                            helperText={formik.touched.eventType && formik.errors.eventType}
                        >
                            <MenuItem key={""} value={""}>

                            </MenuItem>

                            {eventType && eventType.map((cat) => (
                                <MenuItem key={cat._id} value={cat._id}>
                                    {cat.eventTypeName}
                                </MenuItem>
                            ))}
                        </TextField>

                        <Button fullWidth variant="contained" type='submit' >Edit event</Button>
                    </Box>
                </Box>
            </Box>

        </>
    )
}

export default DashEditEvent
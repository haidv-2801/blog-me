import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/Store';
import Form from '../components/pages/contact/Form';
import Contact from '../models/Contact'
import { addContact } from '../store/slices/ContactSlice';

const ContactPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const selector = useSelector((state: RootState) => state.contact);

    const onSubmitHandler = async (data:any) => {
        const contact = new Contact(data.name, data.email, data.message);
        await dispatch(addContact(contact));
        if(!selector.isLoading) {
            alert("Send successfully!")
        }
    }

    return (
       <Form isLoading={selector.isLoading} onSubmit={onSubmitHandler}/>
    );
};

export default ContactPage;
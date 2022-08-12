import React, { useEffect, useState } from 'react';
import {
    randomId,
    RadioGroup,
    Input,
    Button,
    Modal,
    useForm,
    useStepper,
    FormStepper,
} from 'react-facebook-ui';

function FormStepperExample({}) {
    const mForm1 = useForm();
    const mForm2 = useForm();
    const mForm3 = useForm();

    const stepper = useStepper();
    const [isOpen, set_isOpen] = useState(false);

    const pages = [
        {
            title: 'Animal Form',
            Component: <Form1 mForm={mForm1} />,
        submit: {
        // color:"amber",
        disabled: !mForm1.valid,
            onClick: () => {
            stepper.stepTo(stepper.page + 1);
        },
    },
},
    mForm1.value.radios === 'yes' && {
        title: 'Animal Choice',
        Component: <Form2 mForm={mForm2} />,
    submit: {
        disabled: !mForm2.valid,
            onClick: () => {
            stepper.stepTo(stepper.page + 1);
        },
    },
},
    {
        title: 'Tell us why',
            Component: <Form3 mForm={mForm3} />,
        submit: {
            children: 'Done',
                disabled: !mForm3.valid,
                onClick: () => {
                console.log(JSON.stringify(mForm1, null, 2));
                console.log(JSON.stringify(mForm2, null, 2));
                console.log(JSON.stringify(mForm3, null, 2));
                set_isOpen(false);
            },
        },
    },
];

    const ToggleSheet = () => {
        console.log(JSON.stringify(mForm1, null, 2));
        console.log(JSON.stringify(mForm2, null, 2));
        console.log(JSON.stringify(mForm3, null, 2));
        set_isOpen((old) => !old);
    };
    return (
        <>
        <Button color="blue" onClick={ToggleSheet}>
        Open Form
    </Button>
    <Modal showState={[isOpen, set_isOpen]} header={'This is a Form Stepper'}>
        <FormStepper color={'primary'} stepperHook={stepper} pages={pages} />
    </Modal>
    </>
);
}
const Form1 = ({ mForm }) => {
    const [radiosList, set_radiosList] = useState([]);
    useEffect(() => {
        set_radiosList([
            {
                id: randomId(6),
                value: 'yes',
                label: 'Yes',
            },
            {
                id: randomId(6),
                value: 'no',
                label: 'No',
            },
        ]);
    }, []);
    return (
        <>
        <p>Do you love animals ?</p>
    <RadioGroup
    required
    disabled={mForm.value.switch}
    radios={radiosList}
    form={mForm}
    formName="radios"
        />
        </>
);
};
const Form2 = ({ mForm }) => {
    const [radiosList, set_radiosList] = useState([]);
    useEffect(() => {
        mForm.setValue('animals', 'horses');
    }, []);
    useEffect(() => {
        set_radiosList([
            {
                id: randomId(6),
                value: 'cats',
                label: 'Cats',
                checked: true,
            },
            {
                id: randomId(6),
                value: 'dogs',
                label: 'Dogs',
            },
            {
                id: randomId(6),
                value: 'rabbits',
                label: 'Rabbits',
            },
            {
                id: randomId(6),
                value: 'horses',
                label: 'Horses',
            },
        ]);
    }, []);
    return (
        <div className="d-flex flex-column">
        <RadioGroup
    required
    disabled={mForm.value.switch}
    radios={radiosList}
    form={mForm}
    formName="animals"
        />
        </div>
);
};
const Form3 = ({ mForm }) => {
    return (
        <div className="d-flex flex-column">
        <Input
    disabled={mForm.value.switch}
    required
    type="text"
    form={mForm}
    formName="name"
    placeholder={'just like that...'}
    />
    </div>
);
};
export default FormStepperExample;

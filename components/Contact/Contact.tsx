import React, { ChangeEvent, FormEvent, useState } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaCodepen } from 'react-icons/fa6';
import { SiCodesandbox } from 'react-icons/si';

const nsBase = 'component';
const ns = `${nsBase}-contact`;

const Contact = () => {
  const rootClassnames = classNames({
    [`${ns}`]: true
  });

  const [contactState, setContactState] = useState({
    form: '',
    formShow: true,
    formName: '',
    formEmail: '',
    formPhone: '',
    formCompany: '',
    formMessage: '',
    formResponse: '',
    formPitfall: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      e.target.classList.add('has-text');
    } else {
      e.target.classList.remove('has-text');
    }

    setContactState((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value
      };
    });
  };

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!contactState.formPitfall) {
      const data = {
        name: contactState.formName,
        email: contactState.formEmail,
        phone: contactState.formPhone,
        company: contactState.formCompany,
        message: contactState.formMessage,
        url: window.location.href
      };
      // console.log(data);

      fetch('https://api.justinbond.dev/contact-form/index.php', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      })
        .then((res) => {
          return res.json();
        })
        .catch((error) => {
          console.error('Error:', error); // eslint-disable-line no-console
        })
        .then((response) => {
          // console.log('Success:', response);
          if (response.status === 1) {
            setContactState((prevState) => {
              return {
                ...prevState,
                formResponse: 'accepted',
                formShow: false
              };
            });
          } else {
            setContactState((prevState) => {
              return { ...prevState, formResponse: response.error };
            });
          }
        });
    }

    return null;
  };

  const getFormResponse = () => {
    const { formResponse } = contactState;
    let response = null;

    if (formResponse === 'accepted') {
      response = (
        <div>
          Thank you for reaching out. I will be in touch as soon as possible.
        </div>
      );
    } else if (formResponse === '') {
      response = <div>{formResponse}</div>;
    } else {
      response = '';
    }

    return response;
  };

  const formShow = contactState.formShow ? '' : 'collapse';
  return (
    <div id={'contact'} className={rootClassnames}>
      <div className={`${ns}--form__container`}>
        <div className={`${ns}--form__title`}>Lets Talk</div>
        <form
          className={`${ns}--form ${formShow}`}
          onSubmit={(e) => {
            submitForm(e);
          }}
        >
          <div className={`${ns}--form__name`}>
            <label htmlFor={'name'}>
              Your Name*
              <input
                onChange={(e) => {
                  handleChange(e);
                }}
                type={'text'}
                name={'formName'}
                id={'name'}
                required
              />
            </label>
          </div>
          <div className={`${ns}--form__email`}>
            <label htmlFor={'email'}>
              Email Address*
              <input
                onChange={(e) => {
                  handleChange(e);
                }}
                type={'email'}
                name={'formEmail'}
                id={'email'}
                required
              />
            </label>
          </div>
          <div className={`${ns}--form__phone`}>
            <label htmlFor={'phone'}>
              Phone*
              <input
                onChange={(e) => {
                  handleChange(e);
                }}
                type={'tel'}
                name={'formPhone'}
                id={'phone'}
                required
              />
            </label>
          </div>
          <div className={`${ns}--form__company`}>
            <label htmlFor={'company'}>
              Company
              <input
                onChange={(e) => {
                  handleChange(e);
                }}
                type={'text'}
                name={'formCompany'}
                id={'company'}
              />
            </label>
          </div>
          <div className={`${ns}--form__message`}>
            <label htmlFor={'message'}>
              Message*
              <input
                onChange={(e) => {
                  handleChange(e);
                }}
                type={'text'}
                name={'formMessage'}
                id={'message'}
                required
              />
            </label>
          </div>
          <div className={`${ns}--form__pitfall`}>
            <label htmlFor={'pitfall'}>
              <input
                onChange={(e) => {
                  handleChange(e);
                }}
                type={'text'}
                name={'formPitfall'}
                id={'pitfall'}
              />
            </label>
          </div>
          <div className={`${ns}--form__submit`}>
            <button type={'submit'}>Submit Message</button>
          </div>
        </form>
        {getFormResponse()}
      </div>
      <div className={`${ns}--social`}>
        <div>Follow Me On</div>
        <div className={`${ns}--social__icons`}>
          <Link
            href={'https://www.linkedin.com/in/justinbond909/'}
            target={'_blank'}
          >
            <FaLinkedin />
          </Link>
          <Link href={'https://github.com/justin-bond'} target={'_blank'}>
            <FaGithub />
          </Link>
          <Link href={'https://codepen.io/justin-bond'} target={'_blank'}>
            <FaCodepen />
          </Link>
          <Link href={'https://codesandbox.io/u/justin-bond'} target={'_blank'}>
            <SiCodesandbox />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;

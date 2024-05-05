import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';

export const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSending, setIsSending] = useState(false);
    const nameInput = useRef(null);
    const emailInput = useRef(null);
    const messageInput = useRef(null);

    function sendEmail(e) {
        e.preventDefault();

        if (name === '' || email === '' || message === '') {
            alert('Preencha todos os campos');
            return;
        }

        setIsSending(true); 

        const templateParams = {
            from_name: name,
            message: message,
            email: email
        }
        emailjs.send("service_8m48wwm", "template_5qjf03p", templateParams, "XUMrLYGY33XfL1lin")
        .then((response) => {
            console.log("Email enviado", response.status, response.text);
            notifySuccess();
            setName('');
            setEmail('');
            setMessage('');
        })
        .catch((error) => {
            console.log("Erro: ", error);
            notifyError('Falha ao enviar e-mail. Por favor, tente novamente mais tarde.');
        })
        .finally(() => {
            setIsSending(false);
        });
    }

    const notifyError = (message) => toast.error(message);
    const notifySuccess = () => toast.success('E-mail enviado com sucesso!');

    return (
        <section className="py-4" id="contato">
            <div className="container py-4">
                <h2 className="text-md lined mb-5" style={{fontWeight: 'bold'}}>Contact</h2>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="col-lg-12" style={{marginBottom: '20px'}}>
                            <div className="info">
                                <div className="address"> 
                                    <i className="fas fa-map-marker-alt"></i>
                                    <h4>
                                    <font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit', fontWeight: 'bold'}}>Localização:</font></font>
                                    </h4>
                                    <p>
                                    <font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Vila Cachoeirinha - Dourados / MS</font></font>
                                    </p>
                                </div>
                                <div className="email"> 
                                    <i className="far fa-envelope"></i>
                                    <h4>
                                    <font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit', fontWeight: 'bold'}}>E-mail:</font></font>
                                    </h4>
                                    <p>
                                    <font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>pedro.hmota.goncalves@gmail.com</font></font>
                                    </p>
                                </div>
                                <div className="phone"> 
                                    <i className="fas fa-mobile-alt"></i>
                                    <h4>
                                    <font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit', fontWeight: 'bold'}}>Telefone:</font></font>
                                    </h4>
                                    <p>
                                    <font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>+55 (67) 99847-6824</font></font>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <form id="contact-form" className="contact-form form" onSubmit={sendEmail}>
                            <div className="row">
                                <div className="form-group col-lg-12">
                                    <label htmlFor="name" className="font-weight-normal first-name">Seu nome *</label>
                                    <input ref={nameInput} id="name" type="text" placeholder="Digite o seu nome" required className="form-control input" onChange={(e) => setName(e.target.value)} value={name} style={{marginTop: '10px'}}/>
                                </div>
                                <div className="form-group col-lg-12">
                                    <label htmlFor="email" className="font-weight-normal" style={{marginTop: '15px'}}>Seu e-mail *</label>
                                    <input ref={emailInput} id="email" type="email" placeholder="Digite seu e-mail" required className="form-control input" onChange={(e) => setEmail(e.target.value)} value={email} style={{marginTop: '10px'}}/>
                                </div>
                                <div className="form-group col-lg-12">
                                    <label htmlFor="message" className="font-weight-normal" style={{marginTop: '15px'}}>Sua mensagem para mim *</label>
                                    <textarea ref={messageInput} id="message" rows="4" placeholder="Digite sua mensagem" required className="form-control textarea" onChange={(e) => setMessage(e.target.value)} value={message} style={{marginTop: '10px'}}></textarea>
                                </div>
                                <div className="form-group col-lg-12" style={{marginTop: '20px'}}>
                                    <button type="submit" className="btn btn-block border-radius-none" value="Enviar" disabled={isSending}>
                                        {isSending ? 'Enviando...' : 'Enviar Mensagem'}
                                    </button>
                                    <ToastContainer />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
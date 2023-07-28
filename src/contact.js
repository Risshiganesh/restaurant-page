
function createContactElements () {

    const contentDisplayDiv = document.querySelector('.content-display');

        const contactContentDiv = document.createElement('div');
        contactContentDiv.classList.add('contact-content');
        contentDisplayDiv.appendChild(contactContentDiv);

            const contactHeaderDiv = document.createElement('div');
            contactHeaderDiv.classList.add('contact-header');
            contactContentDiv.appendChild(contactHeaderDiv);

                const contactHeader = document.createElement('h1');
                contactHeader.textContent = 'Contact us';
                contactHeaderDiv.appendChild(contactHeader);


            const contactFormDiv = document.createElement('div');
            contactFormDiv.classList.add('contact-form-container');
            contactContentDiv.appendChild(contactFormDiv);

                const detailsContainerDiv = document.createElement('div');
                detailsContainerDiv.classList.add('details-container');
                contactFormDiv.appendChild(detailsContainerDiv);

                const detailArray = [{subject:"Address:", detail:"No. 54 Jalan Penerbit U1/43 Off Jalan Glenmarie Temasya Industrial Park Batu 3"},{subject:"Phone:", detail:"+000000000"},{subject:"Email:",detail:"email@email.com"}]

                for (let index = 0; index < 3; index++) {
                    
                    const detailsDiv = document.createElement('div');
                    detailsDiv.classList.add('details');
                    detailsContainerDiv.appendChild(detailsDiv);

                        // Get them as nodelist later and append details 
                        const contactIconDiv = document.createElement('div');
                        contactIconDiv.classList.add('contact-icon');
                        detailsDiv.appendChild(contactIconDiv);

                        const contactSubjectDiv = document.createElement('div');
                        contactSubjectDiv.classList.add('contact-subject');
                        contactSubjectDiv.textContent = detailArray[index].subject;
                        detailsDiv.appendChild(contactSubjectDiv);

                        const contactDetailDiv = document.createElement('div');
                        contactDetailDiv.classList.add('contact-detail');
                        detailsDiv.appendChild(contactDetailDiv);

                            const detailLink = document.createElement('a');
                            detailLink.setAttribute('href','')
                            detailLink.textContent = detailArray[index].detail;
                            contactDetailDiv.appendChild(detailLink);
                    
                }
            
            const form = document.createElement('form');
            contactContentDiv.appendChild(form);
                
                const fieldset = document.createElement('fieldset');
                form.appendChild(fieldset);

                    const legend = document.createElement('legend');
                    legend.textContent = 'Get in touch with us';
                    fieldset.appendChild(legend);

                    const formContainer = document.createElement('div');
                    formContainer.classList.add('form-container');
                    fieldset.appendChild(formContainer);


                        const inputName = document.createElement('input');
                        inputName.setAttribute('type','text');
                        inputName.setAttribute('placeholder',"Name");
                        inputName.setAttribute('required','');
                        
                        const inputEmail = document.createElement('input');
                        inputEmail.setAttribute('type','email');
                        inputEmail.setAttribute('placeholder',"Email");
                        inputEmail.setAttribute('required','');
                        
                        const inputSubject = document.createElement('input');
                        inputSubject.setAttribute('type','text');
                        inputSubject.setAttribute('placeholder',"Name");
                        inputSubject.setAttribute('required','');
                        
                        const inputArray = [inputName,inputEmail,inputSubject];


                            for (let index = 0; index < inputArray.length; index++) {
                                
                                const inputContainer = document.createElement('div');
                                inputContainer.classList.add('input-container');
                                formContainer.appendChild(inputContainer);

                                inputContainer.appendChild(inputArray[index]);

                                
                            }

                        const textAreaDiv = document.createElement('div');
                        textAreaDiv.classList.add('text-container');
                        formContainer.appendChild(textAreaDiv);

                            const textArea = document.createElement('textarea');
                            textArea.setAttribute('placeholder','Message');
                            textAreaDiv.appendChild(textArea);

                        const submitButton = document.createElement('button');
                        submitButton.setAttribute('type','submit');
                        submitButton.classList.add('submit-btn');
                        submitButton.textContent = 'SUBMIT';
                        formContainer.appendChild(submitButton);

    
}








export default createContactElements;
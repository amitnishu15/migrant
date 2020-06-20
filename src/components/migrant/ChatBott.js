import React from 'react';
import ChatBot from 'react-simple-chatbot';

function ChatBott() {
    const config = {
        width: "300px",
        height: "400px",
        floating: true
    };
    return (
        <div>
            <ChatBot {...config}
                //headerTitle="Speech Synthesis"
                //speechSynthesis={{ enable: true, lang: 'en' }}
                steps={[
                    {
                        id: '1',
                        message: 'What is your name?',
                        trigger: '2',
                    },
                    {
                        id: '2',
                        user: true,
                        trigger: '3',
                    },
                    {
                        id: '3',
                        message: 'Hi {previousValue}, What is your Phone number?',
                        trigger: '4',
                    },
                    {
                        id: '4',
                        user: true,
                        validator: (value) => {
                            if (isNaN(value)) {
                                return 'Value should be a number';
                            }
                            if (value.length != 10) {
                                return 'Please enter a valid number';
                            }
                            return true;
                        },
                        trigger: 5,
                    },
                    {
                        id: '5',
                        message: 'Thankyou! We will contact you soon.',
                        end: true,
                    },
                ]}
            />
        </div>
    )
}

export default ChatBott;
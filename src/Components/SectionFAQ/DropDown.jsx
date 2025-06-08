import { useState } from "react";
import "./dropDown.css";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const faqs = [
    {
        question: "What is Halper?",
        answer:
            "Halper is an AI-powered manager designed to help businesses automate customer interactions, manage appointments, and optimize daily operations. It connects with your existing tools, ensuring smooth communication and efficient workflow management. With Halper, you can reduce manual tasks, improve response times, and focus on growing your business.",
    },
    {
        question: "Who is Halper for?",
        answer:
            "Halper is ideal for small and medium-sized businesses across various industries, including beauty & wellness, home services, fitness, coaching, and digital services. Whether you are a solo entrepreneur, a growing company, or a team managing multiple client interactions, Halper streamlines your processes and improves customer engagement.",
    },
    {
        question: "How does Halper work?",
        answer:
            "Halper connects to your preferred business tools, such as Instagram, WhatsApp, Telegram, Messenger, and Google Calendar, to automate communication and scheduling. It can instantly respond to customer inquiries, manage bookings, send reminders, and even follow up with leads. By learning your workflow, Halper ensures that all interactions align with how you like to communicate with your clients, making automation feel natural and personalized.",
    },
    {
        question: "What tasks can Halper automate?",
        answer:
            `Halper can:
- Respond to customer messages instantly across multiple platforms
- Schedule, reschedule, and manage appointments automatically
- Send reminders and follow-ups to clients, reducing no-shows
- Generate and send invoices for completed services
- Provide business insights and analytics to help you make data-driven decisions
- Keep track of customer notes and previous interactions to personalize future conversations`,
    },
    {
        question: "Can I customize Halper’s responses and workflows?",
        answer:
            "Yes! Halper is fully customizable to match your communication style, service offerings, and business workflow. You can adjust automated responses, appointment booking preferences, and follow-up messages to ensure a seamless experience for both you and your customers.",
    },
    {
        question: "Can Halper send bulk messages to re-engage customers?",
        answer:
            "Yes! Halper allows you to broadcast messages to your existing clients to keep them engaged. You can use this feature to share promotions, reminders, updates, or special offers to boost customer retention and maximize business opportunities.",
    },
    {
        question: "Does Halper provide a unified platform for managing customer interactions?",
        answer:
            "Yes, Halper consolidates all customer interactions in one place, giving you a complete overview of your communication history. This makes it easier to manage responses, track customer activity, and provide better service without switching between different apps or platforms.",
    },
    {
        question: "How do I start with Halper?",
        answer:
            "Getting started is simple. Sign up for an account in application or connect your Instagram Business and other relevant platforms, and complete the quick onboarding process. Halper will guide you through setting up your preferences, so it operates in a way that best suits your business needs.",
    },
    {
        question: "Can Halper integrate with my existing business tools?",
        answer:
            "Yes! Halper integrates seamlessly with Instagram Business, Google Calendar and other essential business tools. These integrations allow it to synchronize your appointments, messages, and workflows without disrupting your current systems.",
    },
    {
        question: "Can Halper handle multiple team members?",
        answer:
            "Yes, Halper can manage interactions for multiple team members, ensuring smooth communication across your business. You can assign roles, track conversations, and allow different team members to access relevant customer interactions based on their responsibilities.",
    },
];

export default function DropDown() {
    const [openIndexes, setOpenIndexes] = useState([]);

    const toggle = (index) => {
        setOpenIndexes((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };

    const leftColumn = faqs.slice(0, 5);
    const rightColumn = faqs.slice(5, 10);

    const renderItem = (item, index) => {
        const isOpen = openIndexes.includes(index);
        return (
            <div className="faq-item" key={index} onClick={() => toggle(index)}>
                <div className="faq-title">
                    <span>{item.question}</span>
                    <span className="faq-icon">
                        {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </span>
                </div>
                <div className={`faq-answer-wrapper ${isOpen ? "open" : ""}`}>
                    <div className="faq-answer">
                        {item.answer.split('\n').map((line, i) => (
                            <div key={i}>{line}</div>
                        ))}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="faq-container">
            <div className="faq-column">
                {leftColumn.map((item, index) => renderItem(item, index))}
            </div>
            <div className="faq-column">
                {rightColumn.map((item, index) => renderItem(item, index + 5))}
            </div>
        </div>
    );
}

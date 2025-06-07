import { useState } from "react";
import "./dropDown.css";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const faqs = [
    {
        question: "What is Halper?",
        answer:
            "Halper connects to your preferred business tools, such as WhatsApp, Instagram, and Google Calendar, to automate communication and scheduling. It can instantly respond to customer inquiries, manage bookings, send reminders, and even follow up with leads. By learning your workflow, Halper ensures that all interactions align with how you like to communicate with your clients, making automation feel natural and personalized.",
    },
    {
        question: "Who is Halper for?",
        answer:
            "Halper connects to your preferred business tools, such as WhatsApp, Instagram, and Google Calendar, to automate communication and scheduling. It can instantly respond to customer inquiries, manage bookings, send reminders, and even follow up with leads. By learning your workflow, Halper ensures that all interactions align with how you like to communicate with your clients, making automation feel natural and personalized.",
    },
    {
        question: "How does Halper work??",
        answer:
            "Halper connects to your preferred business tools, such as WhatsApp, Instagram, and Google Calendar, to automate communication and scheduling. It can instantly respond to customer inquiries, manage bookings, send reminders, and even follow up with leads. By learning your workflow, Halper ensures that all interactions align with how you like to communicate with your clients, making automation feel natural and personalized.",
    },
    {
        question: "What tasks can Halper automate??",
        answer:
            "Halper connects to your preferred business tools, such as WhatsApp, Instagram, and Google Calendar, to automate communication and scheduling. It can instantly respond to customer inquiries, manage bookings, send reminders, and even follow up with leads. By learning your workflow, Halper ensures that all interactions align with how you like to communicate with your clients, making automation feel natural and personalized.",
    },
    {
        question: "Can I customize Halper’s responses and workflows?",
        answer:
            "Halper connects to your preferred business tools, such as WhatsApp, Instagram, and Google Calendar, to automate communication and scheduling. It can instantly respond to customer inquiries, manage bookings, send reminders, and even follow up with leads. By learning your workflow, Halper ensures that all interactions align with how you like to communicate with your clients, making automation feel natural and personalized.",
    },
    {
        question: "Can Halper send bulk messages to re-engage customers?",
        answer:
            "Halper connects to your preferred business tools, such as WhatsApp, Instagram, and Google Calendar, to automate communication and scheduling. It can instantly respond to customer inquiries, manage bookings, send reminders, and even follow up with leads. By learning your workflow, Halper ensures that all interactions align with how you like to communicate with your clients, making automation feel natural and personalized.",
    },
    {
        question: "Does Halper provide a unified platform for managing customer interactions?",
        answer:
            "Halper connects to your preferred business tools, such as WhatsApp, Instagram, and Google Calendar, to automate communication and scheduling. It can instantly respond to customer inquiries, manage bookings, send reminders, and even follow up with leads. By learning your workflow, Halper ensures that all interactions align with how you like to communicate with your clients, making automation feel natural and personalized.",
    },
    {
        question: "How do I start with Halper?",
        answer:
            "Halper connects to your preferred business tools, such as WhatsApp, Instagram, and Google Calendar, to automate communication and scheduling. It can instantly respond to customer inquiries, manage bookings, send reminders, and even follow up with leads. By learning your workflow, Halper ensures that all interactions align with how you like to communicate with your clients, making automation feel natural and personalized.",
    },
    {
        question: "Can Halper integrate with my existing business tools?",
        answer:
            "Halper connects to your preferred business tools, such as WhatsApp, Instagram, and Google Calendar, to automate communication and scheduling. It can instantly respond to customer inquiries, manage bookings, send reminders, and even follow up with leads. By learning your workflow, Halper ensures that all interactions align with how you like to communicate with your clients, making automation feel natural and personalized.",
    },
    {
        question: "Can Halper handle multiple team members?",
        answer:
            "Halper connects to your preferred business tools, such as WhatsApp, Instagram, and Google Calendar, to automate communication and scheduling. It can instantly respond to customer inquiries, manage bookings, send reminders, and even follow up with leads. By learning your workflow, Halper ensures that all interactions align with how you like to communicate with your clients, making automation feel natural and personalized.",
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
                    <div className="faq-answer">{item.answer}</div>
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

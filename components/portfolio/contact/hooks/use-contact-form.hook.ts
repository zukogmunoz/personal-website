import { useState } from "react";
import type { FormDataProps } from "../types";
/**
 * Hook that represents the contact form.
 * @param initialData - The initial data of the contact form.
 * @returns The contact form.
 * @returns {FormDataProps} formData - The form data.
 * @returns {void} - The contact form.
 */
export const useContactForm = (initialData: FormDataProps) => {
    const [formData, setFormData] = useState<FormDataProps>(initialData);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const mailtoLink = `mailto:zukogmunoz@gmail.com?subject=Contacto desde Portfolio - ${formData.name}&body=${encodeURIComponent(
            formData.message
        )}%0A%0AEmail: ${formData.email}`;
        window.location.href = mailtoLink;
    };

    const resetForm = () => {
        setFormData(initialData);
    };

    return {
        formData,
        handleChange,
        handleSubmit,
        resetForm,
    };
};
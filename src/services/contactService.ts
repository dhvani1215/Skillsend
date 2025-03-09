
import { connectToMongoDB } from "@/lib/db";

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const submitContactForm = async (formData: ContactFormData): Promise<{ success: boolean; message: string }> => {
  try {
    // Check if we can connect to MongoDB
    const connection = await connectToMongoDB();
    if (!connection.connected) {
      return { success: false, message: "Database connection failed" };
    }

    // Simulate storing the contact form in MongoDB
    console.log("Contact form submission:", formData);
    
    // In a real app, this would insert the form data into a MongoDB collection
    // For demo purposes, we'll just return success
    
    return { success: true, message: "Message sent successfully" };
  } catch (error) {
    console.error("Contact form submission error:", error);
    return { success: false, message: "An error occurred while sending your message" };
  }
};

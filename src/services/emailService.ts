
// Email service to handle sending emails

interface EmailData {
  to: string;
  subject: string;
  body: string;
}

// Function to send subscription confirmation
export const sendSubscriptionEmail = async (email: string): Promise<boolean> => {
  try {
    const emailData: EmailData = {
      to: "dhvnai3@gmail.com", // As specified in requirements
      subject: "New Subscription on SkillShare",
      body: `A new user has subscribed to the newsletter:\n\nEmail: ${email}\n\nDate: ${new Date().toLocaleString()}`
    };
    
    // In a real application, you would use an API to send emails
    // For now, we'll log it and simulate a successful send
    console.log("Sending email:", emailData);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
};
